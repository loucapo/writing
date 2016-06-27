// module.exports = function (Promise) {
//     return {
//         resolvePromise(myPromise) {
//             try{
//                 myPromise
//                     .then(result =>{
//                         Promise.resolve({
//                             success: result.success,
//                             payload: result.payload,
//                             errors: result.errors,
//                             message: result.message
//                         })
//                     })
//                     .catch(ex => {
//                         // if it's a rejection return a continuation succcess = false.
//                         // if it's an exception re throw
//                         // read up on what the damn pattern is for this shit.
//                     })
//             }
//         }
//     }
// };
