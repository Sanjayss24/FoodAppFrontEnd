import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BranchServiceService {

  constructor(private http:HttpClient) { }

  saveBranch(branch:any){
    return this.http.post(`http://localhost:8080/api/saveb`,branch)
  }

  getBranch(){
    return this.http.get(`http://localhost:8080/api/findallb`);
  }
}
