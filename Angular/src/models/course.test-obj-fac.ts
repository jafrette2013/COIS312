/* istanbul ignore file */
/**
 * This file is generated by the openapi-ts-generator
 * #test-object-factory.ts.hbs
 * For issues or feature request, visit the repo: https://github.com/ikemtz/openapi-ts-generator
 * Do not edit.
 */

import { CourseProperties } from './course.properties';

export function createTestCourse() {
    return { 
      [CourseProperties.ID]: 0,
      [CourseProperties.PROGRAM_ID]: 0,
      [CourseProperties.NAME]: 'NAME', 
      [CourseProperties.CLASSES]: [],
      [CourseProperties.PROGRAM]: undefined,
    };
}
