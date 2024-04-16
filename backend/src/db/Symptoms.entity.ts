//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Symptoms')
export class SymptomsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  symptomName: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('text', { nullable: true })
  imageUrl: string;
}