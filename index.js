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
function increaseRankBy(n){
  var rankedLists = document.querySelectorAll('.ranked-list')
    for (let i = 0; i < rankedLists.length; i++){
      var ul = rankedLists[i];
      var children = ul.children;
        for (let j = 0; j < children.length; j++){
          var li = children[j];
          var num = li.innerHTML;
          var numInt = parseInt(num);
          return n + numInt;
        }

    }


}
