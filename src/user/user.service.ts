import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/constants';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<User>,
  ) {}
}
