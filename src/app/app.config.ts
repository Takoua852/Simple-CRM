import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCSe7g5vjEghZl9Eyn34VtQ1V3G4FYOdSE",
  authDomain: "simple-crm-32eb2.firebaseapp.com",
  databaseURL: "https://simple-crm-32eb2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "simple-crm-32eb2",
  storageBucket: "simple-crm-32eb2.appspot.com",
  messagingSenderId: "572353680690",
  appId: "1:572353680690:web:6a9cd0b52165b1bc41332b"
};

const app = initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimationsAsync()]
};
