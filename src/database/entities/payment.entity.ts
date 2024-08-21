import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Booking } from './booking.entity';
import { DefaultEntity } from './default/default.entity';

@Entity({ name: 'payment' })
export class Payment extends DefaultEntity {


  @ManyToOne(() => Booking)
  @JoinColumn({ name: 'booking_id' })
  booking: Booking;

  @Column({ type: 'timestamp' })
  payment_date: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'varchar', length: 50 })
  payment_method: string;

  @Column({ type: 'varchar', length: 50 })
  payment_status: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
