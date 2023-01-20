import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-value-stage-one-instructional-video',
  templateUrl: './place-value-stage-one-instructional-video.component.html',
  styleUrls: ['./place-value-stage-one-instructional-video.component.scss'],
})
export class PlaceValueStageOneInstructionalVideoComponent implements OnInit {
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
