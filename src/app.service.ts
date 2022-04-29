import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Observable } from "rxjs";

@Injectable()
export class AppService {
  constructor(@Inject("MATH_SERVICE") private client: ClientProxy) {}
  getHello(dag_ig): Observable<any> {
    const pattern = "job:getInfo";
    const payload = { jobId: dag_ig };
    const na = this.client.send<string>(pattern, payload);

    return na;
  }
}
