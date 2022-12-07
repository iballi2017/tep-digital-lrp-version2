export interface Game {}

export interface StartGame {
  occ_id: string;
  game_type: string;
}

// export enum GameType {
//   Literacy = 'Literacy',
// }

export enum GameSessionData {
  name = 'sessionData',
  result = 'stage-result',
}

export interface GameStageResult {
  session_id: string;
  result: any;
}

export interface LetteringStageOneResult {
  session_id: string;
  answer: string;
  data: [];
}
