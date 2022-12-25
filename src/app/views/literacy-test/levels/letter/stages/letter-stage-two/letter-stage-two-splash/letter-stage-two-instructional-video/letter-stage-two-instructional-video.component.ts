import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-stage-two-instructional-video',
  templateUrl: './letter-stage-two-instructional-video.component.html',
  styleUrls: ['./letter-stage-two-instructional-video.component.scss'],
})
export class LetterStageTwoInstructionalVideoComponent implements OnInit {
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
