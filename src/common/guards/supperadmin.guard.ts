import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class SuperAdminGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req: Request | any = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Token mavjud emas');
    }

    const [bearer, token] = authHeader.split(' ');
    if (bearer !== 'Bearer' || !token) {
      throw new UnauthorizedException('Token formati noto‘g‘ri');
    }

    let payload: any;
    try {
      payload = await this.jwtService.verify(token, {
        secret: process.env.ACCESS_TOKEN_KEY,
      });
    } catch (error) {
      throw new UnauthorizedException('Token noto‘g‘ri yoki muddati tugagan');
    }

    console.log('TOKEN PAYLOAD:', payload);

    if (!payload || payload.role !== 'SUPERADMIN') {
      throw new ForbiddenException('Faqat SUPERADMIN kirishi mumkin');
    }

    req.user = payload;
    return true;
  }
}
