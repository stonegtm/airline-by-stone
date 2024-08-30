import { Injectable, NotFoundException } from '@nestjs/common';
import { FlightSearchDto } from 'src/modules/flight/dto/flight-search.dto';
import { DestinationRepositoryService } from 'src/repositories/destination/destination-repository.service';
import { FlightRepositoryService } from 'src/repositories/flight-repository/flight-repository.service';
import * as moment from 'moment';
import { MoreThan, LessThan, Between } from 'typeorm';

interface Condition {
  origin: { id: string };
  destination: { id: string };
  departure_date: any; // Change from string to Date
}
@Injectable()
export class GetFlightService {
  constructor(
    private readonly destinationRepositoryService: DestinationRepositoryService,
    private readonly flightRepositoryService: FlightRepositoryService,
  ) {}
  async execute(flightSearchDto: FlightSearchDto) {
    const { origin_id, destination_id, departureDate, returnDate } =
      flightSearchDto;
    let backDeparture = [];
    let start_date = moment(departureDate)
      .startOf('days')
      .format('YYYY-MM-DD HH:mm:ss');
    let end_date = moment(departureDate)
      .endOf('days')
      .format('YYYY-MM-DD HH:mm:ss');
    console.log(start_date);
    //Check Today
    if (moment(departureDate).startOf('days') === moment().startOf('days')) {
      //   departure_date = moment().toDate();
    }
    let condDestination: Condition = {
      origin: { id: origin_id },
      destination: { id: destination_id },
      departure_date: Between(start_date, end_date),
    };

    const departure = await this.flightRepositoryService.findAll({
      where: condDestination,
      relations: ['origin', 'destination', 'airline'],
    });
    if (returnDate) {
      let return_start_date = moment(returnDate)
        .startOf('days')
        .format('YYYY-MM-DD HH:mm:ss');
      let return_end_date = moment(returnDate)
        .endOf('days')
        .format('YYYY-MM-DD HH:mm:ss');
      let conditionBack: Condition = {
        origin: { id: destination_id },
        destination: { id: origin_id },
        departure_date: Between(return_start_date, return_end_date),
      };
      backDeparture = await this.flightRepositoryService.findAll({
        where: conditionBack,
        relations: ['origin', 'destination', 'airline'],
      });
    }

    return { departure, backDeparture };
  }
}
