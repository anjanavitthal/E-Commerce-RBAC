import { SetMetadata } from '@nestjs/common';
import { EUserRole } from 'src/modules/users/user.enum';
import { ROLE_GUARD_KEY } from './constants';

export const Roles = (...roles: EUserRole[]) => SetMetadata(ROLE_GUARD_KEY, roles);
