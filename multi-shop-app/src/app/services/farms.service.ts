import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FarmsService {
  constructor(private httpClient: HttpClient) {}

  getFarms() {
    return this.httpClient.get(`${environment.apiURL}Farms/1/10`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  }
}
