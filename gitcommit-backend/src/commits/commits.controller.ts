import { Controller, Get } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { map, Observable } from 'rxjs';
import { MockCommitsService } from './utils/mock.service';
import { Commit } from './interface/commit.interface';
import { AxiosResponse } from 'axios';

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
    return this.commitsService.getCommits().pipe(
      map((res) => {
        return res.data;
      }),
    );
  }

  /**
   * Returns Observable containing the `promise` that returns 
   * the mock data collected from github
   * 
   * @returns Observable<Commit[]>
   */
   @Get('mock')
   commitsMock(): Observable<Commit[]> {
     return this.mockService.getMockCommits()
   }
}
