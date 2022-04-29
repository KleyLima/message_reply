import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('MATH_SERVICE') private client: ClientProxy) {}
  getHello(): Observable<any> {
    const pattern = 'job:getInfo';
    const payload = { jobId: 'example_python_operato' };
    const na = this.client.send<string>(pattern, payload);
    console.log(typeof na);
    console.log(JSON.stringify(na, null, 4));

    return na;
  }
}
