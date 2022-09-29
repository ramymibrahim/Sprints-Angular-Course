import { Component, OnInit } from '@angular/core';
import { ApitestService } from 'src/app/services/apitest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showCategories: boolean = true;
  constructor(private apitest: ApitestService) {}

  ngOnInit(): void {
    setTimeout(() => {
      console.log('timer');
    }, 0);
    console.log(0);
    this.apitest.getUSAData().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(1);
  }
  hideCategories() {
    this.showCategories = false;
  }
}
