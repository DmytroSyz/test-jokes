import { Component, OnInit } from '@angular/core';
import {DataService, IJoke, IJokeValue} from '../../services/data/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public jokeValue: IJokeValue;

  constructor(private dataService: DataService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.dataService.getJoke(res.id).subscribe((result: IJoke) => {
        this.jokeValue = result.value;
      });
    });
  }

  back() {
    window.history.back();
  }

}
