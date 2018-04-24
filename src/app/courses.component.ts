import { Component } from '@angular/core';
import {CoursesService} from "./courses.service";

@Component({
    'selector': 'courses',
    'template': `

        <!--Not Recommended-->
        <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyenter()">
        
        <!--Recommended-->
        <input [(ngModel)]="email" (keyup.enter)="onKeyenter1()">
        `
})

export class CoursesComponent {
    email = 'me@example.com';

    // Not Recommended
    onKeyenter() {
        console.log(this.email);
    }

    // Recommended
    onKeyenter1() {
        console.log(this.email);
    }
}