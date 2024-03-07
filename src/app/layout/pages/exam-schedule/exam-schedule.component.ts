import { Component, OnInit } from '@angular/core';

interface Person {
  key: string;
  nameExam: string;
  name: string;
  number: any;
  date: any;
  class: string;
  time: any;
  num: any;
  nameN: any;
}

@Component({
  selector: 'app-exam-schedule',
  templateUrl: './exam-schedule.component.html',
  styleUrls: ['./exam-schedule.component.scss'],
})
export class ExamScheduleComponent implements OnInit {
  listOfData: Person[] = [
    {
      key: '1',
      nameExam: 'Lịch thi K63_GD1_HK1-2023-2024',
      name: 'Học máy',
      number: '3',
      date: '11/04/2023',
      time: '15:40 - 18:20',
      num: '10-12',
      class: '237-A2',
      nameN: '123',
    },
    {
      key: '2',
      class: '232-A2',
      nameExam: 'Lịch thi K63_GD1_HK1-2023-2024',
      name: 'Phát triển dự án phần mềm',
      number: '3',
      date: '15/04/2023',
      time: '09:45 - 12:25',
      num: '4-6',
      nameN: '321',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
