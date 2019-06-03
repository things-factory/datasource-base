import { Datasource } from './datasource'
import { NewDatasource } from './new-datasource'
import { DatasourcePatch } from './datasource-patch'
import { DatasourceList } from './datasource-list'
import { Filter, Pagination, Sorting } from '@things-factory/shell'

export const Mutation = `
  createDatasource (
    datasource: NewDatasource!
  ): Datasource

  updateDatasource (
    id: String!
    patch: DatasourcePatch!
  ): Datasource

  deleteDatasource (
    id: String!
  ): Datasource

  publishDatasource (
    id: String!
  ): Datasource
`

export const Query = `
  datasources(filters: [Filter], pagination: Pagination, sortings: [Sorting]): DatasourceList
  datasource(id: String!): Datasource
`

export const Types = [Filter, Pagination, Sorting, Datasource, NewDatasource, DatasourcePatch, DatasourceList]
