import { EUserRole } from 'src/modules/users/user.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  role: EUserRole;
}
