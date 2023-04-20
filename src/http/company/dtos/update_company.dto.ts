import { PartialType } from '@nestjs/mapped-types'
import { CreateCompanyDTO } from './create_company.dto'

export class UpdateCompanyDTO extends PartialType(CreateCompanyDTO) {}
