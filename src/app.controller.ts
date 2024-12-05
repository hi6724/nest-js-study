import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome(): string {
    return 'Hello World!';
  }

  @Get('post')
  getPost(): string {
    return 'This is a post Page';
  }

  @Get('user')
  getUser(): string {
    return 'This is a user Page';
  }
}
