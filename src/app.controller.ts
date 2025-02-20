import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get('/showname')//lo
  // showName(): string {
  //   return this.appService.getName();
  // }
  
  // @Get('/showInformation')//lo
  // showInfo(): string {
  //   return this.appService.getInfo();
  // }
  // @Get('/showjson')
  // getJSON(){
  //   return this.appService.getJson();
  // }

//   @Get('/showGitHub')
//   getGit(): string {
//     return this.appService.getGit();
//   }

//   @Get('/usepostmen')
//   usepostman(): string {
//     return this.appService.usepostman();
//   }
}