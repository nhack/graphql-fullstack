System.config({
  defaultJSExtensions: true,
  paths: {
    // paths serve as alias
    'npm:': './'
  },
  // map tells the System loader where to look for things
  map: {
    // our app is within the app folder
    app: 'app',

    // angular bundles
    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

    // other libraries
    'rxjs': 'npm:rxjs',
    'text': 'npm:systemjs-plugin-text/text.js',

    //apollo
    'angular2-apollo': 'npm:angular2-apollo/build/src/index.js',
    'apollo-client': 'npm:apollo-client/index.js',
    'apollo-client-rxjs': 'npm:apollo-client-rxjs/build/src/index.js',
    'graphql-tag': 'npm:graphql-tag/index.js',
    'graphql-tag/printer': 'npm:graphql-tag/printer.js',
    'lodash.isstring': 'npm:lodash.isstring/index.js',
    'lodash.assign': 'npm:lodash.assign/index.js',
    'lodash.mapvalues': 'npm:lodash.mapvalues/index.js',
    'lodash.countby': 'npm:lodash.countby/index.js',
    'lodash.identity': 'npm:lodash.identity/index.js',
    'lodash.clonedeep': 'npm:lodash.clonedeep/index.js',
    'lodash.isarray': 'npm:lodash.isarray/index.js',
    'lodash.isnull': 'npm:lodash.isnull/index.js',
    'lodash.isundefined': 'npm:lodash.isundefined/index.js',
    'lodash.isobject': 'npm:lodash.isobject/index.js',
    'lodash._objecttypes': 'npm:lodash._objecttypes/index.js',
    'lodash.has': 'npm:lodash.has/index.js',
    'lodash.merge': 'npm:lodash.merge/index.js',
    'lodash.flatten': 'npm:lodash.flatten/index.js',
    'lodash.isnumber': 'npm:lodash.isnumber/index.js',
    'lodash.isequal': 'npm:lodash.isequal/index.js',
    'lodash.pick': 'npm:lodash.pick/index.js',
    'lodash.forown': 'npm:lodash.forown/index.js',
    'lodash.forin': 'npm:lodash.forin/index.js',
    'lodash.omit': 'npm:lodash.omit/index.js',
    'lodash.isfunction': 'npm:lodash.isfunction/index.js',
    'whatwg-fetch': 'npm:whatwg-fetch/fetch.js',
    'redux': 'npm:redux/dist/redux.js',
    'symbol-observable': 'symbol-observable/lib/index.js'
  }
});
