/*****         Key Value Assignment Shortcut 
 *                  variables & keys matching
 * 
 */

 let name = 'Ginny'
 let house = 'Gryffindor'

 let student = {
     name: name,
     hogwarts_house: house
 }

// if the variable name is the same name you want for the key ==> use the shortcut 
 let student2 = {name, hogwarts_house: house};





/*****         Forms of Arrow Functions 
 *               implicit vs explicit return 
 *               parentheses are needed for 0 or more than 1 parameter
 */

 // Arrow function syntax 
 // const funName = () => {}
const sayHello = () => console.log('wassap')
const doubleNum = (n) => n * 2


// anonymous arrow funcs
[1,2,3].forEach(num => console.log(num *2))
[1,2,3].forEach((num) => console.log(num *2))

const takeUmbrella = (isRaining) => {
    if(isRaining){ return true }
    else {
        return false 
    }
}







/*****         Spread Operator 
 *                used with any iterable 
 *                copying values (not reference)
 *                blasting strings (so you can make a tree!) 
 *                joining teams 🥰
 */





/*****         Destructuring Assignment 
 *                 arrays (address example)
 *                 objects
 * 
*/





/*****         Rest Operator 
 *                 examples...
 *                 object from array
*/





/*****         Ternary Operator 
 *                 SOMETIMES helpful
 * SOMETIMES I SAID!
*/

const umbrellaTernary = (isRaining) => isRaining ? true : false 
const umbrTerPrint = (isRaining) => isRaining ? console.log('bring it') : console.log('naw son') 
