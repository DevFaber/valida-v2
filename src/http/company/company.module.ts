import { Module } from '@nestjs/common'
import { CompanyController } from './company.controller'
import { CompanyService } from './company.service'
import { PrismaService } from 'src/database/database.service'

@Module({
  imports: [],
  controllers: [CompanyController],
  providers: [CompanyService, PrismaService]
})
export class CompanyModule {}
