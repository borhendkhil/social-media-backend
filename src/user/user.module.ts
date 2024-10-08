import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { User } from './user.schema';


@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    
    providers: [UserService],
    exports: [UserService, MongooseModule],
})
export class UserModule {}
