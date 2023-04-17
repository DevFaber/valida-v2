import { Injectable } from '@nestjs/common'
import { CompanyDTO } from './company.dto'

@Injectable()
export class CompanyService {
  private companies: CompanyDTO[] = [
    {
      id: '1',
      razao: 'Porter',
      bairro: 'Rui Barbosa, 713',
      cidade: 'Campo Grande',
      cnpj: '22.662.164/0001-17',
      is_active: true
    },
    {
      id: '2',
      razao: 'PCG',
      bairro: 'Rui Barbosa, 714',
      cidade: 'Campo Grande',
      cnpj: '22.662.164/0001-18',
      is_active: true
    },
    {
      id: '3',
      razao: 'Kiper',
      bairro: 'Rui Barbosa, 715',
      cidade: 'Campo Grande',
      cnpj: '22.662.164/0001-19',
      is_active: true
    }
  ]

  findAll() {
    return this.companies
  }

  findById(id: string) {
    return this.companies.find((company) => company.id === id)
  }

  create(company: CompanyDTO) {
    return this.companies.push(company)
  }

  update(id: string, company: CompanyDTO) {
    const index = this.companies.findIndex((company) => company.id === id)

    this.companies[index] = company

    return company
  }

  remove(id: string) {
    const index = this.companies.findIndex((company) => company.id === id)

    delete this.companies[index]

    return { message: 'OK!' }
  }

  // disable(id: number, company: CompanyDTO) {
  //   const index = this.companies.findIndex((company) => company.id === id)
  //   this.companies[index] = company
  //   return company
  // }
}
