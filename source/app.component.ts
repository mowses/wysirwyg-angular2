import {Component} from 'angular2/core';
import {WindowComponent} from 'dist/components/window/window.component';

@Component({
    selector: 'my-app',
    templateUrl: 'source/app.html',
    directives: [WindowComponent]
})

export class AppComponent { }