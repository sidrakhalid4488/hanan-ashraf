import { NgClass } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  contactForm!: FormGroup;
  alertMessage: string | null = null;
  alertType: 'success' | 'error' | null = null;
  showAlert = false;


  // Define serviceID, templateID, and userID constants
  serviceID = 'service_8oisy7n'; 
  templateID = 'template_atqv3gb'; 
  userID = 'Gj02CMPJ9bk3Wkmag'; 

  constructor(private fb: FormBuilder,private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Initialize the contact form with form controls and validators
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  // Method to send email using EmailJS
  sendEmail(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      emailjs.send(this.serviceID, this.templateID, formData, this.userID)
        .then((response: EmailJSResponseStatus) => {
          console.log('SUCCESS!', response.status, response.text);
          this.alertMessage = 'Form Submitted successfully!';
          this.alertType = 'success';
          this.showAlert = true;
          this.contactForm.reset(); // Reset the form fields
          this.cd.detectChanges(); // Ensure changes are detected

          // Hide the alert after 3 seconds
          setTimeout(() => {
            this.showAlert = false;
            this.cd.detectChanges(); 
          }, 2000);
        }, (error) => {
          console.log('FAILED...', error);
          this.alertMessage = 'Failed to send message. Please try again.';
          this.alertType = 'error';
          this.showAlert = true;
          this.cd.detectChanges(); // Ensure changes are detected

          // Hide the alert after 3 seconds
          setTimeout(() => {
            this.showAlert = false;
            this.cd.detectChanges(); 
          }, 2000);
        });
    }
  }
}
