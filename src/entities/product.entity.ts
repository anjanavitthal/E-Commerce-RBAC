import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column({ nullable: true })
  description: string;
}
