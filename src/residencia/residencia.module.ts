import { Module } from '@nestjs/common';
import { ResidenciaResolver } from './residencia.resolver';
import { ResidenciaService } from './residencia.service';

@Module({
  imports: [],
  providers: [ResidenciaResolver, ResidenciaService],
})
export class ResidenciaModule { }
