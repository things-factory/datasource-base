import { gql } from 'apollo-server-koa'

export const NewDatasource = gql`
  input NewDatasource {
    name: String!
    description: String
  }
`
