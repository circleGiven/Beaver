import {Injectable, UnauthorizedException} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {AuthService} from './auth.service';
import {AuthConstant} from './auth.constant';
import {TokenPayload} from './token.payload';
import {UserEntity} from '../user/user.entity';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: AuthConstant.secret,
        });
    }

    async validate(token: TokenPayload) {
        const user: UserEntity = await this.authService.validateUser(token.userId);
        if (!user) {
            return null;
        }
        return user;
    }
}
