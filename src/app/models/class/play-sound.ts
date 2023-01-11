export class PlaySound {
  item: any;
  audio = new Audio();
  constructor(item: any) {
    this.item = item;
    console.warn('item: ', item);
  }

  playBGSound() {
    if (this.item) {
      let audio = new Audio();
      audio.src = this.item;
      // audio.muted = true;
      console.group('PLAY this.audio: ', this.audio);
      audio.load();
      audio.play();
      audio.volume = 0.1;
      audio.loop = true;

      // setTimeout(() => {
      //   audio.pause();
      // }, 5000);
    }
  }

  playAlphabetVoice() {
    console.warn('this.item: ', this.item);
    if (this.item.vn) {
      this.audio.src = this.item.vn;
      this.audio.load();
      this.audio.play();
    }
  }

  stopSound() {
    console.warn('STOP this.item: ', this.item);
    // this.audio.src = this.item;
    console.warn('STOP this.item: ', this.item);
    console.group('STOP this.audio: ', this.audio);
    // this.audio.load();
    // audio.pause();
    this.audio.pause();
  }
}
