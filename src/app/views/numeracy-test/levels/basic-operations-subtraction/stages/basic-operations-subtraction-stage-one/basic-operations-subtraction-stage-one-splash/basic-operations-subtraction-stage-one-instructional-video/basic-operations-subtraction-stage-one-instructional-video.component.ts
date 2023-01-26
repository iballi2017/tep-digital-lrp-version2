import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations-subtraction-stage-one-instructional-video',
  templateUrl: './basic-operations-subtraction-stage-one-instructional-video.component.html',
  styleUrls: ['./basic-operations-subtraction-stage-one-instructional-video.component.scss']
})
export class BasicOperationsSubtractionStageOneInstructionalVideoComponent implements OnInit {

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
