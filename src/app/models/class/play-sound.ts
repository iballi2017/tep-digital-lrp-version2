export class PlaySound {
  item: any;
  audio = new Audio();
  volume:number;
  loop!: boolean;
  // constructor(item: any, volume:number = 0.01) {
    constructor(item: any, volume:number = 0.08, loop:boolean = true) {
    this.item = item;
    this.volume = volume;
    this.loop = loop
    // console.warn('item: ', item);
  }

  playBGSound() {
    if (this.item) {
      this.audio.src = this.item;
      this.audio.load();
      this.audio.play();
      this.audio.volume = this.volume;
      this.audio.loop = this.loop;
    }
  }

  playAlphabetVoice() {
    // console.warn('this.item: ', this.item);
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
