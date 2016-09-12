"use strict";

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var cropperVer = '0.6.4';
const map: any = {
  'ng2-img-cropper':            'https://npmcdn.com/ng2-img-cropper@'+cropperVer,
};

/** User packages configuration. */
const packages: any = {
  'ng2-img-cropper' :           { main: 'index.js', defaultExtension: 'js' }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',
  'ng2-img-cropper',

  // App specific barrels.
  'app',
  'app/shared',
  'app/post',
  'app/category',
  'app/view',
  'app/about-me',
  'app/login',
  'app/admin',
  'app/not-found',
  'app/admin-posts',
  'app/admin-about',
  'app/admin-category',
  'app/admin-post-add',
  'app/admin-post-edit',
  'app/admin-category-add',
  'app/admin-category-edit',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });