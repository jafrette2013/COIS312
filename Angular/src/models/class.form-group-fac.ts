/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* istanbul ignore file */
/**
 * This file is generated by the openapi-ts-generator
 * #form-group-factory.ts.hbs
 * For issues or feature request, visit the repo: https://github.com/ikemtz/openapi-ts-generator
 * Do not edit.
 */
import { FormControl, FormArray, FormGroup, Validators } from '@angular/forms'; //NOSONAR
import { IClassForm } from './class.form';
import { ICourseForm } from './course.form';
import { CourseFormGroupFac } from './course.form-group-fac';
import { IStaffForm } from './staff.form';
import { StaffFormGroupFac } from './staff.form-group-fac';
import { IStudentClassForm } from './student-class.form';

export function ClassFormGroupFac(): FormGroup<IClassForm> {
  return new FormGroup<IClassForm>({
    id: new FormControl<number | null | undefined>(null),
    staffId: new FormControl<number | null | undefined>(null),
    courseId: new FormControl<number | null | undefined>(null),
    startDate: new FormControl<Date | null | undefined>(null),
    course: new FormGroup<ICourseForm>(CourseFormGroupFac().controls),
    staff: new FormGroup<IStaffForm>(StaffFormGroupFac().controls),
    studentClasses: new FormArray<FormGroup<IStudentClassForm>>([]),
  });
}
