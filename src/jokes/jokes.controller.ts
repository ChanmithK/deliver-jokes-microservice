import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { JokesService } from './jokes.service';
import { Jokes } from './entities/joke.entity';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Get('random')
  async getRandomJoke(@Query('type') type: string) {
    return this.jokesService.getRandomJoke(type);
  }

  @Get('types')
  async getJokeTypes() {
    return this.jokesService.getJokeTypes();
  }

  @Post('add')
  async addJoke(@Body() joke: Jokes) {
    return this.jokesService.addJoke(joke);
  }

  @Delete('delete/:jokeId')
  async deleteJoke(@Param('jokeId') jokeId: string) {
    console.log(jokeId);
    return this.jokesService.deleteJoke(jokeId);
  }
  //   @Put('update/:id')
  //   async updateJoke(@Param('id') id: number, @Body() joke: Jokes) {
  //     return this.jokesService.updateJoke(id, joke);
  //   }
}
