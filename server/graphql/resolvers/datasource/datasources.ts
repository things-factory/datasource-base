import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Datasource } from '../../../entities'

export const datasourcesResolver = {
  async datasources(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(Datasource).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder.getManyAndCount()

    return { items, total }
  }
}
