/* istanbul ignore file */
/**
 * This file is generated by the openapi-ts-generator
 * #model.ts.hbs
 * For issues or feature request, visit the repo: https://github.com/ikemtz/openapi-ts-generator
 * Do not edit.
 */

import { IClass } from './class.model';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IStaff {
  id?: number | null;
  fullName?: string | null;
  isProfessor?: boolean | null;
  isDirector?: boolean | null;
  classes?: Partial<IClass[]>;
}
