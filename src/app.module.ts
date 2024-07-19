import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Jokes } from './jokes/entities/joke.entity';
import { JokesModule } from './jokes/jokes.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    JokesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql12.freesqldatabase.com',
      port: 3306,
      username: 'sql12720826',
      password: '1DqtBRkfWs',
      database: 'sql12720826',
      entities: [Jokes],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
