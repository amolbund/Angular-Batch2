import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(input:any[], filterProp:string, filterValue:any): any[]
   {
      let output:any[] = [];
      output =   input.filter( item =>item[filterProp] == filterValue );
      return output;
    }
}
