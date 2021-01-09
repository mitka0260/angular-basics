import {Component} from '@angular/core';
import {AppCounterService} from './services/app-counter.service';
import {LocalCounterService} from './services/local-counter.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [LocalCounterService]        // сервис зарегестрирован локально = только в этом компоненте
})
export class ServicesComponent {

  constructor(
    private appCounterService: AppCounterService,
    private localCounterServices: LocalCounterService
  ) {}

}
