function vowelcount(oneword){
    var count=0;
    var vowels='aeiou';
    for(let i=0;i<oneword.length;i++){
        if(vowels.indexOf(oneword[i]) > -1){
            count++;
        }
    }
    return +count
}

var totalvowels=vowelcount('saasaeiofsdfdsfsfoos')
console.log(`Total Vowels:`,totalvowels)