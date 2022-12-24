import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss']
})
export class DefaultButtonComponent implements OnInit {
  @Input("disabled") disabled!: boolean;
  @Input("btnType") btnType!: string;
  @Input("btnClasses") btnClasses!: string;
  @Input("btnTitle") btnTitle!: string;
  @Output() onClickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickBtn() {
    this.onClickEvent.emit();
  }

}
