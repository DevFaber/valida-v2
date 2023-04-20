import { Company } from '../company'
export class CreateCompanyDTO extends Company {
  razao: string
  endereco: string
  cidade: string
  uf: string
  cnpj: string
}
