import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === undefined || (arg.month === null && arg.day === null && arg.year === null)){
      return value
    }else{
      const result: any[] = []
      for(let item of value){
        if(item.startDate.day === parseInt(arg.day) && (arg.month === null || arg.month === 'null') && (arg.year === null || arg.year === 'null')){
          result.push(item)
        }else if((item.startDate.month === parseInt(arg.month) && (arg.day === null || arg.day === 'null') && (arg.year === null || arg.year === 'null'))){
          result.push(item)
        }else if((item.startDate.year === parseInt(arg.year) && (arg.day === null || arg.day === 'null') && (arg.month === null || arg.month === 'null'))){
          result.push(item)
        }else if((item.startDate.day === parseInt(arg.day) && item.startDate.month === parseInt(arg.month) && (arg.year === null || arg.year === 'null'))){
          result.push(item)
        }else if((item.startDate.day === parseInt(arg.day) && item.startDate.year === parseInt(arg.year) && (arg.month === null || arg.month === 'null'))){
          result.push(item)
        }else if((item.startDate.month === parseInt(arg.month) && item.startDate.year === parseInt(arg.year) && (arg.day === null || arg.day === 'null'))){
          result.push(item)
        }else if((item.startDate.month === parseInt(arg.month) && item.startDate.year === parseInt(arg.year) && item.startDate.day === parseInt(arg.day))){
          result.push(item)
        }
      }
      return result
    }
  }

}
