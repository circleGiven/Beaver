import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NationalityEntity } from './nationality.entity';
import { Nationality } from './dto/nationality';

@Injectable()
export class NationalityService {
  constructor(
    @InjectRepository(NationalityEntity)
    private readonly nationalityRepository: Repository<NationalityEntity>) {
  }

  async list() {
    return await this.nationalityRepository.find();
  }

  async findOneByPrefix(prefix: string) {
    return await this.nationalityRepository.findOne({prefix});
  }

  async create(nationality: Nationality) {
    return await this.nationalityRepository.save(this.nationalityRepository.create(nationality));
  }
}
