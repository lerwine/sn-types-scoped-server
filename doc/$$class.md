# $$class.d.ts

Definitions for JavaScript class definitions in the server-side Rhino scripting environment.

[Source file](../dist/%24%24class.d.ts)

## Namespace: $$class

Contains helper types for creating classes in the scoped server-side Rhino scripting environment.

## Interface: $$class.Class
    /**
     * The class object type, defined for compatibility with the Rhino scripting environment.
     * @export
     * @interface Class
     */
    export interface Class {
        /**
         * Default constructor.
         * @return {Object} A constructed object instance.
         * @memberof Constructor
         */
        new(): Object;
    }

## Interface: $$class.Constructor

Defines an object constructor.

### $$class.Constructor Generic Types

- **TInstance** - The constructed instance type which extends [$$class.JsProto](#interface-classjsproto).
- **TPrototype** - The optional type of the constructor prototype. Defaults to the same as `TInstance`.

## Interface: $$class.JSProto
    /**
     * Marker type for a JavaScript object type.
     * @export
     * @interface JSProto
     */
    export interface JSProto { }

## Interface: $$class.ClassConstructor

Defines the constructor object for custom classes in the Rhino scripting environment.

### Static method: $$class.ClassConstructor.create

Creates a class constructor object.

Signature #1 (implicit instance type): 

```Typescript
create<K extends keyof JSProto, TPrototype extends JSProto[K]>(jsTypeName: K): Constructor<JSProto[K], TPrototype> & JSProto[K];
```

Signature #2 (explicit instance type):

```Typescript
create<K extends keyof JSProto, TPrototype extends JSProto[K]>(jsTypeName: K): Constructor<JSProto[K], TPrototype> & JSProto[K];
```

### $$class.ClassConstructor.create Generic Types (implicit instance type)

- **K** - The string value representing the class name.
- **TPrototype** - The type of inheriting prototype.

### $$class.ClassConstructor.create Generic Types (explicit instance type)

- **TInstance** - The constructed instance type which extends [$$class.JsProto](#interface-classjsproto).
- **TConstructor** - The constructor type which extends [Constructor](#interface-classclassconstructor)`<TInstance, TPrototype>`.
- **TPrototype** - The optional type of the class's prototype which extends `TInstance` and defaults to `TInstance`.

### $$class.ClassConstructor.create Parameter

- **jsTypeName**: (`string`) - The class's type name (optional for explicit instance type signature).

**Implicit instance signature returns**: `Constructor<JSProto[K], TPrototype> & JSProto[K]` - A constructor object.

**Explicit instance signature returns**: `TConstructor & ThisType<TInstance>` - A constructor object.

## Interface: ClassConstructor

Object constructor compatible with ServiceNow scripting enviroment.

### Static method: ClassConstructor.extendsObject

Creates a class constructor which extends the a base class.

Signature:

```Typescript
extendsObject<B extends Function, TInstance, TPrototype extends TInstance = TInstance>(base: B, derived: TPrototype & ThisType<$$class.PickProperty<B, 'prototype'> & TInstance>):
    $$class.PickProperty<B, 'prototype'> & $$class.Constructor<TInstance & B, TPrototype & B> & ThisType<$$class.PickProperty<B, 'prototype'> & TInstance>;
```

### ClassConstructor Generic Types

- **B** - The base class type.
- **TInstance** - The type of the constructed instance.
- **TPrototype** - The type of inheriting prototype.

### ClassConstructor Parameters

- **base**: (`B`) - The prototype object of the base class.
- **derived**: (`{(TPrototype & ThisType<$$class.PickProperty<B, 'prototype'> & TInstance>)}`)  - A prototype object for the members of the derived class.

**Returns**: `{($$class.PickProperty<B, 'prototype'> & $$class.Constructor<TInstance & B, TPrototype & B> & ThisType<$$class.PickProperty<B, 'prototype'> & TInstance>)}` - A class constructor object which extends the base class.

## Constant: Class

The base custom [class](#interface-classclassconstructor) type.

## Examples

### Create a simple class

```TypeScript

namespace my_app_scope {
    export interface IMyClass {
        value?: string;
        myInstanceMethod(): number;
    }

    export declare type MyClass = Readonly<IMyClass>;

    export interface MyClassConstructor extends $$class.Constructor<MyClass, IMyClass> {
        new(value?: string): MyClass;

        (value?: string): MyClass;

        myStaticMethod(...args: string[]): MyClass[];
    }

    export const MyClass: MyClassConstructor = (function(): MyClassConstructor {
        var constructor: MyClassConstructor = Class.create<MyClass, MyClassConstructor>();

        constructor.myStaticMethod = function(...args: string[]): MyClass[] {
            var result: MyClass[] = [];
            for (var n of args)
                result.push(new Myclass((typeof n) === 'string' ? n : undefined);
            return result;
        };

        constructor.prototype = <IMyClass>{
            initialize: function(this: IMyClass, value?: string) {
                this.value = value;
            },

            myInstanceMethod: function(this: IMyClass): number {
                return (typeof this.value === 'string') ? this.value.length : -1;
            },

            type: "MyClass"
        };

        return constructor;
    })();
}
```

### Create a class with explicit prototype

```TypeScript

namespace my_app_scope {
    export interface IMyClass {
        getValue(): string | undefined;
        setValue(value?: string): void;
    }

    export interface IMyClassPrototype extends IMyClass {
        _value?: string;
    }

    export declare type MyClass = Readonly<IMyClass>;

    export interface MyClassConstructor extends $$class.Constructor<MyClass, IMyClassPrototype> {
        new(value?: string): MyClass;

        (value?: string): MyClass;

        myStaticMethod(...args: string[]): MyClass[];
    }

    export const MyClass: MyClassConstructor = (function(): MyClassConstructor {
        var constructor: MyClassConstructor = Class.create<MyClass, MyClassConstructor, IMyClassPrototype>();

        constructor.myStaticMethod = function(...args: string[]): MyClass[] {
            return args.map(function(n: string): MyClass {
                return new MyClass(n);
            });
        };

        constructor.prototype = {
            initialize: function(this: IMyClassPrototype, value?: string) {
                if (typeof value === 'string')
                    this._value = value;
            },

            getValue: function(this: IMyClassPrototype): string | undefined {
                return this._value;
            },

            setValue: function(this: IMyClassPrototype, value?: string): void {
                this._value = (typeof value === 'string') ? value : undefined;
            },

            type: "MyClass"
        };

        return constructor;
    })();
}
```

### Create a class that extends another class

```TypeScript

namespace my_app_scope {
    export interface IMyBaseClass {
        value?: string;
    }

    export declare type MyBaseClass = Readonly<IMyBaseClass>;

    export interface MyBaseClassConstructor extends $$class.Constructor<MyBaseClass, IMyBaseClass> {
        new(value?: string): MyBaseClass;
        (value?: string): MyBaseClass;
    }

    export const MBaseyClass: MyBaseClassConstructor = (function(): MyBaseClassConstructor {
        var constructor: MyBaseClassConstructor = Class.create<MyBaseClass, MyBaseClassConstructor>();

        constructor.prototype = <IMyBaselass>{
            initialize: function(this: IMyBaseClass, value?: string) {
                this.value = value;
            }
        };

        return constructor;
    })();

    export interface IMyImpl extends IMyBaseClass {
        getAlt(): string | undefined;
        setAlt(value?: string): void;
    }

    export interface IMyImplPrototype extends IMyImpl {
        _alt?: string;
    }

    export declare type MyImpl = Readonly<IMyImpl>;

    export interface MyImplConstructor extends $$class.Constructor<MyImpl, IMyImplPrototype> {
        new(value?: string, alt?: string): MyImpl;

        (value?: string, alt?: string): MyImpl;

        myStaticMethod(value: string, ...args: string[]): MyImpl[];
    }

    export const MyClass: MyImplConstructor = (function(): MyImplConstructor {
        var constructor: MyImplConstructor = ObjectConstructor.extendsObject<MyBaseClass, MyImpl, IMyImplPrototype>(MyBaseClass, {
            initialize: function(this: IMyImplPrototype, value?: string, alt?: string) {
                if (argumennts.length > 0)
                    MyBaseClass.prototype.call(this, value);
                else
                    MyBaseClass.prototype.call(this);
                if (typeof alt === 'string')
                    this._alt = alt;
            },

            getAlt: function(this: IMyImplPrototype): string | undefined {
                return this._alt;
            },

            setAlt: function(this: IMyImplPrototype, value?: string): void {
                this._alt = (typeof value === 'string') ? value : undefined;
            },

            type: "MyImpl"
        });

        constructor.myStaticMethod = function(value: string, ...args: string[]): MyImpl[] {
            return args.map(function(n: string): MyImpl {
                return new MyImpl(value, n);
            });
        };

        return constructor;
    })();
}
```

### Create a type with generic arguments

```TypeScript

namespace my_app_scope {
    export interface IMyClass<T = any, U = T> {
        getPrimary(): T | undefined;
        getAlt(): U | undefined;
        setAlt(value?: U): void;
    }

    export interface IMyClassPrototype<T = any, U = T> extends IMyClass {
        _primary: T;
        _alt?: U;
    }

    export declare type MyClass<T = any, U = T> = Readonly<IMyClass<T, U>>;

    export interface MyClassConstructor<T = any, U = T> extends $$class.Constructor<MyClass<T, U>, IMyClassPrototype<T, U>> {
        new(primary: T, alt?: U): MyClass;

        (primary: T, alt?: U): MyClass;

        myStaticMethod<X, Y>(primary: X, ...args: Y[]): MyClass<X, Y>[];
    }

    export const MyClass: MyClassConstructor = (function<T, U>(): MyClassConstructor {
        var constructor: MyClassConstructor = Class.create<MyClass, MyClassConstructor, IMyClassPrototype>();

        constructor.myStaticMethod = function<X, Y>(primary: X, ...args: Y[]): MyClass<X, Y>[] {
            return args.map(function(a: Y): MyClass<X, Y> {
                return new MyClass<X, Y>(primary, a);
            });
        };

        constructor.prototype = <IMyClassPrototype<T, U>>{
            initialize: function(this: IMyClassPrototype<T, U>, primary: T, alt?: U) {
                this._primary = primary;
                if ((typeof alt !== 'undefined' && alt !== null) )
                    this._alt = alt;
            },

            getPrimary: function(this: IMyClassPrototype<T, U>): string | undefined {
                return this._primary;
            },

            getAlt: function(this: IMyClassPrototype<T, U>): string | undefined {
                return this._alt;
            },

            setAlt: function(this: IMyClassPrototype<T, U>, value?: string): void {
                this._alt = (typeof value !== 'undefined' && value !== null) ? value : undefined;
            },

            type: "MyClass"
        };

        return constructor;
    })();
}
```
