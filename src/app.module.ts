import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [AuthModule, UserModule,
    MongooseModule.forRoot('mongodb+srv://borhen:azerty@cluster0.aidht.mongodb.net/'),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, UserService, AuthService],
})
export class AppModule {}
