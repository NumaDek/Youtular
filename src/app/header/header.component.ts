import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { categories } from '../models/content.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  public sendSelectedCategory:EventEmitter<any> = new EventEmitter();
  @Output()
  public sendFilter:EventEmitter<any> = new EventEmitter();

  public filter:string = "";
  public categorySelected:string = "All"
  public categories:string[] = ["All", ...categories];
  public buttonColor:string= "rgb(60, 60, 60)";

  constructor() { }

  ngOnInit(): void {
  }

  public onReceiveCategory(event: string): void {
    this.categorySelected = event;
    this.sendSelectedCategory.emit(event);
  }

  public submitFilter() {
    this.sendFilter.emit(this.filter);
  }
}
