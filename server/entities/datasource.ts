import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('datasources')
@Index('ix_datasource_0', (datasource: Datasource) => [datasource.domain, datasource.name], { unique: true })
export class Datasource {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column({
    unique: true,
    nullable: false
  })
  name: string

  @Column({
    nullable: true
  })
  description: string

  @Column({
    nullable: true
  })
  credential: string

  @ManyToOne(type => User, {
    nullable: true
  })
  creator: User

  @ManyToOne(type => User, {
    nullable: true
  })
  updater: User

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
