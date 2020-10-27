interface HashTable{
    [key:string]:number
}


const anagrams = (word1:string, word2:string): boolean => {
    if(word1.length != word2.length)return false;

    let w1Counter:HashTable = {}, w2Counter:HashTable = {};
    
    for(let i = 0; i<word1.length; i++){
        let char:string = word1.charAt(i);
        w1Counter[char] = (w1Counter[char] || 0) + 1;

        char = word2.charAt(i);
        w2Counter[char] = (w2Counter[char] || 0) + 1;

    }

    for(let key of Object.keys(w1Counter)){
        if(w1Counter[key] != w2Counter[key]) return false
    }
    return true
}

console.log(anagrams('',''));

