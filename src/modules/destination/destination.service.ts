import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';
import { CreateDestinnationService } from 'src/usecases/destination/create-destinnation/create-destinnation.service';

@Injectable()
export class DestinationService {
  constructor(
    private readonly createDestinnationService: CreateDestinnationService,
  ) {}
  create(createDestinationDto: CreateDestinationDto) {
    try {
      return this.createDestinnationService.execute(createDestinationDto);
    } catch (error) {
      throw error
    }
  }
  findAll() {
    return `This action returns all destination`;
  }

  findOne(id: number) {
    return `This action returns a #${id} destination`;
  }

  update(id: number, updateDestinationDto: UpdateDestinationDto) {
    return `This action updates a #${id} destination`;
  }

  remove(id: number) {
    return `This action removes a #${id} destination`;
  }
}
