import { gql } from 'apollo-server-koa'

export const DatasourcePatch = gql`
  input DatasourcePatch {
    name: String
    description: String
  }
`
