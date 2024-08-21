import { IsNotEmpty, IsString, IsDate, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class FlightSearchDto {
  @IsNotEmpty()
  @IsString()
  origin_id: string;  // Assuming UUID

  @IsNotEmpty()
  @IsString()
  destination_id: string;  // Assuming UUID

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  departureDate: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  returnDate: Date;
}
