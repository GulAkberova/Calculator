const buttons=document.getElementsByClassName("btn")
const calculate=document.getElementById("calculate")
const result=document.getElementById("result")
const remove=document.getElementById("remove")
const delete_all=document.getElementById("delete")

let problem=""

Array.from (buttons).map((a)=>{
  a.addEventListener('click',()=>{
  
    if (problem.slice(-1) == "+") {
      if (!Number(a.innerText)){
        return;
      }
    }
    if (problem.slice(-1) == "-") {
      if (!Number(a.innerText)) {
        return;
      }
    }
    if (problem.slice(-1) == "/") {
      if (!Number(a.innerText)) {
        return;
      }
    }
    if (problem.slice(-1) == "*") {
      if (!Number(a.innerText)) {
        return;
      }
    }
    problem+=a.innerText
    if(problem.slice(0,1)=='+' || problem.slice(0,1)=='/' || problem.slice(0,1)=='*' ||problem.slice(0,1)=='%' ||problem.slice(0,1)=='.'){
      return
    }
    result.value=problem
  })

})

calculate.addEventListener("click",()=>{
  result.value=eval(problem)
  problem=eval(problem)

})

remove.addEventListener('click',()=>{
  problem=problem.toString().slice(0,-1)
  result.value=problem


})
console.log(delete_all)
// delete_all.addEventListener('click',()=>{
//   console.log('sdc')
//   result.value

// })