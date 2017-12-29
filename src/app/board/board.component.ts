import { Component, OnInit} from '@angular/core';
import { boardDisplayAnimation } from './board.component.animation';
import { scoring } from './../Helper/scoring';
import { check } from './../Helper/checkForWin';
import {playAt} from './../Helper/minMax';
import { setBlink } from './../Helper/setBlink';
import { MatDialog } from '@angular/material/dialog';
import { BoxComponent } from './../box/box.component';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  animations:boardDisplayAnimation
})
export class BoardComponent implements OnInit {
   boardArray:number[]; 
   isClick:boolean[]=[false,false,false,false,false,false,false,false,false];
   isCompSelected:boolean[]=[false,false,false,false,false,false,false,false,false];
   gameComplete:boolean=false;
   wait:boolean=false;
   flag:number;
   blink:boolean[]=[false,false,false,false,false,false,false,false,false];

   constructor(private dialog:MatDialog) { }
   
   ngOnInit() {
    this.boardArray=new Array(9);
    this.boardArray=[0,1,2,3,4,5,6,7,8];
    }

   onClick(e){
    if(this.gameComplete||this.isCompSelected[e.id]||this.isClick[e.id]||this.wait)
    return;

    this.isClick[e.id]=true;
    if(this.flag=check(this.isClick,this.isCompSelected).flag){
    setBlink(check(this.isClick,this.isCompSelected).position,this.blink)
    this.gameComplete=true;
    this.displayDialog();
    return;
    }
    else
    {
    this.wait=true;
    setTimeout(()=>{this.compPlay()},1000);
    if(check(this.isClick,this.isCompSelected).flag){
    setBlink(check(this.isClick,this.isCompSelected).position,this.blink)
    this.gameComplete=true;
    this.displayDialog();
    }
    }
   }
   compPlay()
   {
     this.wait=false;
      if(this.gameComplete) 
      return;        
      let index;
      index=playAt(this.isClick,this.isCompSelected);
        this.isCompSelected[index]=true;
       if(this.flag=check(this.isClick,this.isCompSelected).flag)
       {
       setBlink(check(this.isClick,this.isCompSelected).position,this.blink); 
       this.gameComplete=true;
       this.displayDialog();
    }
  }
  clear()
  {
  for(let i=0;i<this.isClick.length;i++)
  {
    this.isClick[i]=false;
    this.isCompSelected[i]=false;
    this.blink[i]=false;
  }
  this.gameComplete=false; //Restart the game by allowing the user to click
 }
 displayDialog(){

  setTimeout(()=>{//this.flag==2?alert('Computer won'):alert('Draw');
  this.dialog.open(BoxComponent,{
    width:'250px',
    data:{
       winner:this.flag
    }
  }).afterClosed().subscribe(response=>{
    this.clear();
  })
  },1000)
 }
}
