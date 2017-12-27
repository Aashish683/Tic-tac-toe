
import { noMovesLeft } from './noMovesLeft';
export function check(isClick:boolean[],isCompSelected:boolean[])
{
   
   if(isClick[0]&&isClick[4]&&isClick[8])
   return {flag:1,position:[0,4,8]};
   else if(isClick[2]&&isClick[4]&&isClick[6])
   return {flag:1,position:[2,4,6]};   
   else if(isClick[0]&&isClick[1]&&isClick[2])
   return {flag:1,position:[0,1,2]};   
   else if(isClick[3]&&isClick[4]&&isClick[5])
   return {flag:1,position:[3,4,5]};
   else if(isClick[6]&&isClick[7]&&isClick[8])
   return {flag:1,position:[6,7,8]};
   else if(isClick[0]&&isClick[3]&&isClick[6])
   return {flag:1,position:[0,3,6]};
   else if(isClick[1]&&isClick[4]&&isClick[7])
   return {flag:1,position:[1,4,7]};
   else if(isClick[2]&&isClick[5]&&isClick[8])
   return {flag:1,position:[2,5,8]};
   else if(isCompSelected[0]&&isCompSelected[4]&&isCompSelected[8])
   return {flag:2,position:[0,4,8]};
   else if(isCompSelected[2]&&isCompSelected[4]&&isCompSelected[6])
   return {flag:2,position:[2,4,6]};
   else if(isCompSelected[0]&&isCompSelected[1]&&isCompSelected[2])
   return {flag:2,position:[0,1,2]};
   else if(isCompSelected[3]&&isCompSelected[4]&&isCompSelected[5])
   return {flag:2,position:[3,4,5]};
   else if(isCompSelected[6]&&isCompSelected[7]&&isCompSelected[8])
   return {flag:2,position:[6,7,8]};
   else if(isCompSelected[0]&&isCompSelected[3]&&isCompSelected[6])
   return {flag:2,position:[0,3,6]};
   else if(isCompSelected[1]&&isCompSelected[4]&&isCompSelected[7])
   return {flag:2,position:[1,4,7]};
   else if(isCompSelected[2]&&isCompSelected[5]&&isCompSelected[8])
   return {flag:2,position:[2,5,8]};
   else if(noMovesLeft(isClick,isCompSelected))
   { //condition for a draw!
   //console.log(-1);
   return {flag:-1,position:[-1]};
   }
   return {flag:0,position:[-1]};

}
