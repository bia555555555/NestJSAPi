import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { tpt140 } from '../entity/company.entity';

@Injectable()
export class TabelaLocalService {
  constructor(
    @InjectRepository(tpt140)
    private readonly tabelaLocalRepository: Repository<tpt140>,
  ) {}

  async findOneByEmpAndLocal(CDEMPGRP: number, cdLocal: string): Promise<tpt140> {
    return this.tabelaLocalRepository.findOne({
      where: { CDEMPGRP: CDEMPGRP, CDLOCAL: cdLocal },
    });
  }

  async findAll(CDEMPGRP: number): Promise<tpt140[]> {
    const locais = await this.tabelaLocalRepository.find({
      where: { CDEMPGRP: CDEMPGRP },
    });
  
    return locais;
  }
  
  async create(tabelaLocal: tpt140): Promise<tpt140> {
    return this.tabelaLocalRepository.save(tabelaLocal);
  }
}
