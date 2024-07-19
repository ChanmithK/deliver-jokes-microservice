import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Jokes } from './entities/joke.entity';

@Injectable()
export class JokesService {
  constructor(
    @InjectRepository(Jokes)
    private jokesRepository: Repository<Jokes>,
  ) {}

  async getRandomJoke(type: string): Promise<Jokes> {
    const jokes = await this.jokesRepository.find({ where: { type } });
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
  }

  async getJokeTypes(): Promise<string[]> {
    try {
      const jokes = await this.jokesRepository.find();
      console.log('Fetched all jokes:', jokes);
      const uniqueTypes = [...new Set(jokes.map((joke) => joke.type))];
      console.log('Unique joke types:', uniqueTypes);
      return uniqueTypes;
    } catch (error) {
      console.error('Error fetching joke types:', error);
      throw error;
    }
  }

  async addJoke(joke: Jokes): Promise<Jokes> {
    return this.jokesRepository.save(joke);
  }

  async deleteJoke(jokeId: string): Promise<void> {
    const joke = await this.jokesRepository.findOne({
      where: { jokeId: jokeId },
    });
    if (!joke) {
      throw new NotFoundException(`Joke with ID ${jokeId} not found`);
    }
    await this.jokesRepository.remove(joke);
  }
}
