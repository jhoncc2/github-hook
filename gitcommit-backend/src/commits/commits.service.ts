import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Commit } from './interface/commit.interface';

/**
 * This class contains methods that access REST API endpoints
 */
@Injectable()
export class CommitsService {
  static commitsUrl =
    'https://api.github.com/repos/jhoncc2/github-hook/commits';

  constructor(private httpService: HttpService) {}

  /**
   * Returns data of commits wrapped in an Observable.
   *
   * @returns Observable<Commit[]> Array of commits
   */
  getCommits(): Observable<AxiosResponse<Commit[]>> {
    const res = this.httpService.get(CommitsService.commitsUrl);

    // TODO: remove: log data
    res.subscribe((a) => {
      console.log(a.data[0]);
    });

    return res;
  }
}
