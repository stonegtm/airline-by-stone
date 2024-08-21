import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DestinationModule } from './modules/destination/destination.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModules } from './database/database.module';
import { CreateDestinnationService } from './usecases/destination/create-destinnation/create-destinnation.service';
import { UsecasesModule } from './usecases/usecases.module';
import { RepositoryModule } from './repositories/repository.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { HttpExceptionFilter } from './interceptor/http-exception.filter';
import { DatabaseExceptionFilter } from './interceptor/database-exception.filter';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { FlightModule } from './modules/flight/flight.module';

@Module({
  imports: [
    RepositoryModule,
    UsecasesModule,
    DatabaseModules,
    DestinationModule,
    ConfigModule.forRoot({
      isGlobal: true, // This makes the ConfigModule available globally
      envFilePath: `.env.${process.env.NODE_ENV || 'dev'}`, // You can specify the path to the .env file if it's not in the root directory
    }),
    FlightModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: DatabaseExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
