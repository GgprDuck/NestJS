import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { UserService } from './users.service';
import { UserSchema } from 'src/v1/schemas/users.schema';
import { User} from 'src/v1/schemas/users.schema';

@Controller()
export class UsersController{
    constructor(private readonly userService: UserService) {}

    @Get()
    @HttpCode(200)
    findAll(): Promise<User[]>{
      return this.userService.findAll();
    } 
  
    @Post('sign-up')
    @HttpCode(201)
    signUp(
        @Query('name') name,
        @Query('email') email,
        @Query('password') password,
         ): string{
      try{
        this.userService.create({
          name: name, 
          email,
          password,
          _id: '' 
        });
        
      return "Sign-up succesfully";
      }
      catch(error){
        return "Enter all statements";
      }
    }
}

