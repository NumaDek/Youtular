import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  public category:string = "";
  @Input()
  public backgroundColor:string = "";
  @Output()
  public sendCategorySelected:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onCategorySelected() {
    this.sendCategorySelected.emit(this.category);
  }
}
