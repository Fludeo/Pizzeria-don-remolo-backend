import { User } from '../../domain/user.entity'
import { type UserRepository } from '../../infrastructure/user.repository'
import { UserEntityNotDefined } from '../error/UserEntityNotDefined'

export class UserService {
  constructor (private readonly userRepository: UserRepository) {

  }

  async addUser (user: User): Promise<User> {
    if (!(user instanceof User)) {
      throw new UserEntityNotDefined()
    }

    const savedUser = await this.userRepository.saveUser(user)

    return savedUser
  }
}
