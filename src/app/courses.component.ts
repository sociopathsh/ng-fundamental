import { Component } from '@angular/core';
import {CoursesService} from "./courses.service";

@Component({
    'selector': 'courses',
    'template': `
        <input (keyup)="onKeyup($event)">
        <input (keyup.enter)="onKeyenter()">
        `
})

export class CoursesComponent {
    onKeyup($event) {
        if ($event.keyCode === 13) console.log('Enter was pressed');
    }

    onKeyenter() {
        console.log('Enter was pressed');
    }
}