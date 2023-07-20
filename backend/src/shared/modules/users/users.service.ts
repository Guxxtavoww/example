import { Injectable } from '@nestjs/common';

import { DatabaseService } from 'src/shared/modules/database/database.service';

import { UserResponse, usersResponseSchema } from './dto/users-common.dto';

@Injectable()
export class UsersService {
  constructor(private databaseService: DatabaseService) {}

  async listAllUsers(): Promise<UserResponse[]> {
    const usersResponse = await this.databaseService.users_table.findMany({
      select: {
        created_at: true,
        email: true,
        password: false,
        profile_pic_url: true,
        updated_at: true,
        user_id: true,
        user_name: true,
      },
    });

    const parsedUsers = usersResponseSchema.parse(usersResponse);

    return parsedUsers;
  }

  // async register({
  //   email,
  //   password,
  //   profile_pic_url,
  //   user_id,
  //   user_name,
  // }: UserType) {
  //   try {
  //     const createdUser = await this.databaseService.users_table.create({
  //       data: {
  //         email,
  //         password,
  //         profile_pic_url,
  //         user_id,
  //         user_name,
  //       },
  //     });

  //     const parsedUser = userSchema.parse(createdUser);

  //     return parsedUser;
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }
}
