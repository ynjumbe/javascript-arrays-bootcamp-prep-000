var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

chocolateBars.push("m&m");

function addElementToBeginningOfArray (array, element){
  return [element, ...array]
}