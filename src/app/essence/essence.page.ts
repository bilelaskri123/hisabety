import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-essence',
  templateUrl: './essence.page.html',
  styleUrls: ['./essence.page.scss'],
})
export class EssencePage implements OnInit {

  essenceForm: FormGroup

  constructor(private router: Router, public fb: FormBuilder) { }

  ngOnInit() {
    this.essenceForm = this.fb.group({
      carburant : [null, [Validators.required]],
      litre : [null, [Validators.required]],
      prix : [null, [Validators.required]],
      photo: [null, [Validators.required]]
    })
  }

  submitForm() {
    console.log(this.essenceForm.value);
  }
}
