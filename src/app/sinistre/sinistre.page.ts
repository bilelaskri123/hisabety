import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sinistre',
  templateUrl: './sinistre.page.html',
  styleUrls: ['./sinistre.page.scss'],
})
export class SinistrePage implements OnInit {

  sinistreForm: FormGroup

  defaultDate = Date().normalize();
  constructor(private router: Router, public fb: FormBuilder) { }

  ngOnInit() {
    this.sinistreForm = this.fb.group({
      immatriculation : [null, [Validators.required]],
      description : [null, [Validators.required]],
      date : [null, [Validators.nullValidator]],
      photo: [null, [Validators.required]]
    })
  }

  submitForm() {
    console.log(this.sinistreForm.value);
  }

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.sinistreForm.get('date').setValue(date, {
       onlyself: true
    })
 }

}
