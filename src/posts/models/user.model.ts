import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from './post.model';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field((type) => ID,{nullable : true})
  @Directive('@external')
  id?: number;

  @Field((type) => [Post],{nullable : true})
  posts?: Post[];
}