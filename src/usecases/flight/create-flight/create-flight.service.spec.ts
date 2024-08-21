import { Test, TestingModule } from '@nestjs/testing';
import { CreateFlightService } from './create-flight.service';

describe('CreateFlightService', () => {
  let service: CreateFlightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateFlightService],
    }).compile();

    service = module.get<CreateFlightService>(CreateFlightService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
