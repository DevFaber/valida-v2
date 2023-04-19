import { Injectable } from '@nestjs/common'
import { CreateCompanyDTO } from './create_company.dto'
import { PrismaService } from '../../database/database.service'

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.company.findMany()
  }

  findById(id) {
    console.log(id)
    return this.prisma.company.findFirst(id)
  }

  create(data: CreateCompanyDTO) {
    return this.prisma.company.create({
      data
    })
  }

  // update(id: string, company: CompanyDTO) {
  //   const index = this.companies.findIndex((company) => company.id === id)

  //   this.companies[index] = company

  //   return company
  // }

  // remove(id: string) {
  //   const index = this.companies.findIndex((company) => company.id === id)

  //   delete this.companies[index]

  //   return { message: 'OK!' }
}

// disable(id: number, company: CompanyDTO) {
//   const index = this.companies.findIndex((company) => company.id === id)
//   this.companies[index] = company
//   return company
// }
