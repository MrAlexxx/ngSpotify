import { Component } from '@angular/core';
// import { HTTP_PROVIDERS } from '@angular/http';

import { NavbarComponent } from './components/navbar/navbat.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives : [ NavbarComponent, ],
    precompile : [ AboutComponent, SearchComponent ],
    // providers: [ HTTP_PROVIDERS ]
})
export class AppComponent { }
