import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '@acme/data-access-user';

@Component({
  imports: [CommonModule, RouterModule, BreadcrumbComponent],
  selector: 'ng-mf-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
