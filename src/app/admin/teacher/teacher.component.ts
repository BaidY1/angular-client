import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Tutor } from '../models/student';
import { environment } from '../../../environments/environments'
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {

  private baseUrl?: string;
  teachers?:Tutor[]=[];
  constructor(private readonly httpService:HttpClient){
    this.baseUrl=environment.baseUrl;

  }

  ngOnInit(){
    this.getTeacher();
  }

  getTeacher(){
    this.httpService.get<Tutor[]>(`${this.baseUrl}/users/getTutors`)
    .subscribe((x:Tutor[])=>{
      this.teachers=x;
    })
  }

  clickCheck(id:any){
    console.log(id);
  }

  downloadCertification(url:string){
this.httpService.get(`${url}`).subscribe();
  }

  downloadVideo(url:string){
    this.httpService.get(`${url}`).subscribe();
  }
}
