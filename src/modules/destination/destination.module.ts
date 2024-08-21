import { Module } from '@nestjs/common';
import { DestinationService } from './destination.service';
import { DestinationController } from './destination.controller';
import { UsecasesModule } from 'src/usecases/usecases.module';

@Module({
  imports:[UsecasesModule],
  controllers: [DestinationController],
  providers: [DestinationService],
})
export class DestinationModule {}
