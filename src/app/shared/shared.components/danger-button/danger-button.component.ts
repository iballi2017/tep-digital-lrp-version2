import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-danger-button',
  templateUrl: './danger-button.component.html',
  styleUrls: ['./danger-button.component.scss']
})
export class DangerButtonComponent implements OnInit {
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
