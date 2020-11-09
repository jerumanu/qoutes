import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighvotes]'
})
export class HighvotesDirective {


  constructor( private elem:ElementRef) {}
   

  private textcolor(action:string){

    @HostListener("click") upvoteclick(){
      this.textcolor("green")
    }
  
    @HostListener("dblclick")upvoteclick(){
      this.textcolor("green")
    }
  
    this.elem.nativeElement.style.color=action;
  }

}
