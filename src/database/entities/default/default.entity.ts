import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  export class DefaultEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  }
  