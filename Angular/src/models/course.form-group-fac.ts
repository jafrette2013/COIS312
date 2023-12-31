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
import { ICourseForm } from './course.form';
import { IClassForm } from './class.form';
import { IAcademicProgramForm } from './academic-program.form';
import { AcademicProgramFormGroupFac } from './academic-program.form-group-fac';

export function CourseFormGroupFac(): FormGroup<ICourseForm> {
  return new FormGroup<ICourseForm>({
    id: new FormControl<number | null | undefined>(null),
    programId: new FormControl<number | null | undefined>(null),
    name: new FormControl<string | null | undefined>(null),
    classes: new FormArray<FormGroup<IClassForm>>([]),
    program: new FormGroup<IAcademicProgramForm>(AcademicProgramFormGroupFac().controls),
  });
}
