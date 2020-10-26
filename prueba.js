const normalize = word => word.replace(/[/#¿?¡!:,.]*/g,"");

function topThreeWords(text="") {
    text = text.toLowerCase();
    text = text.split(' ');
    text = text.filter(word=>word!='');
   

    const count = {}
    
    for(let word of text){
        word = normalize(word);
        count[word] = count[word]?++count[word]:1;
    }
    console.log(count)
    let sortable = [];
    for (let word in count) {
        
        sortable.push([word, count[word]]);
    }

    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    console.log(sortable.slice(0,3).map(word => word[0]).filter(word=>word!='').filter(word=>word!="'"));

}

topThreeWords("  '  ");