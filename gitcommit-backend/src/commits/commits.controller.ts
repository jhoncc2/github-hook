import { Controller, Get } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { Observable, of } from 'rxjs';
import { MockData } from './utils/mock';
import { MockCommitsService } from './utils/mock.service';
import { Commit } from './interface/commit.interface';

/**
 * Class with endpoints for `/commits` path
 */
@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService, 
              private mockService: MockCommitsService) {}

  /**
   * Returns Observable containing the `promise` that returns 
   * the data collected from github
   * 
   * @returns Observable<Commit[]>
   */
  @Get()
  commits(): Observable<Commit[]> {
    return this.mockService.getMockCommits()
  }
}
