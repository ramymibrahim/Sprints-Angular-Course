import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApitestService {
  constructor(private httpClient: HttpClient) {}

  getUSAData() {
    return this.httpClient.get(
      'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
    );
  }
}
