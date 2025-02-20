/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly utilityService: UtilityService,
    private readonly globalHelperService:GlobalHelperService
  ){}

    @Get('/global')
    globalFunc(): string {
      return this.globalHelperService.globalFunc();
    }
    @Get('/shared')
  userFunc(): string {
        return this.utilityService.userFunc();
    }
}