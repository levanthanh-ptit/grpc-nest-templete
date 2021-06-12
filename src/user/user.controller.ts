import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from 'grpc';
import {
  LoginRequest,
  LoginResponse,
  User,
  UserListRequest,
  UserListResponse,
  UserRequest,
  UserResponse,
  VerifyAuthTokenRequest,
  VerifyAuthTokenReponse,
} from './interfaces/user-proto.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @GrpcMethod('Users')
  CreateUser(data: User, metadata: Metadata, call: ServerUnaryCall<any>): User {
    console.log(metadata);
    console.log(call);
    return data;
  }

  @GrpcMethod('Users')
  GetUser(
    data: UserRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>,
  ): UserResponse {
    console.log(metadata);
    console.log(call);
    return {
      data: {
        id: data.id,
        name: '',
        password: '',
        old: 12,
      },
    };
  }

  @GrpcMethod('Users')
  GetUserList(
    data: UserListRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>,
  ): UserListResponse {
    console.log(metadata);
    console.log(call);
    return {
      data: [],
      total: 0,
    };
  }

  @GrpcMethod('Users')
  Login(
    data: LoginRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>,
  ): LoginResponse {
    console.log(metadata);
    console.log(call);
    return {
      profile: {
        id: '',
        name: '',
        password: '',
        old: 12,
      },
      token: '',
    };
  }

  @GrpcMethod('Users')
  VerifyAuthToken(
    data: VerifyAuthTokenRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any>,
  ): VerifyAuthTokenReponse {
    console.log(metadata);
    console.log(call);
    return {
      authenticated: true,
      payload: {
        id: '',
        name: '',
        password: '',
        old: 12,
      },
    };
  }
}
