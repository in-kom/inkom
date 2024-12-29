import { Module } from '@nestjs/common';
import { InkomApiGatewayController } from './inkom-api-gateway.controller';
import { InkomApiGatewayService } from './inkom-api-gateway.service';

@Module({
  imports: [],
  controllers: [InkomApiGatewayController],
  providers: [InkomApiGatewayService],
})
export class InkomApiGatewayModule {}
