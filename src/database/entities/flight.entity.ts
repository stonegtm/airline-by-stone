import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Destination } from './destination.entity';
import { DefaultEntity } from './default/default.entity';
import { Airline } from './airline.entity';

@Entity({ name: 'flight' }) // This specifies the table name in the database
export class Flight extends DefaultEntity {
  @ManyToOne(() => Destination)
  @JoinColumn({ name: 'origin_id' }) // This column represents the origin (ต้นทาง)
  origin: Destination;

  @ManyToOne(() => Airline, (airline) => airline.flights)
  airline: Airline;

  @ManyToOne(() => Destination)
  @JoinColumn({ name: 'destination_id' }) // This column represents the destination (ปลายทาง)
  destination: Destination;

  @Column({ type: 'varchar', length: 50 })
  flight_number: string;

  @Column({ type: 'timestamp', nullable: true })
  departure_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  arrival_date: Date;

  @Column({ type: 'int', default: 0 })
  available_seats: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
