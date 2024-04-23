import { IsEnum, IsNotEmpty } from 'class-validator';
import { EUserRole } from '../user.enum';

export class SignUpDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsEnum(EUserRole)
  role: string;
}
