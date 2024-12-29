import { Controller, Get } from '@nestjs/common';
import { InkomApiGatewayService } from './inkom-api-gateway.service';

@Controller()
export class InkomApiGatewayController {
  constructor(private readonly inkomApiGatewayService: InkomApiGatewayService) {}

  @Get()
  getHello(): string {
    return this.inkomApiGatewayService.getHello();
  }
}
