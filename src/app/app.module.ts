import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule} from 'ngx-toastr';
import { HttpModule } from '@angular/http';
import{ RestapiService } from './restapi.service';
import { InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import { Toast } from '@ionic-native/toast/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,HttpModule, ToastrModule.forRoot()
],
  providers: [
    StatusBar,
    SplashScreen,
    RestapiService,
    InAppBrowser,
    Toast,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
