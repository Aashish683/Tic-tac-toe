import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cross',
  templateUrl: './cross.component.html',
  styleUrls: ['./cross.component.css']
})
export class CrossComponent implements OnInit {
  @Input() isActive:boolean;
  @Input() isCompActive:boolean;
  constructor() {
    this.isActive=false;
    this.isCompActive=false;
   }
  
  ngOnInit() {
  }

}
