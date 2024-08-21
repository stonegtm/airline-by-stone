import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Flight } from 'src/database/entities/flight.entity';
import { CreateFlightDto } from 'src/modules/flight/dto/create-flight.dto';
import { DestinationRepositoryService } from 'src/repositories/destination/destination-repository.service';
import { FlightRepositoryService } from 'src/repositories/flight-repository/flight-repository.service';

@Injectable()
export class CreateFlightService {
  constructor(
    private readonly flightRepositoryService: FlightRepositoryService,
    private readonly destinationRepositoryService: DestinationRepositoryService,
  ) {}
  async execute(createFlightDto: CreateFlightDto) {
    if (!createFlightDto.destination_id || !createFlightDto.origin_id) {
      throw new BadRequestException();
    }
    const [origin, destination] = await Promise.all([
      this.destinationRepositoryService.findOne(createFlightDto.origin_id),
      this.destinationRepositoryService.findOne(createFlightDto.destination_id),
    ]);
    if (!origin || !destination) {
      throw new NotFoundException('Origin or destination not found');
    }
    const flight = new Flight();
    flight.flight_number = createFlightDto.flight_number;
    flight.departure_date = createFlightDto.departure_date;
    flight.arrival_date = createFlightDto.arrival_date;
    flight.available_seats = createFlightDto.available_seats;
    flight.price = createFlightDto.price;
    flight.destination = origin;
    flight.origin = destination;
    return await this.flightRepositoryService.create(flight);
  }
}
