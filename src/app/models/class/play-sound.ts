export class PlaySound {
  item: any;
  constructor(item: any) {
    this.item = item;
  }

  playBGSound() {
    if (this.item) {
      let audio = new Audio();
      audio.src = this.item;
      audio.muted = true;
      audio.load();
      audio.play();
      audio.volume = 0.02;
      audio.loop = true;
    }
  }

  playAlphabetVoice() {
    if (this.item.vn) {
      let audio = new Audio();
      audio.src = this.item.vn;
      audio.load();
      audio.play();
    }
  }
}
