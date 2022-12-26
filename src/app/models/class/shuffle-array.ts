export class ShuffleArray {
  array: any;
  constructor(array: any) {
    this.array = array;
  }

  shuffle() {
    let currentIndex = this.array?.length,
      randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [this.array[currentIndex], this.array[randomIndex]] = [
        this.array[randomIndex],
        this.array[currentIndex],
      ];
    }
    return this.array;
  }
}
