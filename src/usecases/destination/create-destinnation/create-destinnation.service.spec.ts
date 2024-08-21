import { Test, TestingModule } from '@nestjs/testing';
import { CreateDestinnationService } from './create-destinnation.service';

describe('CreateDestinnationService', () => {
  let service: CreateDestinnationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateDestinnationService],
    }).compile();

    service = module.get<CreateDestinnationService>(CreateDestinnationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
