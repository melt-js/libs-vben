declare function arraysEqual<T>(a: T[], b: T[]): boolean;
declare function arraysStrictEqual<T>(a: T[], b: T[]): boolean;
type DiffResult<T> = Partial<{
    [K in keyof T]: T[K] extends object ? DiffResult<T[K]> : T[K];
}>;
declare const diff: <T extends Record<string, any>>(obj1: T, obj2: T) => DiffResult<T>;
declare const diffStrict: <T extends Record<string, any>>(obj1: T, obj2: T) => DiffResult<T>;
export { arraysEqual, arraysStrictEqual, diff, diffStrict };
