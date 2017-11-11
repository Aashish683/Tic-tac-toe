import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
   boardArray:number[]; 
   isClick:boolean[]=[false,false,false,false,false,false,false,false,false];
   isCompSelected:boolean[]=[false,false,false,false,false,false,false,false,false];
   gameComplete:boolean=false;
   wait:boolean=false;
   flag:number;
   onClick(e){
    //this.isClick=true;
    if(this.gameComplete||this.isCompSelected[e.id]||this.isClick[e.id]||this.wait)
    return;
    this.isClick[e.id]=true;
    //console.log(this.isClick);
    if(this.flag=this.check(this.isClick,this.isCompSelected)){
    this.gameComplete=true;
    setTimeout(()=>{this.flag==1?alert('You won'):alert('Draw');
    this.clear();},1000)
   // this.change.emit();
    return;
    }
    else
    {
    //console.log("Not Over");
    this.wait=true;
    setTimeout(()=>{this.compPlay()},1000);
    //this.compPlay();
    if(this.check(this.isClick,this.isCompSelected)){
    this.gameComplete=true;
    setTimeout(()=>{this.flag==1?alert('You won'):alert('Draw');
    this.clear();},1000)
    //this.change.emit();
    }
    }
   }
  constructor() {
    this.boardArray=new Array(9);
    this.boardArray=[0,1,2,3,4,5,6,7,8];
   }
   check(isClick:boolean[],isCompSelected:boolean[])
   {
      
      if(isClick[0]&&isClick[4]&&isClick[8])
      return 1;
      else if(isClick[2]&&isClick[4]&&isClick[6])
      return 1;
      else if(isClick[0]&&isClick[1]&&isClick[2])
      return 1;
      else if(isClick[3]&&isClick[4]&&isClick[5])
      return 1;
      else if(isClick[6]&&isClick[7]&&isClick[8])
      return 1;
      else if(isClick[0]&&isClick[3]&&isClick[6])
      return 1;
      else if(isClick[1]&&isClick[4]&&isClick[7])
      return 1;
      else if(isClick[2]&&isClick[5]&&isClick[8])
      return 1;
      else if(isCompSelected[0]&&isCompSelected[4]&&isCompSelected[8])
      return 2;
      else if(isCompSelected[2]&&isCompSelected[4]&&isCompSelected[6])
      return 2;
      else if(isCompSelected[0]&&isCompSelected[1]&&isCompSelected[2])
      return 2;
      else if(isCompSelected[3]&&isCompSelected[4]&&isCompSelected[5])
      return 2;
      else if(isCompSelected[6]&&isCompSelected[7]&&isCompSelected[8])
      return 2;
      else if(isCompSelected[0]&&isCompSelected[3]&&isCompSelected[6])
      return 2;
      else if(isCompSelected[1]&&isCompSelected[4]&&isCompSelected[7])
      return 2;
      else if(isCompSelected[2]&&isCompSelected[5]&&isCompSelected[8])
      return 2;
      else if(this.noMovesLeft(isClick,isCompSelected))
      { //condition for a draw!
      //console.log(-1);
      return -1;
      }
      return 0;

   }
   compPlay()
   {
     this.wait=false;
     //compPlay gets executed as the callback after the specified time,hence wait is reinitialized to false,after that specified period 
     //Until,then onClick remains disabled.
     let random=0;
      if(this.gameComplete) //Return if game is already complete
      return;
      /************ */
       do
       {
        random=Math.floor(9*Math.random());
       // console.log(random);
       }while(this.isClick[random]||this.isCompSelected[random])
        //this.isCompSelected[random]=true;
        
        let index;
        index=this.playAt(this.isClick,this.isCompSelected);
        //console.log(index);
        this.isCompSelected[index]=true;
      /************** */
       if(this.flag=this.check(this.isClick,this.isCompSelected))//Check if game is complete
       {
       this.gameComplete=true;
       setTimeout(()=>{this.flag==2?alert('Computer won'):alert('Draw');
       this.clear();},1000)
       
      // this.change.emit();
   }
  }
  
  //Function for setting up the AI
  minMax(isClick:boolean[],isCompSelected:boolean[],boolFlag:boolean)
  {
    let best;
    let score=this.scoring(this.check(isClick,isCompSelected));
   // console.log(score);
    if(score==10||score==-10||score==0)
    return score;
    if(boolFlag)
    {
      best=1000;
     for(let i=0;i<9;i++)
     {
       if(!isClick[i]&&!isCompSelected[i]){
       isClick[i]=true;
       best=Math.min(best,this.minMax(isClick,isCompSelected,!boolFlag));
       isClick[i]=false;
       }
     }
     return best;
    }
    else{
      best=-1000;
      for(let i=0;i<9;i++)
      {
        if(!isClick[i]&&!isCompSelected[i]){
        isCompSelected[i]=true;
        best=Math.max(best,this.minMax(isClick,isCompSelected,!boolFlag));
        isCompSelected[i]=false;
        }
      }
      return best;
    }
  }
  playAt(isClick:boolean[],isCompSelected:boolean[])
  {
    let bestVal=-1000;
    let moveVal;
    let bestMove;
    for(let i=0;i<9;i++)
    {
      if(!isClick[i]&&!isCompSelected[i])
      {
      isCompSelected[i]=true;
      moveVal=this.minMax(isClick,isCompSelected,true);
      isCompSelected[i]=false;
      if(moveVal>bestVal)
      {
           bestMove=i;
           bestVal=moveVal;
      }
     }
    }
    return bestMove;
  }
  //Scoring function used by minMax 
  scoring(game)
  {
    if(game==2) //Won by computer which we want
    return 10;
    else if(game==1) //Won by human 
    return -10;
    else if(game==-1) //Draw
    return 0;
    else
    return 683;   
  }
  noMovesLeft(isClick:boolean[],isCompSelected:boolean[])
  {
    let flag=true;
    for(let i=0;i<9;i++)
    {
      if(!isClick[i]&&!isCompSelected[i])
      {
       flag=false;
       break;
      }
    }
    return flag;
  }
  clear()
  {
  for(let i=0;i<this.isClick.length;i++)
  {
    this.isClick[i]=false;
  }
  for(let i=0;i<this.isCompSelected.length;i++)
  {
    this.isCompSelected[i]=false;
  }
  this.gameComplete=false; //Restart the game by allowing the user to click
 }

  ngOnInit() {
  }

}
