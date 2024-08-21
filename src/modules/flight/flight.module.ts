import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { UsecasesModule } from 'src/usecases/usecases.module';

@Module({
  imports:[UsecasesModule],
  controllers: [FlightController],
  providers: [FlightService],
})
export class FlightModule {}
