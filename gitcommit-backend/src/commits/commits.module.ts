import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CommitsController } from './commits.controller';
import { CommitsService } from './commits.service';
import { MockCommitsService } from './utils/mock.service';

@Module({
  imports: [
    HttpModule.register({
      // basic configuration
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [CommitsController],
  providers: [CommitsService, MockCommitsService],
})

/**
 * This module contains the controller and service
 * that access github REST API.
 */
export class CommitsModule {}
