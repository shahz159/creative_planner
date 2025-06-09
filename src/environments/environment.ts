// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  //------------localServer----------------
   
  baseUrl:'http://localhost:1221/api/',
  baseUrlCore:'http://localhost:5201/api/',
  
  
  // //-----------Live server----------------
  //  baseUrl:'http://cswebapps.com/PortfolioAPI/api/',
  //  baseUrlCore:'https://cswebapps.com/StreamCoreAPI/api/',


  // // -----------Test server----------------
  // baseUrl:'https://cswebapps.com/TestPortfolioAPI/api/',
  // baseUrlCore:'https://cswebapps.com/TestCoreStreamAPI/api/', 
   

  //------------Common for all----------------
   Language_file_url:''
   ,NewbaseUrl:'https://cswebapps.com/dmscoretestapi/api/'
   ,assetsurl:'../../../'
   ,ImageUrl:'/assets/',

};


// SignalUrl: 'http://localhost:1221/signalr'
// baseUrl:'https://cswebapps.com/PortfolioAPI/api/'
// baseUrl:'https://cswebapps.com/TestPortfolioAPI/api/'
// DMS Live Server
// baseUrl:'http://localhost:1221/api/'
// MyMachine Local IIS Server
// baseUrl: 'http://localhost:8080/webapi/api/'


/* 
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
