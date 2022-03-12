import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'nestjs-prisma';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { CreateResidenciaInput } from 'src/residencia/dto/createResidencia.dto';
import { Residencia } from 'src/residencia/models/residencia.model';
import { ResidenciaService } from './residencia.service'

@Resolver(() => Residencia)
export class ResidenciaResolver {
  constructor(
    private residenciaService: ResidenciaService,
    private prisma: PrismaService
  ) { }

  // @UseGuards(GqlAuthGuard)
  @Query(() => [Residencia])
  async getResidencias(): Promise<Residencia[]> {
    return await this.prisma.residencia.findMany()
  }

  @Mutation(() => Residencia)
  async createResidencia(
    @Args('data') newResidenciaData: CreateResidenciaInput
  ) {
    return await this.residenciaService.createResidencia(newResidenciaData)
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Residencia)
  async deleteResidencia(
    @Args('id') id: string
  ) {
    return await this.residenciaService.deleteResidencia(id)
  }
}