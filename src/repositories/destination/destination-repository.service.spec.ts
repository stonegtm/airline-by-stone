import { Test, TestingModule } from '@nestjs/testing';
import { DestinationRepositoryService } from './destination-repository.service';

describe('DestinationService', () => {
  let service: DestinationRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DestinationRepositoryService],
    }).compile();

    service = module.get<DestinationRepositoryService>(DestinationRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
