import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Datasource } from '../../../entities'

export const datasourcesResolver = {
  async datasources(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(Datasource).createQueryBuilder()
    buildQuery(queryBuilder, params, context)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('Datasource.domain', 'Domain')
      .leftJoinAndSelect('Datasource.creator', 'Creator')
      .leftJoinAndSelect('Datasource.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
