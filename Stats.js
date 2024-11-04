let Stats_2021=[
{name:"ruturaj",value:635},
{name:"head",value:64},
{name:"kl",value:30},
{name:"faf",value:6},
{name:"ruturaj",value:1},
{name:"harshal",value:32},
{name:"narine",value:5},
{name:"narine",value:8}]
    
let Stats_2020=[
        {name:"kl",value:670},
        {name:"shikar",value:67},
        {name:"kishan",value:30},
        {name:"kl",value:5},
        {name:"shikar",value:2},
        {name:"rabada",value:30},
        {name:"rashid",value:5.37},
        {name:"bumrah",value:14.96}]
let Stats_2019=[
    {name:"warner",value:692},
    {name:"shikar",value:64},
    {name:"rusell",value:52},
    {name:"warner",value:8},
    {name:"warner",value:1},
    {name:"narine",value:26},
    {name:"ankul",value:5.50},
    {name:"ankul",value:11.0}]
                
let Stats_2018=[
    {name:"kane",value:735},
    {name:"rp",value:68},
    {name:"rp",value:37},
    {name:"kane",value:8},
    {name:"watson",value:2},
    {name:"tye",value:24},
    {name:"rashid",value:6.73},
    {name:"bumrah",value:11.0}]

    console.log(Stats_2018[4].name);
let statsyear=document.querySelector("#statsyear")
statsyear.addEventListener("change",()=>{
    let year=statsyear.value;
    ChangeStats(year);
})
const ChangeStats=(year)=>{
    let arr;
    if(year=="Season 2018"){
        arr=Stats_2018;
    }
    else if(year=="Season 2019"){
        arr=Stats_2019;
    }
    else if(year=="Season 2020"){
        arr=Stats_2020;
    }
    else{
        arr=Stats_2021;
    }
    let tab=document.querySelectorAll(".o");
    let c=0;
    tab.forEach((node)=>{
        let ig=node.querySelector("#ig");
        ig.src=`Stats/${arr[c].name}.jpg`;
        let change=node.querySelector("#change");
        change.innerText=`${arr[c].value}`;
        c++;
    })
    }