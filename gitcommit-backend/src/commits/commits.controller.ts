import { Controller, Get } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { Observable, of } from 'rxjs';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  commits(): Observable<any[]> {
    return of([])
  }
}
