import { getRepository } from 'typeorm'
import { Datasource } from '../../../entities'

export const datasourceResolver = {
  async datasource(_, { id }, context, info) {
    const repository = getRepository(Datasource)

    return await repository.findOne(
      { id }
    )
  }
}
