import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from './my.validators';

@Component({
  selector: 'app-forms-validation',
  templateUrl: './forms-validation.component.html',
  styleUrls: ['./forms-validation.component.scss']
})
export class FormsValidationComponent implements OnInit {

  appState = 'off';

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required, MyValidators.restrictedEmails], MyValidators.uniqEmail),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      address: new FormGroup({
        country: new FormControl('by'),
        city: new FormControl('Minsk', Validators.required)
      }),
      skills: new FormArray([])
    });
  }

  submit(): void {
    if (this.form.valid) {
      console.log('Form submitted: ', this.form);
      const formData = {...this.form.value};
      console.log('Form data: ', formData);

      this.form.reset();
    }
  }

  setCapital(): void {
    const cityMap = {
      ru: 'Moscow',
      ua: 'Kiev',
      by: 'Minsk'
    };
    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[cityKey];
    // console.log(city);
    this.form.patchValue({
      address: {city}
    });
  }

  addSkill(): void {
    const control = new FormControl('', Validators.required);

    // (<FormArray> this.form.get('skills'));
    (this.form.get('skills') as FormArray).push(control);

  }

  handleChange() {
    console.log(this.appState);
  }
}
