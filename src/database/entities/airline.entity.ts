import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Flight } from './flight.entity';
import { DefaultEntity } from './default/default.entity';

@Entity({ name: 'airlines' })
export class Airline extends DefaultEntity {

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 10, unique: true, nullable: false })
  code: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Flight, (flight) => flight.airline)
  flights: Flight[];
}
