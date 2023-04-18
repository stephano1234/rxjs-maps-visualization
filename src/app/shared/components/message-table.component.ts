import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { OrdinalNumberPipe } from "../pipes/ordinal-number.pipe";
import { animate, keyframes, style, transition, trigger } from "@angular/animations";
import Message from "../models/message.model";

@Component({
  selector: 'app-message-table',
  template: `
    <h5 class="p-2 m-0">Processed messages</h5>
    <div class="overflow-hidden">
      <table class="table table-hover fixed">
        <thead>
          <tr>
            <th class="col">Message</th>
            <th class="col">Sent message position</th>
          </tr>
        </thead>
        <tbody>
          <tr @row *ngFor="let message of messages">
            <td>{{ message.value }}</td>
            <td>{{ message.sentOrder | ordinalNumber }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .fixed {
      table-layout: fixed;
    }
  `],
  animations: [
    trigger('row', [
      transition('void => *', [
        animate('1s ease-out', keyframes([
          style({ transform: 'translateX(100%)' }),
          style({ transform: 'translateX(0%)' }),
        ]))
      ])
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    OrdinalNumberPipe,
    CommonModule,
  ],
})
export class MessageTableComponent {

  @Input()
  public messages: Message[] | null = null;

}
