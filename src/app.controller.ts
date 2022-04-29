import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    const na = this.appService.getHello();
    console.log(typeof na);
    console.log(JSON.stringify(na, null, 4));
    return na;
  }
}
