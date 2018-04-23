import { Component } from '@angular/core';

@Component({
    'selector': 'courses',
    'template': '<h2>{{ title }}</h2><h3>{{ getTitle() }}</h3>'
})

export class CoursesComponent {
    title = "List of courses";
    getTitle() {
        return this.title;
    }
}