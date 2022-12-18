export interface GameReport {
  //   session_id: string;
  //   gms_type: string;
  //   occ_name: string;
  //   occ_age: string;
  //   occ_gender: string;
  //   total_percent: string;
  //   status: string;

  sessionId: string;
  fullname: string;
  age: string;
  gender: string;
  program: string;
  status: string;
  overallScore: string;
  scorePercent: string;
  key?: string;
}

export interface SessionId {
  session_id: string;
}
