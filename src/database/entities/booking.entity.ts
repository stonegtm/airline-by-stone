import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Flight } from './flight.entity';
import { Promotion } from './promotion.entity';
import { Customer } from './customer.entity';
import { DefaultEntity } from './default/default.entity';

@Entity({ name: 'booking' })
export class Booking extends DefaultEntity {
  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @ManyToOne(() => Flight)
  @JoinColumn({ name: 'flight_id' })
  flight: Flight;

  @ManyToOne(() => Promotion)
  @JoinColumn({ name: 'promotion_id' })
  promotion: Promotion;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total_price: number;

  @Column({ type: 'varchar', length: 50, default: 'Pending' })
  booking_status: string;

  @Column({ type: 'varchar', length: 50, default: 'Unpaid' })
  payment_status: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
