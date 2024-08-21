import { Injectable } from '@nestjs/common';
import { Destination } from 'src/database/entities/destination.entity';
import { CreateDestinationDto } from 'src/modules/destination/dto/create-destination.dto';
import { DestinationRepositoryService } from 'src/repositories/destination/destination-repository.service';

@Injectable()
export class CreateDestinnationService {
  constructor(
    private readonly destinationRepositoryService: DestinationRepositoryService,
  ) {}
  async execute(createDestinationDto: CreateDestinationDto) {
    const destination = new Destination();
    destination.name = createDestinationDto.name;
    destination.name_en = createDestinationDto.name_en;
    destination.airport_code = createDestinationDto.airport_code;
    destination.country = createDestinationDto.country;
    return await this.destinationRepositoryService.create(destination);
  }
}
