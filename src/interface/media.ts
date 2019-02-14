export interface User {
  user_id?: number;
  username: string;
  password?: string;
  email?: string;
  full_name?: string;
  time_created?: Date;
  auto_model?: string;
  plate_number?: string;
}

export interface Login {    // LoginResponse
  user_id?: number;
  username: string;
  password?: string;
  token: string;
  user: User;
}
export interface UserCreated {  // RegisterResponse
  message: string;
  user_id: number;
}

export interface UserExists {   // CheckIfUserExists
  result?: object;
  username: string;
  available: boolean;
}
