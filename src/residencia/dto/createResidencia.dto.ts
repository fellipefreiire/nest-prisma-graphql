import { IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateResidenciaInput {
  @Field()
  @IsNotEmpty()
  tipoSeguro: string

  @Field()
  @IsNotEmpty()
  nome: string

  @Field({ nullable: true })
  @IsNotEmpty()
  pessoa: string

  @Field({ nullable: true })
  @IsNotEmpty()
  cnpj: string

  @Field({ nullable: true })
  @IsNotEmpty()
  cpf: string

  @Field()
  @IsNotEmpty()
  email: string

  @Field()
  @IsNotEmpty()
  telefone: string

  @Field()
  @IsNotEmpty()
  formaContato: string

  @Field({ nullable: true })
  @IsNotEmpty()
  cep: string

  @Field({ nullable: true })
  @IsNotEmpty()
  rua: string

  @Field({ nullable: true })
  @IsNotEmpty()
  numero: string

  @Field({ nullable: true })
  @IsNotEmpty()
  complemento: string

  @Field({ nullable: true })
  @IsNotEmpty()
  bairro: string

  @Field({ nullable: true })
  @IsNotEmpty()
  cidade: string

  @Field({ nullable: true })
  @IsNotEmpty()
  estado: string

  @Field({ nullable: true })
  @IsNotEmpty()
  tipoImovel: string

  @Field({ nullable: true })
  @IsNotEmpty()
  tipoTomador: string

  @Field({ nullable: true })
  @IsNotEmpty()
  tipoConstrucao: string

  @Field({ nullable: true })
  @IsNotEmpty()
  tipoResidencia: string

  @Field({ nullable: true })
  @IsNotEmpty()
  escritorio: string

  @Field({ nullable: true })
  @IsNotEmpty()
  comercial: string

  @Field({ nullable: true })
  @IsNotEmpty()
  condominioFechado: string

  @Field({ nullable: true })
  @IsNotEmpty()
  alarme: string

  @Field({ nullable: true })
  @IsNotEmpty()
  gradeJanelas: string

  @Field({ nullable: true })
  @IsNotEmpty()
  vigia: string

  @Field({ nullable: true })
  @IsNotEmpty()
  valorImovel: string

  @Field({ nullable: true })
  @IsNotEmpty()
  valorConteudo: string

  @Field()
  @IsNotEmpty()
  seguro: string
}
