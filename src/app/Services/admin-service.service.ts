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

  updateAdmin(id:any,admin:any){
   return this.http.put(`http://localhost:8080/api/updateadmin/${id}`,admin)
  }

  deleteAdmin(id:any){
    return this.http.delete(`http://localhost:8080/api/deleteadmin/${id}`);
  }

}
