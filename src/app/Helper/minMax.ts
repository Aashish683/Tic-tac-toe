  //Function for setting up the AI  
import { scoring } from './scoring';
import {check} from './checkForWin';
 function minMax(isClick:boolean[],isCompSelected:boolean[],boolFlag:boolean)
  {
    let best;
    let score=scoring(check(isClick,isCompSelected).flag);
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
       best=Math.min(best,minMax(isClick,isCompSelected,!boolFlag));
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
        best=Math.max(best,minMax(isClick,isCompSelected,!boolFlag));
        isCompSelected[i]=false;
        }
      }
      return best;
    }
  }

  export function playAt(isClick:boolean[],isCompSelected:boolean[])
  {
    let bestVal=-1000;
    let moveVal;
    let bestMove;
    for(let i=0;i<9;i++)
    {
      if(!isClick[i]&&!isCompSelected[i])
      {
      isCompSelected[i]=true;
      moveVal=minMax(isClick,isCompSelected,true);
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