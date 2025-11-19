
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
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Chunk
 * 
 */
export type Chunk = $Result.DefaultSelection<Prisma.$ChunkPayload>
/**
 * Model VectorMetadata
 * 
 */
export type VectorMetadata = $Result.DefaultSelection<Prisma.$VectorMetadataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Documents
 * const documents = await prisma.document.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Documents
   * const documents = await prisma.document.findMany()
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
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chunk`: Exposes CRUD operations for the **Chunk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chunks
    * const chunks = await prisma.chunk.findMany()
    * ```
    */
  get chunk(): Prisma.ChunkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vectorMetadata`: Exposes CRUD operations for the **VectorMetadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VectorMetadata
    * const vectorMetadata = await prisma.vectorMetadata.findMany()
    * ```
    */
  get vectorMetadata(): Prisma.VectorMetadataDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Document: 'Document',
    Chunk: 'Chunk',
    VectorMetadata: 'VectorMetadata'
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
      modelProps: "document" | "chunk" | "vectorMetadata"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Chunk: {
        payload: Prisma.$ChunkPayload<ExtArgs>
        fields: Prisma.ChunkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChunkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChunkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload>
          }
          findFirst: {
            args: Prisma.ChunkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChunkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload>
          }
          findMany: {
            args: Prisma.ChunkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload>[]
          }
          create: {
            args: Prisma.ChunkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload>
          }
          createMany: {
            args: Prisma.ChunkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChunkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload>[]
          }
          delete: {
            args: Prisma.ChunkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload>
          }
          update: {
            args: Prisma.ChunkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload>
          }
          deleteMany: {
            args: Prisma.ChunkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChunkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChunkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload>[]
          }
          upsert: {
            args: Prisma.ChunkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChunkPayload>
          }
          aggregate: {
            args: Prisma.ChunkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChunk>
          }
          groupBy: {
            args: Prisma.ChunkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChunkGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChunkCountArgs<ExtArgs>
            result: $Utils.Optional<ChunkCountAggregateOutputType> | number
          }
        }
      }
      VectorMetadata: {
        payload: Prisma.$VectorMetadataPayload<ExtArgs>
        fields: Prisma.VectorMetadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VectorMetadataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VectorMetadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VectorMetadataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VectorMetadataPayload>
          }
          findFirst: {
            args: Prisma.VectorMetadataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VectorMetadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VectorMetadataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VectorMetadataPayload>
          }
          findMany: {
            args: Prisma.VectorMetadataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VectorMetadataPayload>[]
          }
          create: {
            args: Prisma.VectorMetadataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VectorMetadataPayload>
          }
          createMany: {
            args: Prisma.VectorMetadataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VectorMetadataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VectorMetadataPayload>[]
          }
          delete: {
            args: Prisma.VectorMetadataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VectorMetadataPayload>
          }
          update: {
            args: Prisma.VectorMetadataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VectorMetadataPayload>
          }
          deleteMany: {
            args: Prisma.VectorMetadataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VectorMetadataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VectorMetadataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VectorMetadataPayload>[]
          }
          upsert: {
            args: Prisma.VectorMetadataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VectorMetadataPayload>
          }
          aggregate: {
            args: Prisma.VectorMetadataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVectorMetadata>
          }
          groupBy: {
            args: Prisma.VectorMetadataGroupByArgs<ExtArgs>
            result: $Utils.Optional<VectorMetadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.VectorMetadataCountArgs<ExtArgs>
            result: $Utils.Optional<VectorMetadataCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    document?: DocumentOmit
    chunk?: ChunkOmit
    vectorMetadata?: VectorMetadataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type DocumentCountOutputType
   */

  export type DocumentCountOutputType = {
    chunks: number
  }

  export type DocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chunks?: boolean | DocumentCountOutputTypeCountChunksArgs
  }

  // Custom InputTypes
  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCountOutputType
     */
    select?: DocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountChunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChunkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    title: string | null
    type: string | null
    url: string | null
    status: string | null
    createdAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    type: string | null
    url: string | null
    status: string | null
    createdAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    title: number
    type: number
    url: number
    status: number
    createdAt: number
    _all: number
  }


  export type DocumentMinAggregateInputType = {
    id?: true
    title?: true
    type?: true
    url?: true
    status?: true
    createdAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    title?: true
    type?: true
    url?: true
    status?: true
    createdAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    title?: true
    type?: true
    url?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    title: string
    type: string
    url: string
    status: string
    createdAt: Date
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    url?: boolean
    status?: boolean
    createdAt?: boolean
    chunks?: boolean | Document$chunksArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    url?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    url?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    title?: boolean
    type?: boolean
    url?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "type" | "url" | "status" | "createdAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chunks?: boolean | Document$chunksArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      chunks: Prisma.$ChunkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      type: string
      url: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chunks<T extends Document$chunksArgs<ExtArgs> = {}>(args?: Subset<T, Document$chunksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly title: FieldRef<"Document", 'String'>
    readonly type: FieldRef<"Document", 'String'>
    readonly url: FieldRef<"Document", 'String'>
    readonly status: FieldRef<"Document", 'String'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.chunks
   */
  export type Document$chunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
    where?: ChunkWhereInput
    orderBy?: ChunkOrderByWithRelationInput | ChunkOrderByWithRelationInput[]
    cursor?: ChunkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChunkScalarFieldEnum | ChunkScalarFieldEnum[]
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Chunk
   */

  export type AggregateChunk = {
    _count: ChunkCountAggregateOutputType | null
    _avg: ChunkAvgAggregateOutputType | null
    _sum: ChunkSumAggregateOutputType | null
    _min: ChunkMinAggregateOutputType | null
    _max: ChunkMaxAggregateOutputType | null
  }

  export type ChunkAvgAggregateOutputType = {
    order: number | null
  }

  export type ChunkSumAggregateOutputType = {
    order: number | null
  }

  export type ChunkMinAggregateOutputType = {
    id: string | null
    documentId: string | null
    order: number | null
    text: string | null
    createdAt: Date | null
  }

  export type ChunkMaxAggregateOutputType = {
    id: string | null
    documentId: string | null
    order: number | null
    text: string | null
    createdAt: Date | null
  }

  export type ChunkCountAggregateOutputType = {
    id: number
    documentId: number
    order: number
    text: number
    createdAt: number
    _all: number
  }


  export type ChunkAvgAggregateInputType = {
    order?: true
  }

  export type ChunkSumAggregateInputType = {
    order?: true
  }

  export type ChunkMinAggregateInputType = {
    id?: true
    documentId?: true
    order?: true
    text?: true
    createdAt?: true
  }

  export type ChunkMaxAggregateInputType = {
    id?: true
    documentId?: true
    order?: true
    text?: true
    createdAt?: true
  }

  export type ChunkCountAggregateInputType = {
    id?: true
    documentId?: true
    order?: true
    text?: true
    createdAt?: true
    _all?: true
  }

  export type ChunkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chunk to aggregate.
     */
    where?: ChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chunks to fetch.
     */
    orderBy?: ChunkOrderByWithRelationInput | ChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chunks
    **/
    _count?: true | ChunkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChunkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChunkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChunkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChunkMaxAggregateInputType
  }

  export type GetChunkAggregateType<T extends ChunkAggregateArgs> = {
        [P in keyof T & keyof AggregateChunk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChunk[P]>
      : GetScalarType<T[P], AggregateChunk[P]>
  }




  export type ChunkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChunkWhereInput
    orderBy?: ChunkOrderByWithAggregationInput | ChunkOrderByWithAggregationInput[]
    by: ChunkScalarFieldEnum[] | ChunkScalarFieldEnum
    having?: ChunkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChunkCountAggregateInputType | true
    _avg?: ChunkAvgAggregateInputType
    _sum?: ChunkSumAggregateInputType
    _min?: ChunkMinAggregateInputType
    _max?: ChunkMaxAggregateInputType
  }

  export type ChunkGroupByOutputType = {
    id: string
    documentId: string
    order: number
    text: string
    createdAt: Date
    _count: ChunkCountAggregateOutputType | null
    _avg: ChunkAvgAggregateOutputType | null
    _sum: ChunkSumAggregateOutputType | null
    _min: ChunkMinAggregateOutputType | null
    _max: ChunkMaxAggregateOutputType | null
  }

  type GetChunkGroupByPayload<T extends ChunkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChunkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChunkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChunkGroupByOutputType[P]>
            : GetScalarType<T[P], ChunkGroupByOutputType[P]>
        }
      >
    >


  export type ChunkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    order?: boolean
    text?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    vectorMeta?: boolean | Chunk$vectorMetaArgs<ExtArgs>
  }, ExtArgs["result"]["chunk"]>

  export type ChunkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    order?: boolean
    text?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chunk"]>

  export type ChunkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    order?: boolean
    text?: boolean
    createdAt?: boolean
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chunk"]>

  export type ChunkSelectScalar = {
    id?: boolean
    documentId?: boolean
    order?: boolean
    text?: boolean
    createdAt?: boolean
  }

  export type ChunkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "order" | "text" | "createdAt", ExtArgs["result"]["chunk"]>
  export type ChunkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    vectorMeta?: boolean | Chunk$vectorMetaArgs<ExtArgs>
  }
  export type ChunkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }
  export type ChunkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }

  export type $ChunkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chunk"
    objects: {
      document: Prisma.$DocumentPayload<ExtArgs>
      vectorMeta: Prisma.$VectorMetadataPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentId: string
      order: number
      text: string
      createdAt: Date
    }, ExtArgs["result"]["chunk"]>
    composites: {}
  }

  type ChunkGetPayload<S extends boolean | null | undefined | ChunkDefaultArgs> = $Result.GetResult<Prisma.$ChunkPayload, S>

  type ChunkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChunkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChunkCountAggregateInputType | true
    }

  export interface ChunkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chunk'], meta: { name: 'Chunk' } }
    /**
     * Find zero or one Chunk that matches the filter.
     * @param {ChunkFindUniqueArgs} args - Arguments to find a Chunk
     * @example
     * // Get one Chunk
     * const chunk = await prisma.chunk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChunkFindUniqueArgs>(args: SelectSubset<T, ChunkFindUniqueArgs<ExtArgs>>): Prisma__ChunkClient<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chunk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChunkFindUniqueOrThrowArgs} args - Arguments to find a Chunk
     * @example
     * // Get one Chunk
     * const chunk = await prisma.chunk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChunkFindUniqueOrThrowArgs>(args: SelectSubset<T, ChunkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChunkClient<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chunk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChunkFindFirstArgs} args - Arguments to find a Chunk
     * @example
     * // Get one Chunk
     * const chunk = await prisma.chunk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChunkFindFirstArgs>(args?: SelectSubset<T, ChunkFindFirstArgs<ExtArgs>>): Prisma__ChunkClient<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chunk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChunkFindFirstOrThrowArgs} args - Arguments to find a Chunk
     * @example
     * // Get one Chunk
     * const chunk = await prisma.chunk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChunkFindFirstOrThrowArgs>(args?: SelectSubset<T, ChunkFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChunkClient<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chunks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChunkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chunks
     * const chunks = await prisma.chunk.findMany()
     * 
     * // Get first 10 Chunks
     * const chunks = await prisma.chunk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chunkWithIdOnly = await prisma.chunk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChunkFindManyArgs>(args?: SelectSubset<T, ChunkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chunk.
     * @param {ChunkCreateArgs} args - Arguments to create a Chunk.
     * @example
     * // Create one Chunk
     * const Chunk = await prisma.chunk.create({
     *   data: {
     *     // ... data to create a Chunk
     *   }
     * })
     * 
     */
    create<T extends ChunkCreateArgs>(args: SelectSubset<T, ChunkCreateArgs<ExtArgs>>): Prisma__ChunkClient<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chunks.
     * @param {ChunkCreateManyArgs} args - Arguments to create many Chunks.
     * @example
     * // Create many Chunks
     * const chunk = await prisma.chunk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChunkCreateManyArgs>(args?: SelectSubset<T, ChunkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chunks and returns the data saved in the database.
     * @param {ChunkCreateManyAndReturnArgs} args - Arguments to create many Chunks.
     * @example
     * // Create many Chunks
     * const chunk = await prisma.chunk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chunks and only return the `id`
     * const chunkWithIdOnly = await prisma.chunk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChunkCreateManyAndReturnArgs>(args?: SelectSubset<T, ChunkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chunk.
     * @param {ChunkDeleteArgs} args - Arguments to delete one Chunk.
     * @example
     * // Delete one Chunk
     * const Chunk = await prisma.chunk.delete({
     *   where: {
     *     // ... filter to delete one Chunk
     *   }
     * })
     * 
     */
    delete<T extends ChunkDeleteArgs>(args: SelectSubset<T, ChunkDeleteArgs<ExtArgs>>): Prisma__ChunkClient<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chunk.
     * @param {ChunkUpdateArgs} args - Arguments to update one Chunk.
     * @example
     * // Update one Chunk
     * const chunk = await prisma.chunk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChunkUpdateArgs>(args: SelectSubset<T, ChunkUpdateArgs<ExtArgs>>): Prisma__ChunkClient<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chunks.
     * @param {ChunkDeleteManyArgs} args - Arguments to filter Chunks to delete.
     * @example
     * // Delete a few Chunks
     * const { count } = await prisma.chunk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChunkDeleteManyArgs>(args?: SelectSubset<T, ChunkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChunkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chunks
     * const chunk = await prisma.chunk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChunkUpdateManyArgs>(args: SelectSubset<T, ChunkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chunks and returns the data updated in the database.
     * @param {ChunkUpdateManyAndReturnArgs} args - Arguments to update many Chunks.
     * @example
     * // Update many Chunks
     * const chunk = await prisma.chunk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chunks and only return the `id`
     * const chunkWithIdOnly = await prisma.chunk.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChunkUpdateManyAndReturnArgs>(args: SelectSubset<T, ChunkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chunk.
     * @param {ChunkUpsertArgs} args - Arguments to update or create a Chunk.
     * @example
     * // Update or create a Chunk
     * const chunk = await prisma.chunk.upsert({
     *   create: {
     *     // ... data to create a Chunk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chunk we want to update
     *   }
     * })
     */
    upsert<T extends ChunkUpsertArgs>(args: SelectSubset<T, ChunkUpsertArgs<ExtArgs>>): Prisma__ChunkClient<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChunkCountArgs} args - Arguments to filter Chunks to count.
     * @example
     * // Count the number of Chunks
     * const count = await prisma.chunk.count({
     *   where: {
     *     // ... the filter for the Chunks we want to count
     *   }
     * })
    **/
    count<T extends ChunkCountArgs>(
      args?: Subset<T, ChunkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChunkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chunk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChunkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChunkAggregateArgs>(args: Subset<T, ChunkAggregateArgs>): Prisma.PrismaPromise<GetChunkAggregateType<T>>

    /**
     * Group by Chunk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChunkGroupByArgs} args - Group by arguments.
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
      T extends ChunkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChunkGroupByArgs['orderBy'] }
        : { orderBy?: ChunkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChunkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChunkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chunk model
   */
  readonly fields: ChunkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chunk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChunkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vectorMeta<T extends Chunk$vectorMetaArgs<ExtArgs> = {}>(args?: Subset<T, Chunk$vectorMetaArgs<ExtArgs>>): Prisma__VectorMetadataClient<$Result.GetResult<Prisma.$VectorMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Chunk model
   */
  interface ChunkFieldRefs {
    readonly id: FieldRef<"Chunk", 'String'>
    readonly documentId: FieldRef<"Chunk", 'String'>
    readonly order: FieldRef<"Chunk", 'Int'>
    readonly text: FieldRef<"Chunk", 'String'>
    readonly createdAt: FieldRef<"Chunk", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chunk findUnique
   */
  export type ChunkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
    /**
     * Filter, which Chunk to fetch.
     */
    where: ChunkWhereUniqueInput
  }

  /**
   * Chunk findUniqueOrThrow
   */
  export type ChunkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
    /**
     * Filter, which Chunk to fetch.
     */
    where: ChunkWhereUniqueInput
  }

  /**
   * Chunk findFirst
   */
  export type ChunkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
    /**
     * Filter, which Chunk to fetch.
     */
    where?: ChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chunks to fetch.
     */
    orderBy?: ChunkOrderByWithRelationInput | ChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chunks.
     */
    cursor?: ChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chunks.
     */
    distinct?: ChunkScalarFieldEnum | ChunkScalarFieldEnum[]
  }

  /**
   * Chunk findFirstOrThrow
   */
  export type ChunkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
    /**
     * Filter, which Chunk to fetch.
     */
    where?: ChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chunks to fetch.
     */
    orderBy?: ChunkOrderByWithRelationInput | ChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chunks.
     */
    cursor?: ChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chunks.
     */
    distinct?: ChunkScalarFieldEnum | ChunkScalarFieldEnum[]
  }

  /**
   * Chunk findMany
   */
  export type ChunkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
    /**
     * Filter, which Chunks to fetch.
     */
    where?: ChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chunks to fetch.
     */
    orderBy?: ChunkOrderByWithRelationInput | ChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chunks.
     */
    cursor?: ChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chunks.
     */
    skip?: number
    distinct?: ChunkScalarFieldEnum | ChunkScalarFieldEnum[]
  }

  /**
   * Chunk create
   */
  export type ChunkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
    /**
     * The data needed to create a Chunk.
     */
    data: XOR<ChunkCreateInput, ChunkUncheckedCreateInput>
  }

  /**
   * Chunk createMany
   */
  export type ChunkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chunks.
     */
    data: ChunkCreateManyInput | ChunkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chunk createManyAndReturn
   */
  export type ChunkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * The data used to create many Chunks.
     */
    data: ChunkCreateManyInput | ChunkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chunk update
   */
  export type ChunkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
    /**
     * The data needed to update a Chunk.
     */
    data: XOR<ChunkUpdateInput, ChunkUncheckedUpdateInput>
    /**
     * Choose, which Chunk to update.
     */
    where: ChunkWhereUniqueInput
  }

  /**
   * Chunk updateMany
   */
  export type ChunkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chunks.
     */
    data: XOR<ChunkUpdateManyMutationInput, ChunkUncheckedUpdateManyInput>
    /**
     * Filter which Chunks to update
     */
    where?: ChunkWhereInput
    /**
     * Limit how many Chunks to update.
     */
    limit?: number
  }

  /**
   * Chunk updateManyAndReturn
   */
  export type ChunkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * The data used to update Chunks.
     */
    data: XOR<ChunkUpdateManyMutationInput, ChunkUncheckedUpdateManyInput>
    /**
     * Filter which Chunks to update
     */
    where?: ChunkWhereInput
    /**
     * Limit how many Chunks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chunk upsert
   */
  export type ChunkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
    /**
     * The filter to search for the Chunk to update in case it exists.
     */
    where: ChunkWhereUniqueInput
    /**
     * In case the Chunk found by the `where` argument doesn't exist, create a new Chunk with this data.
     */
    create: XOR<ChunkCreateInput, ChunkUncheckedCreateInput>
    /**
     * In case the Chunk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChunkUpdateInput, ChunkUncheckedUpdateInput>
  }

  /**
   * Chunk delete
   */
  export type ChunkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
    /**
     * Filter which Chunk to delete.
     */
    where: ChunkWhereUniqueInput
  }

  /**
   * Chunk deleteMany
   */
  export type ChunkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chunks to delete
     */
    where?: ChunkWhereInput
    /**
     * Limit how many Chunks to delete.
     */
    limit?: number
  }

  /**
   * Chunk.vectorMeta
   */
  export type Chunk$vectorMetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VectorMetadata
     */
    select?: VectorMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VectorMetadata
     */
    omit?: VectorMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VectorMetadataInclude<ExtArgs> | null
    where?: VectorMetadataWhereInput
  }

  /**
   * Chunk without action
   */
  export type ChunkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chunk
     */
    select?: ChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chunk
     */
    omit?: ChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChunkInclude<ExtArgs> | null
  }


  /**
   * Model VectorMetadata
   */

  export type AggregateVectorMetadata = {
    _count: VectorMetadataCountAggregateOutputType | null
    _avg: VectorMetadataAvgAggregateOutputType | null
    _sum: VectorMetadataSumAggregateOutputType | null
    _min: VectorMetadataMinAggregateOutputType | null
    _max: VectorMetadataMaxAggregateOutputType | null
  }

  export type VectorMetadataAvgAggregateOutputType = {
    dimension: number | null
  }

  export type VectorMetadataSumAggregateOutputType = {
    dimension: number | null
  }

  export type VectorMetadataMinAggregateOutputType = {
    id: string | null
    chunkId: string | null
    embeddingProvider: string | null
    dimension: number | null
    createdAt: Date | null
  }

  export type VectorMetadataMaxAggregateOutputType = {
    id: string | null
    chunkId: string | null
    embeddingProvider: string | null
    dimension: number | null
    createdAt: Date | null
  }

  export type VectorMetadataCountAggregateOutputType = {
    id: number
    chunkId: number
    embeddingProvider: number
    dimension: number
    createdAt: number
    _all: number
  }


  export type VectorMetadataAvgAggregateInputType = {
    dimension?: true
  }

  export type VectorMetadataSumAggregateInputType = {
    dimension?: true
  }

  export type VectorMetadataMinAggregateInputType = {
    id?: true
    chunkId?: true
    embeddingProvider?: true
    dimension?: true
    createdAt?: true
  }

  export type VectorMetadataMaxAggregateInputType = {
    id?: true
    chunkId?: true
    embeddingProvider?: true
    dimension?: true
    createdAt?: true
  }

  export type VectorMetadataCountAggregateInputType = {
    id?: true
    chunkId?: true
    embeddingProvider?: true
    dimension?: true
    createdAt?: true
    _all?: true
  }

  export type VectorMetadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VectorMetadata to aggregate.
     */
    where?: VectorMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VectorMetadata to fetch.
     */
    orderBy?: VectorMetadataOrderByWithRelationInput | VectorMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VectorMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VectorMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VectorMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VectorMetadata
    **/
    _count?: true | VectorMetadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VectorMetadataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VectorMetadataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VectorMetadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VectorMetadataMaxAggregateInputType
  }

  export type GetVectorMetadataAggregateType<T extends VectorMetadataAggregateArgs> = {
        [P in keyof T & keyof AggregateVectorMetadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVectorMetadata[P]>
      : GetScalarType<T[P], AggregateVectorMetadata[P]>
  }




  export type VectorMetadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VectorMetadataWhereInput
    orderBy?: VectorMetadataOrderByWithAggregationInput | VectorMetadataOrderByWithAggregationInput[]
    by: VectorMetadataScalarFieldEnum[] | VectorMetadataScalarFieldEnum
    having?: VectorMetadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VectorMetadataCountAggregateInputType | true
    _avg?: VectorMetadataAvgAggregateInputType
    _sum?: VectorMetadataSumAggregateInputType
    _min?: VectorMetadataMinAggregateInputType
    _max?: VectorMetadataMaxAggregateInputType
  }

  export type VectorMetadataGroupByOutputType = {
    id: string
    chunkId: string
    embeddingProvider: string
    dimension: number
    createdAt: Date
    _count: VectorMetadataCountAggregateOutputType | null
    _avg: VectorMetadataAvgAggregateOutputType | null
    _sum: VectorMetadataSumAggregateOutputType | null
    _min: VectorMetadataMinAggregateOutputType | null
    _max: VectorMetadataMaxAggregateOutputType | null
  }

  type GetVectorMetadataGroupByPayload<T extends VectorMetadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VectorMetadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VectorMetadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VectorMetadataGroupByOutputType[P]>
            : GetScalarType<T[P], VectorMetadataGroupByOutputType[P]>
        }
      >
    >


  export type VectorMetadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chunkId?: boolean
    embeddingProvider?: boolean
    dimension?: boolean
    createdAt?: boolean
    chunk?: boolean | ChunkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vectorMetadata"]>

  export type VectorMetadataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chunkId?: boolean
    embeddingProvider?: boolean
    dimension?: boolean
    createdAt?: boolean
    chunk?: boolean | ChunkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vectorMetadata"]>

  export type VectorMetadataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chunkId?: boolean
    embeddingProvider?: boolean
    dimension?: boolean
    createdAt?: boolean
    chunk?: boolean | ChunkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vectorMetadata"]>

  export type VectorMetadataSelectScalar = {
    id?: boolean
    chunkId?: boolean
    embeddingProvider?: boolean
    dimension?: boolean
    createdAt?: boolean
  }

  export type VectorMetadataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chunkId" | "embeddingProvider" | "dimension" | "createdAt", ExtArgs["result"]["vectorMetadata"]>
  export type VectorMetadataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chunk?: boolean | ChunkDefaultArgs<ExtArgs>
  }
  export type VectorMetadataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chunk?: boolean | ChunkDefaultArgs<ExtArgs>
  }
  export type VectorMetadataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chunk?: boolean | ChunkDefaultArgs<ExtArgs>
  }

  export type $VectorMetadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VectorMetadata"
    objects: {
      chunk: Prisma.$ChunkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chunkId: string
      embeddingProvider: string
      dimension: number
      createdAt: Date
    }, ExtArgs["result"]["vectorMetadata"]>
    composites: {}
  }

  type VectorMetadataGetPayload<S extends boolean | null | undefined | VectorMetadataDefaultArgs> = $Result.GetResult<Prisma.$VectorMetadataPayload, S>

  type VectorMetadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VectorMetadataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VectorMetadataCountAggregateInputType | true
    }

  export interface VectorMetadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VectorMetadata'], meta: { name: 'VectorMetadata' } }
    /**
     * Find zero or one VectorMetadata that matches the filter.
     * @param {VectorMetadataFindUniqueArgs} args - Arguments to find a VectorMetadata
     * @example
     * // Get one VectorMetadata
     * const vectorMetadata = await prisma.vectorMetadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VectorMetadataFindUniqueArgs>(args: SelectSubset<T, VectorMetadataFindUniqueArgs<ExtArgs>>): Prisma__VectorMetadataClient<$Result.GetResult<Prisma.$VectorMetadataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VectorMetadata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VectorMetadataFindUniqueOrThrowArgs} args - Arguments to find a VectorMetadata
     * @example
     * // Get one VectorMetadata
     * const vectorMetadata = await prisma.vectorMetadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VectorMetadataFindUniqueOrThrowArgs>(args: SelectSubset<T, VectorMetadataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VectorMetadataClient<$Result.GetResult<Prisma.$VectorMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VectorMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VectorMetadataFindFirstArgs} args - Arguments to find a VectorMetadata
     * @example
     * // Get one VectorMetadata
     * const vectorMetadata = await prisma.vectorMetadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VectorMetadataFindFirstArgs>(args?: SelectSubset<T, VectorMetadataFindFirstArgs<ExtArgs>>): Prisma__VectorMetadataClient<$Result.GetResult<Prisma.$VectorMetadataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VectorMetadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VectorMetadataFindFirstOrThrowArgs} args - Arguments to find a VectorMetadata
     * @example
     * // Get one VectorMetadata
     * const vectorMetadata = await prisma.vectorMetadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VectorMetadataFindFirstOrThrowArgs>(args?: SelectSubset<T, VectorMetadataFindFirstOrThrowArgs<ExtArgs>>): Prisma__VectorMetadataClient<$Result.GetResult<Prisma.$VectorMetadataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VectorMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VectorMetadataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VectorMetadata
     * const vectorMetadata = await prisma.vectorMetadata.findMany()
     * 
     * // Get first 10 VectorMetadata
     * const vectorMetadata = await prisma.vectorMetadata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vectorMetadataWithIdOnly = await prisma.vectorMetadata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VectorMetadataFindManyArgs>(args?: SelectSubset<T, VectorMetadataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VectorMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VectorMetadata.
     * @param {VectorMetadataCreateArgs} args - Arguments to create a VectorMetadata.
     * @example
     * // Create one VectorMetadata
     * const VectorMetadata = await prisma.vectorMetadata.create({
     *   data: {
     *     // ... data to create a VectorMetadata
     *   }
     * })
     * 
     */
    create<T extends VectorMetadataCreateArgs>(args: SelectSubset<T, VectorMetadataCreateArgs<ExtArgs>>): Prisma__VectorMetadataClient<$Result.GetResult<Prisma.$VectorMetadataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VectorMetadata.
     * @param {VectorMetadataCreateManyArgs} args - Arguments to create many VectorMetadata.
     * @example
     * // Create many VectorMetadata
     * const vectorMetadata = await prisma.vectorMetadata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VectorMetadataCreateManyArgs>(args?: SelectSubset<T, VectorMetadataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VectorMetadata and returns the data saved in the database.
     * @param {VectorMetadataCreateManyAndReturnArgs} args - Arguments to create many VectorMetadata.
     * @example
     * // Create many VectorMetadata
     * const vectorMetadata = await prisma.vectorMetadata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VectorMetadata and only return the `id`
     * const vectorMetadataWithIdOnly = await prisma.vectorMetadata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VectorMetadataCreateManyAndReturnArgs>(args?: SelectSubset<T, VectorMetadataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VectorMetadataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VectorMetadata.
     * @param {VectorMetadataDeleteArgs} args - Arguments to delete one VectorMetadata.
     * @example
     * // Delete one VectorMetadata
     * const VectorMetadata = await prisma.vectorMetadata.delete({
     *   where: {
     *     // ... filter to delete one VectorMetadata
     *   }
     * })
     * 
     */
    delete<T extends VectorMetadataDeleteArgs>(args: SelectSubset<T, VectorMetadataDeleteArgs<ExtArgs>>): Prisma__VectorMetadataClient<$Result.GetResult<Prisma.$VectorMetadataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VectorMetadata.
     * @param {VectorMetadataUpdateArgs} args - Arguments to update one VectorMetadata.
     * @example
     * // Update one VectorMetadata
     * const vectorMetadata = await prisma.vectorMetadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VectorMetadataUpdateArgs>(args: SelectSubset<T, VectorMetadataUpdateArgs<ExtArgs>>): Prisma__VectorMetadataClient<$Result.GetResult<Prisma.$VectorMetadataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VectorMetadata.
     * @param {VectorMetadataDeleteManyArgs} args - Arguments to filter VectorMetadata to delete.
     * @example
     * // Delete a few VectorMetadata
     * const { count } = await prisma.vectorMetadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VectorMetadataDeleteManyArgs>(args?: SelectSubset<T, VectorMetadataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VectorMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VectorMetadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VectorMetadata
     * const vectorMetadata = await prisma.vectorMetadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VectorMetadataUpdateManyArgs>(args: SelectSubset<T, VectorMetadataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VectorMetadata and returns the data updated in the database.
     * @param {VectorMetadataUpdateManyAndReturnArgs} args - Arguments to update many VectorMetadata.
     * @example
     * // Update many VectorMetadata
     * const vectorMetadata = await prisma.vectorMetadata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VectorMetadata and only return the `id`
     * const vectorMetadataWithIdOnly = await prisma.vectorMetadata.updateManyAndReturn({
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
    updateManyAndReturn<T extends VectorMetadataUpdateManyAndReturnArgs>(args: SelectSubset<T, VectorMetadataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VectorMetadataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VectorMetadata.
     * @param {VectorMetadataUpsertArgs} args - Arguments to update or create a VectorMetadata.
     * @example
     * // Update or create a VectorMetadata
     * const vectorMetadata = await prisma.vectorMetadata.upsert({
     *   create: {
     *     // ... data to create a VectorMetadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VectorMetadata we want to update
     *   }
     * })
     */
    upsert<T extends VectorMetadataUpsertArgs>(args: SelectSubset<T, VectorMetadataUpsertArgs<ExtArgs>>): Prisma__VectorMetadataClient<$Result.GetResult<Prisma.$VectorMetadataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VectorMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VectorMetadataCountArgs} args - Arguments to filter VectorMetadata to count.
     * @example
     * // Count the number of VectorMetadata
     * const count = await prisma.vectorMetadata.count({
     *   where: {
     *     // ... the filter for the VectorMetadata we want to count
     *   }
     * })
    **/
    count<T extends VectorMetadataCountArgs>(
      args?: Subset<T, VectorMetadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VectorMetadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VectorMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VectorMetadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VectorMetadataAggregateArgs>(args: Subset<T, VectorMetadataAggregateArgs>): Prisma.PrismaPromise<GetVectorMetadataAggregateType<T>>

    /**
     * Group by VectorMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VectorMetadataGroupByArgs} args - Group by arguments.
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
      T extends VectorMetadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VectorMetadataGroupByArgs['orderBy'] }
        : { orderBy?: VectorMetadataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VectorMetadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVectorMetadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VectorMetadata model
   */
  readonly fields: VectorMetadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VectorMetadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VectorMetadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chunk<T extends ChunkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChunkDefaultArgs<ExtArgs>>): Prisma__ChunkClient<$Result.GetResult<Prisma.$ChunkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VectorMetadata model
   */
  interface VectorMetadataFieldRefs {
    readonly id: FieldRef<"VectorMetadata", 'String'>
    readonly chunkId: FieldRef<"VectorMetadata", 'String'>
    readonly embeddingProvider: FieldRef<"VectorMetadata", 'String'>
    readonly dimension: FieldRef<"VectorMetadata", 'Int'>
    readonly createdAt: FieldRef<"VectorMetadata", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VectorMetadata findUnique
   */
  export type VectorMetadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VectorMetadata
     */
    select?: VectorMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VectorMetadata
     */
    omit?: VectorMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VectorMetadataInclude<ExtArgs> | null
    /**
     * Filter, which VectorMetadata to fetch.
     */
    where: VectorMetadataWhereUniqueInput
  }

  /**
   * VectorMetadata findUniqueOrThrow
   */
  export type VectorMetadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VectorMetadata
     */
    select?: VectorMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VectorMetadata
     */
    omit?: VectorMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VectorMetadataInclude<ExtArgs> | null
    /**
     * Filter, which VectorMetadata to fetch.
     */
    where: VectorMetadataWhereUniqueInput
  }

  /**
   * VectorMetadata findFirst
   */
  export type VectorMetadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VectorMetadata
     */
    select?: VectorMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VectorMetadata
     */
    omit?: VectorMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VectorMetadataInclude<ExtArgs> | null
    /**
     * Filter, which VectorMetadata to fetch.
     */
    where?: VectorMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VectorMetadata to fetch.
     */
    orderBy?: VectorMetadataOrderByWithRelationInput | VectorMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VectorMetadata.
     */
    cursor?: VectorMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VectorMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VectorMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VectorMetadata.
     */
    distinct?: VectorMetadataScalarFieldEnum | VectorMetadataScalarFieldEnum[]
  }

  /**
   * VectorMetadata findFirstOrThrow
   */
  export type VectorMetadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VectorMetadata
     */
    select?: VectorMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VectorMetadata
     */
    omit?: VectorMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VectorMetadataInclude<ExtArgs> | null
    /**
     * Filter, which VectorMetadata to fetch.
     */
    where?: VectorMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VectorMetadata to fetch.
     */
    orderBy?: VectorMetadataOrderByWithRelationInput | VectorMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VectorMetadata.
     */
    cursor?: VectorMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VectorMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VectorMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VectorMetadata.
     */
    distinct?: VectorMetadataScalarFieldEnum | VectorMetadataScalarFieldEnum[]
  }

  /**
   * VectorMetadata findMany
   */
  export type VectorMetadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VectorMetadata
     */
    select?: VectorMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VectorMetadata
     */
    omit?: VectorMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VectorMetadataInclude<ExtArgs> | null
    /**
     * Filter, which VectorMetadata to fetch.
     */
    where?: VectorMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VectorMetadata to fetch.
     */
    orderBy?: VectorMetadataOrderByWithRelationInput | VectorMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VectorMetadata.
     */
    cursor?: VectorMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VectorMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VectorMetadata.
     */
    skip?: number
    distinct?: VectorMetadataScalarFieldEnum | VectorMetadataScalarFieldEnum[]
  }

  /**
   * VectorMetadata create
   */
  export type VectorMetadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VectorMetadata
     */
    select?: VectorMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VectorMetadata
     */
    omit?: VectorMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VectorMetadataInclude<ExtArgs> | null
    /**
     * The data needed to create a VectorMetadata.
     */
    data: XOR<VectorMetadataCreateInput, VectorMetadataUncheckedCreateInput>
  }

  /**
   * VectorMetadata createMany
   */
  export type VectorMetadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VectorMetadata.
     */
    data: VectorMetadataCreateManyInput | VectorMetadataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VectorMetadata createManyAndReturn
   */
  export type VectorMetadataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VectorMetadata
     */
    select?: VectorMetadataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VectorMetadata
     */
    omit?: VectorMetadataOmit<ExtArgs> | null
    /**
     * The data used to create many VectorMetadata.
     */
    data: VectorMetadataCreateManyInput | VectorMetadataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VectorMetadataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VectorMetadata update
   */
  export type VectorMetadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VectorMetadata
     */
    select?: VectorMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VectorMetadata
     */
    omit?: VectorMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VectorMetadataInclude<ExtArgs> | null
    /**
     * The data needed to update a VectorMetadata.
     */
    data: XOR<VectorMetadataUpdateInput, VectorMetadataUncheckedUpdateInput>
    /**
     * Choose, which VectorMetadata to update.
     */
    where: VectorMetadataWhereUniqueInput
  }

  /**
   * VectorMetadata updateMany
   */
  export type VectorMetadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VectorMetadata.
     */
    data: XOR<VectorMetadataUpdateManyMutationInput, VectorMetadataUncheckedUpdateManyInput>
    /**
     * Filter which VectorMetadata to update
     */
    where?: VectorMetadataWhereInput
    /**
     * Limit how many VectorMetadata to update.
     */
    limit?: number
  }

  /**
   * VectorMetadata updateManyAndReturn
   */
  export type VectorMetadataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VectorMetadata
     */
    select?: VectorMetadataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VectorMetadata
     */
    omit?: VectorMetadataOmit<ExtArgs> | null
    /**
     * The data used to update VectorMetadata.
     */
    data: XOR<VectorMetadataUpdateManyMutationInput, VectorMetadataUncheckedUpdateManyInput>
    /**
     * Filter which VectorMetadata to update
     */
    where?: VectorMetadataWhereInput
    /**
     * Limit how many VectorMetadata to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VectorMetadataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VectorMetadata upsert
   */
  export type VectorMetadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VectorMetadata
     */
    select?: VectorMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VectorMetadata
     */
    omit?: VectorMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VectorMetadataInclude<ExtArgs> | null
    /**
     * The filter to search for the VectorMetadata to update in case it exists.
     */
    where: VectorMetadataWhereUniqueInput
    /**
     * In case the VectorMetadata found by the `where` argument doesn't exist, create a new VectorMetadata with this data.
     */
    create: XOR<VectorMetadataCreateInput, VectorMetadataUncheckedCreateInput>
    /**
     * In case the VectorMetadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VectorMetadataUpdateInput, VectorMetadataUncheckedUpdateInput>
  }

  /**
   * VectorMetadata delete
   */
  export type VectorMetadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VectorMetadata
     */
    select?: VectorMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VectorMetadata
     */
    omit?: VectorMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VectorMetadataInclude<ExtArgs> | null
    /**
     * Filter which VectorMetadata to delete.
     */
    where: VectorMetadataWhereUniqueInput
  }

  /**
   * VectorMetadata deleteMany
   */
  export type VectorMetadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VectorMetadata to delete
     */
    where?: VectorMetadataWhereInput
    /**
     * Limit how many VectorMetadata to delete.
     */
    limit?: number
  }

  /**
   * VectorMetadata without action
   */
  export type VectorMetadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VectorMetadata
     */
    select?: VectorMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VectorMetadata
     */
    omit?: VectorMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VectorMetadataInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    type: 'type',
    url: 'url',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const ChunkScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    order: 'order',
    text: 'text',
    createdAt: 'createdAt'
  };

  export type ChunkScalarFieldEnum = (typeof ChunkScalarFieldEnum)[keyof typeof ChunkScalarFieldEnum]


  export const VectorMetadataScalarFieldEnum: {
    id: 'id',
    chunkId: 'chunkId',
    embeddingProvider: 'embeddingProvider',
    dimension: 'dimension',
    createdAt: 'createdAt'
  };

  export type VectorMetadataScalarFieldEnum = (typeof VectorMetadataScalarFieldEnum)[keyof typeof VectorMetadataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    title?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    url?: StringFilter<"Document"> | string
    status?: StringFilter<"Document"> | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    chunks?: ChunkListRelationFilter
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    chunks?: ChunkOrderByRelationAggregateInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    title?: StringFilter<"Document"> | string
    type?: StringFilter<"Document"> | string
    url?: StringFilter<"Document"> | string
    status?: StringFilter<"Document"> | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    chunks?: ChunkListRelationFilter
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    title?: StringWithAggregatesFilter<"Document"> | string
    type?: StringWithAggregatesFilter<"Document"> | string
    url?: StringWithAggregatesFilter<"Document"> | string
    status?: StringWithAggregatesFilter<"Document"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type ChunkWhereInput = {
    AND?: ChunkWhereInput | ChunkWhereInput[]
    OR?: ChunkWhereInput[]
    NOT?: ChunkWhereInput | ChunkWhereInput[]
    id?: StringFilter<"Chunk"> | string
    documentId?: StringFilter<"Chunk"> | string
    order?: IntFilter<"Chunk"> | number
    text?: StringFilter<"Chunk"> | string
    createdAt?: DateTimeFilter<"Chunk"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    vectorMeta?: XOR<VectorMetadataNullableScalarRelationFilter, VectorMetadataWhereInput> | null
  }

  export type ChunkOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    order?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    document?: DocumentOrderByWithRelationInput
    vectorMeta?: VectorMetadataOrderByWithRelationInput
  }

  export type ChunkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChunkWhereInput | ChunkWhereInput[]
    OR?: ChunkWhereInput[]
    NOT?: ChunkWhereInput | ChunkWhereInput[]
    documentId?: StringFilter<"Chunk"> | string
    order?: IntFilter<"Chunk"> | number
    text?: StringFilter<"Chunk"> | string
    createdAt?: DateTimeFilter<"Chunk"> | Date | string
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    vectorMeta?: XOR<VectorMetadataNullableScalarRelationFilter, VectorMetadataWhereInput> | null
  }, "id">

  export type ChunkOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    order?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    _count?: ChunkCountOrderByAggregateInput
    _avg?: ChunkAvgOrderByAggregateInput
    _max?: ChunkMaxOrderByAggregateInput
    _min?: ChunkMinOrderByAggregateInput
    _sum?: ChunkSumOrderByAggregateInput
  }

  export type ChunkScalarWhereWithAggregatesInput = {
    AND?: ChunkScalarWhereWithAggregatesInput | ChunkScalarWhereWithAggregatesInput[]
    OR?: ChunkScalarWhereWithAggregatesInput[]
    NOT?: ChunkScalarWhereWithAggregatesInput | ChunkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chunk"> | string
    documentId?: StringWithAggregatesFilter<"Chunk"> | string
    order?: IntWithAggregatesFilter<"Chunk"> | number
    text?: StringWithAggregatesFilter<"Chunk"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Chunk"> | Date | string
  }

  export type VectorMetadataWhereInput = {
    AND?: VectorMetadataWhereInput | VectorMetadataWhereInput[]
    OR?: VectorMetadataWhereInput[]
    NOT?: VectorMetadataWhereInput | VectorMetadataWhereInput[]
    id?: StringFilter<"VectorMetadata"> | string
    chunkId?: StringFilter<"VectorMetadata"> | string
    embeddingProvider?: StringFilter<"VectorMetadata"> | string
    dimension?: IntFilter<"VectorMetadata"> | number
    createdAt?: DateTimeFilter<"VectorMetadata"> | Date | string
    chunk?: XOR<ChunkScalarRelationFilter, ChunkWhereInput>
  }

  export type VectorMetadataOrderByWithRelationInput = {
    id?: SortOrder
    chunkId?: SortOrder
    embeddingProvider?: SortOrder
    dimension?: SortOrder
    createdAt?: SortOrder
    chunk?: ChunkOrderByWithRelationInput
  }

  export type VectorMetadataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    chunkId?: string
    AND?: VectorMetadataWhereInput | VectorMetadataWhereInput[]
    OR?: VectorMetadataWhereInput[]
    NOT?: VectorMetadataWhereInput | VectorMetadataWhereInput[]
    embeddingProvider?: StringFilter<"VectorMetadata"> | string
    dimension?: IntFilter<"VectorMetadata"> | number
    createdAt?: DateTimeFilter<"VectorMetadata"> | Date | string
    chunk?: XOR<ChunkScalarRelationFilter, ChunkWhereInput>
  }, "id" | "chunkId">

  export type VectorMetadataOrderByWithAggregationInput = {
    id?: SortOrder
    chunkId?: SortOrder
    embeddingProvider?: SortOrder
    dimension?: SortOrder
    createdAt?: SortOrder
    _count?: VectorMetadataCountOrderByAggregateInput
    _avg?: VectorMetadataAvgOrderByAggregateInput
    _max?: VectorMetadataMaxOrderByAggregateInput
    _min?: VectorMetadataMinOrderByAggregateInput
    _sum?: VectorMetadataSumOrderByAggregateInput
  }

  export type VectorMetadataScalarWhereWithAggregatesInput = {
    AND?: VectorMetadataScalarWhereWithAggregatesInput | VectorMetadataScalarWhereWithAggregatesInput[]
    OR?: VectorMetadataScalarWhereWithAggregatesInput[]
    NOT?: VectorMetadataScalarWhereWithAggregatesInput | VectorMetadataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VectorMetadata"> | string
    chunkId?: StringWithAggregatesFilter<"VectorMetadata"> | string
    embeddingProvider?: StringWithAggregatesFilter<"VectorMetadata"> | string
    dimension?: IntWithAggregatesFilter<"VectorMetadata"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VectorMetadata"> | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    title: string
    type: string
    url: string
    status?: string
    createdAt?: Date | string
    chunks?: ChunkCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    title: string
    type: string
    url: string
    status?: string
    createdAt?: Date | string
    chunks?: ChunkUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chunks?: ChunkUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chunks?: ChunkUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentCreateManyInput = {
    id?: string
    title: string
    type: string
    url: string
    status?: string
    createdAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChunkCreateInput = {
    id?: string
    order: number
    text: string
    createdAt?: Date | string
    document: DocumentCreateNestedOneWithoutChunksInput
    vectorMeta?: VectorMetadataCreateNestedOneWithoutChunkInput
  }

  export type ChunkUncheckedCreateInput = {
    id?: string
    documentId: string
    order: number
    text: string
    createdAt?: Date | string
    vectorMeta?: VectorMetadataUncheckedCreateNestedOneWithoutChunkInput
  }

  export type ChunkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutChunksNestedInput
    vectorMeta?: VectorMetadataUpdateOneWithoutChunkNestedInput
  }

  export type ChunkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vectorMeta?: VectorMetadataUncheckedUpdateOneWithoutChunkNestedInput
  }

  export type ChunkCreateManyInput = {
    id?: string
    documentId: string
    order: number
    text: string
    createdAt?: Date | string
  }

  export type ChunkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChunkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VectorMetadataCreateInput = {
    id?: string
    embeddingProvider: string
    dimension: number
    createdAt?: Date | string
    chunk: ChunkCreateNestedOneWithoutVectorMetaInput
  }

  export type VectorMetadataUncheckedCreateInput = {
    id?: string
    chunkId: string
    embeddingProvider: string
    dimension: number
    createdAt?: Date | string
  }

  export type VectorMetadataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    embeddingProvider?: StringFieldUpdateOperationsInput | string
    dimension?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chunk?: ChunkUpdateOneRequiredWithoutVectorMetaNestedInput
  }

  export type VectorMetadataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chunkId?: StringFieldUpdateOperationsInput | string
    embeddingProvider?: StringFieldUpdateOperationsInput | string
    dimension?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VectorMetadataCreateManyInput = {
    id?: string
    chunkId: string
    embeddingProvider: string
    dimension: number
    createdAt?: Date | string
  }

  export type VectorMetadataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    embeddingProvider?: StringFieldUpdateOperationsInput | string
    dimension?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VectorMetadataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chunkId?: StringFieldUpdateOperationsInput | string
    embeddingProvider?: StringFieldUpdateOperationsInput | string
    dimension?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ChunkListRelationFilter = {
    every?: ChunkWhereInput
    some?: ChunkWhereInput
    none?: ChunkWhereInput
  }

  export type ChunkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    url?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DocumentScalarRelationFilter = {
    is?: DocumentWhereInput
    isNot?: DocumentWhereInput
  }

  export type VectorMetadataNullableScalarRelationFilter = {
    is?: VectorMetadataWhereInput | null
    isNot?: VectorMetadataWhereInput | null
  }

  export type ChunkCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    order?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type ChunkAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ChunkMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    order?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type ChunkMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    order?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type ChunkSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type ChunkScalarRelationFilter = {
    is?: ChunkWhereInput
    isNot?: ChunkWhereInput
  }

  export type VectorMetadataCountOrderByAggregateInput = {
    id?: SortOrder
    chunkId?: SortOrder
    embeddingProvider?: SortOrder
    dimension?: SortOrder
    createdAt?: SortOrder
  }

  export type VectorMetadataAvgOrderByAggregateInput = {
    dimension?: SortOrder
  }

  export type VectorMetadataMaxOrderByAggregateInput = {
    id?: SortOrder
    chunkId?: SortOrder
    embeddingProvider?: SortOrder
    dimension?: SortOrder
    createdAt?: SortOrder
  }

  export type VectorMetadataMinOrderByAggregateInput = {
    id?: SortOrder
    chunkId?: SortOrder
    embeddingProvider?: SortOrder
    dimension?: SortOrder
    createdAt?: SortOrder
  }

  export type VectorMetadataSumOrderByAggregateInput = {
    dimension?: SortOrder
  }

  export type ChunkCreateNestedManyWithoutDocumentInput = {
    create?: XOR<ChunkCreateWithoutDocumentInput, ChunkUncheckedCreateWithoutDocumentInput> | ChunkCreateWithoutDocumentInput[] | ChunkUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: ChunkCreateOrConnectWithoutDocumentInput | ChunkCreateOrConnectWithoutDocumentInput[]
    createMany?: ChunkCreateManyDocumentInputEnvelope
    connect?: ChunkWhereUniqueInput | ChunkWhereUniqueInput[]
  }

  export type ChunkUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<ChunkCreateWithoutDocumentInput, ChunkUncheckedCreateWithoutDocumentInput> | ChunkCreateWithoutDocumentInput[] | ChunkUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: ChunkCreateOrConnectWithoutDocumentInput | ChunkCreateOrConnectWithoutDocumentInput[]
    createMany?: ChunkCreateManyDocumentInputEnvelope
    connect?: ChunkWhereUniqueInput | ChunkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChunkUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<ChunkCreateWithoutDocumentInput, ChunkUncheckedCreateWithoutDocumentInput> | ChunkCreateWithoutDocumentInput[] | ChunkUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: ChunkCreateOrConnectWithoutDocumentInput | ChunkCreateOrConnectWithoutDocumentInput[]
    upsert?: ChunkUpsertWithWhereUniqueWithoutDocumentInput | ChunkUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: ChunkCreateManyDocumentInputEnvelope
    set?: ChunkWhereUniqueInput | ChunkWhereUniqueInput[]
    disconnect?: ChunkWhereUniqueInput | ChunkWhereUniqueInput[]
    delete?: ChunkWhereUniqueInput | ChunkWhereUniqueInput[]
    connect?: ChunkWhereUniqueInput | ChunkWhereUniqueInput[]
    update?: ChunkUpdateWithWhereUniqueWithoutDocumentInput | ChunkUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: ChunkUpdateManyWithWhereWithoutDocumentInput | ChunkUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: ChunkScalarWhereInput | ChunkScalarWhereInput[]
  }

  export type ChunkUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<ChunkCreateWithoutDocumentInput, ChunkUncheckedCreateWithoutDocumentInput> | ChunkCreateWithoutDocumentInput[] | ChunkUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: ChunkCreateOrConnectWithoutDocumentInput | ChunkCreateOrConnectWithoutDocumentInput[]
    upsert?: ChunkUpsertWithWhereUniqueWithoutDocumentInput | ChunkUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: ChunkCreateManyDocumentInputEnvelope
    set?: ChunkWhereUniqueInput | ChunkWhereUniqueInput[]
    disconnect?: ChunkWhereUniqueInput | ChunkWhereUniqueInput[]
    delete?: ChunkWhereUniqueInput | ChunkWhereUniqueInput[]
    connect?: ChunkWhereUniqueInput | ChunkWhereUniqueInput[]
    update?: ChunkUpdateWithWhereUniqueWithoutDocumentInput | ChunkUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: ChunkUpdateManyWithWhereWithoutDocumentInput | ChunkUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: ChunkScalarWhereInput | ChunkScalarWhereInput[]
  }

  export type DocumentCreateNestedOneWithoutChunksInput = {
    create?: XOR<DocumentCreateWithoutChunksInput, DocumentUncheckedCreateWithoutChunksInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutChunksInput
    connect?: DocumentWhereUniqueInput
  }

  export type VectorMetadataCreateNestedOneWithoutChunkInput = {
    create?: XOR<VectorMetadataCreateWithoutChunkInput, VectorMetadataUncheckedCreateWithoutChunkInput>
    connectOrCreate?: VectorMetadataCreateOrConnectWithoutChunkInput
    connect?: VectorMetadataWhereUniqueInput
  }

  export type VectorMetadataUncheckedCreateNestedOneWithoutChunkInput = {
    create?: XOR<VectorMetadataCreateWithoutChunkInput, VectorMetadataUncheckedCreateWithoutChunkInput>
    connectOrCreate?: VectorMetadataCreateOrConnectWithoutChunkInput
    connect?: VectorMetadataWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DocumentUpdateOneRequiredWithoutChunksNestedInput = {
    create?: XOR<DocumentCreateWithoutChunksInput, DocumentUncheckedCreateWithoutChunksInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutChunksInput
    upsert?: DocumentUpsertWithoutChunksInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutChunksInput, DocumentUpdateWithoutChunksInput>, DocumentUncheckedUpdateWithoutChunksInput>
  }

  export type VectorMetadataUpdateOneWithoutChunkNestedInput = {
    create?: XOR<VectorMetadataCreateWithoutChunkInput, VectorMetadataUncheckedCreateWithoutChunkInput>
    connectOrCreate?: VectorMetadataCreateOrConnectWithoutChunkInput
    upsert?: VectorMetadataUpsertWithoutChunkInput
    disconnect?: VectorMetadataWhereInput | boolean
    delete?: VectorMetadataWhereInput | boolean
    connect?: VectorMetadataWhereUniqueInput
    update?: XOR<XOR<VectorMetadataUpdateToOneWithWhereWithoutChunkInput, VectorMetadataUpdateWithoutChunkInput>, VectorMetadataUncheckedUpdateWithoutChunkInput>
  }

  export type VectorMetadataUncheckedUpdateOneWithoutChunkNestedInput = {
    create?: XOR<VectorMetadataCreateWithoutChunkInput, VectorMetadataUncheckedCreateWithoutChunkInput>
    connectOrCreate?: VectorMetadataCreateOrConnectWithoutChunkInput
    upsert?: VectorMetadataUpsertWithoutChunkInput
    disconnect?: VectorMetadataWhereInput | boolean
    delete?: VectorMetadataWhereInput | boolean
    connect?: VectorMetadataWhereUniqueInput
    update?: XOR<XOR<VectorMetadataUpdateToOneWithWhereWithoutChunkInput, VectorMetadataUpdateWithoutChunkInput>, VectorMetadataUncheckedUpdateWithoutChunkInput>
  }

  export type ChunkCreateNestedOneWithoutVectorMetaInput = {
    create?: XOR<ChunkCreateWithoutVectorMetaInput, ChunkUncheckedCreateWithoutVectorMetaInput>
    connectOrCreate?: ChunkCreateOrConnectWithoutVectorMetaInput
    connect?: ChunkWhereUniqueInput
  }

  export type ChunkUpdateOneRequiredWithoutVectorMetaNestedInput = {
    create?: XOR<ChunkCreateWithoutVectorMetaInput, ChunkUncheckedCreateWithoutVectorMetaInput>
    connectOrCreate?: ChunkCreateOrConnectWithoutVectorMetaInput
    upsert?: ChunkUpsertWithoutVectorMetaInput
    connect?: ChunkWhereUniqueInput
    update?: XOR<XOR<ChunkUpdateToOneWithWhereWithoutVectorMetaInput, ChunkUpdateWithoutVectorMetaInput>, ChunkUncheckedUpdateWithoutVectorMetaInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ChunkCreateWithoutDocumentInput = {
    id?: string
    order: number
    text: string
    createdAt?: Date | string
    vectorMeta?: VectorMetadataCreateNestedOneWithoutChunkInput
  }

  export type ChunkUncheckedCreateWithoutDocumentInput = {
    id?: string
    order: number
    text: string
    createdAt?: Date | string
    vectorMeta?: VectorMetadataUncheckedCreateNestedOneWithoutChunkInput
  }

  export type ChunkCreateOrConnectWithoutDocumentInput = {
    where: ChunkWhereUniqueInput
    create: XOR<ChunkCreateWithoutDocumentInput, ChunkUncheckedCreateWithoutDocumentInput>
  }

  export type ChunkCreateManyDocumentInputEnvelope = {
    data: ChunkCreateManyDocumentInput | ChunkCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type ChunkUpsertWithWhereUniqueWithoutDocumentInput = {
    where: ChunkWhereUniqueInput
    update: XOR<ChunkUpdateWithoutDocumentInput, ChunkUncheckedUpdateWithoutDocumentInput>
    create: XOR<ChunkCreateWithoutDocumentInput, ChunkUncheckedCreateWithoutDocumentInput>
  }

  export type ChunkUpdateWithWhereUniqueWithoutDocumentInput = {
    where: ChunkWhereUniqueInput
    data: XOR<ChunkUpdateWithoutDocumentInput, ChunkUncheckedUpdateWithoutDocumentInput>
  }

  export type ChunkUpdateManyWithWhereWithoutDocumentInput = {
    where: ChunkScalarWhereInput
    data: XOR<ChunkUpdateManyMutationInput, ChunkUncheckedUpdateManyWithoutDocumentInput>
  }

  export type ChunkScalarWhereInput = {
    AND?: ChunkScalarWhereInput | ChunkScalarWhereInput[]
    OR?: ChunkScalarWhereInput[]
    NOT?: ChunkScalarWhereInput | ChunkScalarWhereInput[]
    id?: StringFilter<"Chunk"> | string
    documentId?: StringFilter<"Chunk"> | string
    order?: IntFilter<"Chunk"> | number
    text?: StringFilter<"Chunk"> | string
    createdAt?: DateTimeFilter<"Chunk"> | Date | string
  }

  export type DocumentCreateWithoutChunksInput = {
    id?: string
    title: string
    type: string
    url: string
    status?: string
    createdAt?: Date | string
  }

  export type DocumentUncheckedCreateWithoutChunksInput = {
    id?: string
    title: string
    type: string
    url: string
    status?: string
    createdAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutChunksInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutChunksInput, DocumentUncheckedCreateWithoutChunksInput>
  }

  export type VectorMetadataCreateWithoutChunkInput = {
    id?: string
    embeddingProvider: string
    dimension: number
    createdAt?: Date | string
  }

  export type VectorMetadataUncheckedCreateWithoutChunkInput = {
    id?: string
    embeddingProvider: string
    dimension: number
    createdAt?: Date | string
  }

  export type VectorMetadataCreateOrConnectWithoutChunkInput = {
    where: VectorMetadataWhereUniqueInput
    create: XOR<VectorMetadataCreateWithoutChunkInput, VectorMetadataUncheckedCreateWithoutChunkInput>
  }

  export type DocumentUpsertWithoutChunksInput = {
    update: XOR<DocumentUpdateWithoutChunksInput, DocumentUncheckedUpdateWithoutChunksInput>
    create: XOR<DocumentCreateWithoutChunksInput, DocumentUncheckedCreateWithoutChunksInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutChunksInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutChunksInput, DocumentUncheckedUpdateWithoutChunksInput>
  }

  export type DocumentUpdateWithoutChunksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateWithoutChunksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VectorMetadataUpsertWithoutChunkInput = {
    update: XOR<VectorMetadataUpdateWithoutChunkInput, VectorMetadataUncheckedUpdateWithoutChunkInput>
    create: XOR<VectorMetadataCreateWithoutChunkInput, VectorMetadataUncheckedCreateWithoutChunkInput>
    where?: VectorMetadataWhereInput
  }

  export type VectorMetadataUpdateToOneWithWhereWithoutChunkInput = {
    where?: VectorMetadataWhereInput
    data: XOR<VectorMetadataUpdateWithoutChunkInput, VectorMetadataUncheckedUpdateWithoutChunkInput>
  }

  export type VectorMetadataUpdateWithoutChunkInput = {
    id?: StringFieldUpdateOperationsInput | string
    embeddingProvider?: StringFieldUpdateOperationsInput | string
    dimension?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VectorMetadataUncheckedUpdateWithoutChunkInput = {
    id?: StringFieldUpdateOperationsInput | string
    embeddingProvider?: StringFieldUpdateOperationsInput | string
    dimension?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChunkCreateWithoutVectorMetaInput = {
    id?: string
    order: number
    text: string
    createdAt?: Date | string
    document: DocumentCreateNestedOneWithoutChunksInput
  }

  export type ChunkUncheckedCreateWithoutVectorMetaInput = {
    id?: string
    documentId: string
    order: number
    text: string
    createdAt?: Date | string
  }

  export type ChunkCreateOrConnectWithoutVectorMetaInput = {
    where: ChunkWhereUniqueInput
    create: XOR<ChunkCreateWithoutVectorMetaInput, ChunkUncheckedCreateWithoutVectorMetaInput>
  }

  export type ChunkUpsertWithoutVectorMetaInput = {
    update: XOR<ChunkUpdateWithoutVectorMetaInput, ChunkUncheckedUpdateWithoutVectorMetaInput>
    create: XOR<ChunkCreateWithoutVectorMetaInput, ChunkUncheckedCreateWithoutVectorMetaInput>
    where?: ChunkWhereInput
  }

  export type ChunkUpdateToOneWithWhereWithoutVectorMetaInput = {
    where?: ChunkWhereInput
    data: XOR<ChunkUpdateWithoutVectorMetaInput, ChunkUncheckedUpdateWithoutVectorMetaInput>
  }

  export type ChunkUpdateWithoutVectorMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: DocumentUpdateOneRequiredWithoutChunksNestedInput
  }

  export type ChunkUncheckedUpdateWithoutVectorMetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChunkCreateManyDocumentInput = {
    id?: string
    order: number
    text: string
    createdAt?: Date | string
  }

  export type ChunkUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vectorMeta?: VectorMetadataUpdateOneWithoutChunkNestedInput
  }

  export type ChunkUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vectorMeta?: VectorMetadataUncheckedUpdateOneWithoutChunkNestedInput
  }

  export type ChunkUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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