import { Observable, Subject, of } from "rxjs";

export interface iColorpatchStream{
    r$: Observable<number>;
    g$: Observable<number>;
    b$: Observable<number>;
    a$: Observable<number>;
    name$:Observable<string>
}

export class ColorpatchStream implements iColorpatchStream {

    r$: Observable<number>;
    g$: Observable<number>;
    b$: Observable<number>;
    a$: Observable<number>;
    name$:Observable<string>

    constructor(
        public r: number,
        public g: number,
        public b: number,
        public a: number,
        public name:string
    ){
        this.r$ = of(r);
        this.g$ = of(g);
        this.b$ = of(b);
        this.a$ = of(a);
    }

    rgba$: Observable<string> = of('rgba(0,0,0,1)')
    


    getRgba(){
       this.rgba$.pipe(
        
       )
    }
    
}