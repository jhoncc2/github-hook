import { Controller, Get } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { Observable, of } from 'rxjs';
import { MockData } from './utils/mock';
import { MockCommitsService } from './utils/mock.service';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService, 
              private mockService: MockCommitsService) {}

  @Get()
  commits(): Observable<any[]> {
    return this.mockService.getMockCommits()
  }
}
