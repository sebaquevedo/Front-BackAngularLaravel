import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Login } from '../../../models/login';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user';


@Component({
  selector: 'login-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public user: Login;
  public myform: FormGroup;
  public userInfo: User;
  public errorAlert =  {
    status : false,
    message : '',
  };
  public successAuth = {
    status : false,
    message : '',
  };
  returnUrl: string;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private ref: ChangeDetectorRef) {

      this.myform = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.pattern('[^ @]*@[^ @]*')
        ]),
        password: new FormControl('', [
            Validators.minLength(6),
            Validators.required
        ]),
        language: new FormControl()
      });
    }

  ngOnInit() {
    this.user = new Login();
    this.userInfo = new User();
    this.authService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public onSubmitLogin(): void {
    const val = this.myform.value;
    if (val.email && val.password) {
      this.user.email = val.email;
      this.user.password = val.password;
      this.errorAlert.status = false;
      this.successAuth.status = false;
      this.login();
    }
  }

  private login() {
    this.authService.login(this.user).subscribe(authentication => {
      if (authentication.token !== undefined) {
        this.successAuth.status = true;
        this.authService.setToken(authentication.token);
        this.successAuth.status = true;
        this.successAuth.message = 'Obteniendo datos de usuario, espere un momento...';
        this.getUserInfo();
      } else {
        this.errorAlert.status = true;
        this.errorAlert.message = 'Ocurrio un problema con token';
      }
      this.ref.detectChanges();
    }, error => {
      this.errorAlert.status = true;
      if (error.statusText === 'Unauthorized') {
        this.errorAlert.message = 'Credenciales Invalidas';
      } else {
        this.errorAlert.message = 'Error en el Servidor';
      }
      this.ref.detectChanges();
    });
  }

  private getUserInfo() {
    this.errorAlert.status = false;
    this.authService.getUserInfo().subscribe(userData => {
      this.userInfo = userData;
      this.authService.setUser(this.userInfo);
      this.successAuth.status = true;
      this.successAuth.message = 'Bienvenido(a): ' + this.userInfo.name;
      this.ref.detectChanges();
      this.router.navigate(['/pages']);
    }, error => {
      console.error('error obteniendo usuario', error);
      this.successAuth.status = false;
      this.errorAlert.status = true;
      this.errorAlert.message = 'Ocurrio un error obteniendo datos de usuario';
      this.ref.detectChanges();
    });
  }
}
