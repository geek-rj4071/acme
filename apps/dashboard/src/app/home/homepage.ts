import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbService } from '@acme/data-access-user';
import { OnInit } from '@angular/core';

@Component({
  selector: 'ng-mf-homepage',
  imports: [RouterModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage implements OnInit {
  constructor(private readonly breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbService.setBreadcrumbs([{ label: 'Home', url: '/home' }]);
  }
}
