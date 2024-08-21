import { Test, TestingModule } from '@nestjs/testing';
import { FlightRepositoryService } from './flight-repository.service';

describe('FlightRepositoryService', () => {
  let service: FlightRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlightRepositoryService],
    }).compile();

    service = module.get<FlightRepositoryService>(FlightRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
