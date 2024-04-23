import * as jwt from 'jsonwebtoken';

export class JsonWebToken {
  private secret: string;
  constructor(secret: string) {
    this.secret = secret;
  }

  decode(token: string) {
    return jwt.verify(token, this.secret);
  }
}
