//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DengueInformation')
export class DengueInformationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  title: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('text', { nullable: true })
  imageUrl: string;

  @Column('text', { nullable: true })
  linkToWHO: string;
}
