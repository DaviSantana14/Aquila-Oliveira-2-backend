import { IUserRepository } from '../interfaces/IUser.repository';

export class UserRepository implements IUserRepository {
    create(name: string, password: string): Promise<void> {
        throw new Error('Method not implemented.');
    }

    findAll(): Promise<any[]> {
        throw new Error('Method not implemented.');
    }

    findOne(id: number): Promise<any> {
        throw new Error('Method not implemented.');
    }

    update(id: number, name: string, password: string): Promise<void> {
        throw new Error('Method not implemented.');
    }

    remove(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
