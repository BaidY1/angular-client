import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environments'
import { Student } from '../models/student';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  private baseUrl: string;
  students?:Student[]=[];

  constructor(private readonly httpService:HttpClient){
    this.baseUrl=environment.baseUrl;
 
  }

ngOnInit(){
  this.getStudentsData()
}

  getStudentsData(){
  this.httpService.get<Student[]>(`${this.baseUrl}/users/getStudents`)
  .subscribe((x:Student[])=>{
   this.students=x;
  });
  }

}
