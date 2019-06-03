import { gql } from 'apollo-server-koa'

export const DatasourceList = gql`
  type DatasourceList {
    items: [Datasource]
    total: Int
  }
`
