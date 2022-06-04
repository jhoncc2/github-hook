import { Controller, Get } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { Observable, of } from 'rxjs';
import { MockData } from './utils/mock';
import { MockCommitsService } from './utils/mock.service';

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
   * @returns Observable<any[]>
   */
  @Get()
  commits(): Observable<any[]> {
    return this.mockService.getMockCommits()
  }
}
