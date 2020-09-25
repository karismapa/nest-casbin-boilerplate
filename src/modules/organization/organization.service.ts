import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Organization } from "./organization.entity";

@Injectable()
export class OrganizationService {
    constructor(
        @InjectRepository(Organization)
        private organizationRepository: Repository<Organization>,
    ) {}
    
    async create(organization: Organization): Promise<Organization> {
        const org = new Organization()

        org.name = organization.name
        org.imageURL = organization.imageURL

        return this.organizationRepository.save(org)
    }

    async findAll(): Promise<Organization[]> {
        return this.organizationRepository.find()
    }

    async findByID(id: string): Promise<Organization> {
        return this.organizationRepository.findOne(id)
    }
}