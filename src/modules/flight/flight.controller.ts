import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FlightService } from './flight.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { FlightSearchDto } from './dto/flight-search.dto';

@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Post()
  create(@Body() createFlightDto: CreateFlightDto) {
    return this.flightService.create(createFlightDto);
  }

  @Post("search")
  searchFlight(@Body() flightSearchDto: FlightSearchDto) {
    return this.flightService.flightSearch(flightSearchDto);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.flightService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFlightDto: UpdateFlightDto) {
  //   return this.flightService.update(+id, updateFlightDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.flightService.remove(+id);
  // }
}
