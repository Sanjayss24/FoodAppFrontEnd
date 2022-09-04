import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BranchmanagerService {

  constructor(private http:HttpClient) { }

  getBranchManager(){
    return this.http.get(`http://localhost:8080/api/allbm`);
  }

  addBranchManager(branchManager:any){
    return this.http.post(`http://localhost:8080/api/savebm`,branchManager);
  }

 updateBranchManager(id:any,branchManager:any){
    return this.http.put(`http://localhost:8080/api/updatebm/${id}`,branchManager);
 }

 deletebm(id:any){
  return this.http.delete(`http://localhost:8080/api/deletebm/${id}`);
}

}
