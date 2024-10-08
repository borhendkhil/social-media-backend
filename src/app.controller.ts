import { Controller, Get ,UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user/user.schema';
import { AuthGuard } from './auth/auth.gurad';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('protected')
  @UseGuards(AuthGuard)
  getProtectedResource(): string {
    return 'This is a protected resource.';
  }
}
