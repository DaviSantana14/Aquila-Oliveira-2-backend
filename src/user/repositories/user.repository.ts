import { PrismaService } from 'src/prisma/prisma.service';
import { IUserRepository } from '../interfaces/IUser.repository';
import { User } from '@prisma/client';

export class UserRepository implements IUserRepository {
    constructor(private prisma: PrismaService) { }

    async create(name: string, password: string): Promise<User | null> {
        return this.prisma.user.create({
            data: {
                name,
                password,
            },
        });
    }

    findAll(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    findOne(id: string): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: { id },
        });
    }

    update(id: string, name: string, password: string): Promise<User | null> {
        return this.prisma.user.update({
            where: { id },
            data: {
                name,
                password,
            },
        });
    }

    async remove(id: string): Promise<void> {
        await this.prisma.user.delete({
            where: { id },
        });
    }
}
