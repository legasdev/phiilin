// import { EnRu } from './../lang/en-Ru';

// export function objectToObjInArray(object) {
//     return Object.keys(object).reduce( (arr, key) => [
//         ...arr,
//         {
//             name: EnRu[key],
//             value: object[key]
//         }
//     ], []);
// };

function foo() {
    function tick() {
        console.log(this.a);
    }
    setTimeout(tick.bind(this), 100);
}

var obj = {
    a: 2
}

foo.call(obj)