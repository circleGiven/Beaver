import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShipEntity } from './ship.entity';
import { ShipController } from './ship.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ShipEntity]),
  ],
  controllers: [ShipController],
  providers: [ShipEntity],
  exports: [ShipEntity],
})
export class UserModule {}
