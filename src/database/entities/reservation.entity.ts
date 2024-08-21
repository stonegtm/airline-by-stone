import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Flight } from './flight.entity';
import { Customer } from './customer.entity';
import { DefaultEntity } from './default/default.entity';

@Entity({ name: 'reservation' })
export class Reservation extends DefaultEntity {

  @ManyToOne(() => Flight)
  @JoinColumn({ name: 'flight_id' })
  flight: Flight;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @Column({ type: 'timestamp' })
  reserved_until: Date;

  @Column({ type: 'varchar', length: 50, default: 'Reserved' })
  status: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
