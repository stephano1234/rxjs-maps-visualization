import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OBSERVABLE_MAP_CONFIG, ObservableMapConfigFactory, ObservableMapService } from '../../shared/services/observable-map.service';
import { MessageTableComponent } from '../../shared/components/message-table.component';
import { CommonModule } from '@angular/common';
import { MessageFormComponent } from '../../shared/components/message-form.component';
import { MessageStreamComponent } from 'src/app/shared/components/message-stream.component';

@Component({
  selector: 'app-concat-map',
  template: `
    <div class="container-fluid">
      <h4 class="ps-2 pb-3 m-0">Concat Map Stream</h4>
      <app-message-form
        [messageCount]="service.emittedCount"
        (sendMessage)="sendMessage($event)"
      ></app-message-form>
      <app-message-stream></app-message-stream>
      <app-message-table [messages]="service.message$ | async"></app-message-table>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MessageFormComponent,
    MessageStreamComponent,
    MessageTableComponent,
    CommonModule,
  ],
  providers: [
    ObservableMapService,
    {
      provide: OBSERVABLE_MAP_CONFIG,
      useValue: ObservableMapConfigFactory('CONCAT_MAP')
    },
  ]
})
export class ConcatMapComponent {

  constructor(public readonly service: ObservableMapService) { }

  sendMessage(message: string | null): void {
    this.service.sendMessage(message);
  }

}
