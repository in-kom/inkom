import { NestFactory } from '@nestjs/core';
import { InkomApiGatewayModule } from './inkom-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(InkomApiGatewayModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
