export interface Person { }

export function hireDeveloper(): void { }

// Default item exported from this module
export default class Employee { }

class Manager { } // Not accessible outside the module

// Export Statememnt:
export { Manager as StaffMember }; // "as" keyword is only available for exports declared later on

// Importing from a Module:
// import { Person, hireDeveloper } from './exporting-and-importing-modules'
// import Worker from './example' (will pull in default that is exported from that file and automatically rename it)
// import { StaffMember as CoWorker } from './example' (can use "as" keyword in imports too)
// import * as HR from './example' (imports everything from the file specified)
    // HR.hireDeveloper() --> this is how you cann specific functions from that import

// ./ indicates the same directory as the file that you are currently in