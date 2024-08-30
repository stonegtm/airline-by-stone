import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Flight } from 'src/database/entities/flight.entity';
import { CreateFlightDto } from 'src/modules/flight/dto/create-flight.dto';
import { UpdateFlightDto } from 'src/modules/flight/dto/update-flight.dto';
import {
  Repository,
  FindManyOptions,
  QueryRunner,
  SelectQueryBuilder,
} from 'typeorm';

@Injectable()
export class FlightRepositoryService {
  constructor(
    @InjectRepository(Flight)
    private readonly flightRepository: Repository<Flight>,
  ) {}

  async create(createFlightDto: Flight): Promise<Flight> {
    const flight = this.flightRepository.create(createFlightDto);
    return await this.flightRepository.save(flight);
  }

  async findAll(options?): Promise<Flight[]> {
    return await this.flightRepository.find(options);
  }

  async findOne(id: any): Promise<Flight> {
    const flight = await this.flightRepository.findOne(id);
    if (!flight) {
      throw new NotFoundException('Flight not found');
    }
    return flight;
  }

  async update(id: string, updateFlightDto: UpdateFlightDto): Promise<Flight> {
    const flight = await this.flightRepository.preload({
      id: id,
      ...updateFlightDto,
    });

    if (!flight) {
      throw new NotFoundException('Flight not found');
    }

    return await this.flightRepository.save(flight);
  }

  async remove(id): Promise<void> {
    const flight = await this.flightRepository.findOne(id);
    if (!flight) {
      throw new NotFoundException('Flight not found');
    }
    await this.flightRepository.remove(flight);
  }
  async createQueryBuilder(alias: string): Promise<SelectQueryBuilder<Flight>> {
    const qb = this.flightRepository.createQueryBuilder(alias);
    // qb.setQueryRunner(queryRunner); // Associate the QueryRunner
    return qb;
  }
}
