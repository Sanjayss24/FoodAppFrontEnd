import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }

  getAdmin(){
    return this.http.get(`http://localhost:8080/api/alladmin`);
  }
  

  addAdmins(admin:any){
    return this.http.post(`http://localhost:8080/api/saveadmin`,admin);
  }

}
