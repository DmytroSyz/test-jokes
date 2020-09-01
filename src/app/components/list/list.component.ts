import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DataService, IJokes, IJokeValue} from '../../services/data/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public viewJokes: IJokeValue[];
  public allJokes;
  public filterInput: string;

  public pageNumber = 1;

  constructor(private dataService: DataService,
              private router: Router,
              private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.dataService.jokes$.subscribe((res: IJokes) => {
      if (res) {
        this.viewJokes = res.value;
        this.allJokes = res.value;
      }
    });
  }

  public openDetails(id): void {
    this.router.navigate(['detail', id]);
  }

  public onPageChange(jokes: IJokeValue[]) {
    this.viewJokes = jokes;
    this.cdRef.detectChanges();
  }

}
