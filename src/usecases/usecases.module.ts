import { Module } from '@nestjs/common';
import { CreateDestinnationService } from './destination/create-destinnation/create-destinnation.service';
import { RepositoryModule } from 'src/repositories/repository.module';
import { CreateFlightService } from './flight/create-flight/create-flight.service';
import { GetFlightService } from './flight/get-flight/get-flight.service';

@Module({
  imports: [RepositoryModule],
  providers: [CreateDestinnationService, CreateFlightService, GetFlightService],
  exports: [CreateDestinnationService, CreateFlightService,GetFlightService],
})
export class UsecasesModule {}
