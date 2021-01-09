import {Component, OnInit} from '@angular/core';
import {interval, Subscription, Observable, Subject} from 'rxjs';  // создание новых стримов
import {map, filter} from 'rxjs/operators'; // относится к операторам

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent {

  sub: Subscription;
  stream1$: Subject<number> = new Subject<number>();
  counter = 0;

  constructor() {
    const intervalStream$ = interval(1000);   // данная функция вернёт стрим, всё что внутри запускается каждую секунду
    this.sub = intervalStream$
      .pipe(
        filter(value => value % 2 === 0),
        map((value) => `Mapped value: ${value}`),
        // switchMap(() => interval(500))
      )
      .subscribe((value) => {
        console.log(value);
      });

    // creating new stream$
    const stream$ = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 500);
      setTimeout(() => {
        observer.complete();  // вызывается если не было никаких ошибко
      }, 750);
      setTimeout(() => {
        observer.error('Something went wrong'); // после ошибки стрим прекращается
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 1500);
    });

    this.sub = stream$
      .subscribe(
        value => console.log('Next: ', value),
        error => console.log('Error: ', error),
        () => console.log('Stream is completed')
    );

    this.stream1$.subscribe(value => {
      console.log('Subscribed stream1$', value);
    });

  }

  stop(): void {
    this.sub.unsubscribe();
  }

  next(): void {
    this.counter++;
    this.stream1$.next(this.counter);
  }

}
