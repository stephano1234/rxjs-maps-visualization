import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { ProcessingTimeForm } from "../services/configuration.service";

@Directive({
  selector: '[appProcessTimeConsistency]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ProcessTimeConsistencyDirective,
      multi: true,
    }
  ],
})
export class ProcessTimeConsistencyDirective implements Validator {

  validate(group: AbstractControl<ProcessingTimeForm>): ValidationErrors | null {
    const error = { processTimeConsistency: { inconsistency: true } };
    return group.value?.minProcessingTime <= group.value?.maxProcessingTime ? null : error;
  }

}
