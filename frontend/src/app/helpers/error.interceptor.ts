import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this.authService.logout();
                location.reload(true);
            }
            return Observable.throw(err.statusText);
            //const error = err.error.message || err.statusText;
        }));
    }
}

