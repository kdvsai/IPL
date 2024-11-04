const iplTeams = [
    {
        code:"CSK",
        name: "Chennai Super Kings",
        captain: "MS Dhoni",
        homeGround: "M.A. Chidambaram Stadium, Chennai",
        championshipYears: [2010, 2011, 2018, 2021, 2023]
    },
    {
        code:"DC",
        name: "Delhi Capitals",
        captain: "Rishabh Pant",
        homeGround: "Arun Jaitley Stadium, Delhi",
        championshipYears: []
    },
    {code:"KKR",
        name: "Kolkata Knight Riders",
        captain: "Shreyas Iyer",
        homeGround: "Eden Gardens, Kolkata",
        championshipYears: [2012, 2014, 2024]
    },
    {code:"MI",
        name: "Mumbai Indians",
        captain: "Rohit Sharma",
        homeGround: "Wankhede Stadium, Mumbai",
        championshipYears: [2013, 2015, 2017, 2019, 2020]
    },
    {code:"KXIP",
        name: "Punjab Kings",
        captain: "Shikhar Dhawan",
        homeGround: "Punjab Cricket Association IS Bindra Stadium, Mohali",
        championshipYears: []
    },
    {code:"RR",
        name: "Rajasthan Royals",
        captain: "Sanju Samson",
        homeGround: "Sawai Mansingh Stadium, Jaipur",
        championshipYears: [2008]
    },
    {code:"RCB",
        name: "Royal Challengers Bangalore",
        captain: "Faf du Plessis",
        homeGround: "M. Chinnaswamy Stadium, Bengaluru",
        championshipYears: []
    },
    {code:"SRH",
        name: "Sunrisers Hyderabad",
        captain: "Aiden Markram",
        homeGround: "Rajiv Gandhi International Cricket Stadium, Hyderabad",
        championshipYears: [2016]
    }
];

let TeamsClass=document.querySelector(".Teams");
let StatsClass=document.querySelector(".Stats");
let PointsTableClass=document.querySelector(".PointsTable");

let Teams=document.querySelector("#Teams");
let Stats=document.querySelector("#Stats");
let PointsTable=document.querySelector("#PointsTable");

Teams.addEventListener("click",()=>{
    TeamsClass.style.display="block";
    StatsClass.style.display="none";
    PointsTableClass.style.display="none";
})
Stats.addEventListener("click",()=>{
    StatsClass.style.display="block";
    TeamsClass.style.display="none";
    PointsTableClass.style.display="none";
})
PointsTable.addEventListener("click",()=>{
    PointsTableClass.style.display="block";
    TeamsClass.style.display="none";
    StatsClass.style.display="none";
})

let buttons = document.querySelector(".buttons");
let team = buttons.querySelectorAll("button");
team.forEach(e=>{
    e.addEventListener("click",()=>{
        let id = e.getAttribute("id");
        console.log(e);
        let changed=iplTeams.find(t=>t.code===id);
        changeData(changed);
        Players(changed);
    })
})
const changeData=(changed)=>{
    let name=document.querySelector("#name");
    name.innerText=`Team Name: ${changed.name}`;

    let captain=document.querySelector("#captain");
    captain.innerText=`Captain: ${changed.captain}`;

    let home=document.querySelector("#home");
    home.innerText=`Home Ground: ${changed.homeGround}`;

    let champ=document.querySelector("#champ");
    let champYears=changed.championshipYears;
    let years="";
    if(champYears.length>0){
        years=champYears.join(',');
    }
    else{
        years="None As of now";
    }
    champ.innerText=`Championship Years: ${years}`;
    let team_mem=document.querySelector("#team");
    let team_logo=document.querySelector("#logo");

    team_mem.src=`Logos/${changed.code}team.jpg`;
    team_logo.src=`Logos/${changed.code}logo.jpg`;
    
}
const Players=(changed)=>{
    let f = document.querySelectorAll("#player");
    let count=0;
    f.forEach(node=>{
        node.src=`${changed.code}/player${count}.jpg`;
        count++;
    })
}
