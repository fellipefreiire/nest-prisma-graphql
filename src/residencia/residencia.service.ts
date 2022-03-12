import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateResidenciaInput } from 'src/residencia/dto/createResidencia.dto';

@Injectable()
export class ResidenciaService {
  constructor(private prisma: PrismaService) { }

  async createResidencia(newResidenciaData: CreateResidenciaInput) {
    return await this.prisma.residencia.create({
      data: {
        ...newResidenciaData
      },
    });
  }

  async deleteResidencia(id: string) {
    return await this.prisma.residencia.delete({
      where: { id }
    })
  }
}
