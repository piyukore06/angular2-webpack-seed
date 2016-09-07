import {bootstrap} from '@angular/platform-browser-dynamic'
import { HTTP_PROVIDERS } from '@angular/http';
import {App, providers} from './app'

bootstrap(App, [
    ...HTTP_PROVIDERS, 
    // bootstraping is simplified because of providers array from all services
    ...providers
    ]);