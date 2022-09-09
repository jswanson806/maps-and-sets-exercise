//Quick Question #1
    //the code returns {1,2,3,4}

//Quick Question #2
    //the code returns 'ref'

//Quick Question #3
    //Map m looks like {[1,2,3] => true, [1,2,3] => false}

//hasDuplicate
    const hasDuplicate = arr => new Set(arr).size !== arr.length;

//vowelCount
    function isVowel(char){
        return "aeiou".includes(char);
    }

    function vowelCount(str){
        const vowelMap = new Map();
        const lowerCaseStr = str.toLowerCase();
        for(let char of lowerCaseStr){
            if(isVowel(char)){
                if(vowelMap.has(char)){
                    vowelMap.set(char, vowelMap.get(char) + 1);
                } else {
                    vowelMap.set(char, 1);
                }
            }
        }
        return vowelMap;
    }