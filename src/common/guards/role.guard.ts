import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtConstant, ROLE_GUARD_KEY } from '../constants';
import { JsonWebToken } from '../JsonWebToken';

@Injectable()
export class RoleGuard {
  constructor(
    private reflector: Reflector,
    // @InjectRepository(RolePermission) private rolePermissionRepository: Repository<RolePermission>,
  ) {}

  canActivate(context: ExecutionContext) {
    const roles = this.reflector.getAllAndOverride(ROLE_GUARD_KEY, [context.getHandler(), context.getClass()]);

    const request = context.switchToHttp().getRequest();
    let token = request.headers['authorization'].split(' ')[1];

    let jwt = new JsonWebToken(JwtConstant.secret);
    const payload = jwt.decode(token) as any;
    console.log(context.getHandler(), context.getClass(), payload.role);

    /* get role permissions from db based on payload.role
    let roleInfo = {
      role       :customer
      allowCreate:false 
      allowUpdate:false 
      allowDelete:false 
      allowFetch :true  
    }
    */

    
    // get request method from context
    // const method = request.method;
    // if(method === "GET") return roleInfo.allowFetch;
    // if(method === "POST") return roleInfo.allowCreate;
    // if(method === "PUT") return roleInfo.allowUpdate;
    // if(method === "DELETE") return roleInfo.allowDelete;

    console.log("method",request.method)

    return payload && payload.role && roles.some(r => r === payload.role)
  }
}
