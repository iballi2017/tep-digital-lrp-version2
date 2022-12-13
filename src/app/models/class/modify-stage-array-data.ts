export class ModifyStageArrayData {
    gameLevelResultAndRating: any;
    testStageStars: any[] = [];
    totalStarNumber: number = 5;
    constructor(gameLevelResultAndRating: any) {
        this.gameLevelResultAndRating = gameLevelResultAndRating
    }

    modifyStageArray() {
        if (this.gameLevelResultAndRating) {
            console.log("this.gameLevelResultAndRating: ", this.gameLevelResultAndRating)
            this.gameLevelResultAndRating.forEach((stage: any) => {
                let starArray: any[] = [];
                let rating = Math.round(stage.rating)
                for (let i = 0; i < rating; i++) {
                    starArray.push({ isDone: true });
                }
                for (let i = 0; i < this.totalStarNumber - rating; i++) {
                    starArray.push({ isDone: false });
                }
                let x: any = { ...stage, rating: rating, starArray: starArray };
                this.testStageStars.push(x);
            });
        }
        console.log("return this.testStageStars: ", this.testStageStars)
        return this.testStageStars;
    }
}
