import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Booking } from './booking.entity';
import { DefaultEntity } from './default/default.entity';

@Entity({ name: 'cancellation' })
export class Cancellation extends DefaultEntity {
  @ManyToOne(() => Booking)
  @JoinColumn({ name: 'booking_id' })
  booking: Booking;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  cancellation_date: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  reason: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
