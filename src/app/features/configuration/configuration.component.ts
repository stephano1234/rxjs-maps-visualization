import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ConfigurationService } from '../../shared/services/configuration.service';
import { ProcessTimeConsistencyDirective } from '../../shared/directives/process-time-consistency.directive';
import { ErrorMessagePipe } from '../../shared/pipes/error-message.pipe';

@Component({
  selector: 'app-configuration',
  template: `
    <div class="container-fluid">
      <form #form="ngForm"
        (ngSubmit)="save(form)">
        <ng-container ngModelGroup="processTime"
          #processTimeGroup="ngModelGroup"
          appProcessTimeConsistency>
          <div class="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 mb-4 position-relative">
            <label for="minProcessingTime"
              class="form-label">
              Minimum processing time (ms)
            </label>
            <input [(ngModel)]="minProcessingTime"
              #minProcessingTimeControl="ngModel"
              [ngClass]="{
                'is-invalid': minProcessingTimeControl.invalid ||
                  processTimeGroup.hasError('processTimeConsistency')
              }"
              id="minProcessingTime"
              name="minProcessingTime"
              class="form-control"
              type="number"
              required
              min="0"
              max="10000"/>
            <div class="invalid-feedback position-absolute">
              {{ minProcessingTimeControl.control.errors | errorMessage }}
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 mb-4 position-relative">
            <label for="maxProcessingTime"
              class="form-label">
              Maximum processing time (ms)
            </label>
            <input [(ngModel)]="maxProcessingTime"
              #maxProcessingTimeControl="ngModel"
              [ngClass]="{
                'is-invalid': maxProcessingTimeControl.invalid ||
                  processTimeGroup.hasError('processTimeConsistency')
              }"
              id="maxProcessingTime"
              name="maxProcessingTime"
              class="form-control"
              type="number"
              required
              min="0"
              max="10000"/>
            <div class="invalid-feedback position-absolute">
              {{ maxProcessingTimeControl.control.errors | errorMessage }}
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 pt-2">
            <button class="btn btn-dark w-100"
              [ngClass]="{ disabled: form.invalid }"
              type="submit">
              Save
            </button>
            <div *ngIf="processTimeGroup.hasError('processTimeConsistency')"
              class="invalid-feedback-group">
              The minimum processing time must be lower or equal than the maximum processing time!
            </div>
          </div>
        </ng-container>
      </form>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ProcessTimeConsistencyDirective,
    ErrorMessagePipe,
    CommonModule,
    FormsModule,
  ],
})
export class ConfigurationComponent implements OnDestroy {

  minProcessingTime!: number;
  maxProcessingTime!: number;
  private readonly sub: Subscription;

  constructor(private readonly service: ConfigurationService) {
    this.sub = service.form$.subscribe((processTime) => {
      this.minProcessingTime = processTime.minProcessingTime;
      this.maxProcessingTime = processTime.maxProcessingTime;
    });
  }

  save(form: NgForm) {
    if (form.valid) {
      this.service.setProcessingTime(form.value.processTime);
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
