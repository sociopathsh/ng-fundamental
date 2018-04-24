import { Component } from '@angular/core';
import {CoursesService} from "./courses.service";

@Component({
    'selector': 'courses',
    'template': `
        <img [src]="imgUrl">
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
        `
})

export class CoursesComponent {
    imgUrl = "http://lorempixel.com/400/200/";
    colSpan = 2;
}