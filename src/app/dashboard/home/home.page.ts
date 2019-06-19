import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(private router: Router) {

  }

  ngOnInit() {

  }
  myPatient() {
    console.log('Inside patient');
  }
  Screening() {
    this.router.navigateByUrl('/screen-qrcode');
    console.log('Inside Screening');
  }
  }
