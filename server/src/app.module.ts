import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserModule} from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'root',
          database: 'beaver',
          synchronize: true,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
      }),
      UserModule,
      AuthModule,
  ],
})
export class AppModule {
}
