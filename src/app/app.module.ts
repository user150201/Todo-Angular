import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../assets/environment/envirenoment';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    
  ],
  imports: [
    BrowserModule,
     provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore())  // ✅ This goes in imports, NOT declarations

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
