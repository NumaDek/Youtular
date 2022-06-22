import { Component, Input, OnInit } from '@angular/core';
import { VideoCard } from 'src/app/models/videoCard.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public video!:VideoCard;
}
