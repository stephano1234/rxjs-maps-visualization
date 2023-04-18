import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { OrdinalNumberPipe } from "../pipes/ordinal-number.pipe";
import { UnitNumberPipe } from "../pipes/unit-number.pipe";

@Component({
  selector: 'app-message-form',
  template: `
    <div class="row col-12 col-lg-9 col-xxl-6 m-0 mb-3 p-0">
      <div class="col-12 col-md-9 m-0 mb-3 mb-md-0 p-0 pe-md-2">
        <input [(ngModel)]="message"
          placeholder="Enter message"
          class="form-control"
          type="text">
      </div>
      <div class="col-12 col-md-3 m-0 p-0 ps-md-2">
        <button [ngClass]="{disabled: !message}"
          (click)="clickSendMessage()"
          class="btn btn-dark w-100"
          type="button">
          Send {{(messageCount + 1) | ordinalNumber }} message
        </button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    OrdinalNumberPipe,
    UnitNumberPipe,
    CommonModule,
    FormsModule,
  ]
})
export class MessageFormComponent {

  message: string | null = null;

  @Input()
  public messageCount = 0;

  @Output()
  public sendMessage = new EventEmitter<string | null>();

  public clickSendMessage() {
    this.sendMessage.emit(this.message);
  }

}
