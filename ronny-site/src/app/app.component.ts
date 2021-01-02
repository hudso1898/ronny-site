import { Component, OnInit } from '@angular/core';

import { MenuController, Platform, PopoverController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TeachingPopoverComponent } from './pages/teaching-popover/teaching-popover.component';
import { MobileService } from './services/mobile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inbox',
      url: '/folder/Inbox',
      icon: 'mail'
    },
    {
      title: 'Outbox',
      url: '/folder/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Favorites',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Archived',
      url: '/folder/Archived',
      icon: 'archive'
    },
    {
      title: 'Trash',
      url: '/folder/Trash',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      icon: 'warning'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private popoverCtrl: PopoverController,
    private mobileService: MobileService,
    private menuCtrl: MenuController,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  async teachingPresent(event) {
    const popover = await this.popoverCtrl.create({
      component: TeachingPopoverComponent,
      translucent: true,
      event: event    
    });
    popover.onDidDismiss().then(() => this.closeMenu());
    return await popover.present();
  }
  isMobile(): boolean {
    return this.mobileService.isMobile();
  }
  async openMenu() {
    return await this.menuCtrl.open('main');
  }
  async closeMenu() {
    return await this.menuCtrl.close('main');
  }

  isOnCourses() {
    return this.router.url.startsWith('/courses/');
  }
}
