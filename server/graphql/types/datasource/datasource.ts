import { gql } from 'apollo-server-koa'

export const Datasource = gql`
  type Datasource {
    id: String
    name: String
    domain: Domain
    description: String
  }
`
