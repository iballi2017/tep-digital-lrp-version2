export interface User {}

export interface UserLogin {
  usr_email: string;
  usr_password: string;
}

export interface UserRegister {
  usr_fullname: string;
  usr_email: string;
  usr_party: string;
  usr_gender: string;
  usr_password: string;
}

export interface UserTokenModel {
  AccessToken: string;
  Email: string;
  Id: string;
  RefreshToken: string;
  Role: [];
  UserName: string;
}

export interface UpdateUserModel {
  usr_fullname: string;
  usr_gender: string;
}

export interface UpdatePassword {
  current_password: string;
  new_password: string;
  confirm_password: string;
}
