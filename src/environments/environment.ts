// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL:'https://newsapi.org/v2',
  API_KEY:'cc976ce1e06f44759f9d2336ededa2b4',
  NASA_API_KEY : 'cVaTRjCMj4wGdcxOwj5ZKxzQAyikoHtyadtatwrS',
  NASA_URL: 'https://images-api.nasa.gov/',
  CALENDARIFIC_API_KEY:'da7bed7174e3326094a41badca3c7108405e11a6',
  CALENDARIFIC_URL:'https://calendarific.com/api/v2/holidays?&api_key=',
  OMDB_KEY:'c881ae44',
  MODB_URL:'http://www.omdbapi.com/',
  firebaseConfig: {
    apiKey: "AIzaSyCmLNEe_eNKpV-RiFIj_HsML23xray_yOU",
    authDomain: "ionic-app-todos.firebaseapp.com",
    databaseURL: "https://ionic-app-todos.firebaseio.com",
    projectId: "ionic-app-todos",
    storageBucket: "ionic-app-todos.appspot.com",
    messagingSenderId: "1067977195806",
    appId: "1:1067977195806:web:f0c35440f7c4486f"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
