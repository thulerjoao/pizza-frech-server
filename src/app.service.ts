import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return `Server is Running. \n Please, check http://localhost:3333/api for swagger docs...`;
  }
}
