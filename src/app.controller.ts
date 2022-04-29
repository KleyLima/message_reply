import { Controller, Get, Param } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(":dag_ig")
  getHello(@Param("dag_ig") dag_ig): any {
    const na = this.appService.getHello(dag_ig);
    return na;
  }
}
