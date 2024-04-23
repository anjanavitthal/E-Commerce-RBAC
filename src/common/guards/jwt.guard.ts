import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { error } from 'console';
import { Observable } from 'rxjs';

@Injectable()
export class JWTAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(error, user, info) {
    console.log(error, user)
    if (error || !user) {
      throw new UnauthorizedException('Not authorized to access endpoint');
    }
    return user;
  }
}
