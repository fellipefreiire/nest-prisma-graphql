import {
  Field,
  ObjectType,
} from '@nestjs/graphql';
import { BaseModel } from '../../../../../Nest/Personal/rcabralstart/secondtry/src/common/models/base.model';

@ObjectType()
export class Residencia extends BaseModel {
  @Field()
  tipoSeguro: string

  @Field()
  nome: string

  @Field()
  pessoa: string

  @Field()
  cnpj: string

  @Field()
  cpf: string

  @Field()
  email: string

  @Field()
  telefone: string

  @Field()
  formaContato: string

  @Field()
  cep: string

  @Field()
  rua: string

  @Field()
  numero: string

  @Field()
  complemento: string

  @Field()
  bairro: string

  @Field()
  cidade: string

  @Field()
  estado: string

  @Field()
  tipoImovel: string

  @Field()
  tipoTomador: string

  @Field()
  tipoConstrucao: string

  @Field()
  tipoResidencia: string

  @Field()
  escritorio: string

  @Field()
  comercial: string

  @Field()
  condominioFechado: string

  @Field()
  alarme: string

  @Field()
  gradeJanelas: string

  @Field()
  vigia: string

  @Field()
  valorImovel: string

  @Field()
  valorConteudo: string

  @Field()
  seguro: string
}
