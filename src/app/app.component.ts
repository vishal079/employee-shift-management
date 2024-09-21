import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Employee } from './Models/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Employee Shift Management';
  employeeShiftForm!: FormGroup;
  lstEmployee: Employee[] = [];

  ngOnInit(): void {
    this.employeeShiftForm = new FormGroup({
      "Name": new FormControl(null, [Validators.required]),
      "Type": new FormControl(null, [Validators.required]),
      "Shift": new FormControl(null, [Validators.required]),
      "ShiftDate": new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.employeeShiftForm.markAllAsTouched();
    if (this.employeeShiftForm.valid) {
      let emp: Employee = { Name: '', Type: '', Shift: '', ShiftDate: new Date() };
      emp.Name = this.employeeShiftForm.get('Name')?.value;
      emp.Type = this.employeeShiftForm.get('Type')?.value;
      emp.Shift = this.employeeShiftForm.get('Shift')?.value;
      emp.ShiftDate = this.employeeShiftForm.get('ShiftDate')?.value;
      this.lstEmployee.push(emp);
    }
    else {
      console.log("Invalid Form values");
    }
  }
}
