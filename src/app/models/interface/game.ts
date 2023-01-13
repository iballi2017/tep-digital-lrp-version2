export interface Game { }

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

export interface ActivityAnswer {
  session_id: string;
  answer: string;
  data: any;
}
export interface ExerciseAnswer {
  session_id: string;
  answer: string;
  data: any[];
}
