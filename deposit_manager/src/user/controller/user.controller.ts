import { BadRequestException, Body, Controller, Param, Post, Get, Res, HttpStatus, Request, Header, Put, Req, Delete, Query } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserDto } from '../dto/user.dto';
import { Response } from 'express';

@Controller()
export class UserController {

    constructor(private readonly userService:UserService) { }

    @Post('/user')
    async cadastraUsuario(@Body() user: UserDto) {

        try {
            await this.userService.cadastraUsuario(user);
            return {
                mssg: 'Usuario inserido no sistema'
            }
        } catch (error) {
            throw new BadRequestException('Algo deu errado, verifique os dados e se o email já foi cadastrado anteriormente!')
        }

    }

    @Delete("/user/:id")
      async deletaUsuario(@Param('id') id: number, @Res() response: Response, @Req() request: Request): Promise<any> {
        try {

            var json = await this.userService.deletaUsuario(
                id)

          return response.status(HttpStatus.OK).json(
            {
                msg:"Usuario deletado com sucesso",
                json
            }
            )
        } catch (exception) {
          return response.status(HttpStatus.BAD_REQUEST).json(exception)
        }
      }




  @Post("/login")
  async login(@Query('email') nome: string, @Query('password') senha: string, @Res() response: Response): Promise<any> {
    try {

      return response.status(HttpStatus.OK).json(await this.userService.login(nome, senha))
    } catch (exception) {
      return response.status(HttpStatus.BAD_REQUEST).json(exception)
    }
  }
  @Get("/user")
  async getUserByEmailPwd(@Query('email') nome: string, @Query('password') senha: string, @Res() response: Response): Promise<any> {
    try {

      return response.status(HttpStatus.OK).json(await this.userService.getUserByEmailPwd(nome, senha))
    } catch (exception) {
      return response.status(HttpStatus.BAD_REQUEST).json(exception)
    }
  }
  @Post("/logoff")
  async logoff(@Query('email') nome: string, @Query('password') senha: string, @Res() response: Response): Promise<any> {
    try {

      return response.status(HttpStatus.OK).json(await this.userService.logOff(nome, senha))
    } catch (exception) {
      return response.status(HttpStatus.BAD_REQUEST).json(exception)
    }
  }

  @Post("/activate")
  async activate(@Body('email') user_email: string, @Res() response: Response): Promise<any> {
    try {
      return response.status(HttpStatus.OK).json(await this.userService.activate(user_email))
    } catch (exception) {
      return response.status(HttpStatus.BAD_REQUEST).json(exception)
    }
  }

  @Post("/inactivate")
  async inactivate(@Body('email') user_email: string, @Res() response: Response): Promise<any> {
    try {
      return response.status(HttpStatus.OK).json(await this.userService.inactivateUser(user_email))
    } catch (exception) {
      return response.status(HttpStatus.BAD_REQUEST).json(exception)
    }
  }


  @Get("/users")
  async getAllUsers(@Res() response: Response): Promise<any> {
    try {
      return response.status(HttpStatus.OK).json(await this.userService.getAllUsuarios())
    } catch (exception) {
      return response.status(HttpStatus.BAD_REQUEST).json(exception)
    }
  }

  @Get("/users-active")
  async getActiveUsers(@Res() response: Response): Promise<any> {
    try {
      return response.status(HttpStatus.OK).json(await this.userService.getActiveUsers())
    } catch (exception) {
      return response.status(HttpStatus.BAD_REQUEST).json(exception)
    }
  }

  @Get("/users-inactive")
  async getNonActiveUsers(@Res() response: Response): Promise<any> {
    try {
      return response.status(HttpStatus.OK).json(await this.userService.getInactiveUsers())
    } catch (exception) {
      return response.status(HttpStatus.BAD_REQUEST).json(exception)
    }
  }
}