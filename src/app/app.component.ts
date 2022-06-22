import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Youtular';

  public selectedCategory: string = "All";
  public filter: string = "";

  public onReceivedSelectedCategory(event: string): void {
    this.selectedCategory = event;
  }

  public onReceivedFilter(event: string): void {
    this.filter = event;
  }
}
