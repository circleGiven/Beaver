import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShipEntity } from './ship.entity';
import { ShipController } from './ship.controller';
import { ShipService } from './ship.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ShipEntity]),
  ],
  controllers: [ShipController],
  providers: [ShipService],
  exports: [ShipService],
})
export class ShipModule {}
