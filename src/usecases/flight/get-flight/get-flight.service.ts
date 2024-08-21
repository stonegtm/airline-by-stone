import { Injectable, NotFoundException } from '@nestjs/common';
import { FlightSearchDto } from 'src/modules/flight/dto/flight-search.dto';
import { DestinationRepositoryService } from 'src/repositories/destination/destination-repository.service';
import { FlightRepositoryService } from 'src/repositories/flight-repository/flight-repository.service';

@Injectable()
export class GetFlightService {
  constructor(
    private readonly destinationRepositoryService: DestinationRepositoryService,
    private readonly flightRepositoryService: FlightRepositoryService,
  ) {}
  async execute(flightSearchDto: FlightSearchDto) {
    const { origin_id, destination_id, departureDate, returnDate } =
      flightSearchDto;
    let condition = {
      origin: { id: origin_id },
      destination: { id: destination_id },
      departure_date: departureDate,
    };
    if (returnDate) {
    }
    return await this.flightRepositoryService.findAll({
      where: condition,
      relations: ['origin', 'destination'],
    });
  }
}
