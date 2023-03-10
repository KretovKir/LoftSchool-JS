var myPath ='/users/Kirill/desktop/index.html';

function pathSearch(path){
    var lastFive = path.slice(-5);
    if (lastFive == '.html'){
        return true;
    }else{
        return false;
    }
}

console.log(pathSearch(myPath));