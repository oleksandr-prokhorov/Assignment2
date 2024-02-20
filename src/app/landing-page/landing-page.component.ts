import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  signInForm!: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      login: new FormControl(null, 
        Validators.required),
      password: new FormControl(null,
        Validators.required
        ),
    });
  }

  onSubmit() {
    this.router.navigate(['/dashboard']);
  }
}
