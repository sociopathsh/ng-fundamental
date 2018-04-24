import { Component } from '@angular/core';
import {CoursesService} from "./courses.service";

@Component({
    'selector': 'courses',
    'template': `
        <div (click)="onDivSaved()">
            <button (click)="onSave($event)">Button</button>
        </div>
      
        `
})

export class CoursesComponent {

    onDivSaved() {
        console.log('Div was clicked');
    }

    onSave($event) {
        $event.stopPropagation();
        console.log('Button was clicked' + $event);
    }
}