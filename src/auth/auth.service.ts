import { Injectable } from '@nestjs/common';
import { LoginResponsDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  async login(Dto: typeof LoginDto): Promise<LoginResponsDto> {
    return {
      token:"teste",
      user: undefined
    };
  }
}
