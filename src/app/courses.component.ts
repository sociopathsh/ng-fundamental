import { Component } from '@angular/core';
import {CoursesService} from "./courses.service";

@Component({
    'selector': 'courses',
    'template': `
            {{ text | summary:10}}
        `
})

export class CoursesComponent {
    text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, iste, modi. Architecto atque dignissimos dolores eaque praesentium qui. Adipisci dignissimos dolorum in nemo neque obcaecati officiis pariatur quaerat rerum voluptatem!';
}