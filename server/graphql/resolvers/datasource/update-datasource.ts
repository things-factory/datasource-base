import { getRepository } from 'typeorm'
import { Datasource } from '../../../entities'

export const updateDatasource = {
  async updateDatasource(_: any, { name, patch }, context: any) {
    const repository = getRepository(Datasource)
    const datasource = await repository.findOne({ domain: context.state.domain, name })

    return await repository.save({
      ...datasource,
      ...patch,
      updaterId: context.state.user.id
    })
  }
}
