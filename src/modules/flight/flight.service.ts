import { Injectable } from '@nestjs/common';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { CreateFlightService } from 'src/usecases/flight/create-flight/create-flight.service';
import { GetFlightService } from 'src/usecases/flight/get-flight/get-flight.service';
import { FlightSearchDto } from './dto/flight-search.dto';

@Injectable()
export class FlightService {
  constructor(
    private readonly createFlightService: CreateFlightService,
    private readonly getFlightService: GetFlightService,
  ) {}
  create(createFlightDto: CreateFlightDto) {
    try {
      return this.createFlightService.execute(createFlightDto)
    } catch (error) {
      throw error
    }
  }
  flightSearch(flightSearchDto: FlightSearchDto){
    try {
      return this.getFlightService.execute(flightSearchDto)
    } catch (error) {
      throw error
    }
  }
}
