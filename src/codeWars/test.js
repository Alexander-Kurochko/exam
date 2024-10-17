function shortcut(str) {
    return str.replace(/[aeiou]/g, '');
}

// Примеры использования:
console.log(shortcut("hello"));     // "hll"
console.log(shortcut("codewars"));  // "cdwrs"
console.log(shortcut("goodbye"));   // "gdby"
console.log(shortcut("HELLO"));     // "HELLO"