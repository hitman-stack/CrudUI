import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = 'http://localhost:44398/api';
readonly PhotoUrl = 'https://localhost:44398/Photos';
  constructor(private http: HttpClient) { }
getDepartmentList(): Observable<any[]>{
  return this.http.get<any>(this.APIUrl + '/department');
}
addDepartment(val: any){
  return this.http.post<any>(this.APIUrl + '/Department', val);
}
editDepartment(val: any){
  return this.http.put<any>(this.APIUrl + '/Department', val);
}
deleteDepartment(val: any){
  return this.http.delete<any>(this.APIUrl + '/Department', val);
}
getEmployeeList(): Observable<any[]>{
  return this.http.get<any>(this.APIUrl + '/Employee');
}
addEmployee(val: any){
  return this.http.post<any>(this.APIUrl + '/Employee', val);
}
editEmployee(val: any){
  return this.http.put<any>(this.APIUrl + '/Employee', val);
}
deleteEmployee(val: any){
  return this.http.delete<any>(this.APIUrl + '/Employee', val);
}

UploadPhoto(val: any)
{
  return this.http.post(this.APIUrl + '/Employee/SaveFile', val);
}

getAllDepartmentNames(): Observable<any[]>{
  return this.http.get<any>(this.APIUrl + '/Employee/GetAllDepartmentNames');
}
}
