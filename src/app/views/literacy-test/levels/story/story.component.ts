import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { ModifyStageArrayData } from 'src/app/models/class/modify-stage-array-data';
import { Snackbar } from 'src/app/models/class/snackbar';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  testStageStars: any[] = [];
  letteringStages = [
    {
      id: 1,
      title: 'stage-1',
      rating: 3,
    },
    {
      id: 2,
      title: 'stage-2',
      rating: 2,
    },
    {
      id: 3,
      title: 'stage-3',
      rating: 5,
    },
  ];
  Subscriptions: Subscription[] = [];
  gameLevelResultAndRating: any;
  gameSessionId: any;
  isLoadingStarCards:boolean = false;
  constructor(
    private _gameLevelResultAndRatingSvc: GameLevelResultAndRatingService,
    private _gameSvc: GameService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.modifyStageArray();
    this.onGetGameSessionId();
  }

  onGetLevelGameResult(GameSessionId: string) {
    this.isLoadingStarCards = true;
    let subscription = this._gameLevelResultAndRatingSvc
      .LoadStoryGameResultAndRating(GameSessionId)
      .subscribe({
        next: (response: any) => {
          if (response) {
            // console.log('LoadParagraph response>>>: ', response);
            this.gameLevelResultAndRating = response;
            this.modifyStageArray();
            this.isLoadingStarCards = false;
          }
        },
        error: (err: any) => {
          if (err) {
            console.warn('Error**: ', err);
            this.isLoadingStarCards = false;
            new Snackbar("Failed to load stages, please refresh", this._snackBar).errorSnackbar();
          }
        },
      });
    this.Subscriptions.push(subscription);
  }

  onGetGameSessionId() {
    let data: any = this._gameSvc.LoadGameSession();
    console.group('data: ', data);
    this.gameSessionId = data?.session_id;
    this.onGetLevelGameResult(this.gameSessionId);
  }

  modifyStageArray() {
    if(this.gameLevelResultAndRating){
      let x = new ModifyStageArrayData(this.gameLevelResultAndRating);
      this.testStageStars = x.modifyStageArray();
    }
  }

  ngOnDestroy(): void {
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
