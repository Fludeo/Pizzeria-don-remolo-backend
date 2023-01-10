import DIContainer, { type IDIContainer, object, use, factory } from 'rsdi'
import { Sequelize } from 'sequelize'
import { UserService } from '../modules/user/application/service/user.service'
import { UserModel } from '../modules/user/infrastructure/user.model'
import { UserRepository } from '../modules/user/infrastructure/user.repository'
import { UserController } from '../modules/user/interface/user.controller'

const dbConfig = (): Sequelize => {
  if (process.env.PROJECT_STATUS === 'development') {
    const sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: './data/development_database.db'
    })
    return sequelize
  }

  if (process.env.PROJECT_STATUS === 'test') {
    const sequelize = new Sequelize('sqlite::memory:')
    return sequelize
  }

  if (process.env.PROJECT_STATUS === 'production') {
    const sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: './data/production_database.db'
    })
    return sequelize
  }

  throw Error('PROJECT_STATUS env variable not found')
}

const configureUserModel = (container: IDIContainer): typeof UserModel => {
  return UserModel.setup(container.get('sequelize'))
}

const AddCommonDefinitions = (container: DIContainer): void => {
  container.add({
    sequelize: factory(dbConfig)
  })
}

const AddUserDefinitions = (container: DIContainer): void => {
  container.add({
    UserController: object(UserController).construct(use(UserService), use(UserRepository)),
    UserService: object(UserService).construct(use(UserRepository)),
    UserModel: factory(configureUserModel),
    UserRepository: object(UserRepository).construct(use(UserModel))
  })
}

export default function ConfigDIC (): DIContainer {
  const container = new DIContainer()
  AddCommonDefinitions(container)
  AddUserDefinitions(container);
  (container as IDIContainer).get('sequelize').sync()
  return container
}
