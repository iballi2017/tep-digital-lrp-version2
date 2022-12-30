import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Game } from './game.model';
import * as GameActions from './game.actions';
import { GameSessionData } from 'src/app/models/interface/game';

export const gamesFeatureKey = 'games';

export interface State extends EntityState<Game> {
  // additional entities state properties
  gameSession: any;
  error: any;
  isLoading: boolean;
}

export const adapter: EntityAdapter<Game> = createEntityAdapter<Game>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  gameSession: null,
  error: null,
  isLoading: false,
});

export const reducer = createReducer(
  initialState,

  on(GameActions.addGameSession, (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(GameActions.addGameSessionSuccess, (state, action) => {
    var newGameSession = {
      id: new Date().getTime().toString(),
      ...action.sessionData,
    };
    let sessionData = JSON.stringify(newGameSession);
    localStorage.setItem(GameSessionData.name, sessionData);
    const gameResult = {};
    let result = JSON.stringify(gameResult);
    localStorage.setItem(GameSessionData.result, result);
    return {
      ...state,
      gameSession: action.sessionData,
      isLoading: false,
    };
  }),
  on(GameActions.addGameSessionFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      isLoading: false,
    };
  })

  // on(GameActions.addGame,
  //   (state, action) => adapter.addOne(action.game, state)
  // ),
  // on(GameActions.upsertGame,
  //   (state, action) => adapter.upsertOne(action.game, state)
  // ),
  // on(GameActions.addGames,
  //   (state, action) => adapter.addMany(action.games, state)
  // ),
  // on(GameActions.upsertGames,
  //   (state, action) => adapter.upsertMany(action.games, state)
  // ),
  // on(GameActions.updateGame,
  //   (state, action) => adapter.updateOne(action.game, state)
  // ),
  // on(GameActions.updateGames,
  //   (state, action) => adapter.updateMany(action.games, state)
  // ),
  // on(GameActions.deleteGame,
  //   (state, action) => adapter.removeOne(action.id, state)
  // ),
  // on(GameActions.deleteGames,
  //   (state, action) => adapter.removeMany(action.ids, state)
  // ),
  // on(GameActions.loadGames,
  //   (state, action) => adapter.setAll(action.games, state)
  // ),
  // on(GameActions.clearGames,
  //   state => adapter.removeAll(state)
  // ),
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
