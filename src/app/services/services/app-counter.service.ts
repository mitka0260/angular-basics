import {Injectable} from '@angular/core';
import {LogService} from './log.service';


@Injectable({   // данный декоратор не обязателен
  providedIn: 'root'    // тогда в главном модуле не надо прописывать импорт
})
export class AppCounterService {
  counter = 0;

  constructor(private logService: LogService) {  // используем один сервис внутри другого
  }

  increase(): void {
    this.logService.log('increase counter');
    this.counter++;
  }

  decrease(): void {
    this.logService.log('decrease counter');
    this.counter--;
  }
}
