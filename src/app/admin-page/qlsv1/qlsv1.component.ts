import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-qlsv1',
  templateUrl: './qlsv1.component.html',
  styleUrls: ['./qlsv1.component.scss'],
})
export class Qlsv1Component implements OnInit {
  option: any;
  local: any;
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  constructor(public router: Router) {
    //   this.local = this.location.getState();
  }
  ngOnInit() {
    // console.log(this.local);
    // this.option = this.local.option;
    // console.log(this.local.option);
  }
}
