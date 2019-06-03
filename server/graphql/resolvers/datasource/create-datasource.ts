import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { Datasource } from '../../../entities'

export const createDatasource = {
  async createDatasource(_, { datasource: attrs }) {
    const repository = getRepository(Datasource)
    const newDatasource = {
      id: uuid(),
      ...attrs
    }

    return await repository.save(newDatasource)
  }
}
