import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

export class MyValidators {

  static restrictedEmails(control: FormControl): {[key: string]: boolean} {
    if (['v@mail.com', 'test@mail.com'].includes(control.value)) {
      return {
        restrictedEmail: true
      };
    }
    return null;
  }

  // типа запрос в базу данных на проверку, есть ли уже такой емайл
  static uniqEmail(control: FormControl): Promise<any> | Observable<any> {  //   any = (<FormArray> this.form.get('skills'));
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'async@mail.com') {
          resolve({uniqEmail: true});
        } else {
          return resolve(null);
        }
      }, 1000);
    });
  }

}
