import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { User } from './user.model';

@ObjectType()
@Directive('@key(fields: "id")')
export class Post {
  @Field((type) => ID, {nullable : true})
  id?: number;

  @Field({nullable : true})
  title?: string;

  @Field((type) => ID, {nullable : true})
  authorId?: number;

}