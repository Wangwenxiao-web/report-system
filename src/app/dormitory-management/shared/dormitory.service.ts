import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DormitoryService {

  constructor(private http:HttpClient) { }
  // 获取宿舍信息
  getDormitory(    
    pageIndex: number,
    pageSize: number,
    ): Observable<any> {
    const url = 'http://localhost:3000/dormitory/GetDormitory';
    return this.http.post(url,{pageIndex,pageSize});
  }
  // 提交换宿申请
  exchangeDormitory(params:any): Observable<any> {
    const url = 'http://localhost:3000/dormitory/exchangeDormitory';
    return this.http.post(url,params);
  }
}
