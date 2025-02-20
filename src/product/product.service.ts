import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    productFunc(): string {
        return 'Hello from product service';
    }

    productjson()  {
        return {
            name:'Trin',
            age:19,
            hobby:'watch anime',
        };
    }
}
