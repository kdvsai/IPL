const Season_2020=[
    {name:"MI",p:"14",w:"9",l:"5",nrr:"1.107",points:"18"},
    {name:"DC",p:"14",w:"8",l:"6",nrr:"-0.19",points:"16"},
    {name:"SRH",p:"14",w:"7",l:"7",nrr:"0.68",points:"14"},
    {name:"RCB",p:"14",w:"7",l:"7",nrr:"-0.172",points:"14"},
    {name:"KKR",p:"14",w:"7",l:"7",nrr:"-0.214",points:"14"},
    {name:"KXIP",p:"14",w:"6",l:"8",nrr:"-0.162",points:"12"},
    {name:"CSK",p:"14",w:"6",l:"8",nrr:"-0.455",points:"12"},
    {name:"RR",p:"14",w:"6",l:"8",nrr:"-0.569",points:"12"}
]
const Season_2019=[
    {name:"MI",p:"14",w:"9",l:"5",nrr:"0.421",points:"18"},
    {name:"CSK",p:"14",w:"9",l:"5",nrr:"0.131",points:"18"},
    {name:"DC",p:"14",w:"9",l:"5",nrr:"0.044",points:"18"},
    {name:"RCB",p:"14",w:"6",l:"8",nrr:"0.577",points:"12"},
    {name:"SRH",p:"14",w:"6",l:"8",nrr:"0.028",points:"12"},
    {name:"KXIP",p:"14",w:"6",l:"8",nrr:"-0.252",points:"12"},
    {name:"RR",p:"14",w:"5",l:"8",nrr:"-0.455",points:"11"},
    {name:"RCB",p:"14",w:"5",l:"8",nrr:"-0.607",points:"11"}
]
const Season_2021=[
    {name:"DC",p:"14",w:"10",l:"4",nrr:"0.481",points:"20"},
    {name:"CSK",p:"14",w:"9",l:"5",nrr:"0.455",points:"18"},
    {name:"RCB",p:"14",w:"9",l:"5",nrr:"-0.14",points:"18"},
    {name:"KKR",p:"14",w:"7",l:"7",nrr:"0.587",points:"14"},
    {name:"MI",p:"14",w:"7",l:"7",nrr:"0.116",points:"14"},
    {name:"KXIP",p:"14",w:"6",l:"8",nrr:"-0.001",points:"12"},
    {name:"RR",p:"14",w:"6",l:"8",nrr:"-0.993",points:"10"},
    {name:"SRH",p:"14",w:"3",l:"11",nrr:"-0.545",points:"6"}
]

const Season_2018=[
    {name:"SRH",p:"14",w:"9",l:"5",nrr:"0.284",points:"18"},
    {name:"CSK",p:"14",w:"9",l:"5",nrr:"0.253",points:"18"},
    {name:"KKR",p:"14",w:"8",l:"6",nrr:"-0.07",points:"16"},
    {name:"RR",p:"14",w:"7",l:"7",nrr:"-0.25",points:"14"},
    {name:"MI",p:"14",w:"6",l:"8",nrr:"0.317",points:"12"},
    {name:"RCB",p:"14",w:"6",l:"8",nrr:"-0.129",points:"12"},
    {name:"KXIP",p:"14",w:"6",l:"8",nrr:"-0.502",points:"12"},
    {name:"DC",p:"14",w:"5",l:"9",nrr:"-0.222",points:"10"}
]

let select=document.querySelector("#year");
select.addEventListener("change",()=>{
    year=select.value;
    ChangeData(year);
})
const ChangeData=(year)=>{
    let arr;
    if(year=="Season 2018"){
        arr=Season_2018;
    }
    else if(year=="Season 2019"){
        arr=Season_2019;
    }
    else if(year=="Season 2020"){
        arr=Season_2020;
    }
    else{
        arr=Season_2021;
    }
    let table=document.querySelectorAll("#table");
    let count=0;
table.forEach(node=>{

    let pos=node.querySelector("#pos");
    pos.innerText=count+1;

    let name = node.querySelector("#teamname");
    name.innerText=arr[count].name;

    let im = node.querySelector("#im");
    im.src=`Logos/${arr[count].name}logo.jpg`;
    im.style.height="100px";

    let played = node.querySelector("#p");
    played.innerText=arr[count].p;

    let won = node.querySelector("#w");
    won.innerText=arr[count].w;

    let lost = node.querySelector("#l");
    lost.innerText=arr[count].l;

    let nrr = node.querySelector("#nrr");
    nrr.innerText=arr[count].nrr;

    let points = node.querySelector("#points");
    points.innerText=arr[count].points;
    count++;
})
}
