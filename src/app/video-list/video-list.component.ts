import { Component, Input, OnInit } from '@angular/core';
import { VideoCard } from '../models/videoCard.model';

// #Content
import { categories, thumbnailUrls, titles, youtubers } from '../models/content.model';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  @Input()
  public selectedCategory: string = "All";
  @Input()
  public searchValue: string = "";
  public videoList:VideoCard[] = [];

  constructor() { }

  ngOnInit(): void {
    this.contentGeneration();
  }

  public contentGeneration() { 
      for (let i = 0; i < 20; i++) {
        const thumbnailUrl = thumbnailUrls[Math.floor(Math.random() * 100000000 % 5)];
        const title = titles[Math.floor(Math.random() * 100000000 % 10)];
        const youtuber = youtubers[Math.floor(Math.random() * 100000000 % 10)];
        const viewNumber = Math.floor(Math.random() * 100000);
        const timePosted = new Date(2022, 5, 21, 11, 48);
        const category = categories[Math.floor(Math.random() * 100000000 % 5)];
        const isLive = Boolean(Math.round(Math.random()));
        this.videoList.push(new VideoCard(thumbnailUrl, title, youtuber, viewNumber, timePosted, isLive, category));
      }  
  }

  public isVideoFromSelectedCategory(video: VideoCard): boolean {
    return ((this.selectedCategory === 'All' || video.category == this.selectedCategory));
  }

  public isVideoFiltered(video: VideoCard): boolean{
    return (this.searchValue === "" || video.title.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase()));
  }
}

// Merci pour l'aide de tatiana pour la nommage des variables. copyright.