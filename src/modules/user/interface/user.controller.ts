import { Application } from 'express'

import { UserService } from '../application/service/user.service'
import { UserRepository } from '../infrastructure/user.repository'

export class UserController {
  baseRoute = '/user'
  constructor (private readonly userService: UserService, private readonly userRepository: UserRepository) {

  }

  configureRoutes (app: Application): void {
    app.get(`${this.baseRoute}`, () => {})
    app.put(`${this.baseRoute}/:id`, () => {})
  }
}
