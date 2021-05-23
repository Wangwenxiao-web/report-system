import { Component, OnInit } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

import { DormitoryService } from "../../shared/dormitory.service";


@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {

  arr: any = [];
  total: number;
  pageIndex = 1;
  pageSize = 10;
  loading = false;
  constructor(
    private DormitoryService:DormitoryService
  ) { }

  ngOnInit(): void {
    this.getinfo(this.pageIndex,this.pageSize)
  }

  getinfo(pageIndex:number,pageSize:number) {
    this.loading = true;
    this.DormitoryService.getDormitory(pageIndex,pageSize)
      .subscribe((res)=>{       
        this.loading = false;
        this.total = res.total
        this.arr = res.data;
      })
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex } = params;
    this.getinfo(pageIndex,pageSize);
  }

}