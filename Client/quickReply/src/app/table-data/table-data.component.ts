import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient/* , HttpParams */ } from '@angular/common/http'

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {
  dataListForm: any = FormGroup
  listData: any = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.dataListForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      description: new FormControl(null, [Validators.required]),
      size: new FormControl(null, [Validators.required])

    })
    this.getAll()
  }
  getAll() {
    this.http.get('http://localhost:3000/save',).subscribe(res => {
      console.log(res)
      this.listData = res
    })
  }

  addData(data: any) {
    console.log(data)
    this.http.post('http://localhost:3000/save', data).subscribe(res => {
      console.log(res)
    })
    this.listData.push(data)

  }
  deleteData(index: number) {
    this.listData.splice(index, 1)
  }

}
