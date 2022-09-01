import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './user.controller';
import { UserService } from './users.service';
import { User,UserSchema } from '../schemas/users.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UserService],
})

export interface UserClass {
    name: string;
    email: string;
    password:string;
    _id: string;
    isEnabled:boolean;
}
