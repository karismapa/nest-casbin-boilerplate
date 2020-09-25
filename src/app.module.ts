import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationController } from './modules/organization/organization.controller';
import { OrganizationModule } from './modules/organization/organization.module';
import { OrganizationService } from './modules/organization/organization.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    OrganizationModule,
  ],
})
export class AppModule {}
