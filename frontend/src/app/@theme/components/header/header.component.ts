import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { LayoutService } from '../../../@core/data/layout.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;

  userMenu = [{ 
    title: 'Profile',
    icon: 'nb-person',
    link: '/pages/perfil',
  }, { 
    title: 'Log out',
    icon: 'nb-power',
    link: '/login',
  }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private authService: AuthService,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService) {
  }

  ngOnInit() {
      const userInfo = this.authService.getUser();
    if (userInfo) {
      this.user = {
        name: `${userInfo.name} ${userInfo.last_name}`,
        picture: 'assets/images/nick.png',
      };
    }
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
