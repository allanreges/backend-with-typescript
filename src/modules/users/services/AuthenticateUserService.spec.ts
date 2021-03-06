import 'reflect-metadata'
import AuthenticateUserService from './AuthenticateUserService'
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository'
import AppError from '@shared/errors/AppError'
import CreateUserService from './CreateUserService'
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider'

describe('AuthenticateUser', () => {
  it('should be able to authneticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository()
    const fakeHashProvider = new FakeHashProvider()
    const authenticateUser = new AuthenticateUserService(fakeUsersRepository, fakeHashProvider)
    const createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider)

    await createUser.execute({
      name: 'Allan topper',
      email: 'johndoe@example.com',
      password: '123456'
    })

    const response = await authenticateUser.execute({
      email: 'johndoe@example.com',
      password: '123456'
    })

    expect(response).toHaveProperty('token')
  })
})
