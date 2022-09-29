import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() rating: number = 0;
  constructor() {}

  ngOnInit(): void {}

  getClass(i: number): string {
    if (this.rating - i >= 1) return 'text-primary mr-1 fa fa-star';
    if (this.rating - i >= 0.5) return 'text-primary mr-1 fa fa-star-half-alt';
    return 'text-primary mr-1 far fa-star';
  }
}
