import { gql } from 'apollo-server-koa'

export const Datasource = gql`
  type Datasource {
    id: String
    domain: Domain
    name: String
    description: String
    credential: String
    creator: User
    updater: User
    createdAt: String
    updatedAt: String
  }
`
