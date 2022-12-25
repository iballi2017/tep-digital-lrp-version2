import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent implements OnInit {
  @Input("disabled") disabled!: boolean;
  @Input("btnType") btnType!: string;
  @Input("btnClasses") btnClasses!: any;
  @Input("btnTitle") btnTitle!: string;
  @Output() onClickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickBtn() {
    this.onClickEvent.emit();
  }

}
