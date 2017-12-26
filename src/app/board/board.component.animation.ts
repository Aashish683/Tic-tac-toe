import { trigger, transition, style, animate } from "@angular/animations";



export let boardDisplayAnimation=[trigger('boardTrig',[
      transition('void=>*',[
          style({opacity:0}),
          animate(1000,style({opacity:1}))
      ])
])
]