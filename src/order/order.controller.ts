/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('order')
export class OrderController { 
    constructor(
      private readonly orderService: UtilityService,
      private readonly globalHelperService:GlobalHelperService
    ){}

    @Get('/global')
    globalFunc(): string{
       return this.globalHelperService.globalFunc();
 
    } 

     @Get('/shared')
     sharedOrder() : string{
        return this.orderService.userFunc();
     }
     
}
