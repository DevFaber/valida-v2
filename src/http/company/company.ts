export class Company {
  id?: string
  razao: string
  endereco: string
  cidade: string
  uf: string
  cnpj: string
  is_active?: boolean

  created_at: Date
  updated_at: Date
  excluded_at?: Date
}
