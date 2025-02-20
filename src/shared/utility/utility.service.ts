import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilityService {
  userFunc(): string {
    return 'use shared module';
    }
}