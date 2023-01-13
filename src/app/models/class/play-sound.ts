export class PlaySound {
  item: any;
  audio = new Audio();
  volume:number;
  constructor(item: any, volume:number = 0.01) {
    this.item = item;
    this.volume = volume;
    console.warn('item: ', item);
  }

  playBGSound() {
    if (this.item) {
      this.audio.src = this.item;
      this.audio.load();
      this.audio.play();
      this.audio.volume = this.volume;
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
