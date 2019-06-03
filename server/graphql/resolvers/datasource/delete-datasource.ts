import { getRepository } from 'typeorm'
import { Datasource } from '../../../entities'

export const deleteDatasource = {
  async deleteDatasource(_, { id }) {
    const repository = getRepository(Datasource)

    return await repository.delete(id)
  }
}
