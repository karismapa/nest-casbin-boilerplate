import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Organization } from "./organization.entity";
import { OrganizationService } from "./organization.service";

@Controller("organization")
export class OrganizationController {
    constructor(
        private readonly organizationService: OrganizationService,
    ) {}

    @Post()
    async create(
        @Body() body: Organization,
    ): Promise<Organization> {
        return this.organizationService.create(body)
    }

    @Get()
    async getAll(): Promise<Organization[]> {
        return this.organizationService.findAll()
    }

    @Get(":id")
    async getByID(
        @Param("id") id: string,
    ): Promise<Organization> {
        return this.organizationService.findByID(id)
    }
}
