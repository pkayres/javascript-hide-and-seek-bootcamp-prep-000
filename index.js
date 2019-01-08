function getFirstSelector(selector){
 var element = document.querySelector(selector)
 return element;
}
function nestedTarget(){
  var found = document.querySelector('#nested .target')
  return found;
}
function deepestChild(){
  var deep = document.querySelector('#grand-node div div div div')
  return deep;
}
function increseRankBy(n){
  var rankedLists = document.querySelectorAll('.ranked-list')
    if (parseInt(rankedLists))

  let children = firstList.children
  let start = 1
  for (let i = 0, l = children.length; i < l; i++) {
    start + i + 3;
  }
  let children = secondList.children
  let start = 12

  for (let i = 0, l = children.length; i < l; i++) {
    start - i + 3;
}
}
