import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs';
import { BreadcrumbService } from './breadcrumb.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'acme-breadcrumb',
  imports: [CommonModule, RouterModule, AsyncPipe],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css',
})
export class BreadcrumbComponent {
  readonly breadcrumb$: Observable<{ label: string; url?: string }[]>;

  constructor(private readonly breadcrumbService: BreadcrumbService) {
    this.breadcrumb$ = this.breadcrumbService.crumbs$.pipe(
      map((crumbs) =>
        crumbs && crumbs.length ? crumbs.slice() : [{ label: 'Home', url: '/home' }],
      ),
    );
  }
}
