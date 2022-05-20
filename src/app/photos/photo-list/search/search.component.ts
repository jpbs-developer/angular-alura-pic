import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnDestroy {
  @Output() onkeyUp: EventEmitter<string> = new EventEmitter();
  debounce: Subject<string> = new Subject<string>();
  filter: string = '';
  @Input() value: string = '';

  setFilter(event: KeyboardEvent) {
    const filter = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.debounce.next(filter);
    this.debounce
      .pipe(debounceTime(300))
      .subscribe((filter) => this.onkeyUp.emit(filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
