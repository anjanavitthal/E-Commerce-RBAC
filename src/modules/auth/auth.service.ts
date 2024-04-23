import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<User> {
    let user = await this.userService.findUserByUsername(username);
    if (user && user.password === password) {
      delete user.password;
      return user;
    }
    return null;
  }

  async loginUser(userData: Partial<User>): Promise<{ access_token: string }> {
    let access_token = this.jwtService.sign({
      username: userData.username,
      sub: userData.id,
      role: userData.role,
    });
    return { access_token };
  }
}
