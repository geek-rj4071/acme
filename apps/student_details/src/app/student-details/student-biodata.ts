import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { BreadcrumbService } from '@acme/data-access-user';

@Component({
  selector: 'app-student-biodata',
  imports: [RouterModule],
  templateUrl: './student-biodata.html',
  styleUrl: './student-biodata.css',
})
export class StudentBiodata implements OnInit {
  constructor(private readonly breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbService.setBreadcrumbs([
      { label: 'Home', url: '/home' },
      { label: 'Biodata' },
    ]);
  }
}
