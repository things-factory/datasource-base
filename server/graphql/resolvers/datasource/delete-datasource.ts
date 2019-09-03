import { getRepository } from 'typeorm'
import { Datasource } from '../../../entities'

export const deleteDatasource = {
  async deleteDatasource(_: any, { name }, context: any) {
    return await getRepository(Datasource).delete({ domain: context.state.domain, name })
  }
}
