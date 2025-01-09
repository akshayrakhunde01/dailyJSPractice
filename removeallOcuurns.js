// *Array Methods:* Remove all occurrences of a specific element from an array.

function removeElement(array, elementToRemove) {
    return array.filter(item => item !== elementToRemove);
}

const numbers = [1, 2, 3, 4, 2, 5, 2];
const result = removeElement(numbers, 2);
console.log(result); 
