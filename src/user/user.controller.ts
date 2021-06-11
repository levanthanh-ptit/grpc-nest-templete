import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from 'grpc';
import { User } from './user.entity';
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
}
