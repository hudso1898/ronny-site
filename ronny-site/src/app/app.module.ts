import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BioComponent } from './pages/bio/bio.component';
import { ResearchComponent } from './pages/research/research.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { TeachingPopoverComponent } from './pages/teaching-popover/teaching-popover.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BioComponent, ResearchComponent, PublicationsComponent, TeachingPopoverComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
