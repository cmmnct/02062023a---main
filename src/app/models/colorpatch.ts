import { Observable, Subject, of } from "rxjs";

export interface iColorpatch{
    r: number;
    g: number;
    b: number;
    a: number;
    name:string
}

export class Colorpatch {
    rgbaColor$: Observable<string> = of(`rgba(${this.r},${this.g},${this.b},${this.a})`);
    
    constructor(
        public r: number,
        public g: number,
        public b: number,
        public a: number,
        public name:string
    ){}

    getRgba():string{
        return `rgba(${this.r},${this.g},${this.b},${this.a})`
    }
    getRgba$(){
        return this.rgbaColor$
    }
}