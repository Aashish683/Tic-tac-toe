  //Scoring function used by minMax 
  export function scoring(game)
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