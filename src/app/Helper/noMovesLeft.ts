
export function noMovesLeft(isClick:boolean[],isCompSelected:boolean[])
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