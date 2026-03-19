import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-student_details-entry',
  template: ` <router-outlet></router-outlet>`,
})
export class RemoteEntry {}
