import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {getRepository, Repository} from 'typeorm';
import * as _ from 'lodash';
import { ShipEntity } from './ship.entity';
import { ShipConstant } from './ship.constant';
import { CreateShipDto } from './dto/create-ship.dto';
import { ResultResponse } from '../../common/result.response';
import { UpdateShipDto } from './dto/update-ship.dto';

@Injectable()
export class ShipService {
  constructor(
    @InjectRepository(ShipEntity)
    private readonly shipRepository: Repository<ShipEntity>) {
  }

  async findAll(): Promise<ShipEntity[]> {
    return await this.shipRepository.find();
  }

  async findOne(options): Promise<ShipEntity> {
    return await this.shipRepository.findOne(options);
  }

  async findById(id: string): Promise<ShipEntity> {
    return await this.shipRepository.findOne({id});
  }

  async save(ship: ShipEntity): Promise<ShipEntity> {
    return await this.shipRepository.save(ship);
  }

  async detail(id: string) {
    const ship: ShipEntity = await this.findById(id);
    // if not find ship
    if (this.isEmptyShip(ship)) {
      throw new HttpException(ShipConstant.ResultMessage.NOT_FOUND_SHIP, HttpStatus.BAD_REQUEST);
    }
    return ship;
  }

  async create(dto: CreateShipDto) {
    const queryBuilder = await getRepository(ShipEntity)
      .createQueryBuilder('ship')
      .where('ship.name = :name', {name: dto.name});
    const ship: ShipEntity = await queryBuilder.getOne();
    // if not find ship
    if (this.isEmptyShip(ship) === false) {
      throw new HttpException(ShipConstant.ResultMessage.DUPLICATED_SHIP, HttpStatus.BAD_REQUEST);
    }
    // create ship
    const entity = new ShipEntity();
    entity.name = dto.name;
    entity.enName = dto.enName;
    entity.jpName = dto.jpName;
    entity.cnName = dto.cnName;
    const savedShip = await this.shipRepository.save(entity);

    return this.buildShipRO(savedShip, HttpStatus.CREATED, ShipConstant.ResultMessage.SUCCESS_SHIP_CREATED);
  }

  async update(id: string, dto: UpdateShipDto) {
    const ship: ShipEntity = await this.findById(id);
    // if not find ship
    if (this.isEmptyShip(ship)) {
      throw new HttpException(ShipConstant.ResultMessage.NOT_FOUND_SHIP, HttpStatus.BAD_REQUEST);
    }
    await this.shipRepository.update(ship.id, dto);
    return this.buildShipRO(ship, HttpStatus.OK, ShipConstant.ResultMessage.SUCCESS_SHIP_MODIFIED);
  }

  async delete(id: string) {
    const ship: ShipEntity = await this.findById(id);
    // if not find ship
    if (this.isEmptyShip(ship)) {
      throw new HttpException(ShipConstant.ResultMessage.NOT_FOUND_SHIP, HttpStatus.BAD_REQUEST);
    } else {
      await this.shipRepository.delete({id: id});
      return this.buildShipRO(ship, HttpStatus.OK, ShipConstant.ResultMessage.SUCCESS_SHIP_REMOVED);
    }
  }

  private buildShipRO(ship: ShipEntity, status: number, message: string) {
    const result = {
      name: ship.name,
    };
    return new ResultResponse(result, status, message);
  }

  private isEmptyShip(ship: ShipEntity): boolean {
    return _.isNil(ship);
  }
}
