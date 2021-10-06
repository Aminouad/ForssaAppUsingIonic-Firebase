import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

var firebaseConfig = {
  apiKey: "AIzaSyBumzoHHzZASswH-0K64qmEv6Fqxtv70b4",
  authDomain: "ouad-b53f0.firebaseapp.com",
  projectId: "ouad-b53f0",
  storageBucket: "ouad-b53f0.appspot.com",
  messagingSenderId: "1050855246488",
  appId: "1:1050855246488:web:e30ae634735bacb8391eed"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig),AngularFireAuthModule,AngularFirestoreModule,AngularFireStorageModule
  ],
  
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },StatusBar,
    SplashScreen,
    //ADD GEOLOCATION Y GEOCODER ON THE PROVIDERS.
    Geolocation,    
    NativeGeocoder,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
