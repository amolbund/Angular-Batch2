import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLighter]'
})
export class HighLighterDirective implements OnInit {

  @Input() appHighLighter:string ="White";

  constructor(private element: ElementRef) {
    //  alert("Message from HighLighterDirective");
    //  this.element.nativeElement.style.backgroundColor = "Yellow";
   }

   ngOnInit(){
      //   alert(this.appHighLighter);
      this.element.nativeElement.style.backgroundColor = this.appHighLighter;
   }
}
