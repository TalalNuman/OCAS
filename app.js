
// window.generate = function generate(arr1, arr2) {

//     let res = []
//     for (let i = 0; i < arr1.length; i++) {
//         const e1 = arr1[i];
//         for (let i = 0; i < arr2.length; i++) {
//             const e2 = arr2[i];
//             // console.log(element1,element2)
//             // res.push({e1,e2})
//                 // res.push({e1,e2})
//                 _.forEach(({e1, e2}), function(value) {
//                     console.log(value); 
//                 });
//             }
//         }
//         // return res;

// }
window.generate = function generate(arr1, arr2) {

    res = []
    arr1.forEach(function (a) {
        arr2.forEach(function (b) {
            res.push({ a, b })
        });
    });
    return res;
}
