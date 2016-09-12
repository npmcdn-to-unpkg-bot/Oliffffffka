import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide, PLATFORM_DIRECTIVES, Provider } from '@angular/core';
import { AppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTER_PROVIDER  } from './app/app.routes';
import { ROUTER_DIRECTIVES    } from '@angular/router';
import { LoginService } from './app/services/login.service';
import { REACTIVE_FORM_DIRECTIVES, FORM_DIRECTIVES, FORM_PROVIDERS } from '@angular/forms';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [HTTP_PROVIDERS, APP_ROUTER_PROVIDER, LoginService, FORM_PROVIDERS,
provide(PLATFORM_DIRECTIVES, {useValue: [
        ROUTER_DIRECTIVES, 
        REACTIVE_FORM_DIRECTIVES, 
        FORM_DIRECTIVES
], multi: true})]);
