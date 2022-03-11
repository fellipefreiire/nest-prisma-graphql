import {
  ObjectType,
  HideField,
  Field,
} from '@nestjs/graphql';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class User extends BaseModel {
  @Field()
  email: string;
  @HideField()
  password: string;
}
