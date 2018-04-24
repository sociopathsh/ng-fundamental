import { Component } from '@angular/core';
import {CoursesService} from "./courses.service";

@Component({
    'selector': 'courses',
    'template': `
        <input (keyup.enter)="onKeyenter($event)">
        <input #email (keyup.enter)="onKeyenter1(email.value)">
        `
})

export class CoursesComponent {
    onKeyenter($event) {
        console.log($event.target.value);
    }

    onKeyenter1(email) {
        console.log(email);
    }
}