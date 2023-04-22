import { Company } from '../company'
import { IsString, IsNotEmpty } from 'class-validator'
export class CreateCompanyDTO extends Company {
  @IsString()
  @IsNotEmpty()
  razao: string

  @IsString()
  @IsNotEmpty()
  endereco: string

  @IsString()
  @IsNotEmpty()
  cidade: string

  @IsString()
  @IsNotEmpty()
  uf: string

  @IsString()
  @IsNotEmpty()
  cnpj: string
}
