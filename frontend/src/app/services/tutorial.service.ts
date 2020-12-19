// tutorial service is used for sending http request to api

// This service will use Angular HTTPClient to send HTTP requests.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/student';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get(baseUrl);
  }

  get(id) {
      return this.http.get(`${baseUrl}/${id}`)
  }

  create(data) {
      return this.http.post(baseUrl, data);
  }

  update(id, data){
      return this.http.put(`${baseUrl}/${id}`,data);
  }

  delete(id){
       return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(){
       return this.http.delete(baseUrl)
  }


  findByTitle(firstName){
     return this.http.get(`${baseUrl}?name=${firstName}`)
  }


}
