import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';

@Injectable({
  providedIn: 'root'
})
export class DeactiveGuardService implements CanDeactivate<AboutusComponent>{

  constructor() { }

  canDeactivate(component:AboutusComponent,
    ) : boolean {

return component.canExit();

}
}
