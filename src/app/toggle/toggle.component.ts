import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  displayPg:boolean = true;
  counters:any = [];
  count:number = 0;

  constructor() { }

  ngOnInit() {
  }

  triggerBtnClick(){
    this.displayPg = !this.displayPg;
    this.counters.push(new Date());
    console.log('yay!!');
  }

  getBgColor(counter){
    return counter > 4 ? 'blue' : 'none';
  }

  getTxtColor(counter){
    return counter > 4 ? true : false;
  }
}
