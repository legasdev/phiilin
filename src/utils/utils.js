import { EnRu } from './../lang/en-Ru';

export function objectToObjInArray(object) {
    return Object.keys(object).reduce( (arr, key) => [
        ...arr,
        {
            name: EnRu[key],
            value: object[key]
        }
    ], []);
};
