import {Component} from '@angular/core';
import {DataService} from './services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testJokes';
  public darkTheme = false;

  constructor(private dataService: DataService) {
    this.dataService.getJokes().subscribe();
  }

  public changeTheme(): void {
    this.darkTheme = !this.darkTheme;
    if (this.darkTheme) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }
}
