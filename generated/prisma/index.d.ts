
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model ProductsMaterials
 * 
 */
export type ProductsMaterials = $Result.DefaultSelection<Prisma.$ProductsMaterialsPayload>
/**
 * Model Materials
 * 
 */
export type Materials = $Result.DefaultSelection<Prisma.$MaterialsPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model ProductsOrders
 * 
 */
export type ProductsOrders = $Result.DefaultSelection<Prisma.$ProductsOrdersPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productsMaterials`: Exposes CRUD operations for the **ProductsMaterials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductsMaterials
    * const productsMaterials = await prisma.productsMaterials.findMany()
    * ```
    */
  get productsMaterials(): Prisma.ProductsMaterialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materials`: Exposes CRUD operations for the **Materials** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.materials.findMany()
    * ```
    */
  get materials(): Prisma.MaterialsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productsOrders`: Exposes CRUD operations for the **ProductsOrders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductsOrders
    * const productsOrders = await prisma.productsOrders.findMany()
    * ```
    */
  get productsOrders(): Prisma.ProductsOrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Categories: 'Categories',
    ProductsMaterials: 'ProductsMaterials',
    Materials: 'Materials',
    Products: 'Products',
    ProductsOrders: 'ProductsOrders',
    Orders: 'Orders'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "categories" | "productsMaterials" | "materials" | "products" | "productsOrders" | "orders"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      ProductsMaterials: {
        payload: Prisma.$ProductsMaterialsPayload<ExtArgs>
        fields: Prisma.ProductsMaterialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsMaterialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsMaterialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsMaterialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsMaterialsPayload>
          }
          findFirst: {
            args: Prisma.ProductsMaterialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsMaterialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsMaterialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsMaterialsPayload>
          }
          findMany: {
            args: Prisma.ProductsMaterialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsMaterialsPayload>[]
          }
          create: {
            args: Prisma.ProductsMaterialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsMaterialsPayload>
          }
          createMany: {
            args: Prisma.ProductsMaterialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsMaterialsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsMaterialsPayload>[]
          }
          delete: {
            args: Prisma.ProductsMaterialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsMaterialsPayload>
          }
          update: {
            args: Prisma.ProductsMaterialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsMaterialsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsMaterialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsMaterialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsMaterialsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsMaterialsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsMaterialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsMaterialsPayload>
          }
          aggregate: {
            args: Prisma.ProductsMaterialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductsMaterials>
          }
          groupBy: {
            args: Prisma.ProductsMaterialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsMaterialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsMaterialsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsMaterialsCountAggregateOutputType> | number
          }
        }
      }
      Materials: {
        payload: Prisma.$MaterialsPayload<ExtArgs>
        fields: Prisma.MaterialsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>
          }
          findFirst: {
            args: Prisma.MaterialsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>
          }
          findMany: {
            args: Prisma.MaterialsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>[]
          }
          create: {
            args: Prisma.MaterialsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>
          }
          createMany: {
            args: Prisma.MaterialsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>[]
          }
          delete: {
            args: Prisma.MaterialsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>
          }
          update: {
            args: Prisma.MaterialsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>
          }
          deleteMany: {
            args: Prisma.MaterialsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaterialsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>[]
          }
          upsert: {
            args: Prisma.MaterialsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialsPayload>
          }
          aggregate: {
            args: Prisma.MaterialsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterials>
          }
          groupBy: {
            args: Prisma.MaterialsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialsCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialsCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      ProductsOrders: {
        payload: Prisma.$ProductsOrdersPayload<ExtArgs>
        fields: Prisma.ProductsOrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsOrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsOrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOrdersPayload>
          }
          findFirst: {
            args: Prisma.ProductsOrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsOrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOrdersPayload>
          }
          findMany: {
            args: Prisma.ProductsOrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOrdersPayload>[]
          }
          create: {
            args: Prisma.ProductsOrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOrdersPayload>
          }
          createMany: {
            args: Prisma.ProductsOrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsOrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOrdersPayload>[]
          }
          delete: {
            args: Prisma.ProductsOrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOrdersPayload>
          }
          update: {
            args: Prisma.ProductsOrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOrdersPayload>
          }
          deleteMany: {
            args: Prisma.ProductsOrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsOrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsOrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOrdersPayload>[]
          }
          upsert: {
            args: Prisma.ProductsOrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOrdersPayload>
          }
          aggregate: {
            args: Prisma.ProductsOrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductsOrders>
          }
          groupBy: {
            args: Prisma.ProductsOrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsOrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsOrdersCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsOrdersCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    categories?: CategoriesOmit
    productsMaterials?: ProductsMaterialsOmit
    materials?: MaterialsOmit
    products?: ProductsOmit
    productsOrders?: ProductsOrdersOmit
    orders?: OrdersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    Products: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | CategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type MaterialsCountOutputType
   */

  export type MaterialsCountOutputType = {
    PrductsMaterials: number
  }

  export type MaterialsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PrductsMaterials?: boolean | MaterialsCountOutputTypeCountPrductsMaterialsArgs
  }

  // Custom InputTypes
  /**
   * MaterialsCountOutputType without action
   */
  export type MaterialsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialsCountOutputType
     */
    select?: MaterialsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaterialsCountOutputType without action
   */
  export type MaterialsCountOutputTypeCountPrductsMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsMaterialsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    ProductsMaterials: number
    orders: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductsMaterials?: boolean | ProductsCountOutputTypeCountProductsMaterialsArgs
    orders?: boolean | ProductsCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProductsMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsMaterialsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * Count Type ProductsOrdersCountOutputType
   */

  export type ProductsOrdersCountOutputType = {
    orders: number
  }

  export type ProductsOrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ProductsOrdersCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * ProductsOrdersCountOutputType without action
   */
  export type ProductsOrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrdersCountOutputType
     */
    select?: ProductsOrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsOrdersCountOutputType without action
   */
  export type ProductsOrdersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatesAt: Date | null
    isAdmin: boolean | null
    username: string | null
    password: string | null
    refreshtoken: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatesAt: Date | null
    isAdmin: boolean | null
    username: string | null
    password: string | null
    refreshtoken: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatesAt: number
    isAdmin: number
    username: number
    password: number
    refreshtoken: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatesAt?: true
    isAdmin?: true
    username?: true
    password?: true
    refreshtoken?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatesAt?: true
    isAdmin?: true
    username?: true
    password?: true
    refreshtoken?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatesAt?: true
    isAdmin?: true
    username?: true
    password?: true
    refreshtoken?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    updatesAt: Date
    isAdmin: boolean
    username: string
    password: string
    refreshtoken: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatesAt?: boolean
    isAdmin?: boolean
    username?: boolean
    password?: boolean
    refreshtoken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatesAt?: boolean
    isAdmin?: boolean
    username?: boolean
    password?: boolean
    refreshtoken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatesAt?: boolean
    isAdmin?: boolean
    username?: boolean
    password?: boolean
    refreshtoken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatesAt?: boolean
    isAdmin?: boolean
    username?: boolean
    password?: boolean
    refreshtoken?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatesAt" | "isAdmin" | "username" | "password" | "refreshtoken", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatesAt: Date
      isAdmin: boolean
      username: string
      password: string
      refreshtoken: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatesAt: FieldRef<"User", 'DateTime'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly refreshtoken: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Products?: boolean | Categories$ProductsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | Categories$ProductsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      Products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Products<T extends Categories$ProductsArgs<ExtArgs> = {}>(args?: Subset<T, Categories$ProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'Int'>
    readonly name: FieldRef<"Categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
  }

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.Products
   */
  export type Categories$ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model ProductsMaterials
   */

  export type AggregateProductsMaterials = {
    _count: ProductsMaterialsCountAggregateOutputType | null
    _avg: ProductsMaterialsAvgAggregateOutputType | null
    _sum: ProductsMaterialsSumAggregateOutputType | null
    _min: ProductsMaterialsMinAggregateOutputType | null
    _max: ProductsMaterialsMaxAggregateOutputType | null
  }

  export type ProductsMaterialsAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    materialId: number | null
  }

  export type ProductsMaterialsSumAggregateOutputType = {
    id: number | null
    productId: number | null
    materialId: number | null
  }

  export type ProductsMaterialsMinAggregateOutputType = {
    id: number | null
    productId: number | null
    materialId: number | null
  }

  export type ProductsMaterialsMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    materialId: number | null
  }

  export type ProductsMaterialsCountAggregateOutputType = {
    id: number
    productId: number
    materialId: number
    _all: number
  }


  export type ProductsMaterialsAvgAggregateInputType = {
    id?: true
    productId?: true
    materialId?: true
  }

  export type ProductsMaterialsSumAggregateInputType = {
    id?: true
    productId?: true
    materialId?: true
  }

  export type ProductsMaterialsMinAggregateInputType = {
    id?: true
    productId?: true
    materialId?: true
  }

  export type ProductsMaterialsMaxAggregateInputType = {
    id?: true
    productId?: true
    materialId?: true
  }

  export type ProductsMaterialsCountAggregateInputType = {
    id?: true
    productId?: true
    materialId?: true
    _all?: true
  }

  export type ProductsMaterialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductsMaterials to aggregate.
     */
    where?: ProductsMaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsMaterials to fetch.
     */
    orderBy?: ProductsMaterialsOrderByWithRelationInput | ProductsMaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsMaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductsMaterials
    **/
    _count?: true | ProductsMaterialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsMaterialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsMaterialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMaterialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaterialsMaxAggregateInputType
  }

  export type GetProductsMaterialsAggregateType<T extends ProductsMaterialsAggregateArgs> = {
        [P in keyof T & keyof AggregateProductsMaterials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductsMaterials[P]>
      : GetScalarType<T[P], AggregateProductsMaterials[P]>
  }




  export type ProductsMaterialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsMaterialsWhereInput
    orderBy?: ProductsMaterialsOrderByWithAggregationInput | ProductsMaterialsOrderByWithAggregationInput[]
    by: ProductsMaterialsScalarFieldEnum[] | ProductsMaterialsScalarFieldEnum
    having?: ProductsMaterialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsMaterialsCountAggregateInputType | true
    _avg?: ProductsMaterialsAvgAggregateInputType
    _sum?: ProductsMaterialsSumAggregateInputType
    _min?: ProductsMaterialsMinAggregateInputType
    _max?: ProductsMaterialsMaxAggregateInputType
  }

  export type ProductsMaterialsGroupByOutputType = {
    id: number
    productId: number
    materialId: number
    _count: ProductsMaterialsCountAggregateOutputType | null
    _avg: ProductsMaterialsAvgAggregateOutputType | null
    _sum: ProductsMaterialsSumAggregateOutputType | null
    _min: ProductsMaterialsMinAggregateOutputType | null
    _max: ProductsMaterialsMaxAggregateOutputType | null
  }

  type GetProductsMaterialsGroupByPayload<T extends ProductsMaterialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsMaterialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsMaterialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsMaterialsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsMaterialsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsMaterialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    materialId?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    material?: boolean | MaterialsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productsMaterials"]>

  export type ProductsMaterialsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    materialId?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    material?: boolean | MaterialsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productsMaterials"]>

  export type ProductsMaterialsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    materialId?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    material?: boolean | MaterialsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productsMaterials"]>

  export type ProductsMaterialsSelectScalar = {
    id?: boolean
    productId?: boolean
    materialId?: boolean
  }

  export type ProductsMaterialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "materialId", ExtArgs["result"]["productsMaterials"]>
  export type ProductsMaterialsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    material?: boolean | MaterialsDefaultArgs<ExtArgs>
  }
  export type ProductsMaterialsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    material?: boolean | MaterialsDefaultArgs<ExtArgs>
  }
  export type ProductsMaterialsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    material?: boolean | MaterialsDefaultArgs<ExtArgs>
  }

  export type $ProductsMaterialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductsMaterials"
    objects: {
      product: Prisma.$ProductsPayload<ExtArgs>
      material: Prisma.$MaterialsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      materialId: number
    }, ExtArgs["result"]["productsMaterials"]>
    composites: {}
  }

  type ProductsMaterialsGetPayload<S extends boolean | null | undefined | ProductsMaterialsDefaultArgs> = $Result.GetResult<Prisma.$ProductsMaterialsPayload, S>

  type ProductsMaterialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsMaterialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsMaterialsCountAggregateInputType | true
    }

  export interface ProductsMaterialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductsMaterials'], meta: { name: 'ProductsMaterials' } }
    /**
     * Find zero or one ProductsMaterials that matches the filter.
     * @param {ProductsMaterialsFindUniqueArgs} args - Arguments to find a ProductsMaterials
     * @example
     * // Get one ProductsMaterials
     * const productsMaterials = await prisma.productsMaterials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsMaterialsFindUniqueArgs>(args: SelectSubset<T, ProductsMaterialsFindUniqueArgs<ExtArgs>>): Prisma__ProductsMaterialsClient<$Result.GetResult<Prisma.$ProductsMaterialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductsMaterials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsMaterialsFindUniqueOrThrowArgs} args - Arguments to find a ProductsMaterials
     * @example
     * // Get one ProductsMaterials
     * const productsMaterials = await prisma.productsMaterials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsMaterialsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsMaterialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsMaterialsClient<$Result.GetResult<Prisma.$ProductsMaterialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductsMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsMaterialsFindFirstArgs} args - Arguments to find a ProductsMaterials
     * @example
     * // Get one ProductsMaterials
     * const productsMaterials = await prisma.productsMaterials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsMaterialsFindFirstArgs>(args?: SelectSubset<T, ProductsMaterialsFindFirstArgs<ExtArgs>>): Prisma__ProductsMaterialsClient<$Result.GetResult<Prisma.$ProductsMaterialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductsMaterials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsMaterialsFindFirstOrThrowArgs} args - Arguments to find a ProductsMaterials
     * @example
     * // Get one ProductsMaterials
     * const productsMaterials = await prisma.productsMaterials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsMaterialsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsMaterialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsMaterialsClient<$Result.GetResult<Prisma.$ProductsMaterialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductsMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsMaterialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductsMaterials
     * const productsMaterials = await prisma.productsMaterials.findMany()
     * 
     * // Get first 10 ProductsMaterials
     * const productsMaterials = await prisma.productsMaterials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsMaterialsWithIdOnly = await prisma.productsMaterials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductsMaterialsFindManyArgs>(args?: SelectSubset<T, ProductsMaterialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsMaterialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductsMaterials.
     * @param {ProductsMaterialsCreateArgs} args - Arguments to create a ProductsMaterials.
     * @example
     * // Create one ProductsMaterials
     * const ProductsMaterials = await prisma.productsMaterials.create({
     *   data: {
     *     // ... data to create a ProductsMaterials
     *   }
     * })
     * 
     */
    create<T extends ProductsMaterialsCreateArgs>(args: SelectSubset<T, ProductsMaterialsCreateArgs<ExtArgs>>): Prisma__ProductsMaterialsClient<$Result.GetResult<Prisma.$ProductsMaterialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductsMaterials.
     * @param {ProductsMaterialsCreateManyArgs} args - Arguments to create many ProductsMaterials.
     * @example
     * // Create many ProductsMaterials
     * const productsMaterials = await prisma.productsMaterials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsMaterialsCreateManyArgs>(args?: SelectSubset<T, ProductsMaterialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductsMaterials and returns the data saved in the database.
     * @param {ProductsMaterialsCreateManyAndReturnArgs} args - Arguments to create many ProductsMaterials.
     * @example
     * // Create many ProductsMaterials
     * const productsMaterials = await prisma.productsMaterials.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductsMaterials and only return the `id`
     * const productsMaterialsWithIdOnly = await prisma.productsMaterials.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsMaterialsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsMaterialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsMaterialsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductsMaterials.
     * @param {ProductsMaterialsDeleteArgs} args - Arguments to delete one ProductsMaterials.
     * @example
     * // Delete one ProductsMaterials
     * const ProductsMaterials = await prisma.productsMaterials.delete({
     *   where: {
     *     // ... filter to delete one ProductsMaterials
     *   }
     * })
     * 
     */
    delete<T extends ProductsMaterialsDeleteArgs>(args: SelectSubset<T, ProductsMaterialsDeleteArgs<ExtArgs>>): Prisma__ProductsMaterialsClient<$Result.GetResult<Prisma.$ProductsMaterialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductsMaterials.
     * @param {ProductsMaterialsUpdateArgs} args - Arguments to update one ProductsMaterials.
     * @example
     * // Update one ProductsMaterials
     * const productsMaterials = await prisma.productsMaterials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsMaterialsUpdateArgs>(args: SelectSubset<T, ProductsMaterialsUpdateArgs<ExtArgs>>): Prisma__ProductsMaterialsClient<$Result.GetResult<Prisma.$ProductsMaterialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductsMaterials.
     * @param {ProductsMaterialsDeleteManyArgs} args - Arguments to filter ProductsMaterials to delete.
     * @example
     * // Delete a few ProductsMaterials
     * const { count } = await prisma.productsMaterials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsMaterialsDeleteManyArgs>(args?: SelectSubset<T, ProductsMaterialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsMaterialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductsMaterials
     * const productsMaterials = await prisma.productsMaterials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsMaterialsUpdateManyArgs>(args: SelectSubset<T, ProductsMaterialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsMaterials and returns the data updated in the database.
     * @param {ProductsMaterialsUpdateManyAndReturnArgs} args - Arguments to update many ProductsMaterials.
     * @example
     * // Update many ProductsMaterials
     * const productsMaterials = await prisma.productsMaterials.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductsMaterials and only return the `id`
     * const productsMaterialsWithIdOnly = await prisma.productsMaterials.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductsMaterialsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsMaterialsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsMaterialsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductsMaterials.
     * @param {ProductsMaterialsUpsertArgs} args - Arguments to update or create a ProductsMaterials.
     * @example
     * // Update or create a ProductsMaterials
     * const productsMaterials = await prisma.productsMaterials.upsert({
     *   create: {
     *     // ... data to create a ProductsMaterials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductsMaterials we want to update
     *   }
     * })
     */
    upsert<T extends ProductsMaterialsUpsertArgs>(args: SelectSubset<T, ProductsMaterialsUpsertArgs<ExtArgs>>): Prisma__ProductsMaterialsClient<$Result.GetResult<Prisma.$ProductsMaterialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductsMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsMaterialsCountArgs} args - Arguments to filter ProductsMaterials to count.
     * @example
     * // Count the number of ProductsMaterials
     * const count = await prisma.productsMaterials.count({
     *   where: {
     *     // ... the filter for the ProductsMaterials we want to count
     *   }
     * })
    **/
    count<T extends ProductsMaterialsCountArgs>(
      args?: Subset<T, ProductsMaterialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsMaterialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductsMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsMaterialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsMaterialsAggregateArgs>(args: Subset<T, ProductsMaterialsAggregateArgs>): Prisma.PrismaPromise<GetProductsMaterialsAggregateType<T>>

    /**
     * Group by ProductsMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsMaterialsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsMaterialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsMaterialsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsMaterialsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsMaterialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsMaterialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductsMaterials model
   */
  readonly fields: ProductsMaterialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductsMaterials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsMaterialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    material<T extends MaterialsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialsDefaultArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductsMaterials model
   */
  interface ProductsMaterialsFieldRefs {
    readonly id: FieldRef<"ProductsMaterials", 'Int'>
    readonly productId: FieldRef<"ProductsMaterials", 'Int'>
    readonly materialId: FieldRef<"ProductsMaterials", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductsMaterials findUnique
   */
  export type ProductsMaterialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsMaterials
     */
    select?: ProductsMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsMaterials
     */
    omit?: ProductsMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsMaterialsInclude<ExtArgs> | null
    /**
     * Filter, which ProductsMaterials to fetch.
     */
    where: ProductsMaterialsWhereUniqueInput
  }

  /**
   * ProductsMaterials findUniqueOrThrow
   */
  export type ProductsMaterialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsMaterials
     */
    select?: ProductsMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsMaterials
     */
    omit?: ProductsMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsMaterialsInclude<ExtArgs> | null
    /**
     * Filter, which ProductsMaterials to fetch.
     */
    where: ProductsMaterialsWhereUniqueInput
  }

  /**
   * ProductsMaterials findFirst
   */
  export type ProductsMaterialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsMaterials
     */
    select?: ProductsMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsMaterials
     */
    omit?: ProductsMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsMaterialsInclude<ExtArgs> | null
    /**
     * Filter, which ProductsMaterials to fetch.
     */
    where?: ProductsMaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsMaterials to fetch.
     */
    orderBy?: ProductsMaterialsOrderByWithRelationInput | ProductsMaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductsMaterials.
     */
    cursor?: ProductsMaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductsMaterials.
     */
    distinct?: ProductsMaterialsScalarFieldEnum | ProductsMaterialsScalarFieldEnum[]
  }

  /**
   * ProductsMaterials findFirstOrThrow
   */
  export type ProductsMaterialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsMaterials
     */
    select?: ProductsMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsMaterials
     */
    omit?: ProductsMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsMaterialsInclude<ExtArgs> | null
    /**
     * Filter, which ProductsMaterials to fetch.
     */
    where?: ProductsMaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsMaterials to fetch.
     */
    orderBy?: ProductsMaterialsOrderByWithRelationInput | ProductsMaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductsMaterials.
     */
    cursor?: ProductsMaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductsMaterials.
     */
    distinct?: ProductsMaterialsScalarFieldEnum | ProductsMaterialsScalarFieldEnum[]
  }

  /**
   * ProductsMaterials findMany
   */
  export type ProductsMaterialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsMaterials
     */
    select?: ProductsMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsMaterials
     */
    omit?: ProductsMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsMaterialsInclude<ExtArgs> | null
    /**
     * Filter, which ProductsMaterials to fetch.
     */
    where?: ProductsMaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsMaterials to fetch.
     */
    orderBy?: ProductsMaterialsOrderByWithRelationInput | ProductsMaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductsMaterials.
     */
    cursor?: ProductsMaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsMaterials.
     */
    skip?: number
    distinct?: ProductsMaterialsScalarFieldEnum | ProductsMaterialsScalarFieldEnum[]
  }

  /**
   * ProductsMaterials create
   */
  export type ProductsMaterialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsMaterials
     */
    select?: ProductsMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsMaterials
     */
    omit?: ProductsMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsMaterialsInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductsMaterials.
     */
    data: XOR<ProductsMaterialsCreateInput, ProductsMaterialsUncheckedCreateInput>
  }

  /**
   * ProductsMaterials createMany
   */
  export type ProductsMaterialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductsMaterials.
     */
    data: ProductsMaterialsCreateManyInput | ProductsMaterialsCreateManyInput[]
  }

  /**
   * ProductsMaterials createManyAndReturn
   */
  export type ProductsMaterialsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsMaterials
     */
    select?: ProductsMaterialsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsMaterials
     */
    omit?: ProductsMaterialsOmit<ExtArgs> | null
    /**
     * The data used to create many ProductsMaterials.
     */
    data: ProductsMaterialsCreateManyInput | ProductsMaterialsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsMaterialsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductsMaterials update
   */
  export type ProductsMaterialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsMaterials
     */
    select?: ProductsMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsMaterials
     */
    omit?: ProductsMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsMaterialsInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductsMaterials.
     */
    data: XOR<ProductsMaterialsUpdateInput, ProductsMaterialsUncheckedUpdateInput>
    /**
     * Choose, which ProductsMaterials to update.
     */
    where: ProductsMaterialsWhereUniqueInput
  }

  /**
   * ProductsMaterials updateMany
   */
  export type ProductsMaterialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductsMaterials.
     */
    data: XOR<ProductsMaterialsUpdateManyMutationInput, ProductsMaterialsUncheckedUpdateManyInput>
    /**
     * Filter which ProductsMaterials to update
     */
    where?: ProductsMaterialsWhereInput
    /**
     * Limit how many ProductsMaterials to update.
     */
    limit?: number
  }

  /**
   * ProductsMaterials updateManyAndReturn
   */
  export type ProductsMaterialsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsMaterials
     */
    select?: ProductsMaterialsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsMaterials
     */
    omit?: ProductsMaterialsOmit<ExtArgs> | null
    /**
     * The data used to update ProductsMaterials.
     */
    data: XOR<ProductsMaterialsUpdateManyMutationInput, ProductsMaterialsUncheckedUpdateManyInput>
    /**
     * Filter which ProductsMaterials to update
     */
    where?: ProductsMaterialsWhereInput
    /**
     * Limit how many ProductsMaterials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsMaterialsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductsMaterials upsert
   */
  export type ProductsMaterialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsMaterials
     */
    select?: ProductsMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsMaterials
     */
    omit?: ProductsMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsMaterialsInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductsMaterials to update in case it exists.
     */
    where: ProductsMaterialsWhereUniqueInput
    /**
     * In case the ProductsMaterials found by the `where` argument doesn't exist, create a new ProductsMaterials with this data.
     */
    create: XOR<ProductsMaterialsCreateInput, ProductsMaterialsUncheckedCreateInput>
    /**
     * In case the ProductsMaterials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsMaterialsUpdateInput, ProductsMaterialsUncheckedUpdateInput>
  }

  /**
   * ProductsMaterials delete
   */
  export type ProductsMaterialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsMaterials
     */
    select?: ProductsMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsMaterials
     */
    omit?: ProductsMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsMaterialsInclude<ExtArgs> | null
    /**
     * Filter which ProductsMaterials to delete.
     */
    where: ProductsMaterialsWhereUniqueInput
  }

  /**
   * ProductsMaterials deleteMany
   */
  export type ProductsMaterialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductsMaterials to delete
     */
    where?: ProductsMaterialsWhereInput
    /**
     * Limit how many ProductsMaterials to delete.
     */
    limit?: number
  }

  /**
   * ProductsMaterials without action
   */
  export type ProductsMaterialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsMaterials
     */
    select?: ProductsMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsMaterials
     */
    omit?: ProductsMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsMaterialsInclude<ExtArgs> | null
  }


  /**
   * Model Materials
   */

  export type AggregateMaterials = {
    _count: MaterialsCountAggregateOutputType | null
    _avg: MaterialsAvgAggregateOutputType | null
    _sum: MaterialsSumAggregateOutputType | null
    _min: MaterialsMinAggregateOutputType | null
    _max: MaterialsMaxAggregateOutputType | null
  }

  export type MaterialsAvgAggregateOutputType = {
    id: number | null
  }

  export type MaterialsSumAggregateOutputType = {
    id: number | null
  }

  export type MaterialsMinAggregateOutputType = {
    id: number | null
    title: string | null
    image: string | null
    listed: boolean | null
  }

  export type MaterialsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    image: string | null
    listed: boolean | null
  }

  export type MaterialsCountAggregateOutputType = {
    id: number
    title: number
    image: number
    listed: number
    _all: number
  }


  export type MaterialsAvgAggregateInputType = {
    id?: true
  }

  export type MaterialsSumAggregateInputType = {
    id?: true
  }

  export type MaterialsMinAggregateInputType = {
    id?: true
    title?: true
    image?: true
    listed?: true
  }

  export type MaterialsMaxAggregateInputType = {
    id?: true
    title?: true
    image?: true
    listed?: true
  }

  export type MaterialsCountAggregateInputType = {
    id?: true
    title?: true
    image?: true
    listed?: true
    _all?: true
  }

  export type MaterialsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to aggregate.
     */
    where?: MaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialsOrderByWithRelationInput | MaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialsMaxAggregateInputType
  }

  export type GetMaterialsAggregateType<T extends MaterialsAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterials]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterials[P]>
      : GetScalarType<T[P], AggregateMaterials[P]>
  }




  export type MaterialsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialsWhereInput
    orderBy?: MaterialsOrderByWithAggregationInput | MaterialsOrderByWithAggregationInput[]
    by: MaterialsScalarFieldEnum[] | MaterialsScalarFieldEnum
    having?: MaterialsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialsCountAggregateInputType | true
    _avg?: MaterialsAvgAggregateInputType
    _sum?: MaterialsSumAggregateInputType
    _min?: MaterialsMinAggregateInputType
    _max?: MaterialsMaxAggregateInputType
  }

  export type MaterialsGroupByOutputType = {
    id: number
    title: string
    image: string
    listed: boolean
    _count: MaterialsCountAggregateOutputType | null
    _avg: MaterialsAvgAggregateOutputType | null
    _sum: MaterialsSumAggregateOutputType | null
    _min: MaterialsMinAggregateOutputType | null
    _max: MaterialsMaxAggregateOutputType | null
  }

  type GetMaterialsGroupByPayload<T extends MaterialsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialsGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialsGroupByOutputType[P]>
        }
      >
    >


  export type MaterialsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    listed?: boolean
    PrductsMaterials?: boolean | Materials$PrductsMaterialsArgs<ExtArgs>
    _count?: boolean | MaterialsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materials"]>

  export type MaterialsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    listed?: boolean
  }, ExtArgs["result"]["materials"]>

  export type MaterialsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    image?: boolean
    listed?: boolean
  }, ExtArgs["result"]["materials"]>

  export type MaterialsSelectScalar = {
    id?: boolean
    title?: boolean
    image?: boolean
    listed?: boolean
  }

  export type MaterialsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "image" | "listed", ExtArgs["result"]["materials"]>
  export type MaterialsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PrductsMaterials?: boolean | Materials$PrductsMaterialsArgs<ExtArgs>
    _count?: boolean | MaterialsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MaterialsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MaterialsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MaterialsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Materials"
    objects: {
      PrductsMaterials: Prisma.$ProductsMaterialsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      image: string
      listed: boolean
    }, ExtArgs["result"]["materials"]>
    composites: {}
  }

  type MaterialsGetPayload<S extends boolean | null | undefined | MaterialsDefaultArgs> = $Result.GetResult<Prisma.$MaterialsPayload, S>

  type MaterialsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialsCountAggregateInputType | true
    }

  export interface MaterialsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Materials'], meta: { name: 'Materials' } }
    /**
     * Find zero or one Materials that matches the filter.
     * @param {MaterialsFindUniqueArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialsFindUniqueArgs>(args: SelectSubset<T, MaterialsFindUniqueArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Materials that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialsFindUniqueOrThrowArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialsFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsFindFirstArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialsFindFirstArgs>(args?: SelectSubset<T, MaterialsFindFirstArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Materials that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsFindFirstOrThrowArgs} args - Arguments to find a Materials
     * @example
     * // Get one Materials
     * const materials = await prisma.materials.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialsFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.materials.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.materials.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialsWithIdOnly = await prisma.materials.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialsFindManyArgs>(args?: SelectSubset<T, MaterialsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Materials.
     * @param {MaterialsCreateArgs} args - Arguments to create a Materials.
     * @example
     * // Create one Materials
     * const Materials = await prisma.materials.create({
     *   data: {
     *     // ... data to create a Materials
     *   }
     * })
     * 
     */
    create<T extends MaterialsCreateArgs>(args: SelectSubset<T, MaterialsCreateArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {MaterialsCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const materials = await prisma.materials.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialsCreateManyArgs>(args?: SelectSubset<T, MaterialsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {MaterialsCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const materials = await prisma.materials.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `id`
     * const materialsWithIdOnly = await prisma.materials.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialsCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Materials.
     * @param {MaterialsDeleteArgs} args - Arguments to delete one Materials.
     * @example
     * // Delete one Materials
     * const Materials = await prisma.materials.delete({
     *   where: {
     *     // ... filter to delete one Materials
     *   }
     * })
     * 
     */
    delete<T extends MaterialsDeleteArgs>(args: SelectSubset<T, MaterialsDeleteArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Materials.
     * @param {MaterialsUpdateArgs} args - Arguments to update one Materials.
     * @example
     * // Update one Materials
     * const materials = await prisma.materials.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialsUpdateArgs>(args: SelectSubset<T, MaterialsUpdateArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {MaterialsDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.materials.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialsDeleteManyArgs>(args?: SelectSubset<T, MaterialsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const materials = await prisma.materials.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialsUpdateManyArgs>(args: SelectSubset<T, MaterialsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials and returns the data updated in the database.
     * @param {MaterialsUpdateManyAndReturnArgs} args - Arguments to update many Materials.
     * @example
     * // Update many Materials
     * const materials = await prisma.materials.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Materials and only return the `id`
     * const materialsWithIdOnly = await prisma.materials.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaterialsUpdateManyAndReturnArgs>(args: SelectSubset<T, MaterialsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Materials.
     * @param {MaterialsUpsertArgs} args - Arguments to update or create a Materials.
     * @example
     * // Update or create a Materials
     * const materials = await prisma.materials.upsert({
     *   create: {
     *     // ... data to create a Materials
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materials we want to update
     *   }
     * })
     */
    upsert<T extends MaterialsUpsertArgs>(args: SelectSubset<T, MaterialsUpsertArgs<ExtArgs>>): Prisma__MaterialsClient<$Result.GetResult<Prisma.$MaterialsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.materials.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialsCountArgs>(
      args?: Subset<T, MaterialsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaterialsAggregateArgs>(args: Subset<T, MaterialsAggregateArgs>): Prisma.PrismaPromise<GetMaterialsAggregateType<T>>

    /**
     * Group by Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaterialsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialsGroupByArgs['orderBy'] }
        : { orderBy?: MaterialsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaterialsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Materials model
   */
  readonly fields: MaterialsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materials.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PrductsMaterials<T extends Materials$PrductsMaterialsArgs<ExtArgs> = {}>(args?: Subset<T, Materials$PrductsMaterialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsMaterialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Materials model
   */
  interface MaterialsFieldRefs {
    readonly id: FieldRef<"Materials", 'Int'>
    readonly title: FieldRef<"Materials", 'String'>
    readonly image: FieldRef<"Materials", 'String'>
    readonly listed: FieldRef<"Materials", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Materials findUnique
   */
  export type MaterialsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where: MaterialsWhereUniqueInput
  }

  /**
   * Materials findUniqueOrThrow
   */
  export type MaterialsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where: MaterialsWhereUniqueInput
  }

  /**
   * Materials findFirst
   */
  export type MaterialsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialsOrderByWithRelationInput | MaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * Materials findFirstOrThrow
   */
  export type MaterialsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialsOrderByWithRelationInput | MaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * Materials findMany
   */
  export type MaterialsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialsOrderByWithRelationInput | MaterialsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    distinct?: MaterialsScalarFieldEnum | MaterialsScalarFieldEnum[]
  }

  /**
   * Materials create
   */
  export type MaterialsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * The data needed to create a Materials.
     */
    data: XOR<MaterialsCreateInput, MaterialsUncheckedCreateInput>
  }

  /**
   * Materials createMany
   */
  export type MaterialsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialsCreateManyInput | MaterialsCreateManyInput[]
  }

  /**
   * Materials createManyAndReturn
   */
  export type MaterialsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * The data used to create many Materials.
     */
    data: MaterialsCreateManyInput | MaterialsCreateManyInput[]
  }

  /**
   * Materials update
   */
  export type MaterialsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * The data needed to update a Materials.
     */
    data: XOR<MaterialsUpdateInput, MaterialsUncheckedUpdateInput>
    /**
     * Choose, which Materials to update.
     */
    where: MaterialsWhereUniqueInput
  }

  /**
   * Materials updateMany
   */
  export type MaterialsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialsUpdateManyMutationInput, MaterialsUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialsWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Materials updateManyAndReturn
   */
  export type MaterialsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialsUpdateManyMutationInput, MaterialsUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialsWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Materials upsert
   */
  export type MaterialsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * The filter to search for the Materials to update in case it exists.
     */
    where: MaterialsWhereUniqueInput
    /**
     * In case the Materials found by the `where` argument doesn't exist, create a new Materials with this data.
     */
    create: XOR<MaterialsCreateInput, MaterialsUncheckedCreateInput>
    /**
     * In case the Materials was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialsUpdateInput, MaterialsUncheckedUpdateInput>
  }

  /**
   * Materials delete
   */
  export type MaterialsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
    /**
     * Filter which Materials to delete.
     */
    where: MaterialsWhereUniqueInput
  }

  /**
   * Materials deleteMany
   */
  export type MaterialsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialsWhereInput
    /**
     * Limit how many Materials to delete.
     */
    limit?: number
  }

  /**
   * Materials.PrductsMaterials
   */
  export type Materials$PrductsMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsMaterials
     */
    select?: ProductsMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsMaterials
     */
    omit?: ProductsMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsMaterialsInclude<ExtArgs> | null
    where?: ProductsMaterialsWhereInput
    orderBy?: ProductsMaterialsOrderByWithRelationInput | ProductsMaterialsOrderByWithRelationInput[]
    cursor?: ProductsMaterialsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsMaterialsScalarFieldEnum | ProductsMaterialsScalarFieldEnum[]
  }

  /**
   * Materials without action
   */
  export type MaterialsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materials
     */
    select?: MaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Materials
     */
    omit?: MaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialsInclude<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    price: number | null
    categoriesId: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    price: number | null
    categoriesId: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    listed: boolean | null
    title: string | null
    description: string | null
    price: number | null
    image: string | null
    categoriesId: number | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    listed: boolean | null
    title: string | null
    description: string | null
    price: number | null
    image: string | null
    categoriesId: number | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    listed: number
    title: number
    description: number
    price: number
    image: number
    categoriesId: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    price?: true
    categoriesId?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    price?: true
    categoriesId?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    listed?: true
    title?: true
    description?: true
    price?: true
    image?: true
    categoriesId?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    listed?: true
    title?: true
    description?: true
    price?: true
    image?: true
    categoriesId?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    listed?: true
    title?: true
    description?: true
    price?: true
    image?: true
    categoriesId?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    listed: boolean
    title: string
    description: string | null
    price: number | null
    image: string
    categoriesId: number | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listed?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    image?: boolean
    categoriesId?: boolean
    ProductsMaterials?: boolean | Products$ProductsMaterialsArgs<ExtArgs>
    Categories?: boolean | Products$CategoriesArgs<ExtArgs>
    orders?: boolean | Products$ordersArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listed?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    image?: boolean
    categoriesId?: boolean
    Categories?: boolean | Products$CategoriesArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listed?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    image?: boolean
    categoriesId?: boolean
    Categories?: boolean | Products$CategoriesArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    id?: boolean
    listed?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    image?: boolean
    categoriesId?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listed" | "title" | "description" | "price" | "image" | "categoriesId", ExtArgs["result"]["products"]>
  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ProductsMaterials?: boolean | Products$ProductsMaterialsArgs<ExtArgs>
    Categories?: boolean | Products$CategoriesArgs<ExtArgs>
    orders?: boolean | Products$ordersArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Categories?: boolean | Products$CategoriesArgs<ExtArgs>
  }
  export type ProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Categories?: boolean | Products$CategoriesArgs<ExtArgs>
  }

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      ProductsMaterials: Prisma.$ProductsMaterialsPayload<ExtArgs>[]
      Categories: Prisma.$CategoriesPayload<ExtArgs> | null
      orders: Prisma.$OrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      listed: boolean
      title: string
      description: string | null
      price: number | null
      image: string
      categoriesId: number | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ProductsMaterials<T extends Products$ProductsMaterialsArgs<ExtArgs> = {}>(args?: Subset<T, Products$ProductsMaterialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsMaterialsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Categories<T extends Products$CategoriesArgs<ExtArgs> = {}>(args?: Subset<T, Products$CategoriesArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends Products$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Products$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly id: FieldRef<"Products", 'Int'>
    readonly listed: FieldRef<"Products", 'Boolean'>
    readonly title: FieldRef<"Products", 'String'>
    readonly description: FieldRef<"Products", 'String'>
    readonly price: FieldRef<"Products", 'Float'>
    readonly image: FieldRef<"Products", 'String'>
    readonly categoriesId: FieldRef<"Products", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products updateManyAndReturn
   */
  export type ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products.ProductsMaterials
   */
  export type Products$ProductsMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsMaterials
     */
    select?: ProductsMaterialsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsMaterials
     */
    omit?: ProductsMaterialsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsMaterialsInclude<ExtArgs> | null
    where?: ProductsMaterialsWhereInput
    orderBy?: ProductsMaterialsOrderByWithRelationInput | ProductsMaterialsOrderByWithRelationInput[]
    cursor?: ProductsMaterialsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsMaterialsScalarFieldEnum | ProductsMaterialsScalarFieldEnum[]
  }

  /**
   * Products.Categories
   */
  export type Products$CategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    where?: CategoriesWhereInput
  }

  /**
   * Products.orders
   */
  export type Products$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model ProductsOrders
   */

  export type AggregateProductsOrders = {
    _count: ProductsOrdersCountAggregateOutputType | null
    _avg: ProductsOrdersAvgAggregateOutputType | null
    _sum: ProductsOrdersSumAggregateOutputType | null
    _min: ProductsOrdersMinAggregateOutputType | null
    _max: ProductsOrdersMaxAggregateOutputType | null
  }

  export type ProductsOrdersAvgAggregateOutputType = {
    id: number | null
    totalPrice: number | null
  }

  export type ProductsOrdersSumAggregateOutputType = {
    id: number | null
    totalPrice: number | null
  }

  export type ProductsOrdersMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    shippped: boolean | null
    totalPrice: number | null
  }

  export type ProductsOrdersMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    shippped: boolean | null
    totalPrice: number | null
  }

  export type ProductsOrdersCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    shippped: number
    totalPrice: number
    _all: number
  }


  export type ProductsOrdersAvgAggregateInputType = {
    id?: true
    totalPrice?: true
  }

  export type ProductsOrdersSumAggregateInputType = {
    id?: true
    totalPrice?: true
  }

  export type ProductsOrdersMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    shippped?: true
    totalPrice?: true
  }

  export type ProductsOrdersMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    shippped?: true
    totalPrice?: true
  }

  export type ProductsOrdersCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    shippped?: true
    totalPrice?: true
    _all?: true
  }

  export type ProductsOrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductsOrders to aggregate.
     */
    where?: ProductsOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOrders to fetch.
     */
    orderBy?: ProductsOrdersOrderByWithRelationInput | ProductsOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductsOrders
    **/
    _count?: true | ProductsOrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsOrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsOrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsOrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsOrdersMaxAggregateInputType
  }

  export type GetProductsOrdersAggregateType<T extends ProductsOrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateProductsOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductsOrders[P]>
      : GetScalarType<T[P], AggregateProductsOrders[P]>
  }




  export type ProductsOrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsOrdersWhereInput
    orderBy?: ProductsOrdersOrderByWithAggregationInput | ProductsOrdersOrderByWithAggregationInput[]
    by: ProductsOrdersScalarFieldEnum[] | ProductsOrdersScalarFieldEnum
    having?: ProductsOrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsOrdersCountAggregateInputType | true
    _avg?: ProductsOrdersAvgAggregateInputType
    _sum?: ProductsOrdersSumAggregateInputType
    _min?: ProductsOrdersMinAggregateInputType
    _max?: ProductsOrdersMaxAggregateInputType
  }

  export type ProductsOrdersGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    shippped: boolean
    totalPrice: number
    _count: ProductsOrdersCountAggregateOutputType | null
    _avg: ProductsOrdersAvgAggregateOutputType | null
    _sum: ProductsOrdersSumAggregateOutputType | null
    _min: ProductsOrdersMinAggregateOutputType | null
    _max: ProductsOrdersMaxAggregateOutputType | null
  }

  type GetProductsOrdersGroupByPayload<T extends ProductsOrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsOrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsOrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsOrdersGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsOrdersGroupByOutputType[P]>
        }
      >
    >


  export type ProductsOrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shippped?: boolean
    totalPrice?: boolean
    orders?: boolean | ProductsOrders$ordersArgs<ExtArgs>
    _count?: boolean | ProductsOrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productsOrders"]>

  export type ProductsOrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shippped?: boolean
    totalPrice?: boolean
  }, ExtArgs["result"]["productsOrders"]>

  export type ProductsOrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shippped?: boolean
    totalPrice?: boolean
  }, ExtArgs["result"]["productsOrders"]>

  export type ProductsOrdersSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shippped?: boolean
    totalPrice?: boolean
  }

  export type ProductsOrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "shippped" | "totalPrice", ExtArgs["result"]["productsOrders"]>
  export type ProductsOrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ProductsOrders$ordersArgs<ExtArgs>
    _count?: boolean | ProductsOrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductsOrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductsOrdersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductsOrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductsOrders"
    objects: {
      orders: Prisma.$OrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      shippped: boolean
      totalPrice: number
    }, ExtArgs["result"]["productsOrders"]>
    composites: {}
  }

  type ProductsOrdersGetPayload<S extends boolean | null | undefined | ProductsOrdersDefaultArgs> = $Result.GetResult<Prisma.$ProductsOrdersPayload, S>

  type ProductsOrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsOrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsOrdersCountAggregateInputType | true
    }

  export interface ProductsOrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductsOrders'], meta: { name: 'ProductsOrders' } }
    /**
     * Find zero or one ProductsOrders that matches the filter.
     * @param {ProductsOrdersFindUniqueArgs} args - Arguments to find a ProductsOrders
     * @example
     * // Get one ProductsOrders
     * const productsOrders = await prisma.productsOrders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsOrdersFindUniqueArgs>(args: SelectSubset<T, ProductsOrdersFindUniqueArgs<ExtArgs>>): Prisma__ProductsOrdersClient<$Result.GetResult<Prisma.$ProductsOrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductsOrders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsOrdersFindUniqueOrThrowArgs} args - Arguments to find a ProductsOrders
     * @example
     * // Get one ProductsOrders
     * const productsOrders = await prisma.productsOrders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsOrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsOrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsOrdersClient<$Result.GetResult<Prisma.$ProductsOrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductsOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOrdersFindFirstArgs} args - Arguments to find a ProductsOrders
     * @example
     * // Get one ProductsOrders
     * const productsOrders = await prisma.productsOrders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsOrdersFindFirstArgs>(args?: SelectSubset<T, ProductsOrdersFindFirstArgs<ExtArgs>>): Prisma__ProductsOrdersClient<$Result.GetResult<Prisma.$ProductsOrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductsOrders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOrdersFindFirstOrThrowArgs} args - Arguments to find a ProductsOrders
     * @example
     * // Get one ProductsOrders
     * const productsOrders = await prisma.productsOrders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsOrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsOrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsOrdersClient<$Result.GetResult<Prisma.$ProductsOrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductsOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductsOrders
     * const productsOrders = await prisma.productsOrders.findMany()
     * 
     * // Get first 10 ProductsOrders
     * const productsOrders = await prisma.productsOrders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsOrdersWithIdOnly = await prisma.productsOrders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductsOrdersFindManyArgs>(args?: SelectSubset<T, ProductsOrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsOrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductsOrders.
     * @param {ProductsOrdersCreateArgs} args - Arguments to create a ProductsOrders.
     * @example
     * // Create one ProductsOrders
     * const ProductsOrders = await prisma.productsOrders.create({
     *   data: {
     *     // ... data to create a ProductsOrders
     *   }
     * })
     * 
     */
    create<T extends ProductsOrdersCreateArgs>(args: SelectSubset<T, ProductsOrdersCreateArgs<ExtArgs>>): Prisma__ProductsOrdersClient<$Result.GetResult<Prisma.$ProductsOrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductsOrders.
     * @param {ProductsOrdersCreateManyArgs} args - Arguments to create many ProductsOrders.
     * @example
     * // Create many ProductsOrders
     * const productsOrders = await prisma.productsOrders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsOrdersCreateManyArgs>(args?: SelectSubset<T, ProductsOrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductsOrders and returns the data saved in the database.
     * @param {ProductsOrdersCreateManyAndReturnArgs} args - Arguments to create many ProductsOrders.
     * @example
     * // Create many ProductsOrders
     * const productsOrders = await prisma.productsOrders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductsOrders and only return the `id`
     * const productsOrdersWithIdOnly = await prisma.productsOrders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsOrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsOrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsOrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductsOrders.
     * @param {ProductsOrdersDeleteArgs} args - Arguments to delete one ProductsOrders.
     * @example
     * // Delete one ProductsOrders
     * const ProductsOrders = await prisma.productsOrders.delete({
     *   where: {
     *     // ... filter to delete one ProductsOrders
     *   }
     * })
     * 
     */
    delete<T extends ProductsOrdersDeleteArgs>(args: SelectSubset<T, ProductsOrdersDeleteArgs<ExtArgs>>): Prisma__ProductsOrdersClient<$Result.GetResult<Prisma.$ProductsOrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductsOrders.
     * @param {ProductsOrdersUpdateArgs} args - Arguments to update one ProductsOrders.
     * @example
     * // Update one ProductsOrders
     * const productsOrders = await prisma.productsOrders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsOrdersUpdateArgs>(args: SelectSubset<T, ProductsOrdersUpdateArgs<ExtArgs>>): Prisma__ProductsOrdersClient<$Result.GetResult<Prisma.$ProductsOrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductsOrders.
     * @param {ProductsOrdersDeleteManyArgs} args - Arguments to filter ProductsOrders to delete.
     * @example
     * // Delete a few ProductsOrders
     * const { count } = await prisma.productsOrders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsOrdersDeleteManyArgs>(args?: SelectSubset<T, ProductsOrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductsOrders
     * const productsOrders = await prisma.productsOrders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsOrdersUpdateManyArgs>(args: SelectSubset<T, ProductsOrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsOrders and returns the data updated in the database.
     * @param {ProductsOrdersUpdateManyAndReturnArgs} args - Arguments to update many ProductsOrders.
     * @example
     * // Update many ProductsOrders
     * const productsOrders = await prisma.productsOrders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductsOrders and only return the `id`
     * const productsOrdersWithIdOnly = await prisma.productsOrders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductsOrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsOrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsOrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductsOrders.
     * @param {ProductsOrdersUpsertArgs} args - Arguments to update or create a ProductsOrders.
     * @example
     * // Update or create a ProductsOrders
     * const productsOrders = await prisma.productsOrders.upsert({
     *   create: {
     *     // ... data to create a ProductsOrders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductsOrders we want to update
     *   }
     * })
     */
    upsert<T extends ProductsOrdersUpsertArgs>(args: SelectSubset<T, ProductsOrdersUpsertArgs<ExtArgs>>): Prisma__ProductsOrdersClient<$Result.GetResult<Prisma.$ProductsOrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductsOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOrdersCountArgs} args - Arguments to filter ProductsOrders to count.
     * @example
     * // Count the number of ProductsOrders
     * const count = await prisma.productsOrders.count({
     *   where: {
     *     // ... the filter for the ProductsOrders we want to count
     *   }
     * })
    **/
    count<T extends ProductsOrdersCountArgs>(
      args?: Subset<T, ProductsOrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsOrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductsOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsOrdersAggregateArgs>(args: Subset<T, ProductsOrdersAggregateArgs>): Prisma.PrismaPromise<GetProductsOrdersAggregateType<T>>

    /**
     * Group by ProductsOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsOrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsOrdersGroupByArgs['orderBy'] }
        : { orderBy?: ProductsOrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsOrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductsOrders model
   */
  readonly fields: ProductsOrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductsOrders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsOrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends ProductsOrders$ordersArgs<ExtArgs> = {}>(args?: Subset<T, ProductsOrders$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductsOrders model
   */
  interface ProductsOrdersFieldRefs {
    readonly id: FieldRef<"ProductsOrders", 'Int'>
    readonly createdAt: FieldRef<"ProductsOrders", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductsOrders", 'DateTime'>
    readonly shippped: FieldRef<"ProductsOrders", 'Boolean'>
    readonly totalPrice: FieldRef<"ProductsOrders", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ProductsOrders findUnique
   */
  export type ProductsOrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrders
     */
    select?: ProductsOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOrders
     */
    omit?: ProductsOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOrdersInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOrders to fetch.
     */
    where: ProductsOrdersWhereUniqueInput
  }

  /**
   * ProductsOrders findUniqueOrThrow
   */
  export type ProductsOrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrders
     */
    select?: ProductsOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOrders
     */
    omit?: ProductsOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOrdersInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOrders to fetch.
     */
    where: ProductsOrdersWhereUniqueInput
  }

  /**
   * ProductsOrders findFirst
   */
  export type ProductsOrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrders
     */
    select?: ProductsOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOrders
     */
    omit?: ProductsOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOrdersInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOrders to fetch.
     */
    where?: ProductsOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOrders to fetch.
     */
    orderBy?: ProductsOrdersOrderByWithRelationInput | ProductsOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductsOrders.
     */
    cursor?: ProductsOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductsOrders.
     */
    distinct?: ProductsOrdersScalarFieldEnum | ProductsOrdersScalarFieldEnum[]
  }

  /**
   * ProductsOrders findFirstOrThrow
   */
  export type ProductsOrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrders
     */
    select?: ProductsOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOrders
     */
    omit?: ProductsOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOrdersInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOrders to fetch.
     */
    where?: ProductsOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOrders to fetch.
     */
    orderBy?: ProductsOrdersOrderByWithRelationInput | ProductsOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductsOrders.
     */
    cursor?: ProductsOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductsOrders.
     */
    distinct?: ProductsOrdersScalarFieldEnum | ProductsOrdersScalarFieldEnum[]
  }

  /**
   * ProductsOrders findMany
   */
  export type ProductsOrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrders
     */
    select?: ProductsOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOrders
     */
    omit?: ProductsOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOrdersInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOrders to fetch.
     */
    where?: ProductsOrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOrders to fetch.
     */
    orderBy?: ProductsOrdersOrderByWithRelationInput | ProductsOrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductsOrders.
     */
    cursor?: ProductsOrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOrders.
     */
    skip?: number
    distinct?: ProductsOrdersScalarFieldEnum | ProductsOrdersScalarFieldEnum[]
  }

  /**
   * ProductsOrders create
   */
  export type ProductsOrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrders
     */
    select?: ProductsOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOrders
     */
    omit?: ProductsOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductsOrders.
     */
    data: XOR<ProductsOrdersCreateInput, ProductsOrdersUncheckedCreateInput>
  }

  /**
   * ProductsOrders createMany
   */
  export type ProductsOrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductsOrders.
     */
    data: ProductsOrdersCreateManyInput | ProductsOrdersCreateManyInput[]
  }

  /**
   * ProductsOrders createManyAndReturn
   */
  export type ProductsOrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrders
     */
    select?: ProductsOrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOrders
     */
    omit?: ProductsOrdersOmit<ExtArgs> | null
    /**
     * The data used to create many ProductsOrders.
     */
    data: ProductsOrdersCreateManyInput | ProductsOrdersCreateManyInput[]
  }

  /**
   * ProductsOrders update
   */
  export type ProductsOrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrders
     */
    select?: ProductsOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOrders
     */
    omit?: ProductsOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductsOrders.
     */
    data: XOR<ProductsOrdersUpdateInput, ProductsOrdersUncheckedUpdateInput>
    /**
     * Choose, which ProductsOrders to update.
     */
    where: ProductsOrdersWhereUniqueInput
  }

  /**
   * ProductsOrders updateMany
   */
  export type ProductsOrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductsOrders.
     */
    data: XOR<ProductsOrdersUpdateManyMutationInput, ProductsOrdersUncheckedUpdateManyInput>
    /**
     * Filter which ProductsOrders to update
     */
    where?: ProductsOrdersWhereInput
    /**
     * Limit how many ProductsOrders to update.
     */
    limit?: number
  }

  /**
   * ProductsOrders updateManyAndReturn
   */
  export type ProductsOrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrders
     */
    select?: ProductsOrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOrders
     */
    omit?: ProductsOrdersOmit<ExtArgs> | null
    /**
     * The data used to update ProductsOrders.
     */
    data: XOR<ProductsOrdersUpdateManyMutationInput, ProductsOrdersUncheckedUpdateManyInput>
    /**
     * Filter which ProductsOrders to update
     */
    where?: ProductsOrdersWhereInput
    /**
     * Limit how many ProductsOrders to update.
     */
    limit?: number
  }

  /**
   * ProductsOrders upsert
   */
  export type ProductsOrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrders
     */
    select?: ProductsOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOrders
     */
    omit?: ProductsOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductsOrders to update in case it exists.
     */
    where: ProductsOrdersWhereUniqueInput
    /**
     * In case the ProductsOrders found by the `where` argument doesn't exist, create a new ProductsOrders with this data.
     */
    create: XOR<ProductsOrdersCreateInput, ProductsOrdersUncheckedCreateInput>
    /**
     * In case the ProductsOrders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsOrdersUpdateInput, ProductsOrdersUncheckedUpdateInput>
  }

  /**
   * ProductsOrders delete
   */
  export type ProductsOrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrders
     */
    select?: ProductsOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOrders
     */
    omit?: ProductsOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOrdersInclude<ExtArgs> | null
    /**
     * Filter which ProductsOrders to delete.
     */
    where: ProductsOrdersWhereUniqueInput
  }

  /**
   * ProductsOrders deleteMany
   */
  export type ProductsOrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductsOrders to delete
     */
    where?: ProductsOrdersWhereInput
    /**
     * Limit how many ProductsOrders to delete.
     */
    limit?: number
  }

  /**
   * ProductsOrders.orders
   */
  export type ProductsOrders$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * ProductsOrders without action
   */
  export type ProductsOrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOrders
     */
    select?: ProductsOrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOrders
     */
    omit?: ProductsOrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOrdersInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    quantity: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    quantity: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    quantity: number | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    quantity: number | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    quantity: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    orderId: number
    productId: number | null
    quantity: number
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    UserOrder?: boolean | ProductsOrdersDefaultArgs<ExtArgs>
    product?: boolean | Orders$productArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    UserOrder?: boolean | ProductsOrdersDefaultArgs<ExtArgs>
    product?: boolean | Orders$productArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    UserOrder?: boolean | ProductsOrdersDefaultArgs<ExtArgs>
    product?: boolean | Orders$productArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "productId" | "quantity", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserOrder?: boolean | ProductsOrdersDefaultArgs<ExtArgs>
    product?: boolean | Orders$productArgs<ExtArgs>
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserOrder?: boolean | ProductsOrdersDefaultArgs<ExtArgs>
    product?: boolean | Orders$productArgs<ExtArgs>
  }
  export type OrdersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserOrder?: boolean | ProductsOrdersDefaultArgs<ExtArgs>
    product?: boolean | Orders$productArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      UserOrder: Prisma.$ProductsOrdersPayload<ExtArgs>
      product: Prisma.$ProductsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      productId: number | null
      quantity: number
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserOrder<T extends ProductsOrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsOrdersDefaultArgs<ExtArgs>>): Prisma__ProductsOrdersClient<$Result.GetResult<Prisma.$ProductsOrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends Orders$productArgs<ExtArgs> = {}>(args?: Subset<T, Orders$productArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'Int'>
    readonly orderId: FieldRef<"Orders", 'Int'>
    readonly productId: FieldRef<"Orders", 'Int'>
    readonly quantity: FieldRef<"Orders", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.product
   */
  export type Orders$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatesAt: 'updatesAt',
    isAdmin: 'isAdmin',
    username: 'username',
    password: 'password',
    refreshtoken: 'refreshtoken'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const ProductsMaterialsScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    materialId: 'materialId'
  };

  export type ProductsMaterialsScalarFieldEnum = (typeof ProductsMaterialsScalarFieldEnum)[keyof typeof ProductsMaterialsScalarFieldEnum]


  export const MaterialsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    image: 'image',
    listed: 'listed'
  };

  export type MaterialsScalarFieldEnum = (typeof MaterialsScalarFieldEnum)[keyof typeof MaterialsScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    listed: 'listed',
    title: 'title',
    description: 'description',
    price: 'price',
    image: 'image',
    categoriesId: 'categoriesId'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const ProductsOrdersScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    shippped: 'shippped',
    totalPrice: 'totalPrice'
  };

  export type ProductsOrdersScalarFieldEnum = (typeof ProductsOrdersScalarFieldEnum)[keyof typeof ProductsOrdersScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    quantity: 'quantity'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatesAt?: DateTimeFilter<"User"> | Date | string
    isAdmin?: BoolFilter<"User"> | boolean
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    refreshtoken?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatesAt?: SortOrder
    isAdmin?: SortOrder
    username?: SortOrder
    password?: SortOrder
    refreshtoken?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatesAt?: DateTimeFilter<"User"> | Date | string
    isAdmin?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    refreshtoken?: StringFilter<"User"> | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatesAt?: SortOrder
    isAdmin?: SortOrder
    username?: SortOrder
    password?: SortOrder
    refreshtoken?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatesAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    refreshtoken?: StringWithAggregatesFilter<"User"> | string
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: IntFilter<"Categories"> | number
    name?: StringFilter<"Categories"> | string
    Products?: ProductsListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Products?: ProductsOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    Products?: ProductsListRelationFilter
  }, "id" | "name">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categories"> | number
    name?: StringWithAggregatesFilter<"Categories"> | string
  }

  export type ProductsMaterialsWhereInput = {
    AND?: ProductsMaterialsWhereInput | ProductsMaterialsWhereInput[]
    OR?: ProductsMaterialsWhereInput[]
    NOT?: ProductsMaterialsWhereInput | ProductsMaterialsWhereInput[]
    id?: IntFilter<"ProductsMaterials"> | number
    productId?: IntFilter<"ProductsMaterials"> | number
    materialId?: IntFilter<"ProductsMaterials"> | number
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    material?: XOR<MaterialsScalarRelationFilter, MaterialsWhereInput>
  }

  export type ProductsMaterialsOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    materialId?: SortOrder
    product?: ProductsOrderByWithRelationInput
    material?: MaterialsOrderByWithRelationInput
  }

  export type ProductsMaterialsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductsMaterialsWhereInput | ProductsMaterialsWhereInput[]
    OR?: ProductsMaterialsWhereInput[]
    NOT?: ProductsMaterialsWhereInput | ProductsMaterialsWhereInput[]
    productId?: IntFilter<"ProductsMaterials"> | number
    materialId?: IntFilter<"ProductsMaterials"> | number
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    material?: XOR<MaterialsScalarRelationFilter, MaterialsWhereInput>
  }, "id">

  export type ProductsMaterialsOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    materialId?: SortOrder
    _count?: ProductsMaterialsCountOrderByAggregateInput
    _avg?: ProductsMaterialsAvgOrderByAggregateInput
    _max?: ProductsMaterialsMaxOrderByAggregateInput
    _min?: ProductsMaterialsMinOrderByAggregateInput
    _sum?: ProductsMaterialsSumOrderByAggregateInput
  }

  export type ProductsMaterialsScalarWhereWithAggregatesInput = {
    AND?: ProductsMaterialsScalarWhereWithAggregatesInput | ProductsMaterialsScalarWhereWithAggregatesInput[]
    OR?: ProductsMaterialsScalarWhereWithAggregatesInput[]
    NOT?: ProductsMaterialsScalarWhereWithAggregatesInput | ProductsMaterialsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductsMaterials"> | number
    productId?: IntWithAggregatesFilter<"ProductsMaterials"> | number
    materialId?: IntWithAggregatesFilter<"ProductsMaterials"> | number
  }

  export type MaterialsWhereInput = {
    AND?: MaterialsWhereInput | MaterialsWhereInput[]
    OR?: MaterialsWhereInput[]
    NOT?: MaterialsWhereInput | MaterialsWhereInput[]
    id?: IntFilter<"Materials"> | number
    title?: StringFilter<"Materials"> | string
    image?: StringFilter<"Materials"> | string
    listed?: BoolFilter<"Materials"> | boolean
    PrductsMaterials?: ProductsMaterialsListRelationFilter
  }

  export type MaterialsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    listed?: SortOrder
    PrductsMaterials?: ProductsMaterialsOrderByRelationAggregateInput
  }

  export type MaterialsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: MaterialsWhereInput | MaterialsWhereInput[]
    OR?: MaterialsWhereInput[]
    NOT?: MaterialsWhereInput | MaterialsWhereInput[]
    image?: StringFilter<"Materials"> | string
    listed?: BoolFilter<"Materials"> | boolean
    PrductsMaterials?: ProductsMaterialsListRelationFilter
  }, "id" | "title">

  export type MaterialsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    listed?: SortOrder
    _count?: MaterialsCountOrderByAggregateInput
    _avg?: MaterialsAvgOrderByAggregateInput
    _max?: MaterialsMaxOrderByAggregateInput
    _min?: MaterialsMinOrderByAggregateInput
    _sum?: MaterialsSumOrderByAggregateInput
  }

  export type MaterialsScalarWhereWithAggregatesInput = {
    AND?: MaterialsScalarWhereWithAggregatesInput | MaterialsScalarWhereWithAggregatesInput[]
    OR?: MaterialsScalarWhereWithAggregatesInput[]
    NOT?: MaterialsScalarWhereWithAggregatesInput | MaterialsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Materials"> | number
    title?: StringWithAggregatesFilter<"Materials"> | string
    image?: StringWithAggregatesFilter<"Materials"> | string
    listed?: BoolWithAggregatesFilter<"Materials"> | boolean
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    id?: IntFilter<"Products"> | number
    listed?: BoolFilter<"Products"> | boolean
    title?: StringFilter<"Products"> | string
    description?: StringNullableFilter<"Products"> | string | null
    price?: FloatNullableFilter<"Products"> | number | null
    image?: StringFilter<"Products"> | string
    categoriesId?: IntNullableFilter<"Products"> | number | null
    ProductsMaterials?: ProductsMaterialsListRelationFilter
    Categories?: XOR<CategoriesNullableScalarRelationFilter, CategoriesWhereInput> | null
    orders?: OrdersListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    id?: SortOrder
    listed?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    image?: SortOrder
    categoriesId?: SortOrderInput | SortOrder
    ProductsMaterials?: ProductsMaterialsOrderByRelationAggregateInput
    Categories?: CategoriesOrderByWithRelationInput
    orders?: OrdersOrderByRelationAggregateInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    listed?: BoolFilter<"Products"> | boolean
    title?: StringFilter<"Products"> | string
    description?: StringNullableFilter<"Products"> | string | null
    price?: FloatNullableFilter<"Products"> | number | null
    image?: StringFilter<"Products"> | string
    categoriesId?: IntNullableFilter<"Products"> | number | null
    ProductsMaterials?: ProductsMaterialsListRelationFilter
    Categories?: XOR<CategoriesNullableScalarRelationFilter, CategoriesWhereInput> | null
    orders?: OrdersListRelationFilter
  }, "id">

  export type ProductsOrderByWithAggregationInput = {
    id?: SortOrder
    listed?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    image?: SortOrder
    categoriesId?: SortOrderInput | SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Products"> | number
    listed?: BoolWithAggregatesFilter<"Products"> | boolean
    title?: StringWithAggregatesFilter<"Products"> | string
    description?: StringNullableWithAggregatesFilter<"Products"> | string | null
    price?: FloatNullableWithAggregatesFilter<"Products"> | number | null
    image?: StringWithAggregatesFilter<"Products"> | string
    categoriesId?: IntNullableWithAggregatesFilter<"Products"> | number | null
  }

  export type ProductsOrdersWhereInput = {
    AND?: ProductsOrdersWhereInput | ProductsOrdersWhereInput[]
    OR?: ProductsOrdersWhereInput[]
    NOT?: ProductsOrdersWhereInput | ProductsOrdersWhereInput[]
    id?: IntFilter<"ProductsOrders"> | number
    createdAt?: DateTimeFilter<"ProductsOrders"> | Date | string
    updatedAt?: DateTimeFilter<"ProductsOrders"> | Date | string
    shippped?: BoolFilter<"ProductsOrders"> | boolean
    totalPrice?: FloatFilter<"ProductsOrders"> | number
    orders?: OrdersListRelationFilter
  }

  export type ProductsOrdersOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shippped?: SortOrder
    totalPrice?: SortOrder
    orders?: OrdersOrderByRelationAggregateInput
  }

  export type ProductsOrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductsOrdersWhereInput | ProductsOrdersWhereInput[]
    OR?: ProductsOrdersWhereInput[]
    NOT?: ProductsOrdersWhereInput | ProductsOrdersWhereInput[]
    createdAt?: DateTimeFilter<"ProductsOrders"> | Date | string
    updatedAt?: DateTimeFilter<"ProductsOrders"> | Date | string
    shippped?: BoolFilter<"ProductsOrders"> | boolean
    totalPrice?: FloatFilter<"ProductsOrders"> | number
    orders?: OrdersListRelationFilter
  }, "id">

  export type ProductsOrdersOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shippped?: SortOrder
    totalPrice?: SortOrder
    _count?: ProductsOrdersCountOrderByAggregateInput
    _avg?: ProductsOrdersAvgOrderByAggregateInput
    _max?: ProductsOrdersMaxOrderByAggregateInput
    _min?: ProductsOrdersMinOrderByAggregateInput
    _sum?: ProductsOrdersSumOrderByAggregateInput
  }

  export type ProductsOrdersScalarWhereWithAggregatesInput = {
    AND?: ProductsOrdersScalarWhereWithAggregatesInput | ProductsOrdersScalarWhereWithAggregatesInput[]
    OR?: ProductsOrdersScalarWhereWithAggregatesInput[]
    NOT?: ProductsOrdersScalarWhereWithAggregatesInput | ProductsOrdersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductsOrders"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductsOrders"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductsOrders"> | Date | string
    shippped?: BoolWithAggregatesFilter<"ProductsOrders"> | boolean
    totalPrice?: FloatWithAggregatesFilter<"ProductsOrders"> | number
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: IntFilter<"Orders"> | number
    orderId?: IntFilter<"Orders"> | number
    productId?: IntNullableFilter<"Orders"> | number | null
    quantity?: IntFilter<"Orders"> | number
    UserOrder?: XOR<ProductsOrdersScalarRelationFilter, ProductsOrdersWhereInput>
    product?: XOR<ProductsNullableScalarRelationFilter, ProductsWhereInput> | null
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    UserOrder?: ProductsOrdersOrderByWithRelationInput
    product?: ProductsOrderByWithRelationInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    orderId?: IntFilter<"Orders"> | number
    productId?: IntNullableFilter<"Orders"> | number | null
    quantity?: IntFilter<"Orders"> | number
    UserOrder?: XOR<ProductsOrdersScalarRelationFilter, ProductsOrdersWhereInput>
    product?: XOR<ProductsNullableScalarRelationFilter, ProductsWhereInput> | null
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orders"> | number
    orderId?: IntWithAggregatesFilter<"Orders"> | number
    productId?: IntNullableWithAggregatesFilter<"Orders"> | number | null
    quantity?: IntWithAggregatesFilter<"Orders"> | number
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    updatesAt?: Date | string
    isAdmin?: boolean
    username: string
    password: string
    refreshtoken?: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatesAt?: Date | string
    isAdmin?: boolean
    username: string
    password: string
    refreshtoken?: string
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatesAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshtoken?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatesAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshtoken?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatesAt?: Date | string
    isAdmin?: boolean
    username: string
    password: string
    refreshtoken?: string
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatesAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshtoken?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatesAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    refreshtoken?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesCreateInput = {
    name: string
    Products?: ProductsCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: number
    name: string
    Products?: ProductsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Products?: ProductsUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Products?: ProductsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsMaterialsCreateInput = {
    product: ProductsCreateNestedOneWithoutProductsMaterialsInput
    material: MaterialsCreateNestedOneWithoutPrductsMaterialsInput
  }

  export type ProductsMaterialsUncheckedCreateInput = {
    id?: number
    productId: number
    materialId: number
  }

  export type ProductsMaterialsUpdateInput = {
    product?: ProductsUpdateOneRequiredWithoutProductsMaterialsNestedInput
    material?: MaterialsUpdateOneRequiredWithoutPrductsMaterialsNestedInput
  }

  export type ProductsMaterialsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductsMaterialsCreateManyInput = {
    id?: number
    productId: number
    materialId: number
  }

  export type ProductsMaterialsUpdateManyMutationInput = {

  }

  export type ProductsMaterialsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
  }

  export type MaterialsCreateInput = {
    title: string
    image: string
    listed?: boolean
    PrductsMaterials?: ProductsMaterialsCreateNestedManyWithoutMaterialInput
  }

  export type MaterialsUncheckedCreateInput = {
    id?: number
    title: string
    image: string
    listed?: boolean
    PrductsMaterials?: ProductsMaterialsUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    listed?: BoolFieldUpdateOperationsInput | boolean
    PrductsMaterials?: ProductsMaterialsUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    listed?: BoolFieldUpdateOperationsInput | boolean
    PrductsMaterials?: ProductsMaterialsUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialsCreateManyInput = {
    id?: number
    title: string
    image: string
    listed?: boolean
  }

  export type MaterialsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    listed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MaterialsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    listed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductsCreateInput = {
    listed?: boolean
    title: string
    description?: string | null
    price?: number | null
    image: string
    ProductsMaterials?: ProductsMaterialsCreateNestedManyWithoutProductInput
    Categories?: CategoriesCreateNestedOneWithoutProductsInput
    orders?: OrdersCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateInput = {
    id?: number
    listed?: boolean
    title: string
    description?: string | null
    price?: number | null
    image: string
    categoriesId?: number | null
    ProductsMaterials?: ProductsMaterialsUncheckedCreateNestedManyWithoutProductInput
    orders?: OrdersUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsUpdateInput = {
    listed?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    ProductsMaterials?: ProductsMaterialsUpdateManyWithoutProductNestedInput
    Categories?: CategoriesUpdateOneWithoutProductsNestedInput
    orders?: OrdersUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    listed?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    categoriesId?: NullableIntFieldUpdateOperationsInput | number | null
    ProductsMaterials?: ProductsMaterialsUncheckedUpdateManyWithoutProductNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsCreateManyInput = {
    id?: number
    listed?: boolean
    title: string
    description?: string | null
    price?: number | null
    image: string
    categoriesId?: number | null
  }

  export type ProductsUpdateManyMutationInput = {
    listed?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    listed?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    categoriesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductsOrdersCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    shippped?: boolean
    totalPrice: number
    orders?: OrdersCreateNestedManyWithoutUserOrderInput
  }

  export type ProductsOrdersUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shippped?: boolean
    totalPrice: number
    orders?: OrdersUncheckedCreateNestedManyWithoutUserOrderInput
  }

  export type ProductsOrdersUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippped?: BoolFieldUpdateOperationsInput | boolean
    totalPrice?: FloatFieldUpdateOperationsInput | number
    orders?: OrdersUpdateManyWithoutUserOrderNestedInput
  }

  export type ProductsOrdersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippped?: BoolFieldUpdateOperationsInput | boolean
    totalPrice?: FloatFieldUpdateOperationsInput | number
    orders?: OrdersUncheckedUpdateManyWithoutUserOrderNestedInput
  }

  export type ProductsOrdersCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shippped?: boolean
    totalPrice: number
  }

  export type ProductsOrdersUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippped?: BoolFieldUpdateOperationsInput | boolean
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductsOrdersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippped?: BoolFieldUpdateOperationsInput | boolean
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type OrdersCreateInput = {
    quantity?: number
    UserOrder: ProductsOrdersCreateNestedOneWithoutOrdersInput
    product?: ProductsCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: number
    orderId: number
    productId?: number | null
    quantity?: number
  }

  export type OrdersUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    UserOrder?: ProductsOrdersUpdateOneRequiredWithoutOrdersNestedInput
    product?: ProductsUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersCreateManyInput = {
    id?: number
    orderId: number
    productId?: number | null
    quantity?: number
  }

  export type OrdersUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatesAt?: SortOrder
    isAdmin?: SortOrder
    username?: SortOrder
    password?: SortOrder
    refreshtoken?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatesAt?: SortOrder
    isAdmin?: SortOrder
    username?: SortOrder
    password?: SortOrder
    refreshtoken?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatesAt?: SortOrder
    isAdmin?: SortOrder
    username?: SortOrder
    password?: SortOrder
    refreshtoken?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput
    some?: ProductsWhereInput
    none?: ProductsWhereInput
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductsScalarRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type MaterialsScalarRelationFilter = {
    is?: MaterialsWhereInput
    isNot?: MaterialsWhereInput
  }

  export type ProductsMaterialsCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    materialId?: SortOrder
  }

  export type ProductsMaterialsAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    materialId?: SortOrder
  }

  export type ProductsMaterialsMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    materialId?: SortOrder
  }

  export type ProductsMaterialsMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    materialId?: SortOrder
  }

  export type ProductsMaterialsSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    materialId?: SortOrder
  }

  export type ProductsMaterialsListRelationFilter = {
    every?: ProductsMaterialsWhereInput
    some?: ProductsMaterialsWhereInput
    none?: ProductsMaterialsWhereInput
  }

  export type ProductsMaterialsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaterialsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    listed?: SortOrder
  }

  export type MaterialsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MaterialsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    listed?: SortOrder
  }

  export type MaterialsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    image?: SortOrder
    listed?: SortOrder
  }

  export type MaterialsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoriesNullableScalarRelationFilter = {
    is?: CategoriesWhereInput | null
    isNot?: CategoriesWhereInput | null
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsCountOrderByAggregateInput = {
    id?: SortOrder
    listed?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image?: SortOrder
    categoriesId?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoriesId?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    listed?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image?: SortOrder
    categoriesId?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    id?: SortOrder
    listed?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    image?: SortOrder
    categoriesId?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoriesId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProductsOrdersCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shippped?: SortOrder
    totalPrice?: SortOrder
  }

  export type ProductsOrdersAvgOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
  }

  export type ProductsOrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shippped?: SortOrder
    totalPrice?: SortOrder
  }

  export type ProductsOrdersMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shippped?: SortOrder
    totalPrice?: SortOrder
  }

  export type ProductsOrdersSumOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProductsOrdersScalarRelationFilter = {
    is?: ProductsOrdersWhereInput
    isNot?: ProductsOrdersWhereInput
  }

  export type ProductsNullableScalarRelationFilter = {
    is?: ProductsWhereInput | null
    isNot?: ProductsWhereInput | null
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput> | ProductsCreateWithoutCategoriesInput[] | ProductsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput | ProductsCreateOrConnectWithoutCategoriesInput[]
    createMany?: ProductsCreateManyCategoriesInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput> | ProductsCreateWithoutCategoriesInput[] | ProductsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput | ProductsCreateOrConnectWithoutCategoriesInput[]
    createMany?: ProductsCreateManyCategoriesInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput> | ProductsCreateWithoutCategoriesInput[] | ProductsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput | ProductsCreateOrConnectWithoutCategoriesInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoriesInput | ProductsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: ProductsCreateManyCategoriesInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoriesInput | ProductsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoriesInput | ProductsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput> | ProductsCreateWithoutCategoriesInput[] | ProductsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput | ProductsCreateOrConnectWithoutCategoriesInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoriesInput | ProductsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: ProductsCreateManyCategoriesInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoriesInput | ProductsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoriesInput | ProductsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsCreateNestedOneWithoutProductsMaterialsInput = {
    create?: XOR<ProductsCreateWithoutProductsMaterialsInput, ProductsUncheckedCreateWithoutProductsMaterialsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProductsMaterialsInput
    connect?: ProductsWhereUniqueInput
  }

  export type MaterialsCreateNestedOneWithoutPrductsMaterialsInput = {
    create?: XOR<MaterialsCreateWithoutPrductsMaterialsInput, MaterialsUncheckedCreateWithoutPrductsMaterialsInput>
    connectOrCreate?: MaterialsCreateOrConnectWithoutPrductsMaterialsInput
    connect?: MaterialsWhereUniqueInput
  }

  export type ProductsUpdateOneRequiredWithoutProductsMaterialsNestedInput = {
    create?: XOR<ProductsCreateWithoutProductsMaterialsInput, ProductsUncheckedCreateWithoutProductsMaterialsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProductsMaterialsInput
    upsert?: ProductsUpsertWithoutProductsMaterialsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutProductsMaterialsInput, ProductsUpdateWithoutProductsMaterialsInput>, ProductsUncheckedUpdateWithoutProductsMaterialsInput>
  }

  export type MaterialsUpdateOneRequiredWithoutPrductsMaterialsNestedInput = {
    create?: XOR<MaterialsCreateWithoutPrductsMaterialsInput, MaterialsUncheckedCreateWithoutPrductsMaterialsInput>
    connectOrCreate?: MaterialsCreateOrConnectWithoutPrductsMaterialsInput
    upsert?: MaterialsUpsertWithoutPrductsMaterialsInput
    connect?: MaterialsWhereUniqueInput
    update?: XOR<XOR<MaterialsUpdateToOneWithWhereWithoutPrductsMaterialsInput, MaterialsUpdateWithoutPrductsMaterialsInput>, MaterialsUncheckedUpdateWithoutPrductsMaterialsInput>
  }

  export type ProductsMaterialsCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ProductsMaterialsCreateWithoutMaterialInput, ProductsMaterialsUncheckedCreateWithoutMaterialInput> | ProductsMaterialsCreateWithoutMaterialInput[] | ProductsMaterialsUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProductsMaterialsCreateOrConnectWithoutMaterialInput | ProductsMaterialsCreateOrConnectWithoutMaterialInput[]
    createMany?: ProductsMaterialsCreateManyMaterialInputEnvelope
    connect?: ProductsMaterialsWhereUniqueInput | ProductsMaterialsWhereUniqueInput[]
  }

  export type ProductsMaterialsUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<ProductsMaterialsCreateWithoutMaterialInput, ProductsMaterialsUncheckedCreateWithoutMaterialInput> | ProductsMaterialsCreateWithoutMaterialInput[] | ProductsMaterialsUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProductsMaterialsCreateOrConnectWithoutMaterialInput | ProductsMaterialsCreateOrConnectWithoutMaterialInput[]
    createMany?: ProductsMaterialsCreateManyMaterialInputEnvelope
    connect?: ProductsMaterialsWhereUniqueInput | ProductsMaterialsWhereUniqueInput[]
  }

  export type ProductsMaterialsUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ProductsMaterialsCreateWithoutMaterialInput, ProductsMaterialsUncheckedCreateWithoutMaterialInput> | ProductsMaterialsCreateWithoutMaterialInput[] | ProductsMaterialsUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProductsMaterialsCreateOrConnectWithoutMaterialInput | ProductsMaterialsCreateOrConnectWithoutMaterialInput[]
    upsert?: ProductsMaterialsUpsertWithWhereUniqueWithoutMaterialInput | ProductsMaterialsUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ProductsMaterialsCreateManyMaterialInputEnvelope
    set?: ProductsMaterialsWhereUniqueInput | ProductsMaterialsWhereUniqueInput[]
    disconnect?: ProductsMaterialsWhereUniqueInput | ProductsMaterialsWhereUniqueInput[]
    delete?: ProductsMaterialsWhereUniqueInput | ProductsMaterialsWhereUniqueInput[]
    connect?: ProductsMaterialsWhereUniqueInput | ProductsMaterialsWhereUniqueInput[]
    update?: ProductsMaterialsUpdateWithWhereUniqueWithoutMaterialInput | ProductsMaterialsUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ProductsMaterialsUpdateManyWithWhereWithoutMaterialInput | ProductsMaterialsUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ProductsMaterialsScalarWhereInput | ProductsMaterialsScalarWhereInput[]
  }

  export type ProductsMaterialsUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<ProductsMaterialsCreateWithoutMaterialInput, ProductsMaterialsUncheckedCreateWithoutMaterialInput> | ProductsMaterialsCreateWithoutMaterialInput[] | ProductsMaterialsUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: ProductsMaterialsCreateOrConnectWithoutMaterialInput | ProductsMaterialsCreateOrConnectWithoutMaterialInput[]
    upsert?: ProductsMaterialsUpsertWithWhereUniqueWithoutMaterialInput | ProductsMaterialsUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: ProductsMaterialsCreateManyMaterialInputEnvelope
    set?: ProductsMaterialsWhereUniqueInput | ProductsMaterialsWhereUniqueInput[]
    disconnect?: ProductsMaterialsWhereUniqueInput | ProductsMaterialsWhereUniqueInput[]
    delete?: ProductsMaterialsWhereUniqueInput | ProductsMaterialsWhereUniqueInput[]
    connect?: ProductsMaterialsWhereUniqueInput | ProductsMaterialsWhereUniqueInput[]
    update?: ProductsMaterialsUpdateWithWhereUniqueWithoutMaterialInput | ProductsMaterialsUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: ProductsMaterialsUpdateManyWithWhereWithoutMaterialInput | ProductsMaterialsUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: ProductsMaterialsScalarWhereInput | ProductsMaterialsScalarWhereInput[]
  }

  export type ProductsMaterialsCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductsMaterialsCreateWithoutProductInput, ProductsMaterialsUncheckedCreateWithoutProductInput> | ProductsMaterialsCreateWithoutProductInput[] | ProductsMaterialsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductsMaterialsCreateOrConnectWithoutProductInput | ProductsMaterialsCreateOrConnectWithoutProductInput[]
    createMany?: ProductsMaterialsCreateManyProductInputEnvelope
    connect?: ProductsMaterialsWhereUniqueInput | ProductsMaterialsWhereUniqueInput[]
  }

  export type CategoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductsInput
    connect?: CategoriesWhereUniqueInput
  }

  export type OrdersCreateNestedManyWithoutProductInput = {
    create?: XOR<OrdersCreateWithoutProductInput, OrdersUncheckedCreateWithoutProductInput> | OrdersCreateWithoutProductInput[] | OrdersUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutProductInput | OrdersCreateOrConnectWithoutProductInput[]
    createMany?: OrdersCreateManyProductInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type ProductsMaterialsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductsMaterialsCreateWithoutProductInput, ProductsMaterialsUncheckedCreateWithoutProductInput> | ProductsMaterialsCreateWithoutProductInput[] | ProductsMaterialsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductsMaterialsCreateOrConnectWithoutProductInput | ProductsMaterialsCreateOrConnectWithoutProductInput[]
    createMany?: ProductsMaterialsCreateManyProductInputEnvelope
    connect?: ProductsMaterialsWhereUniqueInput | ProductsMaterialsWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrdersCreateWithoutProductInput, OrdersUncheckedCreateWithoutProductInput> | OrdersCreateWithoutProductInput[] | OrdersUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutProductInput | OrdersCreateOrConnectWithoutProductInput[]
    createMany?: OrdersCreateManyProductInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductsMaterialsUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductsMaterialsCreateWithoutProductInput, ProductsMaterialsUncheckedCreateWithoutProductInput> | ProductsMaterialsCreateWithoutProductInput[] | ProductsMaterialsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductsMaterialsCreateOrConnectWithoutProductInput | ProductsMaterialsCreateOrConnectWithoutProductInput[]
    upsert?: ProductsMaterialsUpsertWithWhereUniqueWithoutProductInput | ProductsMaterialsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductsMaterialsCreateManyProductInputEnvelope
    set?: ProductsMaterialsWhereUniqueInput | ProductsMaterialsWhereUniqueInput[]
    disconnect?: ProductsMaterialsWhereUniqueInput | ProductsMaterialsWhereUniqueInput[]
    delete?: ProductsMaterialsWhereUniqueInput | ProductsMaterialsWhereUniqueInput[]
    connect?: ProductsMaterialsWhereUniqueInput | ProductsMaterialsWhereUniqueInput[]
    update?: ProductsMaterialsUpdateWithWhereUniqueWithoutProductInput | ProductsMaterialsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductsMaterialsUpdateManyWithWhereWithoutProductInput | ProductsMaterialsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductsMaterialsScalarWhereInput | ProductsMaterialsScalarWhereInput[]
  }

  export type CategoriesUpdateOneWithoutProductsNestedInput = {
    create?: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductsInput
    upsert?: CategoriesUpsertWithoutProductsInput
    disconnect?: CategoriesWhereInput | boolean
    delete?: CategoriesWhereInput | boolean
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutProductsInput, CategoriesUpdateWithoutProductsInput>, CategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type OrdersUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrdersCreateWithoutProductInput, OrdersUncheckedCreateWithoutProductInput> | OrdersCreateWithoutProductInput[] | OrdersUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutProductInput | OrdersCreateOrConnectWithoutProductInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutProductInput | OrdersUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrdersCreateManyProductInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutProductInput | OrdersUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutProductInput | OrdersUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductsMaterialsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductsMaterialsCreateWithoutProductInput, ProductsMaterialsUncheckedCreateWithoutProductInput> | ProductsMaterialsCreateWithoutProductInput[] | ProductsMaterialsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductsMaterialsCreateOrConnectWithoutProductInput | ProductsMaterialsCreateOrConnectWithoutProductInput[]
    upsert?: ProductsMaterialsUpsertWithWhereUniqueWithoutProductInput | ProductsMaterialsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductsMaterialsCreateManyProductInputEnvelope
    set?: ProductsMaterialsWhereUniqueInput | ProductsMaterialsWhereUniqueInput[]
    disconnect?: ProductsMaterialsWhereUniqueInput | ProductsMaterialsWhereUniqueInput[]
    delete?: ProductsMaterialsWhereUniqueInput | ProductsMaterialsWhereUniqueInput[]
    connect?: ProductsMaterialsWhereUniqueInput | ProductsMaterialsWhereUniqueInput[]
    update?: ProductsMaterialsUpdateWithWhereUniqueWithoutProductInput | ProductsMaterialsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductsMaterialsUpdateManyWithWhereWithoutProductInput | ProductsMaterialsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductsMaterialsScalarWhereInput | ProductsMaterialsScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrdersCreateWithoutProductInput, OrdersUncheckedCreateWithoutProductInput> | OrdersCreateWithoutProductInput[] | OrdersUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutProductInput | OrdersCreateOrConnectWithoutProductInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutProductInput | OrdersUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrdersCreateManyProductInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutProductInput | OrdersUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutProductInput | OrdersUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type OrdersCreateNestedManyWithoutUserOrderInput = {
    create?: XOR<OrdersCreateWithoutUserOrderInput, OrdersUncheckedCreateWithoutUserOrderInput> | OrdersCreateWithoutUserOrderInput[] | OrdersUncheckedCreateWithoutUserOrderInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserOrderInput | OrdersCreateOrConnectWithoutUserOrderInput[]
    createMany?: OrdersCreateManyUserOrderInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutUserOrderInput = {
    create?: XOR<OrdersCreateWithoutUserOrderInput, OrdersUncheckedCreateWithoutUserOrderInput> | OrdersCreateWithoutUserOrderInput[] | OrdersUncheckedCreateWithoutUserOrderInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserOrderInput | OrdersCreateOrConnectWithoutUserOrderInput[]
    createMany?: OrdersCreateManyUserOrderInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrdersUpdateManyWithoutUserOrderNestedInput = {
    create?: XOR<OrdersCreateWithoutUserOrderInput, OrdersUncheckedCreateWithoutUserOrderInput> | OrdersCreateWithoutUserOrderInput[] | OrdersUncheckedCreateWithoutUserOrderInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserOrderInput | OrdersCreateOrConnectWithoutUserOrderInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserOrderInput | OrdersUpsertWithWhereUniqueWithoutUserOrderInput[]
    createMany?: OrdersCreateManyUserOrderInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserOrderInput | OrdersUpdateWithWhereUniqueWithoutUserOrderInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserOrderInput | OrdersUpdateManyWithWhereWithoutUserOrderInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutUserOrderNestedInput = {
    create?: XOR<OrdersCreateWithoutUserOrderInput, OrdersUncheckedCreateWithoutUserOrderInput> | OrdersCreateWithoutUserOrderInput[] | OrdersUncheckedCreateWithoutUserOrderInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserOrderInput | OrdersCreateOrConnectWithoutUserOrderInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserOrderInput | OrdersUpsertWithWhereUniqueWithoutUserOrderInput[]
    createMany?: OrdersCreateManyUserOrderInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserOrderInput | OrdersUpdateWithWhereUniqueWithoutUserOrderInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserOrderInput | OrdersUpdateManyWithWhereWithoutUserOrderInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type ProductsOrdersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ProductsOrdersCreateWithoutOrdersInput, ProductsOrdersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductsOrdersCreateOrConnectWithoutOrdersInput
    connect?: ProductsOrdersWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ProductsCreateWithoutOrdersInput, ProductsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutOrdersInput
    connect?: ProductsWhereUniqueInput
  }

  export type ProductsOrdersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ProductsOrdersCreateWithoutOrdersInput, ProductsOrdersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductsOrdersCreateOrConnectWithoutOrdersInput
    upsert?: ProductsOrdersUpsertWithoutOrdersInput
    connect?: ProductsOrdersWhereUniqueInput
    update?: XOR<XOR<ProductsOrdersUpdateToOneWithWhereWithoutOrdersInput, ProductsOrdersUpdateWithoutOrdersInput>, ProductsOrdersUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductsUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<ProductsCreateWithoutOrdersInput, ProductsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutOrdersInput
    upsert?: ProductsUpsertWithoutOrdersInput
    disconnect?: ProductsWhereInput | boolean
    delete?: ProductsWhereInput | boolean
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutOrdersInput, ProductsUpdateWithoutOrdersInput>, ProductsUncheckedUpdateWithoutOrdersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProductsCreateWithoutCategoriesInput = {
    listed?: boolean
    title: string
    description?: string | null
    price?: number | null
    image: string
    ProductsMaterials?: ProductsMaterialsCreateNestedManyWithoutProductInput
    orders?: OrdersCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutCategoriesInput = {
    id?: number
    listed?: boolean
    title: string
    description?: string | null
    price?: number | null
    image: string
    ProductsMaterials?: ProductsMaterialsUncheckedCreateNestedManyWithoutProductInput
    orders?: OrdersUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutCategoriesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductsCreateManyCategoriesInputEnvelope = {
    data: ProductsCreateManyCategoriesInput | ProductsCreateManyCategoriesInput[]
  }

  export type ProductsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutCategoriesInput, ProductsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ProductsCreateWithoutCategoriesInput, ProductsUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutCategoriesInput, ProductsUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProductsUpdateManyWithWhereWithoutCategoriesInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    OR?: ProductsScalarWhereInput[]
    NOT?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    id?: IntFilter<"Products"> | number
    listed?: BoolFilter<"Products"> | boolean
    title?: StringFilter<"Products"> | string
    description?: StringNullableFilter<"Products"> | string | null
    price?: FloatNullableFilter<"Products"> | number | null
    image?: StringFilter<"Products"> | string
    categoriesId?: IntNullableFilter<"Products"> | number | null
  }

  export type ProductsCreateWithoutProductsMaterialsInput = {
    listed?: boolean
    title: string
    description?: string | null
    price?: number | null
    image: string
    Categories?: CategoriesCreateNestedOneWithoutProductsInput
    orders?: OrdersCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutProductsMaterialsInput = {
    id?: number
    listed?: boolean
    title: string
    description?: string | null
    price?: number | null
    image: string
    categoriesId?: number | null
    orders?: OrdersUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutProductsMaterialsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutProductsMaterialsInput, ProductsUncheckedCreateWithoutProductsMaterialsInput>
  }

  export type MaterialsCreateWithoutPrductsMaterialsInput = {
    title: string
    image: string
    listed?: boolean
  }

  export type MaterialsUncheckedCreateWithoutPrductsMaterialsInput = {
    id?: number
    title: string
    image: string
    listed?: boolean
  }

  export type MaterialsCreateOrConnectWithoutPrductsMaterialsInput = {
    where: MaterialsWhereUniqueInput
    create: XOR<MaterialsCreateWithoutPrductsMaterialsInput, MaterialsUncheckedCreateWithoutPrductsMaterialsInput>
  }

  export type ProductsUpsertWithoutProductsMaterialsInput = {
    update: XOR<ProductsUpdateWithoutProductsMaterialsInput, ProductsUncheckedUpdateWithoutProductsMaterialsInput>
    create: XOR<ProductsCreateWithoutProductsMaterialsInput, ProductsUncheckedCreateWithoutProductsMaterialsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutProductsMaterialsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutProductsMaterialsInput, ProductsUncheckedUpdateWithoutProductsMaterialsInput>
  }

  export type ProductsUpdateWithoutProductsMaterialsInput = {
    listed?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    Categories?: CategoriesUpdateOneWithoutProductsNestedInput
    orders?: OrdersUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutProductsMaterialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    listed?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    categoriesId?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrdersUncheckedUpdateManyWithoutProductNestedInput
  }

  export type MaterialsUpsertWithoutPrductsMaterialsInput = {
    update: XOR<MaterialsUpdateWithoutPrductsMaterialsInput, MaterialsUncheckedUpdateWithoutPrductsMaterialsInput>
    create: XOR<MaterialsCreateWithoutPrductsMaterialsInput, MaterialsUncheckedCreateWithoutPrductsMaterialsInput>
    where?: MaterialsWhereInput
  }

  export type MaterialsUpdateToOneWithWhereWithoutPrductsMaterialsInput = {
    where?: MaterialsWhereInput
    data: XOR<MaterialsUpdateWithoutPrductsMaterialsInput, MaterialsUncheckedUpdateWithoutPrductsMaterialsInput>
  }

  export type MaterialsUpdateWithoutPrductsMaterialsInput = {
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    listed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MaterialsUncheckedUpdateWithoutPrductsMaterialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    listed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductsMaterialsCreateWithoutMaterialInput = {
    product: ProductsCreateNestedOneWithoutProductsMaterialsInput
  }

  export type ProductsMaterialsUncheckedCreateWithoutMaterialInput = {
    id?: number
    productId: number
  }

  export type ProductsMaterialsCreateOrConnectWithoutMaterialInput = {
    where: ProductsMaterialsWhereUniqueInput
    create: XOR<ProductsMaterialsCreateWithoutMaterialInput, ProductsMaterialsUncheckedCreateWithoutMaterialInput>
  }

  export type ProductsMaterialsCreateManyMaterialInputEnvelope = {
    data: ProductsMaterialsCreateManyMaterialInput | ProductsMaterialsCreateManyMaterialInput[]
  }

  export type ProductsMaterialsUpsertWithWhereUniqueWithoutMaterialInput = {
    where: ProductsMaterialsWhereUniqueInput
    update: XOR<ProductsMaterialsUpdateWithoutMaterialInput, ProductsMaterialsUncheckedUpdateWithoutMaterialInput>
    create: XOR<ProductsMaterialsCreateWithoutMaterialInput, ProductsMaterialsUncheckedCreateWithoutMaterialInput>
  }

  export type ProductsMaterialsUpdateWithWhereUniqueWithoutMaterialInput = {
    where: ProductsMaterialsWhereUniqueInput
    data: XOR<ProductsMaterialsUpdateWithoutMaterialInput, ProductsMaterialsUncheckedUpdateWithoutMaterialInput>
  }

  export type ProductsMaterialsUpdateManyWithWhereWithoutMaterialInput = {
    where: ProductsMaterialsScalarWhereInput
    data: XOR<ProductsMaterialsUpdateManyMutationInput, ProductsMaterialsUncheckedUpdateManyWithoutMaterialInput>
  }

  export type ProductsMaterialsScalarWhereInput = {
    AND?: ProductsMaterialsScalarWhereInput | ProductsMaterialsScalarWhereInput[]
    OR?: ProductsMaterialsScalarWhereInput[]
    NOT?: ProductsMaterialsScalarWhereInput | ProductsMaterialsScalarWhereInput[]
    id?: IntFilter<"ProductsMaterials"> | number
    productId?: IntFilter<"ProductsMaterials"> | number
    materialId?: IntFilter<"ProductsMaterials"> | number
  }

  export type ProductsMaterialsCreateWithoutProductInput = {
    material: MaterialsCreateNestedOneWithoutPrductsMaterialsInput
  }

  export type ProductsMaterialsUncheckedCreateWithoutProductInput = {
    id?: number
    materialId: number
  }

  export type ProductsMaterialsCreateOrConnectWithoutProductInput = {
    where: ProductsMaterialsWhereUniqueInput
    create: XOR<ProductsMaterialsCreateWithoutProductInput, ProductsMaterialsUncheckedCreateWithoutProductInput>
  }

  export type ProductsMaterialsCreateManyProductInputEnvelope = {
    data: ProductsMaterialsCreateManyProductInput | ProductsMaterialsCreateManyProductInput[]
  }

  export type CategoriesCreateWithoutProductsInput = {
    name: string
  }

  export type CategoriesUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
  }

  export type CategoriesCreateOrConnectWithoutProductsInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
  }

  export type OrdersCreateWithoutProductInput = {
    quantity?: number
    UserOrder: ProductsOrdersCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutProductInput = {
    id?: number
    orderId: number
    quantity?: number
  }

  export type OrdersCreateOrConnectWithoutProductInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutProductInput, OrdersUncheckedCreateWithoutProductInput>
  }

  export type OrdersCreateManyProductInputEnvelope = {
    data: OrdersCreateManyProductInput | OrdersCreateManyProductInput[]
  }

  export type ProductsMaterialsUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductsMaterialsWhereUniqueInput
    update: XOR<ProductsMaterialsUpdateWithoutProductInput, ProductsMaterialsUncheckedUpdateWithoutProductInput>
    create: XOR<ProductsMaterialsCreateWithoutProductInput, ProductsMaterialsUncheckedCreateWithoutProductInput>
  }

  export type ProductsMaterialsUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductsMaterialsWhereUniqueInput
    data: XOR<ProductsMaterialsUpdateWithoutProductInput, ProductsMaterialsUncheckedUpdateWithoutProductInput>
  }

  export type ProductsMaterialsUpdateManyWithWhereWithoutProductInput = {
    where: ProductsMaterialsScalarWhereInput
    data: XOR<ProductsMaterialsUpdateManyMutationInput, ProductsMaterialsUncheckedUpdateManyWithoutProductInput>
  }

  export type CategoriesUpsertWithoutProductsInput = {
    update: XOR<CategoriesUpdateWithoutProductsInput, CategoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutProductsInput, CategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type CategoriesUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OrdersUpsertWithWhereUniqueWithoutProductInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutProductInput, OrdersUncheckedUpdateWithoutProductInput>
    create: XOR<OrdersCreateWithoutProductInput, OrdersUncheckedCreateWithoutProductInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutProductInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutProductInput, OrdersUncheckedUpdateWithoutProductInput>
  }

  export type OrdersUpdateManyWithWhereWithoutProductInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutProductInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: IntFilter<"Orders"> | number
    orderId?: IntFilter<"Orders"> | number
    productId?: IntNullableFilter<"Orders"> | number | null
    quantity?: IntFilter<"Orders"> | number
  }

  export type OrdersCreateWithoutUserOrderInput = {
    quantity?: number
    product?: ProductsCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutUserOrderInput = {
    id?: number
    productId?: number | null
    quantity?: number
  }

  export type OrdersCreateOrConnectWithoutUserOrderInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutUserOrderInput, OrdersUncheckedCreateWithoutUserOrderInput>
  }

  export type OrdersCreateManyUserOrderInputEnvelope = {
    data: OrdersCreateManyUserOrderInput | OrdersCreateManyUserOrderInput[]
  }

  export type OrdersUpsertWithWhereUniqueWithoutUserOrderInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutUserOrderInput, OrdersUncheckedUpdateWithoutUserOrderInput>
    create: XOR<OrdersCreateWithoutUserOrderInput, OrdersUncheckedCreateWithoutUserOrderInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutUserOrderInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutUserOrderInput, OrdersUncheckedUpdateWithoutUserOrderInput>
  }

  export type OrdersUpdateManyWithWhereWithoutUserOrderInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutUserOrderInput>
  }

  export type ProductsOrdersCreateWithoutOrdersInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    shippped?: boolean
    totalPrice: number
  }

  export type ProductsOrdersUncheckedCreateWithoutOrdersInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shippped?: boolean
    totalPrice: number
  }

  export type ProductsOrdersCreateOrConnectWithoutOrdersInput = {
    where: ProductsOrdersWhereUniqueInput
    create: XOR<ProductsOrdersCreateWithoutOrdersInput, ProductsOrdersUncheckedCreateWithoutOrdersInput>
  }

  export type ProductsCreateWithoutOrdersInput = {
    listed?: boolean
    title: string
    description?: string | null
    price?: number | null
    image: string
    ProductsMaterials?: ProductsMaterialsCreateNestedManyWithoutProductInput
    Categories?: CategoriesCreateNestedOneWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutOrdersInput = {
    id?: number
    listed?: boolean
    title: string
    description?: string | null
    price?: number | null
    image: string
    categoriesId?: number | null
    ProductsMaterials?: ProductsMaterialsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutOrdersInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutOrdersInput, ProductsUncheckedCreateWithoutOrdersInput>
  }

  export type ProductsOrdersUpsertWithoutOrdersInput = {
    update: XOR<ProductsOrdersUpdateWithoutOrdersInput, ProductsOrdersUncheckedUpdateWithoutOrdersInput>
    create: XOR<ProductsOrdersCreateWithoutOrdersInput, ProductsOrdersUncheckedCreateWithoutOrdersInput>
    where?: ProductsOrdersWhereInput
  }

  export type ProductsOrdersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ProductsOrdersWhereInput
    data: XOR<ProductsOrdersUpdateWithoutOrdersInput, ProductsOrdersUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductsOrdersUpdateWithoutOrdersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippped?: BoolFieldUpdateOperationsInput | boolean
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductsOrdersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shippped?: BoolFieldUpdateOperationsInput | boolean
    totalPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type ProductsUpsertWithoutOrdersInput = {
    update: XOR<ProductsUpdateWithoutOrdersInput, ProductsUncheckedUpdateWithoutOrdersInput>
    create: XOR<ProductsCreateWithoutOrdersInput, ProductsUncheckedCreateWithoutOrdersInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutOrdersInput, ProductsUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductsUpdateWithoutOrdersInput = {
    listed?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    ProductsMaterials?: ProductsMaterialsUpdateManyWithoutProductNestedInput
    Categories?: CategoriesUpdateOneWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    listed?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    categoriesId?: NullableIntFieldUpdateOperationsInput | number | null
    ProductsMaterials?: ProductsMaterialsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsCreateManyCategoriesInput = {
    id?: number
    listed?: boolean
    title: string
    description?: string | null
    price?: number | null
    image: string
  }

  export type ProductsUpdateWithoutCategoriesInput = {
    listed?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    ProductsMaterials?: ProductsMaterialsUpdateManyWithoutProductNestedInput
    orders?: OrdersUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    listed?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    ProductsMaterials?: ProductsMaterialsUncheckedUpdateManyWithoutProductNestedInput
    orders?: OrdersUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    listed?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsMaterialsCreateManyMaterialInput = {
    id?: number
    productId: number
  }

  export type ProductsMaterialsUpdateWithoutMaterialInput = {
    product?: ProductsUpdateOneRequiredWithoutProductsMaterialsNestedInput
  }

  export type ProductsMaterialsUncheckedUpdateWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductsMaterialsUncheckedUpdateManyWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductsMaterialsCreateManyProductInput = {
    id?: number
    materialId: number
  }

  export type OrdersCreateManyProductInput = {
    id?: number
    orderId: number
    quantity?: number
  }

  export type ProductsMaterialsUpdateWithoutProductInput = {
    material?: MaterialsUpdateOneRequiredWithoutPrductsMaterialsNestedInput
  }

  export type ProductsMaterialsUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductsMaterialsUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    UserOrder?: ProductsOrdersUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersCreateManyUserOrderInput = {
    id?: number
    productId?: number | null
    quantity?: number
  }

  export type OrdersUpdateWithoutUserOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    product?: ProductsUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutUserOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersUncheckedUpdateManyWithoutUserOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}