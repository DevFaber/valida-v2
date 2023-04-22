import { IsBoolean, IsString, IsNotEmpty } from 'class-validator'

export class Company {
  id?: string

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

  is_active?: boolean

  created_at: Date
  updated_at: Date
  excluded_at?: Date
}
