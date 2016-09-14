// import { bootstrap } from '@angular/platform-browser-dynamic'
// import { HTTP_PROVIDERS } from '@angular/http';
// import {App, providers} from './app'

// bootstrap(App, [
//     ...HTTP_PROVIDERS, 
//     // bootstraping is simplified because of providers array from all services
//     ...providers
//     ]);
// firing up JIT compiler from main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app'


platformBrowserDynamic().bootstrapModule(AppModule);