import { User } from "@prisma/client";

export interface IUserRepository {
    create(name: string, password: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User | null>;
    update(id: string, name: string, password: string): Promise<User | null>;
    remove(id: string): Promise<void>;
}
