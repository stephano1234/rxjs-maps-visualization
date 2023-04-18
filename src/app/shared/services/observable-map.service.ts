import { Inject, Injectable, InjectionToken, Self } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  ObservedValueOf,
  OperatorFunction,
  concatMap,
  delay,
  exhaustMap,
  filter,
  mergeMap,
  of,
  scan,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
import { ConfigurationService } from './configuration.service';
import Message from '../models/message.model';

const observableMapFunction = {
  'SWITCH_MAP': switchMap,
  'MERGE_MAP': mergeMap,
  'CONCAT_MAP': concatMap,
  'EXHAUST_MAP': exhaustMap,
};

type ObservableMapFunctionType = (project: (value: [string | null, number]) => Observable<Message>) =>
  OperatorFunction<[string | null, number], ObservedValueOf<Observable<Message>>>;

export const OBSERVABLE_MAP_CONFIG = new InjectionToken<ObservableMapConfig>('observable-map.config');

export type ObservableMapConfigOption = keyof typeof observableMapFunction;

export interface ObservableMapConfig {
  map: ObservableMapConfigOption;
}

export function ObservableMapConfigFactory(map: ObservableMapConfigOption) {
  return { map };
}

export interface MessageProcessCommand {
  value: number;
  operation: 'add' | 'addSwitchMap' | 'addExhaustMap' | 'remove' | 'process' | 'noOp';
  processingTime: number;
}

@Injectable()
export class ObservableMapService {

  public readonly loading$: Observable<MessageProcessCommand>;
  public readonly message$: Observable<Message[]>;
  private readonly messages = new BehaviorSubject<string | null>(null);
  private _emittedCount = 0;
  private _processedCount = 0;

  constructor(
    @Inject(OBSERVABLE_MAP_CONFIG) @Self() config: ObservableMapConfig,
    configurationService: ConfigurationService,
  ) {
    const loadingEvent = new BehaviorSubject<MessageProcessCommand>({
      value: 0,
      operation: 'noOp',
      processingTime: 0,
    });
    this.loading$ = loadingEvent.asObservable();
    this.message$ = this.messages.asObservable().pipe(
      filter(message => !!message),
      withLatestFrom(configurationService.processingTime$),
      tap(() => configurationService.generateNewRandomProcessingTime()),
      tap(() => this._emittedCount++),
      tap(([_, processingTime]) => {
        if (config.map === 'SWITCH_MAP') {
          loadingEvent.next({
            value: this._emittedCount,
            operation: 'addSwitchMap',
            processingTime,
          });
        } else if (config.map === 'EXHAUST_MAP') {
          loadingEvent.next({
            value: this._emittedCount,
            operation: 'addExhaustMap',
            processingTime,
          });
        } else {
          loadingEvent.next({
            value: this._emittedCount,
            operation: 'add',
            processingTime,
          });
        }
      }),
      (observableMapFunction[config.map] as ObservableMapFunctionType)(([message, processingTime]) =>
        of(new Message(message as string, ++this._processedCount)).pipe(
          tap((message) => loadingEvent.next({
            value: message.sentOrder,
            operation: 'process',
            processingTime,
          })),
          delay(processingTime),
          tap((message) => loadingEvent.next({
            value: message.sentOrder,
            operation: 'remove',
            processingTime,
          })),
        )
      ),
      tap(() => {
        if (config.map === 'EXHAUST_MAP') {
          this._processedCount = this._emittedCount;
        }
      }),
      scan((messages, message) => [message, ...messages], [] as Message[]),
    );
  }

  public get emittedCount(): number {
    return this._emittedCount;
  }

  public get processedCount(): number {
    return this._processedCount;
  }

  public sendMessage(message: string | null): void {
    this.messages.next(message);
  }

}
