import { LoggingInterceptor } from './shared/logging.interceptor';
import { HttpErrorFilter } from './shared/http-error.filter';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { IdeaModule } from './idea/idea.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
@Module({
  imports: [TypeOrmModule.forRoot(), IdeaModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide:APP_FILTER,
      useClass:HttpErrorFilter,
    },
    {
      provide:APP_INTERCEPTOR,
      useClass:LoggingInterceptor,
    }
  ],
})
export class AppModule {}
