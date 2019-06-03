import { datasourceResolver } from './datasource'
import { datasourcesResolver } from './datasources'

import { updateDatasource } from './update-datasource'
import { createDatasource } from './create-datasource'
import { deleteDatasource } from './delete-datasource'

export const Query = {
  ...datasourcesResolver,
  ...datasourceResolver
}

export const Mutation = {
  ...updateDatasource,
  ...createDatasource,
  ...deleteDatasource
}
