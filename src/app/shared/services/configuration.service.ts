import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map, withLatestFrom } from "rxjs";

export interface ProcessingTimeForm {
  minProcessingTime: number;
  maxProcessingTime: number;
}

@Injectable({ providedIn: 'root' })
export class ConfigurationService {

  private readonly form = new BehaviorSubject<ProcessingTimeForm>({
    minProcessingTime: 1000,
    maxProcessingTime: 3000,
  });
  public readonly form$: Observable<ProcessingTimeForm>;
  private readonly processingTimeEvent = new BehaviorSubject<void>(undefined);
  public readonly processingTime$: Observable<number>;

  constructor() {
    this.form$ = this.form.asObservable();
    this.processingTime$ = this.processingTimeEvent.asObservable().pipe(
      withLatestFrom(this.form),
      map(([_, form]) =>
        Math.random() * (form.maxProcessingTime - form.minProcessingTime) + form.minProcessingTime
      ),
    );
  }

  public setProcessingTime(processingTime: ProcessingTimeForm) {
    this.form.next(processingTime);
  }

  public generateNewRandomProcessingTime() {
    this.processingTimeEvent.next();
  }

}
