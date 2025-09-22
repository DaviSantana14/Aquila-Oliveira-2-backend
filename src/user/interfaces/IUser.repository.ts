export interface IUserRepository {
    create(name: string, password: string): Promise<void>;
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    update(id: number, name: string, password: string): Promise<void>;
    remove(id: number): Promise<void>;
}
