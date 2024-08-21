import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Destination } from 'src/database/entities/destination.entity';
import { Repository, QueryRunner, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class DestinationRepositoryService {
  constructor(
    @InjectRepository(Destination)
    private destinationRepository: Repository<Destination>,
  ) {}

  // Create a new destination
  async create(
    createDestinationDto: Partial<Destination>,
  ): Promise<Destination> {
    const destination = this.destinationRepository.create(createDestinationDto);
    return await this.destinationRepository.save(destination);
  }

  // Get all destinations
  async findAll(): Promise<Destination[]> {
    return await this.destinationRepository.find();
  }

  // Get a destination by ID
  async findOne(id: string): Promise<Destination> {
    return await this.destinationRepository.findOne({ where: { id } });
  }

  // Update a destination by ID
  async update(
    id: string,
    updateDestinationDto: Partial<Destination>,
  ): Promise<Destination> {
    await this.destinationRepository.update(id, updateDestinationDto);
    return this.findOne(id); // Return the updated destination
  }

  // Delete a destination by ID
  async remove(id: number): Promise<void> {
    await this.destinationRepository.delete(id);
  }
  async createQueryBuilderWithTransaction(
    alias: string,
    queryRunner: QueryRunner,
  ): Promise<SelectQueryBuilder<Destination>> {
    const qb = this.destinationRepository.createQueryBuilder(alias);
    qb.setQueryRunner(queryRunner); // Associate the QueryRunner
    return qb;
  }
}
