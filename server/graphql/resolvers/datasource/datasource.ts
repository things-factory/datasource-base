import { getRepository } from 'typeorm'
import { Datasource } from '../../../entities'

export const datasourceResolver = {
  async datasource(_: any, { name }, context: any) {
    return await getRepository(Datasource).findOne({
      where: { domain: context.state.domain, name },
      relations: ['domain', 'creator', 'updater']
    })
  }
}
