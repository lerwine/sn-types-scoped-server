
/**
 * Query operator values that can be used for string value comparisons.
 */
 declare type StringQueryOperator = "=" | "!=" | "IN" | "NOT IN" | "STARTSWITH" | "ENDSWITH" | "CONTAINS" | "DOES NOT CONTAIN" | "INSTANCEOF";

 /**
  * Query operator values that can be used for numerical operations.
  */
 declare type NumberQueryOperator = "=" | "!=" | ">" | ">=" | "<" | "<=";
 
 /**
  * Query operator values.
  */
 declare type QueryOperator = StringQueryOperator | NumberQueryOperator;
 
declare namespace global {
    /**
     * ArrayUtil API is a script include with useful functions for working with JavaScript arrays.
     * @export
     * @class ArrayUtil
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/ArrayUtil/concept/c_ArrayUtilAPI.html}
     */
    export class ArrayUtil  {
        /**
         * Merge two arrays.
         * @template T - The element type,
         * @param {T[]} parent - An array to merge.
         * @param {T[]} child - An array to merge.
         * @return {T[]} An array of elements from both input arrays. Duplicates are not removed.
         * @memberof ArrayUtil
         */
        concat<T>(parent: T[], child: T[]): T[];
        
        /**
         * Searches the array for the specified element.
         * @template T - The element type,
         * @param {T[]} array
         * @param {T} element
         * @return {boolean} True if the element exists in the array; otherwise returns false.
         * @memberof ArrayUtil
         */
        contains<T>(array: T[], element: T): boolean;
        
        /**
         * Converts a Java object to an array.
         * @param {*} a - Object to convert.
         * @return {any[]} Array created from the object.
         * @memberof ArrayUtil
         */
        convertArray(a: any): any[];
        /**
         * Finds the differences between two or more arrays.
         * @template T - The element type.
         * @param {T[]} a - The first array.
         * @param {T[]} b - The second array.
         * @param {...T[]} c - Zero or more additional arrays.
         * @return {T[]} - Returns an array of items from array a that were not found in any other input array. Duplicates are removed from the result.
         * @memberof ArrayUtil
         */
        diff<T>(a: T[], b: T[], ...c: T[]): T[];
        
        /**
         * Returns an array from the specified object.
         * @param {*} obj - Object from which to create an array.
         * @return {any[]} Array created from the object.
         * @memberof ArrayUtil
         */
        ensureArray(object: any): any[];
        
        /**
         * Searches the array for the element.
         * @template T - The element type.
         * @param {T} array - Array to search.
         * @param {T} element - Element to search for.
         * @param {number} [startIndex] - The optional zero-based index to start searching from.
         * @return {number} Zero-based position of the element in the array, or -1 if the element is not found.
         * @memberof ArrayUtil
         */
        indexOf<T>(array: T, element: T, startIndex?: number): number;
        
        /**
         * Finds the elements present in all arrays.
         * @template T - The element type.
         * @param {T[]} a - The first array.
         * @param {T[]} b - The second array.
         * @param {...T[]} c - Zero or more additional arrays.
         * @return {T[]} An array of elements from array a that were found in all of the other input arrays. Duplicates are removed.
         * @memberof ArrayUtil
         */
        intersect<T>(a: T[], b: T[], ...c: T[]): T[];
        /**
         * Merge two or more arrays.
         * @template T - The element type.
         * @param {T[]} a - The first array.
         * @param {T[]} b - The second array.
         * @param {...T[]} c - Zero or more additional arrays.
         * @return {T[]} An array of items from all the input arrays. Duplicates are removed.
         * @memberof ArrayUtil
         */
        union<T>(a: T[], b: T[], ...c: T[]): T[];
        
        /**
         * Removes duplicate items from an array.
         * @template T - The element type.
         * @param {T[]} a - The array to check for duplicate elements.
         * @return {T[]} An array of unique items from the input array.
         * @memberof ArrayUtil
         */
        unique<T>(a: T[]): T[];
    }
    
    /**
     * JavaScript utility functions.
     * @export
     * @class JSUtil
     * @description https://inscomscd.servicenowservices.com/nav_to.do?uri=sys_script_include.do?sys_id=8d5571660a0a0b5000fc97b926f7f750
     */
     export class JSUtil {
        /**
         * Returns a map (Object) that is the union of all the given maps.
         */
        static union(...maps: { [key: string]: any }[]): { [key: string]: any };

        /**
        * Removes entries from the given map.  The second argument defines what will be removed.  If it 
        * is an array, it is treated as an array of names to remove.  If it is an object, the names of
        * its properties are the names to remove.  Otherwise, it is coerced to a string as the name of
        * the single item to remove.
        */
        static removeFromMap(map: { [key: string]: any }, names: any): void;
        
        /*
        *  Returns true if item is defined but has no properties or functions. (handy for associative arrays)
        */
        static isEmpty(item: any): boolean;

        /*
        * Returns true if the given item is not null and is not undefined.
        */
        static has(item: any): boolean;

        /*
        * Returns true if the given item is null or is undefined (the logical inverse of .has(), above).
        */
        static doesNotHave(item: any): boolean;

        /*
        * Returns true if the given item is null, undefined, or evaluates to the empty string.
        */
        static nil(item: any): boolean;

        /*
        * Returns true if the given item exists and is not empty (the logical inverse of .nil(), above).
        */
        static notNil(item: any): boolean;

        /*
        * Returns the Rhino global object.
        */
        static getGlobal(): any;

        /*
        * Returns true if the given item is a member of the given class.  For JavaScript objects, this method behaves exactly
        * like the JavaScript operator "instanceof".  However, this method (unlike the JavaScript operator) also tests Java
        * objects.
        * 
        * item: the object to be tested.
        * klass: the class to be tested (for Java objects, must be the complete class name, like "java.util.ArrayList").
        */
        static instance_of(item: any, klass: string): boolean;

        /*
        * Returns the type of the given value as a string, as follows:
        *   'null'     if the given value is null or undefined
        *   'string'   if the given value is a primitive string or a String wrapper instance
        *   'number'   if the given value is a primitive number or a Number wrapper instance
        *   'boolean'  if the given value is a primitive boolean or a Boolean wrapper instance
        *   'function' if the given value is a function
        *   'object'   otherwise (including if it is a Java object)
        * 
        * See also: typeOf() which returns these or for Objects implented with 'type:' (such as 
        *           Script Includes that use our default boilerplate), this returns that type
        *           which is intended to be the Javascript 'className' of the object.  
        */
        static type_of(value: any): string;


        /**
        * Returns the type of the given value.  
        * 
        * If 'x' is JavaObject, then this is the class name,
        *
        * If 'x' is a JavaScript object from a JS Class (like our Script Include boilerplate) 
        * then this is the value of the 'type' property which is meant to be the JavaScript
        * class name,
        *
        * If 'x' is a JavaScript Array, then this returns 'array',
        *
        * If 'x' is a JavaScript Date, this returns 'date'
        *
        * Otherwise this returns the JavaScript type: string, number, boolean or object as per 
        * the type_of method (above).
        *
        * See Also: type_of
        */
        static typeOf(x: any): string;

        /*
        * Returns true if the given value is an instance of a Java object.
        */
        static isJavaObject(value: any): boolean;

        /*
        * Coerces the given item to a boolean.  If the given item is a boolean, it is passed through.  Non-zero numbers return true.  Null or
        * undefined returns false.  Strings return true only if exactly equal to 'true'.  
        */
        static toBoolean(item: any): boolean;

        /*
        * Returns the value in a boolean GlideRecord field.
        */
        static getBooleanValue(gr: GlideRecord, field: string): boolean;

        /**
        * Determines whether a value exists within an object or not.
        * @param {} container The haystack to search within.
        * @param {} value The expected needle value to compare against.
        * @param boolean|undefined compareByIdentity If true, uses === for comparison; == otherwise.
        * @return True if value exists in container, False otherwise.
        */
        static contains(container: any, value: any, compareByIdentity?: boolean): boolean;

        /*
        * Returns true if the two given values are equivalent, and optionally logs any differences.  The two
        * values may be any value - JavaScript primitives or objects.  Objects of classes Object, Array, Date,
        * String, Boolean, and Number are all compared correctly and (as necessary) recursively.  Note that 
        * comparand types much match exactly - for the purposes of this comparison, 'abc' does NOT match
        * new String('abc').  If differences are logged, they may be retrieved from JSUtil.areEqualLog.
        */
        static areEqual(val1: any, val2: any, logDiff?: boolean): boolean;

        /*
        * Logs all the properties (recursively) in the given object: name, type, and value.  The optional second parameter is a name for the logged object.
        */
        static logObject(obj: any, name: string): void;

        /*
        * Returns a string that recursively describes all the properties in the given object: name, type, and value.  
        * The optional second parameter is a name for the logged object.
        */
        static describeObject(obj: any, name?: string): string;

        /*
        * NOTE: between this banner and the following banner, several string literals are specified in an odd way: by the contatenation of a single
        *       character ('&') and the remainder of the HTML entity (such as 'amp;').  This method was employed to avoid having the entities translated 
        *       into the equivalent characters when the script include is edited in the instance.
        */
        static readonly AMP: RegExp;
        static readonly GT: RegExp;
        static readonly LT: RegExp;
        static readonly QT: RegExp;
        static readonly AMP_ENT: RegExp;
        static readonly GT_ENT: RegExp;
        static readonly LT_ENT: RegExp;
        static readonly QT_ENT: RegExp;

        static escapeText(text: string): string;

        static unescapeText(text: string): string;

        static escapeAttr(attr: string): string;

        static unescapeAttr(attr: string): string;

        /** Render an expanded/evaluted string from a string that may contain one
        *  or more Javascript expressions, each wrapped in a dolloar-braces 
        *  delimiter pattern. 
        *
        *     'The timeis:${newGlideDateTime()}'
        *
        *  will displaythecurrenttime.
        *
        *  When used in specific contexts, such as inside a workflow context
        *  certain global variables might be usable such as 'current' or 'workflow':
        *
        *      'WF State:${context.state},rec:${current.sys_id}'
        *  
        *  and content can be substituted into data from various Javascripts:
        *
        *      <CREATED>${newGlideDateTime()}</CREATED>
        * 
        *  WARNING: This is used heavily by workflows.  If this is changed, then 
        *           be sure to run all workflow tests. Test Log Message activity
        *           with ${workflow.variables.somevariable} and similar usages.
        */
        static strEval(str: string): string;
    }

}