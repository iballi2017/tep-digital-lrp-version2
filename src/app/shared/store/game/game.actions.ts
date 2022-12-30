import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Game } from './game.model';

export const addGameSession = createAction('[Game ] Add Game Session');
export const addGameSessionSuccess = createAction(
  '[Game ] Add Game Session Success',
  props<{ sessionData: any }>()
);
export const addGameSessionFailure = createAction(
  '[Game ] Add Game Session Failure',
  props<{ error: any }>()
);

// export const loadGames = createAction(
//   '[Game/API] Load Games',
//   props<{ games: Game[] }>()
// );

// export const addGame = createAction(
//   '[Game/API] Add Game',
//   props<{ game: Game }>()
// );

// export const upsertGame = createAction(
//   '[Game/API] Upsert Game',
//   props<{ game: Game }>()
// );

// export const addGames = createAction(
//   '[Game/API] Add Games',
//   props<{ games: Game[] }>()
// );

// export const upsertGames = createAction(
//   '[Game/API] Upsert Games',
//   props<{ games: Game[] }>()
// );

// export const updateGame = createAction(
//   '[Game/API] Update Game',
//   props<{ game: Update<Game> }>()
// );

// export const updateGames = createAction(
//   '[Game/API] Update Games',
//   props<{ games: Update<Game>[] }>()
// );

// export const deleteGame = createAction(
//   '[Game/API] Delete Game',
//   props<{ id: string }>()
// );

// export const deleteGames = createAction(
//   '[Game/API] Delete Games',
//   props<{ ids: string[] }>()
// );

// export const clearGames = createAction(
//   '[Game/API] Clear Games'
// );
