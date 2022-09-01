/// <reference path="$$rhino.d.ts" />
/// <reference path="Packages.d.ts" />
/// <reference path="GlideScriptable.d.ts" />

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
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/JSUtil/concept/c_JSUtilAPI.html}
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
    
    /**
     * Base ajax processor class that other ajax processors extend
     * @export
     * @class AbstractAjaxProcessor
     */
    export class AbstractAjaxProcessor {
        readonly CALLABLE_PREFIX: 'ajaxFunction_';

        // prototype: AbstractAjaxProcessor;
    
        initialize(request?: GlideServletRequest, responseXML?: XMLDocument2, gc?: Packages.com.glide.script.GlideController): void;

        process(): any;

        newItem(name?: string): Packages.org.w3c.dom.Element;

        /**
         * returns value of parameter as a Java String instance
         * @param {string} name - The name of the parameter
         * @return {$$rhino.String} The value of the parameter.
         * @memberof AbstractAjaxProcessor
         */
        getParameter(name: string): $$rhino.Nilable<$$rhino.String>;

        getDocument(): XMLDocument2 | undefined;

        getRootElement(): Packages.org.w3c.dom.Element;

        /**
         * Returns value of "sysparm_name" as a Java String instance
         * @return {$$rhino.Stringg}
         * @memberof AbstractAjaxProcessor
         */
        getName(): $$rhino.String;
    
        /**
         * Returns value of "sysparm_value" as a Java String instance
         * @return {$$rhino.String}
         * @memberof AbstractAjaxProcessor
         */
        getValue(): $$rhino.String;
        
        /**
         * Returns value of "sysparm_type" as a Java String instance
         * @return {$$rhino.String}
         * @memberof AbstractAjaxProcessor
         */
        getType(): $$rhino.String;

        getChars(): $$rhino.String;
        
        setAnswer(value: any): void;
        
        setError(error: any): void;
    }

    /**
     * AttachmentUtils utilities
     * @export
     * @class AttachmentUtils
     */
    export class AttachmentUtils {
        // TODO: Add members for global.AttachmentUtils
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=63f582395f68320011442abd7f4666b7

        type: "AttachmentUtils"
    }

    /**
     * This script does availability calculation given a start and an end date, it considers the availability as well as maintenance commitments
     * along with the schedules attached to the offering.
     * @export
     * @class AvailabilityCalculator
     */
    export class AvailabilityCalculator {
        // TODO: Add members for global.AvailabilityCalculator
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=f68ee4d70a0a0bb900bdb7319b857ce3

        type: "AvailabilityCalculator"
    }

    /**
     * TODO: Document global.AvailabilitySummarizer
     * @export
     * @class AvailabilitySummarizer
     */
    export class AvailabilitySummarizer {
        // TODO: Add members for global.AvailabilitySummarizer
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=f7f5eafb0a0a0bb900720edb23a717ca

        type: "AvailabilitySummarizer"
    }

    /**
     * Utility for Calendar
     * @export
     * @class CalendarUtils
     */
    export class CalendarUtils {
        // TODO: Add members for global.CalendarUtils
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=aa44ba30d7432200465eef637e610304

        type: "CalendarUtils"
    }

    /**
     * If this script include is modified to customize price calculation then the following property: glide.sc.use_custom_pricegenerator must be set to: true
     * @export
     * @class CatalogPriceCalculator
     */
    export class CatalogPriceCalculator {
        // TODO: Add members for global.CatalogPriceCalculator
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=292768ba0a0a0b4400c27a5190b1c3be

        type: "CatalogPriceCalculator"
    }

    /**
     * If this script include is modified to customize price calculation then the following property: glide.sc.use_custom_pricegenerator must be set to: true
     * @export
     * @class CatalogRecurringPriceCalculator
     */
    export class CatalogRecurringPriceCalculator {
        // TODO: Add members for global.CatalogRecurringPriceCalculator
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=756351003701300054b6a3549dbe5dda

        type: "CatalogRecurringPriceCalculator"
    }

    /**
     * TODO: Document global.CatalogServiceFulfillmentStepUtil
     * @export
     * @class CatalogServiceFulfillmentStepUtil
     */
    export class CatalogServiceFulfillmentStepUtil {
        // TODO: Add members for global.CatalogServiceFulfillmentStepUtil
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=61034fcc87122010c84e4561d5cb0ba3

        type: "CatalogServiceFulfillmentStepUtil"
    }

    /**
     * For a given system property which lists out supported content types, this Script Inlcude checks to make sure the associated attachment stored (passed into class as a GlideRecord) has the correct content_type.
     * @export
     * @class ContentTypeValidator
     */
    export class ContentTypeValidator {
        // TODO: Add members for global.ContentTypeValidator
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=85ff0a4c5b6f001001fb0c370581c7fd

        type: "ContentTypeValidator"
    }

    /**
     * Document Viewer : Ajax calls to conversion api.
     * @export
     * @class ConversionRequestUtil
     */
    export class ConversionRequestUtil extends AbstractAjaxProcessor {
        // TODO: Add members for global.ConversionRequestUtil
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=ac8b84849313230004e6dc49157ffbe2

        type: "ConversionRequestUtil"
    }

    /**
     * TODO: Document global.CurrencyConversionTableList
     * @export
     * @class CurrencyConversionTableList
     */
    export class CurrencyConversionTableList {
        // TODO: Add members for global.CurrencyConversionTableList
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=91c38a405b2312008e312a3c11f91ac9

        type: "CurrencyConversionTableList"
    }

    /**
     * Core methods to get a default list of encryptable fields, meant to be leveraged by both Edge and Column Level Encryption.
     * @export
     * @class EncryptionCommons
     */
    export class EncryptionCommons {
        // TODO: Add members for global.EncryptionCommons
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=dffc03e137b33200d62004368e41f10f

        type: "EncryptionCommons"
    }

    /**
     * Choice list for job type field based on user session and 'glide_encryption.cle_replatforming_with_kmf'
     * @export
     * @class EncryptionJobTypeChoices
     */
    export class EncryptionJobTypeChoices {
        // TODO: Add members for global.EncryptionJobTypeChoices
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=8e7fcd5877100010bef6d0adda1061f5

        type: "EncryptionJobTypeChoices"
    }

    /**
     * TODO: Document global.GlideCryptoModule
     * @export
     * @class GlideCryptoModule
     */
    export class GlideCryptoModule {
        // TODO: Add members for global.GlideCryptoModule
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=250a3f78cb103300449b78d5634c9c08

        type: "GlideCryptoModule"
    }

    /**
     * An alternative to GlideRecord to perform CRUD operations on record data from server-side scripts.
     * @export
     * @class GlideQuery
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/GlideQuery/concept/GlideQueryGlobalAPI.html}
     */
    export class GlideQuery {
        // TODO: Add members for global.GlideQuery
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=864c9ebf73631300bb513198caf6a721

        type: "GlideQuery"
    }

    /**
     * TODO: Document global.GlideQueryActions
     * @export
     * @class GlideQueryActions
     */
    export class GlideQueryActions {
        // TODO: Add members for global.GlideQueryActions
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=89cffabe29300010fa9b76addd33871b

        type: "GlideQueryActions"
    }

    /**
     * TODO: Document global.GlideQueryEvaluator
     * @export
     * @class GlideQueryEvaluator
     */
    export class GlideQueryEvaluator {
        // TODO: Add members for global.GlideQueryEvaluator
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=d52b3c8a08013300fa9b4300d8d67a76

        type: "GlideQueryEvaluator"
    }

    /**
     * Utility class for working with GlideRecords.
     * @export
     * @class GlideRecordUtil
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/GlideRecordUtil/concept/c_GlideRecordUtilAPI.html}
     */
    export class GlideRecordUtil {
        // TODO: Add members for global.GlideRecordUtil
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=e403d6dc0ab301530055d5d1ee14f1db

        type: "GlideRecordUtil"
    }

    /**
     * Utility api for supporting client side Grid Canvas layouts.
     * @export
     * @class GridCanvasLoader
     */
    export class GridCanvasLoader extends AbstractAjaxProcessor {
        // TODO: Add members for global.GridCanvasLoader
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=264ff6c1d7230200a8228f0b6e6103ff

        type: "GridCanvasLoader"
    }

    /**
     * Make logging and debugging from Script easier by implementing levels of log output, selectable by per-caller identified sys_properties values.
     * This implements both Log4j style logging and BSD Syslog style logging.  As default, the logger will use BSD style logging.
     * PLEASE CHOOSE ONE AND STICK TO IT (within a class anyhow)
     * @export
     * @class GSLog
     */
    export class GSLog {
        // TODO: Add members for global.GSLog
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=2e59987d0a0a2c3946f7118c070c03e3

        type: "GSLog"
    }

    /**
     * TODO: Document global.ICalUtil
     * @export
     * @class ICalUtil
     */
    export class ICalUtil {
        // TODO: Add members for global.ICalUtil
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=cd165a27c3202200b6dcdfdc64d3aef4

        type: "ICalUtil"
    }

    /**
     * Provides functions to generate iCalendar compliant events.
     * @export
     * @class ICalUtilSNC
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/ICalUtilSNC/concept/c_ICalUtilSNCAPI.html}
     */
    export class ICalUtilSNC {
        // TODO: Add members for global.ICalUtilSNC
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=0944d627c3202200b6dcdfdc64d3aebb

        type: "ICalUtilSNC"
    }

    /**
     * Incident state constants, use these constants when determining which incident state to use.
     * @export
     * @class IncidentState
     */
    export class IncidentState extends AbstractAjaxProcessor {
        // TODO: Add members for global.IncidentState
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=3d9e146f9fa302000391b89a442e7005

        type: "IncidentState"
    }

    /**
     * This function contains utility functions related to Incident . This function should not be modified by the customer.=
     * @export
     * @class IncidentUtilsSNC
     */
    export class IncidentUtilsSNC {
        // TODO: Add members for global.IncidentUtilsSNC
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=a1b5e796531232000600e26b88dc3472

        // * Public functions :
        // *
        // * ajaxFunction_getIncidentQueryParams
        // * ajaxFunction_makeIncidentCopy
        // * ajaxFunction_getKnowledgeGapMapping
        // * isCopyIncidentFlagValid
        // * makeRelatedTableCopy
        // * copyIncidentRelatedLists
        // * copyIncidentAttachments
        // * getCsvValue
        // * getProblemFromIncident

        type: "IncidentUtilsSNC"
    }

    /**
     * Called by processor to create a generic hierarchy diagram.  May be extended to create new types of hierarchy diagrams.
     * @export
     * @class InheritedRoleMapProcessor
     */
    export class InheritedRoleMapProcessor extends AbstractAjaxProcessor {
        // TODO: Add members for global.InheritedRoleMapProcessor
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=5b354e909f0002003d5c77a0942e7042

        type: "InheritedRoleMapProcessor"
    }

    /**
     * Script for checking if table is many to many table
     * @export
     * @class ManyToManyChecker
     */
    export class ManyToManyChecker extends AbstractAjaxProcessor {
        // TODO: Add members for global.ManyToManyChecker
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=8984a7c10f023300fd3e3632d4767e2a

        type: "ManyToManyChecker"
    }

    /**
     * TODO: Document global.NiceError
     * @export
     * @class NiceError
     */
    export class NiceError {
        // TODO: Add members for global.NiceError
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=fc70ddc629230010fa9bf7f97d737e2e

        type: "NiceError"
    }

    /**
     * TODO: Document global.Optional
     * @export
     * @class Optional
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/Optional/concept/OptionalGlobalAPI.html}
     */
    export class Optional<T> {
        /**
         * Creates an instance of Optional.
         * @param {(T | null | undefined)} value - Value to be contained by Optional.
         * @param {({ (): T | null | undefined })} [lazyGetFn] - Function which returns a value.
         * Used when you want the Optional to contain data which may be costly to retrieve (like a query) and may not be necessary.
         * @param {string} [reason] - Reason given when an empty Optional is unwrapped (e.g. using `get()`)
         * @memberof Optional
         */
        constructor(value: T | null | undefined, lazyGetFn?: { (): T | null | undefined }, reason?: string);

        /**
         * Applies a predicate function, a function that takes a single value and returns true or false, to the record inside the Optional object.
         * If the function returns true, the method returns the Optional record unchanged. If the function returns false, it returns an empty Optional object.
         * @param {{ (value: T): boolean }} predicate - Predicate function to apply to the value inside the Optional object.
         * @return {Optional<U>} Object used to interact with a single record.
         * @memberof Optional
         */
        filter(predicate: { (value: T): boolean }): Optional<T>;

        /**
         * Function to apply to the results of the query that returned the Optional object.
         * @template U - The record type.
         * @param {{ (value: T): Optional<U> }} fn - Function to apply to the results of the query that returned the Optional object.
         * @return {Optional<U>} Object used to interact with a single record.
         * @memberof Optional
         */
        flatMap<U>(fn: { (value: T): Optional<U> }): Optional<U>;

        /**
         * Returns the record inside the Optional object, or throws an error if the query does not return a record.
         * @return {T} The record inside the Optional object. If the value is null or undefined, the system throws an error.
         * @memberof Optional
         */
        get(): T;

        /**
         * Applies a function to the record within an Optional object. If the Optional object does not contain a record, the function does not execute.
         * @param {{ (value: T): void }} fn - The function to apply to the record within the Optional object.
         * @memberof Optional
         */
        ifPresent(fn: { (value: T): void }): void;

        /**
         * Tests whether the current Optional contains no value.
         * @return {boolean} True if the current Optional contains no value; otherwise, false.
         * @memberof Optional
         */
        isEmpty(): boolean;

        /**
         * Tests whether the current Optional object contains a value.
         * @return {boolean} True if the current Optional contains a value; otherwise, false.
         * @memberof Optional
         */
        isPresent(): boolean;

        /**
         * Applies a function to the result of a query.
         * @template U - The mapped record type.
         * @param {{ (value: T): U }} fn - Function to apply to the result of the query.
         * @return {Optional<U>} Object used to interact with a single record.
         * @memberof Optional
         */
        map<U>(fn: { (value: T): U }): Optional<U>;

        /**
         * Provides an alternate value if the current Optional is empty.
         * @template U - The alternate value type.
         * @param {T} defaultValue - Alternate value to return if the current Optional is empty.
         * @return {(T | U)} Value within the current Optional object or the alternate value if the current Optional is empty.
         * @memberof Optional
         */
        orElse<U>(defaultValue: U): T | U;

        toString(): string;

        /**
         * Returns an empty Optional object. Use this method in an Else clause to handle a query that might not return a result.
         * @static
         * @template U - Optional value type.
         * @param {string} [reason] - Optional reason displayed in the log when Optional.get() is called on the empty Optional object.
         * @return {Optional<U>} Object used to interact with a single record.
         * @memberof Optional
         */
        static empty<U>(reason?: string): Optional<U>;
        
        /**
         * Returns a new Optional object. Instead of containing the record,
         * the object contains a function to get the record that is only called if and when requested in the code.
         * @static
         * @template U - The record type.
         * @param {({ (): U | null | undefined })} lazyGetFn - Function that returns a single record as a result of a query.
         * @return {Optional<U>} Object used to interact with a single record.
         * @memberof Optional
         */
        static lazy<U>(lazyGetFn: { (): U | null | undefined }): Optional<U>;

        /**
         * Wraps a given value in an Optional object. For example, you can wrap the result of a GlideRecord query in an Optional object to use the associated methods.
         * @static
         * @template U - The record type.
         * @param {U} value - Value inside the Optional object.
         * @return {Optional<U>} Object used to interact with a single record.
         * @memberof Optional
         */
        static of<U>(value: U): Optional<U>;
    }

    /**
     * The singleton type for {@link Stream.END}.
     * @export
     * @abstract
     * @class STREAM_END
     * @hideconstructor
     */
    export abstract class STREAM_END { private constructor(); }

    /**
     * Interacts with a stream of items such as records.
     * @export
     * @class Stream
     * @template T The element type.
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/Stream/concept/StreamGlobalAPI.html}
     */
    export class Stream<T> {
        /**
         * Creates an instance of Stream.
         * @param {({ (): T | STREAM_END })} nextFn - A function that retrieves the next item in the stream or returns {@link Stream.END} if there are no more items.
         * @memberof Stream
         */
        constructor(nextFn: { (): T | STREAM_END });

        /**
         * Limits the number of results returned by the stream.
         * @param {number} count - Number of records to return.
         * @return {Stream<T>} Object used to interact with a stream of items such as records.
         * @memberof Stream
         */
        limit(count: number): Stream<T>;

        /**
         * Returns results in batches of arrays, each containing the number of records passed to the method.
         * @param {number} count - Number of records in each array returned from the stream.
         * @return {Stream<T[]>} Object used to interact with a stream of items such as records.
         * @memberof Stream
         */
        chunk(count: number): Stream<T[]>;

        /**
         * Applies a function to each item in a stream and returns the updated Stream object.
         * @template U - The result element type.
         * @param {{ (obj: T): U }} fn - Function to apply to the result of the query that takes the each item in the stream as input.
         * @return {Stream<U>} Object containing the stream of records updated after applying the function.
         * @memberof Stream
         */
        map<U>(fn: { (obj: T): U }): Stream<U>;

        /**
         * Applies a function to every item in a stream. Returns another stream that you can iterate over.
         * @template U - The result stream element type.
         * @param {{ (obj: T): Stream<U> }} fn - Function to apply to the result of the query that returns a Stream object.
         * @return {Stream<U>} Object containing the stream of records updated after applying the function.
         * @memberof Stream
         */
        flatMap<U>(fn: { (obj: T): Stream<U> }): Stream<U>;

        /**
         * Applies a predicate function to each item in the Stream object.
         * If the predicate returns true, the method returns the stream.
         * If the predicate returns false, it returns an empty Stream object.
         * @param {{ (obj: T): boolean }} predicate - Predicate function to apply to every record or item inside the Stream object.
         * The function must take each item in the stream as input and return a boolean.
         * @return {Stream<T>} Object used to interact with a stream of items such as records.
         * @memberof Stream
         */
        filter(predicate: { (obj: T): boolean }): Stream<T>;

        /**
         * Returns the first record or item in the Stream object that matches the predicate function.
         * If no predicate function is provided, then the method returns the first record or item in the Stream.
         * @param {{ (obj: T): boolean }} [predicate] - Optional predicate function to apply to the items inside the Stream object.
         * The function must take each item in the stream as input and return a boolean.
         * @return {Optional<T>} Object containing the returned record.
         * @memberof Stream
         */
        find(predicate?: { (obj: T): boolean }): Optional<T>;

        /**
         * Applies a predicate function, a function that takes a single value and returns true or false, to each item in the stream.
         * If the predicate returns true for any item in the stream, the method returns true.
         * @param {{ (obj: T): boolean }} predicate - Predicate function to apply to the items inside the Stream object.
         * @return {boolean} True if the predicate function returned true for an item in the stream; otherwise, false.
         * @memberof Stream
         */
        some(predicate: { (obj: T): boolean }): boolean;

        /**
         * Applies a predicate function to every item in the Stream object.
         * If the predicate returns true for every item in the stream, the method returns true.
         * If the predicate returns false for any item in the stream, the method returns false.
         * @param {{ (obj: T): boolean }} predicate - Predicate function to apply to every record or item inside the Stream object.
         * The function must take each item in the stream as input and return a boolean.
         * @return {boolean} True if the predicate function returns true for every item in the stream; otherwise, false.
         * @memberof Stream
         */
        every(predicate: { (obj: T): boolean }): boolean;

        /**
         * Returns an array containing the given number of items from the stream.
         * @param {number} count - The maximum number of items from the stream to return in the array.
         * @return {T[]} Array containing the given number of items from the stream.
         * @memberof Stream
         */
        toArray(count: number): T[];

        /**
         * Executes a reducer function on each item in the stream, resulting in single output value.
         * @template U - The accumulated value type.
         * @param {{ (acc: U, cur: T): U }} reducerFn - Function to apply to each item in the stream that reduces the stream to a single value. 
         * @param {U} initialValue - Value passed to the function as the initial value.
         * @return {U} Accumulated total of all items returned by the reducer function.
         * @memberof Stream
         */
        reduce<U>(reducerFn: { (acc: U, cur: T): U }, initialValue: U): U;

        /**
         * Applies the specified function to each record or item in the stream.
         * @param {{ (obj: T): void }} fn - Function to apply to each item in the stream.
         * @memberof Stream
         */
        forEach(fn: { (obj: T): void }): void;

        toString(): "Stream";

        /**
         * Returns a Stream object that contains the values from the provided array.
         * @static
         * @template U - The element type.
         * @param {U[]} arr - Array of values to create the stream from.
         * @return {Stream<U>} Object used to interact with a stream of items such as records.
         * @memberof Stream
         */
        static fromArray<U>(arr: U[]): Stream<U>;

        /**
         * Combines multiple Streams using a combiner function
         * @static
         * @template U - The input stream element type.
         * @template V - The result stream element type.
         * @param {{ (...values: U[]): V}} combinerFn - Function which has a N number parameters, one for each Stream, and return a combined value.
         * @param {...Stream<U>[]} streams - The streams to combine.
         * @return {Stream<V>} The merged stream.
         * @memberof Stream
         */
        static zip<U, V>(combinerFn: { (...values: U[]): V}, ...streams: Stream<U>[]): Stream<V>;

        static readonly END: STREAM_END;
    }

    /**
     * Locates the list that should be used for a table and view and parent (related list).
     * @export
     * @class SysList
     * @description 1. Search for this table, this view, this related list
     * 2. Search for parents of this table, this view, this related list
     * 3. Search for this table, this view
     * 4. Search for parents of this table, this view
     * 5. Search for this table, default view
     * 6. Search for parents of this table, default view
     * 7. Construct and return the default list
     */
    export class SysList extends AbstractAjaxProcessor {
        // TODO: Add members for global.SysList
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=7d8f32c3c0a8016400e609be97b96d89

        type: "SysList"
    }

    /**
     * TODO: Document global.SysRelatedList
     * @export
     * @class SysRelatedList
     */
    export class SysRelatedList {
        // TODO: Add members for global.SysRelatedList
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=89171ef2c0a8016800449d9d0407bb27

        type: "SysRelatedList"
    }

    /**
     * Locate the list associated with the current user for the table and view
     * @export
     * @class SysUserList
     */
    export class SysUserList extends AbstractAjaxProcessor {
        // TODO: Add members for global.SysUserList
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=7dc9266bc0a80164003bff257b3ff216

        type: "SysUserList"
    }

    /**
     * Task State Management Utility
     * @export
     * @class TaskStateUtil
     * @deprecated Helper functions for working with task-type table state attributes, primarily used by the Task Active State Management business rule to set the active field based on state changes
     * Can be called by any server script to determine inactive states, default work, or default close states for a given table
     * Configurations are define in the task.state dictionary element, usually using dictionary overrides since state values vary by table.
     */
    export class TaskStateUtil {
        // TODO: Add members for global.TaskStateUtil
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=96e1ade7c0a80a6d381ba0c6aeb4ad61

        type: "TaskStateUtil"
    }

    /**
     * TODO: Document global.TaskUtils
     * @export
     * @class TaskUtils
     */
    export class TaskUtils {
        // TODO: Add members for global.TaskUtils
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=584d558687c010100e3dd61e36cb0b8f

        type: "TaskUtils"
    }

    /**
     * TODO: Document global.TaskUtilsSNC
     * @export
     * @class TaskUtilsSNC
     */
    export class TaskUtilsSNC {
        // TODO: Add members for global.TaskUtilsSNC
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=1cf5818a878010100e3dd61e36cb0b4a

        type: "TaskUtilsSNC"
    }

    /**
     * TODO: Document global.UnifiedConversationUtil
     * @export
     * @class UnifiedConversationUtil
     */
    export class UnifiedConversationUtil {
        // TODO: Add members for global.UnifiedConversationUtil
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=72ef5784e7431010748b42d6c2f6a9d1

        type: "UnifiedConversationUtil"
    }

    /**
     * Analyzes user skills against skills required to complete work items.
     * @export
     * @class UserSkillAnalyzer
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/UserSkillAnalyzer/concept/UserSkillAnalyzerAPI.html}
     */
    export class UserSkillAnalyzer {
        // TODO: Add members for global.UserSkillAnalyzer

        type: "UserSkillAnalyzer"
    }

    /**
     * Used to configure options for choosing the right user and getting a sorted list of qualified users based on number of matching skills and skill-level gap.
     * @export
     * @class UserSkillRanking
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/UserSkillRanking/concept/UserSkillRankingAPI.html}
     */
    export class UserSkillRanking {
        // TODO: Add members for global.UserSkillRanking

        type: "UserSkillRanking"
    }

    /**
     * Validates field input values.
     * @export
     * @class VAFieldValidator
     */
    export class VAFieldValidator {
        // TODO: Add members for global.VAFieldValidator
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=1e2e643a5bd200101f254d3ba881c7d9

        type: "VAFieldValidator"
    }

    /**
     * Checks if schedule spans start and end dates are valid and that they don't overlap with any other rotation schdedule
     * @export
     * @class ValidateSchedule
     */
    export class ValidateSchedule extends AbstractAjaxProcessor {
        // TODO: Add members for global.ValidateSchedule
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=ecae190bbf1211003f07e2c1ac0739fb

        type: "ValidateSchedule"
    }

    /**
     * Used to parse the query and then evaluate the values of the variables starting with 'javascript:'.
     * Values are evaluated within the sandbox environment and doesn't throw an error in case of an exception.
     * @export
     * @class VariableQueryParser
     */
    export class VariableQueryParser extends AbstractAjaxProcessor {
        // TODO: Add members for global.VariableQueryParser
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=dadc4af05fa023008e6b1f9f2f731340

        type: "VariableQueryParser"
    }

    /**
     * TODO: Document global.VariableUtil
     * @export
     * @class VariableUtil
     */
    export class VariableUtil {
        // TODO: Add members for global.VariableUtil
        // https://dev109722.service-now.com/nav_to.do?uri=sys_script_include.do?sys_id=15f2285773011300f49d0690fdf6a721

        type: "VariableUtil"
    }

    /**
     * Walks the workflow and gets the list of successors for each activity along with a shortest path order that indicates the activity depth in the workflow.
     * @export
     * @class WalkWorkflow
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/Walkworkflow/concept/c_WalkWorkflowAPI.html}
     */
    export class WalkWorkflow {
        // TODO: Add members for global.WalkWorkflow

        type: "WalkWorkflow"
    }

    /**
     * The base class for all workflow activities.
     * @export
     * @class WFActivityHandler
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/WFACtivityHandler/concept/c_WFACtivityHandlerAPI.html}
     */
    export class WFActivityHandler {
        // TODO: Add members for global.WFActivityHandler

        type: "WFActivityHandler"
    }

    /**
     * Handles the formatting of Windows OS names.
     * @export
     * @class WindowsOSNameHelper
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/WindowsOSNameHelper/concept/c_WindowsOSNameHelperAPI.html}
     */
    export class WindowsOSNameHelper {
        // TODO: Add members for global.WindowsOSNameHelper

        type: "WindowsOSNameHelper"
    }

    /**
     * This class calculates the duration (in seconds) based on the variables of a workflow activity.
     * It is an interface between Workflow Timer() and DurationCalculator().
     * @export
     * @class WorkflowDuration
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/WorkflowDuration/concept/c_WorkflowDurationAPI.html}
     */
    export class WorkflowDuration {
        // TODO: Add members for global.WorkflowDuration

        type: "WorkflowDuration"
    }

    /**
     * Provides a way to query the workflow model, to step backwards and forwards between specified wf_history items,
     * and to query the history for activity and transition-specific information.
     * @export
     * @class WorkflowModelManager
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/WorkflowModelManagerAjax/concept/c_WorkflowModelManagerAjaxAPI.html}
     */
    export class WorkflowModelManager {
        // TODO: Add members for global.WorkflowModelManager

        type: "WorkflowModelManager"
    }

    /**
     * Provides an AjaxProcessor wrapper for the WorkflowModelManager.
     * @export
     * @class WorkflowModelManagerAjax
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/WorkflowModelManagerAjax/concept/c_WorkflowModelManagerAjaxAPI.html}
     */
    export class WorkflowModelManagerAjax extends AbstractAjaxProcessor {
        // TODO: Add members for global.WorkflowModelManagerAjax

        type: "WorkflowModelManagerAjax"
    }

    /**
     * This code is executed in business rule Set workflow scheduler script on table wf_workflow_schedule.
     * @export
     * @class WorkflowScheduler
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/WorkflowScheduler/concept/c_WorkflowSchedulerAPI.html}
     */
    export class WorkflowScheduler {
        // TODO: Add members for global.WorkflowScheduler

        type: "WorkflowScheduler"
    }

    /**
     * Generates a view that shows a workflow context on the timeline.
     * @export
     * @class WorkflowTimeline
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/WorkflowTimeLine/concept/c_WorkflowTimelineAPI.html}
     */
    export class WorkflowTimeline {
        // TODO: Add members for global.WorkflowTimeline

        type: "WorkflowTimeline"
    }
}