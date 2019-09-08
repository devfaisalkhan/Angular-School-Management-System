import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-student-identification-form',
  templateUrl: './student-identification-form.component.html',
  styleUrls: ['./student-identification-form.component.less']
})
export class StudentIdentificationFormComponent implements OnInit {
  @Input() submitted: boolean;
  userIdentificaionForm: FormGroup;
  validators = {
    firstName: [Validators.required, Validators.minLength(2)],
    lastName: [Validators.required, Validators.minLength(2)],
    middleName: [],
    otherNames: [],
    namePrefix: [],
    dateOfBirth: [Validators.required]
  };
  errors = {
    firstName: null,
    lastName: null,
    middleName: null,
    otherNames: null,
    prefix: null,
    dateOfBirth: null,
    dateOfBirthNumber: null
  };
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.userIdentificaionForm = this.fb.group({
      firstName: [ '', this.validators.firstName ],
      lastName: [ '', this.validators.lastName ],
      otherNames: [ '', this.validators.otherNames ],
      middleName: [ '', this.validators.middleName ],
      namePrefix: [ '', this.validators.namePrefix ],
      dateOfBirth: [ null, this.validators.dateOfBirth]
    });
  }
  validateFirstName({blur} = {blur: true}) {
    const changeFirstNameError = () => {
      if ((this.userIdentificaionForm.get('firstName').dirty || this.userIdentificaionForm.get('firstName').touched) &&
      !this.userIdentificaionForm.get('firstName').valid ) {
        if (this.userIdentificaionForm.get('firstName').errors.required) {
          this.errors.firstName = 'First Name is required';
        } else if (this.userIdentificaionForm.get('firstName').errors.minlength) {
          this.errors.firstName = 'First Name must have at least 2 characters';
        } else {
          this.errors.firstName = null;
        }
      }
    }
    if (blur) {
      changeFirstNameError();
    } else {
      if ( this.errors.firstName ) {
        changeFirstNameError();
      }
    }
  }
  validateLastName() {
    if ((this.userIdentificaionForm.get('lastName').dirty || this.userIdentificaionForm.get('lastName').touched) &&
      !this.userIdentificaionForm.get('lastName').valid ) {
        if (this.userIdentificaionForm.get('lastName').errors.required) {
          this.errors.lastName = 'First Name is required';
        } else if (this.userIdentificaionForm.get('lastName').errors.minlength) {
          this.errors.lastName = 'Last Name must have at least 2 characters';
        } else {
          this.errors.lastName = null;
        }
      }
  }
  validateMiddleName() {
  }
  validateOtherNames() {
  }
  validateDateOfBirth() {
    if ((this.userIdentificaionForm.get('dateOfBirth').dirty || this.userIdentificaionForm.get('dateOfBirth').touched) &&
    !this.userIdentificaionForm.get('dateOfBirth').valid ) {
      if (this.userIdentificaionForm.get('dateOfBirth').errors.required) {
        this.errors.dateOfBirth = 'Date Of Birth is required';
      } else {
        this.errors.dateOfBirth = null;
      }
    }
  }
}
