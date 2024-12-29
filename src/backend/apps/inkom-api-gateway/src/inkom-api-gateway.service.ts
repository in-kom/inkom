import { Injectable } from '@nestjs/common';

@Injectable()
export class InkomApiGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
