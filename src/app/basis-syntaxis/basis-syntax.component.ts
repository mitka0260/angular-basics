import { Component} from '@angular/core';

@Component({
  selector: 'app-basis-syntax',
  templateUrl: './basis-syntax.component.html',
  styleUrls: ['./basis-syntax.component.scss']
})
// // введём динамические данные прямо в шаблон
export class BasisSyntaxComponent {

  title = 'Dynamic title';
  number = 42;
  arr = [1, 2, 3];
  obj = {a: 1, b: {c: 2}};

  img = 'https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png';
//
//   constructor() {
//     setTimeout(() => {
//       console.log('Timeout is over');
//       this.img = 'https://docs.angular.lat/assets/images/logos/angular/angular.png';
//     }, 2000);
//   }
//
//   inputValue = 'Text here will be exact copy from input';
//   onInput(event?: any): void {
//     console.log('Event: ', event);
//     this.inputValue = event.target.value;
//   }
//
//   onClick(): void {
//     console.log('Button was pressed');
//   }
//
//   inputValue1 = 'Text here will be exact copy from input';
//   onInput1(event: KeyboardEvent): void {
//     // console.log('Event: ', KeyboardEvent);
//     this.inputValue1 = (event.target as HTMLInputElement).value;  // (<HTMLInputElement>event.target).value;
//   }
//
//   onBlur(str: string): void {
//     this.inputValue1 = str;
//   }
//
//   title1 = '2 way binding';
//   onInput2(event: any): void {
//     this.title1 = event.target.value;
//   }
//
//   title2 = '2-way binding with directive [(ngModel)]';
//
//   backgroundToggle = false;
//
//   toggle: any = false;
//
//   arr1 = [1, 1, 2, 3, 5, 8, 13];
//   objects = [
//     {title: 'Post 1', author: 'John', comments: [
//         {name: 'Max', text: 'lorem 1'},
//         {name: 'James', text: 'lorem 2'},
//         {name: 'Kirk', text: 'lorem 3'}
//       ]},
//     {title: 'Post 2', author: 'John2', comments: [
//         {name: 'Max2', text: 'lorem 1'},
//         {name: 'James2', text: 'lorem 2'},
//         {name: 'Kirk2', text: 'lorem 3'}
//       ]},
//   ];
//
//   now: Date = new Date();
//
}
