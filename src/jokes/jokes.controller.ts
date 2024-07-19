import { Controller, Get, Query } from '@nestjs/common';
import { JokesService } from './jokes.service';

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
}
