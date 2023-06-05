import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MenComponent } from './components/pages/men/men.component';
import { RoomComponent } from './components/pages/room/room.component';
import { WomenComponent } from './components/pages/women/women.component';
import { ShoppingCartComponent } from './components/pages/shopping-cart/shopping-cart.component';
import{AngularFireModule}from '@angular/fire/compat'
import{FirestoreModule}from '@angular/fire/firestore'
import {environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { FirebaseAppModule,initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {AngularFireAuthModule} from '@angular/fire/compat/auth'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    MenComponent,
    RoomComponent,
    WomenComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FirestoreModule,
    FormsModule,
    FirebaseAppModule,
    provideFirebaseApp(()=>initializeApp(environment.firebase)),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
