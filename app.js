const daily=document.getElementById('daily')
const weekly=document.getElementById('weekly')
const monthly=document.getElementById('monthly')
const w_p=document.getElementById("w-p")
const p_p=document.getElementById("p-p")
const st_p=document.getElementById("st-p")
const e_p=document.getElementById("e-p")
const so_p=document.getElementById("so-p")
const se_p=document.getElementById("se-p")
const w_h=document.getElementById("w-h")
const p_h=document.getElementById("p-h")
const st_h=document.getElementById("st-h")
const e_h=document.getElementById("e-h")
const so_h=document.getElementById("so-h")
const se_h=document.getElementById("se-h")
const li_active=document.querySelectorAll('li')
console.log(li_active[0])
daily.addEventListener('click',()=>{
    fetch("./data.json")
    .then(response=>response.json())
    .then(data=>{
          w_p.innerHTML= `${data[0].timeframes.daily.previous}hrs` ;    
          p_p.innerHTML= `${data[1].timeframes.daily.previous}hrs` ;    
          st_p.innerHTML= `${data[2].timeframes.daily.previous}hrs`;     
          e_p.innerHTML= `${data[3].timeframes.daily.previous}hrs` ;    
          so_p.innerHTML= `${data[4].timeframes.daily.previous}hrs`;     
          se_p.innerHTML= `${data[5].timeframes.daily.previous}hrs`;
          w_h.innerHTML=`${data[0].timeframes.daily.current}hr`;
          p_h.innerHTML=`${data[1].timeframes.daily.current}hr`;
          st_h.innerHTML=`${data[2].timeframes.daily.current}hr`;
          e_h.innerHTML=`${data[3].timeframes.daily.current}hr`;
          so_h.innerHTML=`${data[4].timeframes.daily.current}hr`;
          se_h.innerHTML=`${data[5].timeframes.daily.current}hr`;
          daily.classList.add("active")
          weekly.classList.remove("active")
          monthly.classList.remove("active")

    })
})
weekly.addEventListener('click',()=>{
          fetch("./data.json")
          .then(response=>response.json())
          .then(data=>{
            w_p.innerHTML= `${data[0].timeframes.weekly.previous}hrs` ;    
            p_p.innerHTML= `${data[1].timeframes.weekly.previous}hrs` ;    
            st_p.innerHTML= `${data[2].timeframes.weekly.previous}hrs`;     
            e_p.innerHTML= `${data[3].timeframes.weekly.previous}hrs` ;    
            so_p.innerHTML= `${data[4].timeframes.weekly.previous}hrs`;     
            se_p.innerHTML= `${data[5].timeframes.weekly.previous}hrs`;
            w_h.innerHTML=`${data[0].timeframes.weekly.current}hr`;
            p_h.innerHTML=`${data[1].timeframes.weekly.current}hr`;
            st_h.innerHTML=`${data[2].timeframes.weekly.current}hr`;
            e_h.innerHTML=`${data[3].timeframes.weekly.current}hr`;
            so_h.innerHTML=`${data[4].timeframes.weekly.current}hr`;
            se_h.innerHTML=`${data[5].timeframes.weekly.current}hr`;
            daily.classList.remove("active")
            weekly.classList.add("active")
            monthly.classList.remove("active")
          })
})
monthly.addEventListener('click',()=>{
    fetch('./data.json')
    .then(response=>response.json())
    .then(data=>{
          w_p.innerHTML= `${data[0].timeframes.monthly.previous}hrs` ;    
          p_p.innerHTML= `${data[1].timeframes.monthly.previous}hrs` ;    
          st_p.innerHTML= `${data[2].timeframes.monthly.previous}hrs`;     
          e_p.innerHTML= `${data[3].timeframes.monthly.previous}hrs` ;    
          so_p.innerHTML= `${data[4].timeframes.monthly.previous}hrs`;     
          se_p.innerHTML= `${data[5].timeframes.monthly.previous}hrs`;
          w_h.innerHTML=`${data[0].timeframes.monthly.current}hr`;
          p_h.innerHTML=`${data[1].timeframes.monthly.current}hr`;
          st_h.innerHTML=`${data[2].timeframes.monthly.current}hr`;
          e_h.innerHTML=`${data[3].timeframes.monthly.current}hr`;
          so_h.innerHTML=`${data[4].timeframes.monthly.current}hr`;
          se_h.innerHTML=`${data[5].timeframes.monthly.current}hr`;
          daily.classList.remove("active")
          weekly.classList.remove("active")
          monthly.classList.add("active")
    })
})
