
import { fromModelToEntity } from '../application/mapper/fromModelToEntity'
import { User } from '../domain/user.entity'
import { UserModel } from './user.model'

export class UserRepository {
  userModel: typeof UserModel
  constructor (userModel: UserModel) {
    this.userModel = userModel as any
  }

  async saveUser (user: User): Promise<User> {
    const savedUser = await this.userModel.create(user as any, { isNewRecord: Number.isNaN(user.id) })

    return fromModelToEntity(savedUser)
  }
}
