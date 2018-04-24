import { Component } from '@angular/core';
import {CoursesService} from "./courses.service";

@Component({
    'selector': 'courses',
    'template': `
        <h2>{{ title }}</h2>
        <img src="{{ imgUrl }}">
        <img [src]="imgUrl">
        `
})

export class CoursesComponent {
    title = "List of courses";
    imgUrl = "http://lorempixel.com/400/200/";
}