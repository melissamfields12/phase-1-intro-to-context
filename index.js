// Your code here
//Employees always check in and check out, and on the hour and never cross over work days
//Time is represented on a 24-hour clock
//When timestamps are needed, they will be provided as strings in the form "2018-01-01 2300"

// * **Argument(s)**
//   * A 4-element Array of a `String`, `String`, `String`, and `Number`
//     corresponding to a first name, family name, title, and pay rate per hour
// * **Returns**
//   * JavaScript `Object` with keys:
//     * `firstName`
//     * `familyName`
//     * `title`
//     * `payPerHour`
//     * `timeInEvents`
//     * `timeOutEvents`
// * **Behavior**
//   * Loads `Array` elements into corresponding `Object` properties.
//     _Additionally_, initialize empty `Array`s on the properties `timeInEvents`
//     and `timeOutEvents`.
function createEmployeeRecord([string1, string2, string3, number1]) {
    let employeeRecord = {
        firstName: `${string1}`, 
        familyName: `${string2}`,
        title: `${string3}`,
        payPerHour: `${number1}`,
        timeInEvents: [],
        timeOutEvents: [],
    }
    return employeeRecord;
}