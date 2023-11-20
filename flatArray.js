let a=[1,3,4,5,6,6,7,7,90,10,50,80,90,100,101,70,55,1,1,1,[3,4,5,6,7,3,2,[2,4,5,6,7,7]]];

// flat  -> 1d 
// remove duplicates
//sort increasing

function flatArray(arr, res){
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(Array.isArray(element)){
            flatArray(element,res)
        }else{
            res.push(element)
        } 
    }
}


function removeArrayDuplicates(arr){
    let hash = {}
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(hash[element]){
            hash[element]++
        }else{
            hash[element] = 1
        }
    }
   return Object.keys(hash);
}

function task(arr){
    let res = [];
    flatArray(arr,res);
    console.log(res)
    let uniqueElementArr = removeArrayDuplicates(res);
    uniqueElementArr.sort((a,b)=>a-b)
    console.log(uniqueElementArr);
}

task(a)
