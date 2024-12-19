import * as fs from 'fs'

const file=fs.readFileSync('input.txt').toString()

const arr1=file.split('\n')
arr1.pop()

let arr2=[]

for(let i=0; i<arr1.length; ++i)
    arr2.push(arr1[i].split("   ")) 

let list1=[]
let list2=[]

for(let i=0; i<arr2.length; ++i) {
    list1.push(arr2[i][0])
    list2.push(arr2[i][1])
}

let m=new Map()

for(let i=0; i<list2.length; ++i) {
    if(!m.get(list2[i]))
        m.set(list2[i], 1)
    else 
        m.set(list2[i], m.get(list2[i])+1)
}

let sum=0

for(let i=0; i<list1.length; ++i) {
    let num=m.get(list1[i])
    if(num)
        sum+=list1[i]*num
}

console.log(sum)
