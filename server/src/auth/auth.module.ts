import { Module } from '@nestjs/common';
import {AuthService} from './auth.service';
import {UserModule} from '../user/user.module';
import {AuthController} from './auth.controller';
import {AuthStrategy} from './auth.strategy';
import {JwtModule} from '@nestjs/jwt';
import {AuthConstant} from './auth.constant';

@Module({
    imports: [
        UserModule,
        JwtModule.register({
            signOptions: {
                expiresIn: AuthConstant.expireTime,
            },
            secret: AuthConstant.secret,
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, AuthStrategy],
})
export class AuthModule {}
