import { Filter } from './filter.interface';

export interface User {
  id: string;
  name: string;
  password: string;
  old: number;
}

export interface UserRequest {
  id: string;
}

export interface UserResponse {
  data: User;
}

export interface UserListRequest extends Filter {
  ids: string[];
}

export interface UserListResponse {
  data: User[];
  total: number;
}

export interface VerifyAuthTokenRequest {
  token: string;
}

export interface VerifyAuthTokenReponse {
  authenticated: boolean;
  payload: User;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  profile: User;
  token: string;
}
