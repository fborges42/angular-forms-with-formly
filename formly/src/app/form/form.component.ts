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
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'John Legend',
        required: true,
      },
    },
    {
      key: 'address',
      type: 'input',
      templateOptions: {
        label: 'IP Address',
        placeholder: '192.168.1.1',
        required: true,
      },
      validators: {
        validation: ['ip'],
      },
    },
    {
      key: 'env',
      type: 'radio',
      templateOptions: {
        label: 'Environment',
        required: true,
        options: [
          { value: 1, label: 'Develop' },
          { value: 2, label: 'E2E' },
          { value: 3, label: 'PRE-PROD' },
          { value: 4, label: 'PROD', disabled: true },
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
