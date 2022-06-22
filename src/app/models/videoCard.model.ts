export class VideoCard {
    constructor(
        public thumbnailUrl: string,
        public title: string,
        public youtuber: string,
        public viewNumber: number,
        public timePosted: Date,
        public isLive: boolean,
        public category: string
    ) {}

    getTimeSincePosted (): number {
        const now: Date = new Date();
        let result : number;
        
        result = now.getTime() - this.timePosted.getTime();
        result = Math.floor(result / 60000);
        return(result);
    }

    getViewNumber(): number {
        let result: number;

        result = this.viewNumber / 1000;
        result = Math.floor(result);
        return (result);
    }
}