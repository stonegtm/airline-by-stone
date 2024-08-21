import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { DefaultEntity } from './default/default.entity';

@Entity({ name: 'customer' })
export class Customer extends DefaultEntity {

  @Column({ type: 'varchar', length: 100 })
  first_name: string;

  @Column({ type: 'varchar', length: 100 })
  last_name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone_number: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  passport_number: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;
}
