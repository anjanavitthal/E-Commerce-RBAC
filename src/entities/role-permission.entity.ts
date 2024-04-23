import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_role_permissions')
export class RolePermission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  role: string;

  @Column({ default: false })
  allowCreate: boolean;

  @Column({ default: false })
  allowUpdate: boolean;

  @Column({ default: false })
  allowDelete: boolean;

  @Column({ default: true })
  allowFetch: boolean;
}
