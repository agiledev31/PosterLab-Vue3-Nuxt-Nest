import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class UserAccountRepository {
    constructor(private readonly prisma: PrismaService) {}

    // user account create
    async create(data: Prisma.UserAccountCreateInput) {
        return this.prisma.userAccount.create({
            data,
        })
    }

    // user account fine one
    async findOne(where: Prisma.UserAccountWhereUniqueInput) {
        return this.prisma.userAccount.findUnique({
            where,
        })
    }

    // user account find many
    async findMany(where: Prisma.UserAccountWhereInput) {
        return this.prisma.userAccount.findMany({
            where,
        })
    }

    // user account update
    async update(
        where: Prisma.UserAccountWhereUniqueInput,
        data: Prisma.UserAccountUpdateInput,
    ) {
        return this.prisma.userAccount.update({
            where: where,
            data: data,
        })
    }
}
