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

  addBranchManagers(branchManager:any){
    return this.http.post(`http://localhost:8080/api/savebm`,branchManager);
  }

 
}
