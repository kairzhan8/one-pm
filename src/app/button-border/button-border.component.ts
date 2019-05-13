import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-border',
  templateUrl: './button-border.component.html',
  styleUrls: ['./button-border.component.scss']
})
export class ButtonBorderComponent implements OnInit {
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
