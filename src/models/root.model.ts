import {Field, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class RootModel {

	@Field(() => String)
	hello: string;
}
