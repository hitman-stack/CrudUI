import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service: SharedService) { }
DepartmentList: any = [];
  ngOnInit(): void {
    this.refreshDepartmentList();
  }
refreshDepartmentList(){
  this.service.getDepartmentList().subscribe(data => {
    this.DepartmentList = data;
  });
}
}
