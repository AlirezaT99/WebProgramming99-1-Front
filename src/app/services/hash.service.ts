import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResultType} from '../models/ResultType';

@Injectable()
export class HashService {

  constructor(private http: HttpClient) {
  }

  private port = '8080';
  private baseUrl = `${location.hostname}:${this.port}`;

  public async getResult(num1: string, num2: string, backend: string): Promise<ResultType> {
    return new Promise<ResultType>((resolve) => {
      this.http.post(`http://${this.baseUrl}/${backend}/sha256`, {num1, num2}).subscribe((result: ResultType) => {
        resolve(result);
      });
    });
  }

  public async getLine(lineNumber: string, backend: string): Promise<ResultType> {
    return new Promise<ResultType>((resolve) => {
      this.http.get(`http://${this.baseUrl}/${backend}/write?lineNumber=${lineNumber}`).subscribe((result: ResultType) => {
        resolve(result);
      });
    });
  }
}

