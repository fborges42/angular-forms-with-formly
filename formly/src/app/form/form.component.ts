import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'input',
      type: 'input',
      templateOptions: {
        label: 'Input',
        placeholder: 'Input placeholder',
        required: true,
      },
    },
    {
      key: 'ip',
      type: 'input',
      templateOptions: {
        label: 'IP Address',
        description: 'IP for the machine A',
        required: true,
      },
      validators: {
        validation: ['ip'],
      },
    },
    {
      key: 'radio-1',
      type: 'radio',
      templateOptions: {
        label: 'Radio',
        placeholder: 'this is a placeholder',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 3.5, label: 'Option 3.5' },
          { value: 4, label: 'Option 4', disabled: true },
        ],
      },
    },
  ];

  onSubmit(): void {
    if (this.form.valid) {
      alert(JSON.stringify(this.model, null, 2));
    }
  }
}
