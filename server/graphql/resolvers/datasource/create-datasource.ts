import uuid from 'uuid/v4'

import { getRepository } from 'typeorm'
import { Datasource } from '../../../entities'

export const createDatasource = {
  async createDatasource(_: any, { datasource }, context: any) {
    return await getRepository(Datasource).save({
      domain: context.state.domain,
      creatorId: context.state.user.id,
      updaterId: context.state.user.id,
      ...datasource
    })
  }
}
