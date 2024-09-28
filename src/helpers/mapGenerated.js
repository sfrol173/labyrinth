// [
//       0 1 2 3   
//     0[0,1,0,1]
//     1[1,0,1,1]
//     2[0,1,1,0]
//     3[1,0,0,0]
// ]

export function mapGenerated(size) {
    let newArray = new Array(size) // array 15 []
    
    for(let i =0; i<newArray.length; i++){
        newArray[i] = new Array(size) // [ ....[]  ] 15 x 15

        for(let j = 0; j < newArray.length; j++) {
            newArray[i][j] = Math.floor(Math.random() * 2)
        }
    }

    return newArray 
}