import { Test, TestingModule } from '@nestjs/testing';
import { InkomApiGatewayController } from './inkom-api-gateway.controller';
import { InkomApiGatewayService } from './inkom-api-gateway.service';

describe('InkomApiGatewayController', () => {
  let inkomApiGatewayController: InkomApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [InkomApiGatewayController],
      providers: [InkomApiGatewayService],
    }).compile();

    inkomApiGatewayController = app.get<InkomApiGatewayController>(InkomApiGatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(inkomApiGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
