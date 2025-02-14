import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'We love NestJS';
  }
  // getName(): string {
  //   return 'Trinnapat';
  // }

  // getInfo(): string {
  //   return'Hello,I am Trinnapat Naksan,19 years old';
  // }

  // getJson(){
  //   return {
  //     name: 'Trinnapat',
  //     lastName: 'Naksan',
  //     age:19,
  //   };
  // }

  getGit(): string {
    return 'git and github using';
  }



}