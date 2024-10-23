function Word() {
   let str = "How can mirrors be real if our eyes aren't real";
    console.log(str)
   let result = str.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
    console.log(result)
    return result
}

Word()