import { query } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route:Router)
  {

  }
  title = 'RouterPractice';
  ok()
  {
    this.route.navigate(['/employee/1'],{ queryParams: { page: 15 } });
  }
}
