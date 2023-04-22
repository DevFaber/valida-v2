import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  NotFoundException
} from '@nestjs/common'
import { CompanyService } from './company.service'
import { CreateCompanyDTO } from './dtos/create_company.dto'
import { UpdateCompanyDTO } from './dtos/update_company.dto'

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get()
  findAll() {
    return this.companyService.findAll()
  }

  @Get(':id')
  async findById(@Param() params) {
    return this.companyService.findById(params.id).catch((e) => {
      throw new NotFoundException(e.message)
    })
  }

  @Post()
  async create(@Body() company: CreateCompanyDTO) {
    return this.companyService.create(company)
  }

  @Put(':id')
  async update(@Param() params, @Body() updateCompany: UpdateCompanyDTO) {
    return this.companyService.update(params.id, updateCompany)
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.companyService.remove(params.id)
  }
}
