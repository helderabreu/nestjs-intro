import { AuthGuard } from '@nestjs/passport';

// 'jwt' is the name of the Strategy to be used in the guard
export class JwtGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
}
