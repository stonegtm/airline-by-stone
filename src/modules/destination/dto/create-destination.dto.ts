import { IsNotEmpty, IsOptional, IsString, IsAlphanumeric, IsDateString } from 'class-validator';

export class CreateDestinationDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly name_en: string;

  @IsOptional()
  @IsString()
  readonly country?: string;

  @IsOptional()
  @IsString()
  @IsAlphanumeric()
  readonly airport_code?: string;

  @IsOptional()
  @IsDateString()
  readonly created_at?: string;
}
