import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[appHighlightDescription]'
})
export class HighlightDescriptionDirective {

  constructor(private elem: ElementRef) { 
     this.highlightDescription("yellow");
  }
  private highlightDescription(color: string) {
      this.elem.nativeElement.style.backgroundColor=color;
  }

}
