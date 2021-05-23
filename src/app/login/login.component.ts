import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpService } from '../shared/http.service';
import { AuthService } from '../guard/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  isAuth: any;
  passwordVisible = false;
  userName: string;
  password: string;
  userinfo: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private message: NzMessageService,
    private httpservice: HttpService,
    private authservice: AuthService
    ) {}

  ngOnInit() {
    this.initForm();
    var l = sessionStorage.getItem("userinfo");
    console.log(l);
    
  }

  initForm() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.userName,this.password);
    const url = "dashboard"
    const params = {
      userName: this.userName,
      password: this.password
    }
    this.authservice.Login(params)
      .subscribe((res)=>{
        if(res.code===200){
          this.userinfo = sessionStorage.setItem('userinfo',this.userName)
          this.message.success(res.msg);
          this.router.navigate(['/dashboard']);  
          var l = sessionStorage.getItem('userinfo');
          console.log(l);
          
        }else {
          this.message.error(res.msg);
        }
      },
      (error)=>{
        console.log(error);
      })
  }
}
