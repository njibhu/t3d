/*
Copyright © Tyria3DLibrary project contributors

This file is part of the Tyria 3D Library.

Tyria 3D Library is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Tyria 3D Library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with the Tyria 3D Library. If not, see <http://www.gnu.org/licenses/>.
*/

/**
 * A Logger class for T3D
 *
 * This satic class defines severity levels of messages and provides
 * basic logging functionality. Replacing the reference to
 *
 * @namespace
 * @static
 */

class Logger {
  readonly TYPE_ERROR: number = 4;
  readonly TYPE_WARNING: number = 3;
  readonly TYPE_MESSAGE: number = 2;
  readonly TYPE_PROGRESS: number = 1;
  readonly TYPE_DEBUG: number = 0;

  logFunctions = new Array(5);

  constructor(){
    this.logFunctions[this.TYPE_ERROR] = function (...args: any[]) {
      console.error.apply(console, args);
    };
    
    this.logFunctions[this.TYPE_WARNING] = function (...args: any[]) {
      console.warn.apply(console, args);
    };
    
    this.logFunctions[this.TYPE_MESSAGE] = function (...args: any[]) {
      console.log.apply(console, args);
    };
    
    this.logFunctions[this.TYPE_PROGRESS] = function (...args: any[]) {
      const argArr = args;
      argArr.unshift("Progress: ");
      console.log.apply(console, argArr);
    };
    
    this.logFunctions[this.TYPE_DEBUG] = function (...args: any[]) {
      const argArr = args;
      console.debug.apply(console, argArr);
    };
  }

  /**
   * Main logging method. Takes 1 to N arguments. If there are more than 1 arguments
   * the first argument is interpreted as severity. If there is only one argument
   * severity defaults to
   * {{#crossLink "Logger/TYPE_MESSAGE:property"}}{{/crossLink}}.
   *
   * The following arguments are passed to a logging function matching the
   * severity.
   *

  *
  */
  log(...args: any[]){
    /// Require at least 1 argument
    if (arguments.length === 0) {
      return;
    }
  
    /// Parse arguments to an actual array
    const argArr = args;
  
    /// Default to message if just one argument was passed
    if (argArr.length === 1) {
      argArr.unshift(this.TYPE_MESSAGE);
    }
  
    /// Otherwise 1st arg is severity, log/warn/error
    const severity = Math.max(0, Math.min(this.logFunctions.length, argArr.shift()));
    const logFunc = this.logFunctions[severity];
  
    /// Ouput the rest of the arguments
    logFunc.apply(this, argArr);
  };
}

const logger = new Logger();
export default logger;
