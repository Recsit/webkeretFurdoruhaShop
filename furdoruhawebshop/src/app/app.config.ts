import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

export const appConfig: ApplicationConfig = {
  providers: [
    {provide: FIREBASE_OPTIONS, useValue:
        {"projectId":"furdoruhaweb","appId":"1:1040306477950:web:6dd160c44fbfd42f80712f","storageBucket":"furdoruhaweb.appspot.com","apiKey":"AIzaSyBmb_qLVDpv0zCfKx5WEM1Y-Y7Vv4Z_EP0","authDomain":"furdoruhaweb.firebaseapp.com","messagingSenderId":"1040306477950","measurementId":"G-TWKZRKPEGZ"}},
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(provideFirebaseApp(() => initializeApp(
      {"projectId":"furdoruhaweb","appId":"1:1040306477950:web:6dd160c44fbfd42f80712f","storageBucket":"furdoruhaweb.appspot.com","apiKey":"AIzaSyBmb_qLVDpv0zCfKx5WEM1Y-Y7Vv4Z_EP0","authDomain":"furdoruhaweb.firebaseapp.com","messagingSenderId":"1040306477950","measurementId":"G-TWKZRKPEGZ"}))),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideDatabase(() => getDatabase())),
    importProvidersFrom(provideStorage(() => getStorage())),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    importProvidersFrom(provideFirebaseApp(() => initializeApp(
      {"projectId":"furdoruhaweb","appId":"1:1040306477950:web:6dd160c44fbfd42f80712f","storageBucket":"furdoruhaweb.appspot.com","apiKey":"AIzaSyBmb_qLVDpv0zCfKx5WEM1Y-Y7Vv4Z_EP0","authDomain":"furdoruhaweb.firebaseapp.com","messagingSenderId":"1040306477950","measurementId":"G-TWKZRKPEGZ"}))),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideDatabase(() => getDatabase())),
    importProvidersFrom(provideStorage(() => getStorage())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"furdoruhaweb","appId":"1:1040306477950:web:6dd160c44fbfd42f80712f","storageBucket":"furdoruhaweb.appspot.com","apiKey":"AIzaSyBmb_qLVDpv0zCfKx5WEM1Y-Y7Vv4Z_EP0","authDomain":"furdoruhaweb.firebaseapp.com","messagingSenderId":"1040306477950","measurementId":"G-TWKZRKPEGZ"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), importProvidersFrom(provideStorage(() => getStorage()))]
};
