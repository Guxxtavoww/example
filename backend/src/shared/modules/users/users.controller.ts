import { Controller, Get, Param, BadRequestException } from '@nestjs/common';

import { requestDataValidation } from 'src/shared/utils';

import { UsersService } from './users.service';
import { userIdSchema } from './dto/users-common.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async listAllUsers() {
    return await this.usersService.listAllUsers();
  }

  @Get(':user_id')
  async getUser(@Param('user_id') user_id: string) {
    const id = requestDataValidation(user_id, userIdSchema);

    if (id === null) {
      throw new BadRequestException('ID NOT VALID');
    }

    return await this.usersService.getOneUser(id);
  }
}
