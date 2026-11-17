/**
 * @param { Readonly<Promise> } promise
 * @param {object=} errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export declare function to<T, U = Error>(promise: Readonly<Promise<T>>, errorExt?: object): Promise<[null, T] | [U, undefined]>;
