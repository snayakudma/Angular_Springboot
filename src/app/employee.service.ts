import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL = "http://localhost:8080/api/v1/employee";

  constructor(private httpClient : HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>("http://localhost:8080/api/v1/employee");
  }

  createEmployee(employee : Employee): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,employee)
  }

  getEmployeeById(id : number|undefined) : Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number | undefined, employee: Employee) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,employee);

  }

  deleteEmployee(id: number|undefined) : Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
