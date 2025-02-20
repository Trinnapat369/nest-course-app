import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
     userFunc(): string {
         return 'Hello from product service';
     }

    // userjson()  {
    //     return {
    //         name:'Trin',
    //         age:19,
    //         hobby:'watch anime',
    //     };
    // }
}
