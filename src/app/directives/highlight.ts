import { Directive,ElementRef, HostListener } from "@angular/core";

@Directive({selector: '[highlight]'})
export class HighLight{
    constructor(private el: ElementRef){
    }

    @HostListener('mouseenter') onEnter(){
        this.el.nativeElement.style.backgroundColor = 'yellow';
    }

    @HostListener('mouseleave') onLeave(){
        this.el.nativeElement.style.backgroundColor = '';
    }
}





