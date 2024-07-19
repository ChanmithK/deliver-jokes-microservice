import { Module } from '@nestjs/common';
import { JokesController } from './jokes.controller';
import { JokesService } from './jokes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jokes } from './entities/joke.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Jokes])],
  controllers: [JokesController],
  providers: [JokesService],
})
export class JokesModule {}
