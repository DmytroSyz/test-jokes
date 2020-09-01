import { Pipe, PipeTransform } from '@angular/core';
import {IJokes, IJokeValue} from '../services/data/data.service';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(jokes: IJokeValue[], filterInput: string): any[] {
    if (!jokes) {
      return [];
    }
    if (!filterInput) {
      return jokes;
    }
    filterInput = filterInput.toLowerCase();
    return jokes.filter(joke => {
      return(
        joke.joke.toString().toLowerCase().includes(filterInput)
      );
    });  }

}
