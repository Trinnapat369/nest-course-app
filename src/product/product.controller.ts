/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService,
              private readonly utilityService: UtilityService,
              private readonly globalHelperService:GlobalHelperService
  ) {}
    @Get('/global')
    globalFunc(): string {
      return this.globalHelperService.globalFunc();
    }
  // @Get('/shared')
  // sharedFunc(): string  {
  //   return this.utilityService.userFunc();
  // }
  //   @Get()
  // productFunc(): string {
  //   return this.productService.productFunc();
  // }
  // @Get('/productjson')
  // productFunc2() {
  //   return this.productService.productjson();
  // }

// @Controller('user')
// export class UserController {
//   constructor(private readonly userService: UserService,
//     private readonly utilityService: UtilityService) {}

// @Get('/shared')
//   sharedFunc(): string  {
//     return this.utilityService.shareFunc();
//   }
}