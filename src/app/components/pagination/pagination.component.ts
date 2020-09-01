import {AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IJokeValue} from '../../services/data/data.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() data: IJokeValue[];
  @Input() page;

  @Output() pageChange = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
    this.pageChange.emit(this.data.slice((this.page - 1) * 10, this.page * 10));
  }

  public next(): void {
    this.page = this.page + 1;
    this.pageChange.emit(this.data.slice((this.page - 1) * 10, this.page * 10));
  }

  public prev(): void {
    if (this.page > 1) {
      this.page = this.page - 1;
      this.pageChange.emit(this.data.slice((this.page - 1) * 10, this.page * 10));
    }
  }


}
