import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedUtilsService {

  constructor() {}

  monthNames = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct',
    'Nov', 'Dec'
  ];

  public getTimeListEventCreation() {
    return [
      [
        {label: '12:00AM', value: 'T00:00:00Z'},
        {label: '12:30AM', value: 'T00:30:00Z'},
        {label: '1:00AM', value: 'T01:00:00Z'},
        {label: '1:30AM', value: 'T01:30:00Z'},
        {label: '2:00AM', value: 'T02:00:00Z'},
        {label: '2:30AM', value: 'T02:30:00Z'},
        {label: '3:00AM', value: 'T03:00:00Z'},
        {label: '3:30AM', value: 'T03:30:00Z'},
        {label: '4:00AM', value: 'T04:00:00Z'},
        {label: '4:30AM', value: 'T04:30:00Z'},
        {label: '5:00AM', value: 'T05:00:00Z'},
        {label: '5:30AM', value: 'T05:30:00Z'},
        {label: '6:00AM', value: 'T06:00:00Z'},
        {label: '6:30AM', value: 'T06:30:00Z'},
        {label: '7:00AM', value: 'T07:00:00Z'},
        {label: '7:30AM', value: 'T07:30:00Z'},
        {label: '8:00AM', value: 'T08:00:00Z'},
        {label: '8:30AM', value: 'T08:30:00Z'},
        {label: '9:00AM', value: 'T09:00:00Z'},
        {label: '9:30AM', value: 'T09:30:00Z'},
        {label: '10:00AM', value: 'T10:00:00Z'},
        {label: '10:30AM', value: 'T10:30:00Z'},
        {label: '11:00AM', value: 'T11:00:00Z'},
        {label: '11:30AM', value: 'T11:30:00Z'},
        {label: '12:00PM', value: 'T12:00:00Z'},
        {label: '12:30PM', value: 'T12:30:00Z'},
        {label: '1:00PM', value: 'T13:00:00Z'},
        {label: '1:30PM', value: 'T13:30:00Z'},
        {label: '2:00PM', value: 'T14:00:00Z'},
        {label: '2:30PM', value: 'T14:30:00Z'},
        {label: '3:00PM', value: 'T15:00:00Z'},
        {label: '3:30PM', value: 'T15:30:00Z'},
        {label: '4:00PM', value: 'T16:00:00Z'},
        {label: '4:30PM', value: 'T16:30:00Z'},
        {label: '5:00PM', value: 'T17:00:00Z'},
        {label: '5:30PM', value: 'T17:30:00Z'},
        {label: '6:00PM', value: 'T18:00:00Z'},
        {label: '6:30PM', value: 'T18:30:00Z'},
        {label: '7:00PM', value: 'T19:00:00Z'},
        {label: '7:30PM', value: 'T19:30:00Z'},
        {label: '8:00PM', value: 'T20:00:00Z'},
        {label: '8:30PM', value: 'T20:30:00Z'},
        {label: '9:00PM', value: 'T21:00:00Z'},
        {label: '9:30PM', value: 'T21:30:00Z'},
        {label: '10:00PM', value: 'T22:00:00Z'},
        {label: '10:30PM', value: 'T22:30:00Z'},
        {label: '11:00PM', value: 'T23:00:00Z'},
        {label: '11:30PM', value: 'T23:30:00Z'},
      ]
    ];
  }

  public getFormattedTime(value: string, timezome) {
    const d = new Date(value);
    let hh: any;
    let m: any;

    if (timezome !== 'local') {
      hh = d.getUTCHours();
      m = d.getUTCMinutes();
    } else {
      hh = d.getHours();
      m = d.getMinutes();
    }

    let dd = 'AM';
    let h = hh;
    if (h >= 12) {
      h = hh - 12;
      dd = 'PM';
    }
    if (h === 0) {
      h = 12;
    }
    m = m < 10 ? 0 + m : m;

    return h + ':' + ('0' + m).slice(-2) + dd;
  }

  public scrollPageToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  public copyToClipBoard(valueToCopy) {
    const selBox = document.createElement('textarea');

    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = valueToCopy;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
