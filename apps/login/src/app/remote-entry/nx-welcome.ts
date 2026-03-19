import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-mf-nx-welcome',
  imports: [CommonModule],
  template: ` <div>welcome to login page</div> `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {}
