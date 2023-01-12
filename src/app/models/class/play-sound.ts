export class PlaySound {
  item: any;
  audio = new Audio();
  constructor(item: any) {
    this.item = item;
    console.warn('item: ', item);
  }

  playBGSound() {
    if (this.item) {
      this.audio.src = this.item;
      this.audio.load();
      this.audio.play();
      this.audio.volume = 0.1;
      this.audio.loop = true;
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
    this.audio.pause();
  }
}
