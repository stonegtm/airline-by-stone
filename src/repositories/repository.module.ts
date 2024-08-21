import { Module } from '@nestjs/common';
import { DestinationRepositoryService } from './destination/destination-repository.service';
import { Destination } from 'src/database/entities/destination.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightRepositoryService } from './flight-repository/flight-repository.service';
import { Flight } from 'src/database/entities/flight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Destination,Flight])],
  providers: [DestinationRepositoryService, FlightRepositoryService],
  exports: [DestinationRepositoryService, FlightRepositoryService],
})
export class RepositoryModule {}
