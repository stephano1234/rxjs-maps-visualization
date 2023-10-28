import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { Observable, scan } from "rxjs";
import { ObservableMapService } from "../services/observable-map.service";
import { OrdinalNumberPipe } from "../pipes/ordinal-number.pipe";
import { UnitNumberPipe } from "../pipes/unit-number.pipe";
import { ProcessedTimePipe } from "../pipes/processed-time.pipe";

type ProcessMessageInformation = {
  position: number;
  status: 'waiting' | 'processed';
  processingTime: number;
};

@Component({
  selector: 'app-message-stream',
  template: `
    <h5 class="p-2">Stream pipeline</h5>
    <div *ngIf="message$ | async as messages"
      class="pipeline mb-3 ps-2">
      <h6 *ngIf="!messages.length"
        class="empty-text text-secondary">
        The stream is empty.
      </h6>
      <div *ngFor="let message of messages"
        class="progress data">
        <div [@dataProgress]="{
            value: message.status,
            params: { processingTime: message.processingTime | unitNumber: 'ms' }
          }"
          class="progress-bar bg-secondary">
        </div>
        <div class="data-text">
          {{ message.position | ordinalNumber }}: {{ message.processingTime | processedTime }}
        </div>
      </div>
    </div>
  `,
  styles: [`
    .pipeline {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      row-gap: 0.5rem;
      column-gap: 0.5rem;
    }
    .empty-text {
      height: 2rem;
      margin: 0rem;
    }
    .data {
      position: relative;
      width: 6rem;
      height: 2rem;
    }
    .data-text {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `],
  animations: [
    trigger('dataProgress', [
      state('*', style({ width: '0%' })),
      state('waiting', style({ width: '0%' })),
      state('processed', style({ width: '100%' })),
      transition('* => processed', [
        animate('{{ processingTime }} linear'),
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    OrdinalNumberPipe,
    UnitNumberPipe,
    ProcessedTimePipe,
    CommonModule,
  ]
})
export class MessageStreamComponent {

  readonly message$: Observable<ProcessMessageInformation[]>;

  constructor(observableMapService: ObservableMapService) {
    this.message$ = observableMapService.loading$.pipe(
      scan((messages, command) => {
        const index = messages.findIndex(m => m.position === command.value);
        let newMessages: ProcessMessageInformation[];
        switch (command.operation) {
          case 'add':
            newMessages = [...messages, {
              position: command.value,
              status: 'waiting',
              processingTime: command.processingTime,
            }];
            break;
          case 'addSwitchMap':
            newMessages = [...messages.slice(1), {
              position: command.value,
              status: 'waiting',
              processingTime: command.processingTime,
            }];
            break;
          case 'addExhaustMap':
            newMessages = messages.length ? messages : [{
              position: command.value,
              status: 'waiting',
              processingTime: command.processingTime,
            }];
            break;
          case 'remove':
            newMessages = [
              ...messages.slice(0, index),
              ...messages.slice(index + 1)
            ];
            break;
          case 'process':
            newMessages = [
              ...messages.slice(0, index),
              {
                position: command.value,
                status: 'processed',
                processingTime: command.processingTime,
              },
              ...messages.slice(index + 1)
            ];
            break;
          default:
            newMessages = [...messages];
            break;
        }
        return newMessages;
      }, [] as ProcessMessageInformation[]),
    );
  }

}
