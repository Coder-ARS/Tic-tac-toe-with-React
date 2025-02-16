let arr = [[1,1,1],[1,0,0],[1,0,0]]


function HorCheck(arr) {
    // arr.forEach(num => {
    //     let k = num.reduce((acc, ele) => acc + ele, 0);
    //     if (k===3){
    //         return "X"
    //     }else if(k===-3){
    //         return "0"
    //     }
    //      console.log(k);
    // });
    let i = 0
    for ( i = 0; i < 3; i++) {
        let k = arr[i].reduce((acc, ele) => acc + ele, 0);
        if (k===3){
            return ["X",i.toString()+"H"]
        }else if(k===-3){
            return ["0",i.toString()+"H"]
        }
         console.log(k);
    }
}

function VerCheck(arr) {
    let k = 0
    let i=0
    let j=0
    for ( i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
        k+=arr[j][i]
    }
    if (k===3){
        return ["X",i.toString()+"V"]
    }else if(k===-3){
        return ["0",i.toString()+"V"]
    }
    k=0
}
console.log("adfdf");
}

function CrossCheck(a) {
    let k = a[1][1]+a[0][0]+a[2][2]
    if (k===3){
        return ["X","0"]
    }else if(k===-3){
        return ["0","0"]
    }
    k = a[1][1]+a[0][2]+a[2][0]
    if (k===3){
        return ["X","1"]
    }else if(k===-3){
        return ["0","1"]
    }
    
}


export function FullCheck(arr) {
    let c = VerCheck(arr)
    if(c!=undefined)
        return c
    c = (CrossCheck(arr))
    if(c!=undefined)
        return c
    c = (HorCheck(arr))
    if(c!=undefined)
        return c
}


// let f = FullCheck(arr)
// console.log(f === undefined)
// console.log(f )
