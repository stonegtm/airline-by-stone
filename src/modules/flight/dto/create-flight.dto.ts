import { IsString, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateFlightDto {
  @IsString()
  flight_number: string;

  @IsDate()
  departure_date: Date;

  @IsDate()
  arrival_date: Date;

  @IsNumber()
  available_seats: number;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  destination_id: string; // Assuming you use UUIDs for Destination IDs

  @IsOptional()
  @IsString()
  origin_id: string; // Assuming you use UUIDs for Destination IDs
}
