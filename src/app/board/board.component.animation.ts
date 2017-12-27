import { trigger, transition, style, animate, state } from "@angular/animations";



export let boardDisplayAnimation=[trigger('boardTrig',[
      transition('void=>*',[
          style({opacity:0}),
          animate(1000,style({opacity:1}))
      ])
    ]),
    trigger('blink',[
        state('flash',style({})),
        state('normal',style({})),
        transition('normal=>flash',[
            style({}),
            animate(300),
            style({backgroundColor:"snow"}),
            animate(300)
        ])
    ])
]