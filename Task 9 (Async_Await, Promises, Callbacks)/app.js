// synchronnous 
// console.log("I");
// console.log("eat");
// console.log("Ice Cream");
// console.log("with a");
// console.log("spoon");



// Asynchronnous 
// console.log("I");
// console.log("eat");
// console.log("Ice Cream");
// setTimeout(()=>{
//     console.log("with a");
// },2000);
// console.log("spoon");

// callBack 

// function one(call_two){
//     console.log("function one");
//     call_two();
// }
// function two(){
//     console.log("function two");
// }
// one(two);



let stock = {
    Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate', 'peanuts']
};



// callback Hell 

// let order = (Fruite_name, call_production) => {
//     setTimeout(() => {
//         console.log(`${stock.Fruits[Fruite_name]} was selected`)
//     }, 2000);
//     call_production();
// };
// let production = () => {
//     setTimeout(() => {
//         console.log(`production was selected`);
//     }, 2000);

//     setTimeout(() => {
//         console.log(`the fruit has bee chopped`);
//         setTimeout(() => {
//             console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`);
//             setTimeout(() => {
//                 console.log(`the machine was started`);
//                 setTimeout(() => {
//                     console.log(`ice cream was placed on ${stock.holder[0]}`);
//                     setTimeout(() => {
//                         console.log(`chocolate was added as toppings`);
//                         setTimeout(() => {
//                             console.log(`serve ice cream`);
//                         }, 2000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 2000);
// }
// order(0, production)


// promises 


// let is_shop_open = true;
// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if (is_shop_open) {
//             setTimeout(() => {
//                 resolve(work());
//             }, time);

//         }
//         else {
//             reject(console.log('our shop is closed'));
//         }
//     })
// }
// order(2000, () => console.log(`${stock.Fruits[0]} was selected`))

//     .then(() => {
//         return order(2000, () => console.log(`production has started`))
//     })
//     .then(() => {
//         return order(1000, () => console.log(`Add ${stock.liquid[0]} and ${stock.liquid[1]} was selected`));
//     })
//     .then(() => {
//         return order(1000, () => console.log(`start the machine`));
//     })
//     .then(() => {
//         return order(1000, () => console.log(`ice cream placed on ${stock.holder[0]}`));
//     })
//     .then(() => {
//         return order(1000, () => console.log(`chocolate was selected`));
//     })
//     .then(() => {
//         return order(1000, () => console.log(`ice cream was served`));
//     })
//     .catch(()=>console.log('customer left'))
//     .finally(()=>console.log('day ended, shop is cloded'));


let is_shop_open = true;

let time = (ms) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms);
        }
        else {
            reject(console.log('shop is closed'))
        }

    })
}
async function kitchen() {
    try {
        await time(2000);
        console.log(`${stock.Fruits[0]}`);
        await time(0000);
        console.log('start the production');
        await time(2000);
        console.log('cut the fruit');
        await time(1000);
        console.log(`Add ${stock.liquid[0]} and ${stock.liquid[1]}`);
        await time(1000);
        console.log('start the machine');
        await time(2000);
        console.log(`select container ${stock.holder[1]}`);
        await time(3000);
        console.log(`select ${stock.toppings[1]}`);
        await time(2000);
        console.log(`Serve Ice cream`);
    }
    catch (error) {
        console.log("customer left");
    }
    finally {
        console.log("day ended, shop is closed");
    }
}

kitchen();