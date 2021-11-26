import { Query, Resolver } from '@nestjs/graphql';
import { RootModel } from 'src/models/root.model';
import { AppService } from 'src/app.service';

@Resolver(() => RootModel)
export class AppResolver {
  constructor(private appService: AppService) {}

  @Query(() => RootModel, { name: 'root' })
  public getRoot(): RootModel {
    return {
      hello: this.appService.getHello(),
    };
  }
}
