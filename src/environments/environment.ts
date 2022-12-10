// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const environment = {
  firebase: {
    projectId: 'brooks-cooks',
    appId: '1:509439046915:web:7889cc6e2d8d0401402536',
    storageBucket: 'brooks-cooks.appspot.com',
    apiKey: 'AIzaSyBL7XezkuJcA8E89tB7w_MHBvbNniYw570',
    authDomain: 'brooks-cooks.firebaseapp.com',
    messagingSenderId: '509439046915',
    measurementId: 'G-YLJQX25R94',
  },
  production: false

};

// Initialize Firebase



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
