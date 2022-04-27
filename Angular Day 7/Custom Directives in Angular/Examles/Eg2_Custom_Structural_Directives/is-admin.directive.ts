import { Directive, ViewContainerRef, TemplateRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appIsAdmin]'
})
export class IsAdminDirective implements OnInit {

  @Input()  appIsAdmin: boolean = false;

  constructor(private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>)
  {

  }

  ngOnInit()
  {
        if(this.appIsAdmin == true)
        {
          // show
          this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else
        {
          // hide
          this.viewContainer.clear();
        }
  }

}
