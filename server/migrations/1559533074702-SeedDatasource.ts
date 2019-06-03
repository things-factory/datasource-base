import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { Datasource } from '../entities'

const SEED = []

export class SeedDatasource1559533074702 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Datasource)
    const domainRepository = getRepository(Domain)
    const domain = await domainRepository.findOne({
      name: 'SYSTEM'
    })

    try {
      SEED.forEach(async datasource => {
        await repository.save({
          ...datasource,
          domain
        })
      })
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Datasource)
    SEED.reverse().forEach(async datasource => {
      let record = await repository.findOne({ name: datasource.name })
      await repository.remove(record)
    })
  }
}
