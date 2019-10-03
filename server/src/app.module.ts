import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserEntity} from "./user/user.entity";
import {UserModule} from './user/user.module';
// import * as db from './config/db';

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
          entities: [UserEntity],
      }),
      UserModule,
  ],
  controllers: [
  ],
  providers: [
  ],
})
export class AppModule {
    // constructor(private readonly connection: Connection) {}
}
