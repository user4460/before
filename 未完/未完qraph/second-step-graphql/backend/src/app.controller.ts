import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//@Controllerとは、ルーティングの設定を行うデコレータ
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
