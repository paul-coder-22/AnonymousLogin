import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Reactive Forms */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* App routing module*/
import { AppRoutingModule } from './app-routing.module';


/* App Coponent */
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogInfoComponent } from './log-info/log-info.component';

/* components / */
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswardComponent } from './components/forgot-passward/forgot-passward.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { VerifyemailComponent } from './components/verifyemail/verifyemail.component';


/* Firebase services and environment module */
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {HttpClientModule} from '@angular/common/http';
import { environment } from 'src/environments/environment';


/* Auth service */
// import { AngularFireAuth} from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    LogInfoComponent,
    DashboardComponent,
    ForgotPasswardComponent,
    SigninComponent,
    SignupComponent,
    VerifyemailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    // AngularFireAuth,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
