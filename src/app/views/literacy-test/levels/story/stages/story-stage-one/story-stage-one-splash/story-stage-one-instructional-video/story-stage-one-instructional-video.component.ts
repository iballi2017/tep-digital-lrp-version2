import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-stage-one-instructional-video',
  templateUrl: './story-stage-one-instructional-video.component.html',
  styleUrls: ['./story-stage-one-instructional-video.component.scss']
})
export class StoryStageOneInstructionalVideoComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    const video = document.querySelector('video');
    video?.addEventListener('ended', this.isEnded, false);
    video?.addEventListener('playing', this.isPlaying, false);
  }
  isEnded() {
    const btn = document.querySelector('.btn-wrapper');
    btn?.classList.remove('d-none');
  }
  isPlaying() {
    const btn = document.querySelector('.btn-wrapper');
    btn?.classList.add('d-none');
  }

}
