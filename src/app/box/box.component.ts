import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material'
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
   public result:string
  constructor(@Inject(MAT_DIALOG_DATA) private data:any) {
    if(data.winner==2)
    this.result="Computer won"
    else if(data.winner==1)
    this.result="You won"
    else
    this.result="Draw"
   }

  ngOnInit() {
  }

}
