// ============================================================
// Advanced TypeScript Utility Types
// ============================================================

// ----- Nullable / Optional / Maybe -----
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = T | null | undefined;

// ----- Deep Partial -----
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// ----- Required / Omit / Pick helpers -----
export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type OmitKeys<T, K extends keyof T> = Omit<T, K>;
export type PickKeys<T, K extends keyof T> = Pick<T, K>;

// ----- Readonly Deep -----
export type ReadonlyDeep<T> = {
  readonly [P in keyof T]: T[P] extends object ? ReadonlyDeep<T[P]> : T[P];
};

// ----- Property / Array / Return type extractors -----
export type PropertyType<T, K extends keyof T> = T[K];
export type ArrayElement<T extends readonly unknown[]> = T extends readonly (infer U)[] ? U : never;
export type ReturnTypeOf<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;
export type AsyncReturnTypeOf<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer R> ? R : never;

// ----- Branded Types (nominal typing) -----
export type Brand<T, B extends string> = T & { __brand: B };
export type Email = Brand<string, 'Email'>;
export type URLString = Brand<string, 'URL'>;
export type Phone = Brand<string, 'Phone'>;

/** Validates that a string is an email */
export const isEmail = (value: string): value is Email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

/** Validates that a string is a valid URL */
export const isURL = (value: string): value is URLString => {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};

// ----- Result Type (Either pattern) -----
export type Result<T, E = Error> =
  | { success: true; data: T; error?: never }
  | { success: false; data?: never; error: E };

/** Creates a successful Result */
export const success = <T, E>(data: T): Result<T, E> => ({
  success: true,
  data,
});

/** Creates a failed Result */
export const failure = <T, E>(error: E): Result<T, E> => ({
  success: false,
  error,
});

// ----- Async Result helpers -----
export type AsyncResult<T, E = Error> = Promise<Result<T, E>>;

/** Wraps a promise in a Result, catching any error */
export const toResult = async <T, E = Error>(promise: Promise<T>): AsyncResult<T, E> => {
  try {
    const data = await promise;
    return success(data);
  } catch (error) {
    return failure(error instanceof Error ? (error as unknown as E) : (new Error('Unknown error') as unknown as E));
  }
};

// ----- Non-empty array -----
export type NonEmptyArray<T> = readonly [T, ...T[]];

// ----- Function overload helper -----
export type OverloadedFn<T> = (...args: any[]) => T;

// ----- CSS value type -----
export type CSSValue = string | number;
