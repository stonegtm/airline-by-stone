import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Destination } from './destination.entity';
import { DefaultEntity } from './default/default.entity';

@Entity({ name: 'promotion' })
export class Promotion extends DefaultEntity {


  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'int' })
  discount_percent: number;

  @Column({ type: 'date' })
  start_date: Date;

  @Column({ type: 'date' })
  end_date: Date;

  @ManyToOne(() => Destination)
  @JoinColumn({ name: 'destination_id' })
  destination: Destination;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
