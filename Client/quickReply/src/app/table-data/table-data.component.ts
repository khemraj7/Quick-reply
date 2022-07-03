import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {
  dataListForm: any = FormGroup
  listData: any = []
  constructor() { }

  ngOnInit(): void {
    this.dataListForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      description: new FormControl(null, [Validators.required]),
      size: new FormControl(null, [Validators.required])

    })
  }
  addData(data: any) {
    console.log(data)
    this.listData.push(data)

  }
  deleteData(index: number) {
    this.listData.splice(index, 1)
  }

}
