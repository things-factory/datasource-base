import { getRepository } from 'typeorm'
import { Datasource } from '../../../entities'

export const updateDatasource = {
  async updateDatasource(_, { id, patch }) {
    const repository = getRepository(Datasource)

    const datasource = await repository.findOne({ id })

    return await repository.save({
      ...datasource,
      ...patch
    })
  }
}
