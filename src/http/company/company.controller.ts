import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common'
import { CompanyService } from './company.service'
import { CreateCompanyDTO } from './create_company.dto'

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get()
  findAll() {
    return this.companyService.findAll()
  }

  // @Get(':id')
  // findById(@Param() params) {
  //   return this.companyService.findById(params.id)
  // }

  @Post()
  create(@Body() company: CreateCompanyDTO) {
    return this.companyService.create(company)
  }

  // @Put(':id')
  // update(@Param() params, @Body() company: CompanyDTO) {
  //   return this.companyService.update(params.id, company)
  // }

  // @Delete(':id')
  // delete(@Param() params) {
  //   return this.companyService.remove(params.id)
  // }

  // @Patch(':id')
  // disable(@Param() params) {
  //   return this.companyService.update(+params.id, is_active:false)
  // }
}
