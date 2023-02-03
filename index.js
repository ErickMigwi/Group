// Group Work: 
//Participants: Erick, Brenda, Patrick

//Question 1
let array = ["banana", "banana", "oranges", 6,6, 5, 6,7]
 let removeDuplicates=(arr)=>{
    for(let i=0; i<10; i++)
    {
        if(arr[i]===arr[i]){
            arr.splice(i, 1)
        }
    }
    return(arr)
} 

console.log(removeDuplicates(array))

//Question 2
function findArray( array1, element){
    for(let i = 0; i<array1.length; i++){
        // array<name>.includes <= method to find the element
if(array1.includes(element)){
    return true;  
}
 else{
     return false
}

  }
}
let array1=[1, 3,6,7,5]
console.log(findArray(array1 ,5))

//Question 3
let array3 = ["This are numbers",1,2,3,4, undefined,null, true, false, ""]
let removeUnwanted = (arr) =>{
    let newArray = [...arr]
    // Filtering all the unwanted elements in the array
        let filterdArray = newArray.filter((item)=> item !== null)
        filterdArray = filterdArray.filter((item)=> item !== true)
        filterdArray = filterdArray.filter((item)=> item !== false)
        filterdArray = filterdArray.filter((item)=> item !== undefined)
        filterdArray = filterdArray.filter((item)=> item !== "")
        return filterdArray
    //}
}
console.log(removeUnwanted(array3))

//Question 4 
let reverseString=(splitString)=>{
    // splits the string to char and .reverse rewrites the char in a reverse order
   splitString = splitString.split(" ").reverse()
   // joins the char to a string 
   splitString = splitString.join(" ")
   return splitString
}
console.log( reverseString("Hello World"))
