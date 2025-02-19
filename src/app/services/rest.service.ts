import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private baseUrl = 'http://localhost:4200/';
  constructor(private http: HttpClient) { }

  getApi(templateUrl: string, id?: number | string) {
    return this.http.get(`${templateUrl}`);
  }

  async fetchData(url: string, ): Promise<any> {
    try {
      const response = await fetch('assets/menu.json');
      console.log(response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  }
}
