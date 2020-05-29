
import User from '../../infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO'


class UsersRepository implements IUsersRepository {
  private users: User[] = []

  public async findById(id: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.id === id)
    return findUser
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email)

    return findUser
  }


  public async findByDate(date: Date): Promise<User | undefined> {


    return findAppointment;
  }

  public async create({ name, email, password }: ICreateUserDTO): Promise<User> {


    return appointment
  }

  public async save(user: User): Promise<User> {

  }
}

export default UsersRepository;
