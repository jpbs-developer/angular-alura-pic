import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-message',
  templateUrl: './v-message.component.html',
  styleUrls: ['./v-message.component.css'],
})
export class VMessageComponent implements OnInit {
  @Input() message: string = '';
  constructor() {}

  ngOnInit(): void {}
}
