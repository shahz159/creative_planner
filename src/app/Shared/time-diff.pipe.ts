import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeDiff'
})
export class TimeDiffPipe implements PipeTransform {

  transform(time1: string, time2: string): string {
    //note:  time1 and time2 must be in like in this format :  '12:00 pm' 
    if(time1&&time2){
      time1=time1.trim();
      time2=time2.trim();
      if (time1 && time2) {
        time1 = '2024-04-20 ' + time1;
        if (time1.toUpperCase().includes('PM') && time2.toUpperCase().includes('AM')) {
          time2 = '2024-04-21 ' + time2;
        } else {
          time2 = '2024-04-20 ' + time2;
        }
  
        let T1 = moment(time1, 'YYYY-MM-DD hh:mm a');
        let T2 = moment(time2, 'YYYY-MM-DD hh:mm a');
        const result = Math.abs(T1.diff(T2, 'minute'));  
        return result < 60 ? (result + ' mins') : (result / 60).toFixed(2) + ' hrs';
      }
    }
   
    return '';
  }

}
