import { Pipe, PipeTransform } from "@angular/core";
import { ValidationErrors } from "@angular/forms";

@Pipe({
  name: 'errorMessage',
  standalone: true,
})
export class ErrorMessagePipe implements PipeTransform {

  transform(errors: ValidationErrors | null) {
    if (!errors) {
      return '';
    }
    let message = '';
    Object.entries(errors).forEach(([error, params]) => {
      switch (error) {
        case 'required':
          message = 'This field is required!';
          break;
        case 'min':
          message = `This value must be greater or equal than ${params.min}!`;
          break;
        case 'max':
          message = `This value must be lower or equal than ${params.max}!`;
          break;
        default:
          break;
      }
    });
    return message;
  }

}
