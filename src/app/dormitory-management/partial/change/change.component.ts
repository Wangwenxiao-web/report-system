import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { DormitoryService } from "../../shared/dormitory.service";
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {

  userinfo:string = sessionStorage.getItem('userinfo');
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private DormitoryService:DormitoryService
    ) {}

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.validateForm = this.fb.group({
      stuNo: [{value:this.userinfo,disabled: true}, [Validators.required]],
      stuName: ['', [Validators.required]],
      Now_No: ['', [Validators.required]],
      Wish_No: ['', [Validators.required]],
      reason: ['', [Validators.required]]
    });
  }

  submitForm(value: { stuNo: string; stuName: string; Now_No: string; Wish_No: string; reason: string }): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
    const params = {
      studentNo:this.userinfo,
      studentName: value.stuName,
      Now_No: value.Now_No,
      Wish_No: value.Wish_No,
      reason: value.reason
    }
    this.uploadexchange(params);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  uploadexchange(params:any){
    this.DormitoryService.exchangeDormitory(params)
      .subscribe((res)=>{
        this.message.success("提交成功！老师会尽快批阅你的申请")
      },
      (error)=>{
        this.message.error("提交失败！")
      })
  }


}
