import { Injectable } from '@nestjs/common'
import { CreateCompanyDTO } from './dtos/create_company.dto'
import { UpdateCompanyDTO } from './dtos/update_company.dto'
import { PrismaService } from '../../database/database.service'

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.company.findMany()
  }

  async findById(id: string) {
    return await this.prisma.company.findUnique({
      where: {
        id
      }
    })
  }

  create(data: CreateCompanyDTO) {
    return this.prisma.company.create({
      data
    })
  }

  async update(id: string, data: UpdateCompanyDTO) {
    const existCompany = await this.prisma.company.findUnique({
      where: {
        id
      }
    })
    if (!existCompany) {
      return { message: 'Company not found!' }
    }

    const updateCompany = await this.prisma.company.update({
      where: { id },
      data
    })

    return updateCompany
  }

  async remove(id: string) {
    const existCompany = await this.prisma.company.findUnique({
      where: {
        id
      }
    })

    if (!existCompany) {
      console.log(existCompany)
      return { message: 'Company not found!' }
    }

    await this.prisma.company.delete({ where: { id } })

    return { message: 'OK!' }
  }
}
