import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'domain'
})
export class DomainPipe implements PipeTransform {
  url:string;

  transform(value: any, ...args: any[]): any {
    if (this.url) {
      var domain = '(' + this.url.split('/')[2] + ')';
      return domain ? domain.replace('www.', '') : '';
    
  }

}
}