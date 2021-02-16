import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kilometrage',
  templateUrl: './kilometrage.page.html',
  styleUrls: ['./kilometrage.page.scss'],
})
export class KilometragePage implements OnInit {

  kiloForm: FormGroup

  defaultDate = Date().normalize();
  constructor(private router: Router, public fb: FormBuilder) { }

  ngOnInit() {
    this.kiloForm = this.fb.group({
      immatriculation : [null, [Validators.required]],
      kilometrage : [null, [Validators.required]],
      date : [null, [Validators.nullValidator]],
      photo: [null, [Validators.required]]
    })
  }

  submitForm() {
    console.log(this.kiloForm.value);
  }

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.kiloForm.get('date').setValue(date, {
       onlyself: true
    })
 }

}
