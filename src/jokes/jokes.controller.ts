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

  /**
   * Get a random joke, optionally filtered by type.
   * @param type Optional joke type filter.
   */
  @Get('random')
  async getRandomJoke(@Query('type') type: string) {
    return this.jokesService.getRandomJoke(type);
  }

  /**
   * Get a list of joke types.
   */

  @Get('types')
  async getJokeTypes() {
    return this.jokesService.getJokeTypes();
  }

  /**
   * Add a new joke.
   * @param joke Joke data to add.
   */
  @Post('add')
  async addJoke(@Body() joke: Jokes) {
    return this.jokesService.addJoke(joke);
  }

  /**
   * Delete a joke by ID.
   * @param jokeId ID of the joke to delete.
   */

  @Delete('delete/:jokeId')
  async deleteJoke(@Param('jokeId') jokeId: string) {
    console.log(jokeId);
    return this.jokesService.deleteJoke(jokeId);
  }
}
