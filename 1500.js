function chekc_str(str,sub) {
    if (sub.length>str.length) {
        return false
    }
    for(let i=0;i<=sub.length;i++){
        if (str[i]===sub[i]) {
            return true
        }
        return false
    }
    return str
}
console.log(chekc_str("hello","he"))

function findmiden(arr) {
    arr=arr.sort((a,b)=>a-b)
    let len=arr.length
    let mide=Math.floor(len/2)

    if (len%2==0) {
        return arr[mide]+arr[mide+1]/2
    } else {
       return arr[mide]        
    }
}
console.log(findmiden([1,2,3,4,5]))

function findmode(arr) {
    let count={}
    let miximum=0
    let mode

    for(let first of arr) {
        count[first]=(count[first]||0)+1
        if (count [first] >miximum) 
       
        {
            miximum=count[first]
            mode=first     
        }
    }
    return mode
}
console.log(findmode([1,2,3,4,5]))

function findlength(arr) {
    let r={}
    for(let first of arr) {

        if (r[first]) {
            r[first]++
        } else {
            r[first]=1
        }
    }
    return r
}
console.log(findlength([1,1,2,3,2,3]))


function checkcapital(str) {
    str=str.trim().split(" ")
    let r=str.map((cur,index)=>{
        if (index==0) {
            return cur.toLowerCase()
        } else {
            return cur.charAt(0).toUpperCase()+cur.slice(1).toLowerCase()
        }
    })
    return r.join(" ")
}
console.log(checkcapital("hello god"))


function check_Word(word,char) {
    word=word.toLowerCase()
    char=char.toLowerCase()

    let f=word.split("").reduce((acc,cur)=>{
        if (cur==char) {
            acc++
        }
        return acc
    },0)
    return f
}
console.log("god",check_Word("Missieni","I"))


function vowel(str) {
    let vs=["a","e","i","o","u"]
    return str.split("").reduce((acc,cur)=>{
        return vs.includes(cur)?acc+1:acc
    },0)
}
console.log(vowel("hello"))


function factorial(num) {
    let fact=1
    for(let i=1;i<=num;i++){
        fact=fact*i
    }
    return fact
}
console.log(factorial(4))


function fibanaci(num) {
    if (num==0||num==1) {
        return num
    } else {
      return fibanaci(num-1)+fibanaci(num-2)        
    }
}
console.log(fibanaci(5))

function Value_atob2(a,b) {
    let arr=[]
    for(let i=a;i<=b;i++){
        arr.push(i)
    }
    return arr
}
console.log(Value_atob2(-1,2))

function Value_atob3(a,b,arr=[]) {
    if (a<=b) {
        arr.push(a)
        return Value_atob2(a+1,b,arr)
    }
    return arr
}
console.log(Value_atob3(-1,2))

function repeated_Str(str,num) {
    if (num==0||num==1) {
        return str
    } else {
      return str+repeated_Str(str,num-1)        
    }
}
console.log(repeated_Str("abc",4))

function count_Digites(num) {
    let sum=0
    while (num > 0) {
        let ta=num%10
        sum+=ta
        num=Math.floor(num/10)
    }
    return sum
}
console.log(count_Digites(1234))

function count_Sum(num) {
    let coun=0
    while (num > 0) {
        num=Math.floor(num/10)
        coun++
    }
    return coun
}
console.log(count_Sum(8564))


function truncate_Str(str,n) {
    return n < 0? str:str.slice(0,n).concat('...')
}
console.log(truncate_Str("ghvhgchgv bhvhgfhgvghvhgv"))

function findmax(arr) {
    let max=arr[0]
    for(let i=0;i<arr.length;i++){
        max=arr[i]
    }
    return max
    // return Math.max(...arr)
}
console.log(findmax([100,20,3000]))

function findavr(arr) {
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum/arr.length
}
console.log(findavr([10,20]))

let days=["monday","tuesday"]
for(let day of days) {
    day=day.charAt(0).toUpperCase()+day.slice(1)
    console.log(day)
}

function checkcapital2(str) {
    if (str.charCodeAt(0)>=65&&str.charCodeAt(0)<= 95) {
        return true
    }
    return false
}
console.log(checkcapital2("g"))

function longword(str) {
    if (str.length==0) {
        return false
    }
    str=str.split(" ")
    str=str.sort((a,b)=>b.length-a.length)
    return str.at(-1)
}
console.log("long",longword("hello javascript"))

function factorial2(num) {
    if (num < 0) {
        return false
    }

    if (num==0||num==1) {
        return 1
    } else {
        return num*factorial2(num-1)
    }
}
console.log(factorial2(4))

function powerOf(num) {
    let op=false
    for(let i=1;i<=num;i++){
        if (2**i==num) {
            op=true
        }
    }
    return op
}
console.log(powerOf(8))

function sumof_Squre(arr) {
    return arr.reduce((acc,cur)=>acc=acc+(cur*cur),0)
}
console.log(sumof_Squre([10,20,10]))

function sumof_Squre2(num,pow) {
    let res=1
    for(let i=1;i<=pow;i++){
        res*=num
    }
    return res  
}
console.log(sumof_Squre2(4,2))

function ispalindrome(str) {
    str=str.toLowerCase()
    let  r=str.split("").reverse().join("")
    return str==r?true:false
}
console.log(ispalindrome("lool"))

function anagaram(p,p1) {
    p=p.toLowerCase()
    p1=p1.toLowerCase()

    return p.split("").sort().join("")==p1.split("").sort().join("")
}
console.log(anagaram("Mary","Army"))

function rever_str(str,pair) {
    return str.split(pair).reverse().join(pair)
}
console.log(rever_str("hello",""))

function random() {
    return `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`
}
console.log(random())

function all_Capital(str) {
    if (str.length < 0) {
        return false
    }
    str=str.split(" ")
    str=str.map((cur)=>cur.replace(cur[0],cur[0].toUpperCase()))
    return str.join(" ")
}
console.log(all_Capital("hello godd"))

function check_target(arr,target) {
    let t=[]
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if (arr[i]+arr[j]==target) {
                t.push(`(${arr[i]},${arr[j]})`)   
            }
        }
    }
    return t
}
let arr=[1,2,3,4,5,6,7,8,9,10]
let target=11
console.log(check_target(arr,target))

let c=4
let str=''
for(let i=0;i<c;i++){
    for(let j=0;j<i;j++){
        str+="*"
    }
    str+="\n"
}
console.log(str)

function combinearr(arr1,arr2) {
    let r=arr1.some((ele)=>arr2.includes(ele))
    return r
}
console.log(combinearr([1,2],[1,2]))

let arr3=[1,2]
let df=2
let reult=arr3.filter((ele)=>ele!==df)
console.log(reult)

let arr6=["ban","Apple","orange"]
arr6.map((ele)=>console.log(ele.replace(/ban/g,"")))

let arrd=[1,2,3,4,5,6,7,8,6,97,1,3]
let replace=1
let ele=45
let fg=[...arrd.slice(0,replace),ele,...arrd.slice(replace+1)]
let gf=[...arrd.slice(0,replace),ele,...arrd.slice(replace)]
console.log(fg)
console.log(gf)

let arrsd=[1,2,3,4,5,6,7,8,6,97,1,3]
let deleteAt=1
let k=[...arrsd.slice(0,deleteAt),...arrsd.slice(deleteAt+1)]
console.log(k)

function Rt(arr) {
    return arr.filter((index,item)=>arr.indexOf(index)===item)
}
console.log(Rt([1,2,3,1,3]))


function Rtv(arr) {
    return arr.filter((index,item)=>arr.indexOf(index)!==item)
}
console.log(Rtv([1,2,3,1,3]))

function evenNumber(arr) {
    for(let i=0;i<arr.length;i++){
        if (arr[i]%2==0) {
            console.log(arr[i])
        }
    }
}
var arr2 = [13, 23, 12, 45, 22, 48, 66, 100];
evenNumber(arr2)

function Two_d(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            console.log(arr[i][j])
        }
    }
}
var arr23 = [[1, 2], [3, 4], [5, 6]];
Two_d(arr23)

function delete_Ele(arr,ele) {
    for(let i=0;i<arr.length;i++){
        if (arr[i]==ele) {
            arr.splice(i,1)
        }
    }
    return arr
}
var arr34 = [23, 56, 4, 78, 5, 63, 45, 210, 56];
let ard=delete_Ele(arr34,56)
console.log(ard)

function check_array(arr,ele) {
    for(let i=0;i<arr.length;i++){
        if (arr[i]==ele) {
            return true
        }
        return false
    }
}
var arr5 = [10, 20, 30, 40, 50];
console.log(check_array(arr5,10))

function removeDuplicate(arr) {
    let uni=[]
    for(let i=0;i<arr.length;i++){
        if (!uni.includes(arr[i])) {
            uni.push(arr[i])
        }
    }
    return uni
}
var arr46 = [10, 20, 30, 20, 40, 10, 50];
console.log(removeDuplicate(arr46))