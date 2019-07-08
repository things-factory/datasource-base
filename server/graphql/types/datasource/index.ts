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
    name: String!
    patch: DatasourcePatch!
  ): Datasource

  deleteDatasource (
    name: String!
  ): Datasource

  publishDatasource (
    name: String!
  ): Datasource
`

export const Query = `
  datasources(filters: [Filter], pagination: Pagination, sortings: [Sorting]): DatasourceList
  datasource(name: String!): Datasource
`

export const Types = [Filter, Pagination, Sorting, Datasource, NewDatasource, DatasourcePatch, DatasourceList]
