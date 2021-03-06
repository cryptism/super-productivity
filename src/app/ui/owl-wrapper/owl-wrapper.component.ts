import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {T} from 'src/app/t.const';

@Component({
  selector: 'owl-wrapper',
  templateUrl: './owl-wrapper.component.html',
  styleUrls: ['./owl-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OwlWrapperComponent {
  @Input()
  now = new Date();

  @Input()
  model: number;

  @Input('dateTime')
  set dateTimeSet(v: number) {
    this.dateTime = v;
    this.date = new Date(v);
  }

  dateTime: number;

  @Output()
  dateTimeChange = new EventEmitter<number>();

  @Output()
  triggerSubmit = new EventEmitter<number>();

  T = T;
  date = new Date();
  laterTodaySlots = [
    '9:00',
    '15:00',
    '17:00',
    '19:00',
    '21:00',
    '22:00',
    '23:30',
  ];

  constructor() {
  }

  submit() {
    this.triggerSubmit.emit(this.dateTime);
  }

  updateDateFromCal(date) {
    this.dateTime = new Date(date).getTime();
    this.dateTimeChange.emit(this.dateTime);
  }
}
