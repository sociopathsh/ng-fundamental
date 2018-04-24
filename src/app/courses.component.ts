import { Component } from '@angular/core';
import {CoursesService} from "./courses.service";

@Component({
    'selector': 'courses',
    'template': `
            {{ course.title | uppercase }} <br/>
            {{ course.rating | number:'1.1-2' }} <br/>
            {{ course.students | number}} <br/>
            {{ course.price | currency:'AUD':true }} <br/>
            {{ course.releaseDate | date:'shortDate' }} <br/>
        `
})

export class CoursesComponent {
    course = {
        title: 'The complete angular course',
        rating: 4.9745,
        students: 30123,
        price: 190.15,
        releaseDate: new Date()
    }
}