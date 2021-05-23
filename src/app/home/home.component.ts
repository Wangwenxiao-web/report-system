import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzIconService } from 'ng-zorro-antd/icon';
import { NzPlacementType } from 'ng-zorro-antd/dropdown';
import { AuthService } from '../guard/auth.service'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userID: string;
  placement: NzPlacementType = 'bottomCenter';
  isCollapsed = false;
  openMap: { [name: string]: boolean } = {
    sub1: false,
    sub2: false,
    sub3: false
  };

  constructor(
    private iconservice: NzIconService,
    private router: Router,
    private authservice: AuthService
  ) { 
    this.iconservice.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_2562839_wwd37m4dik.js'
    })
  }

  ngOnInit(): void {
    this.getUserID();
  }

  getUserID() {
    this.userID = sessionStorage.getItem("userinfo");
    console.log(this.userID);
    
  }

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }

  loginout(){
    sessionStorage.setItem("userinfo",null);
    this.authservice.LoginOut().subscribe(()=>{
      sessionStorage.removeItem('userinfo');
    });
    setTimeout(() => {
      this.router.navigate(['/login'])
    }, 300);

  }

}
