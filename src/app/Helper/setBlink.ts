export function setBlink(setter:number[],blink:boolean[]){
 for(let i=0;i<3;i++){
     blink[setter[i]]=true;
 }
}