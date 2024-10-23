function descendingOrder(n){
    if (n > 0) {
        return n.toString().split('').sort((a,b) => b - a).join('')
/*        return parseInt(String(n).split('').sort().reverse().join(''))*/
    }
    //...
}

descendingOrder(58716)
console.log(descendingOrder(58716))