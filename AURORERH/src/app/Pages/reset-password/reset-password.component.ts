import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/email.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  to!: string;
  subject!: string;
  body!: string;

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  sendEmail() {
    this.emailService.sendEmail(this.to, this.subject, this.body).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error);
    });
  }

}
