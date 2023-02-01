const menuItems=[
    {
        id:1,
        item:"Anime 1",
        oneliner:"Naruto & Sasuke",
        img:"images/naruto.png",
        anime:"Naruto Shippuden",
        desc:"Naruto Uzumaki wants to be the best ninja in the land. He's done well so far, but with the looming danger posed by the mysterious Akatsuki organization, Naruto knows he must train harder than ever and leaves his village for intense exercises that will push him to his limits.",
    },
    {
        id:2,
        item:"Anime 2",
        oneliner:"Ichigo",
        img:"images/ichigo.jpg",
        anime:"Bleach",
        desc:"High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper powers from Rukia Kuchiki and sets out to save the world from 'Hollows'.",
    },
    {
        id:3,
        item:"Anime 3",
        oneliner:"Ken Kaneki",
        img:"images/ken.jpg",
        anime:"Tokyo Ghoul",
        desc:"A Tokyo college student is attacked by a ghoul, a superpowered human who feeds on human flesh. He survives, but has become part ghoul and becomes a fugitive on the run.",
    },
    {
        id:4,
        item:"Anime 4",
        oneliner:"Kirito",
        img:"images/kirito.jpg",
        anime:"Sword Art Online",
        desc:"In the year 2022, thousands of people get trapped in a new virtual MMORPG and the lone wolf player, Kirito, works to escape.",
    },
    {
        id:5,
        item:"Anime 5",
        oneliner:"Courier Akudama",
        img:"images/akudama.jpg",
        anime:"Akudama Drive",
        desc:"In Kansai, a group of six Akudama carry out missions given to them by a mysterious black cat, while evading the police. But a dangerous journey is about to unfold when a civilian girl becomes twisted into the Akudama’s way of life and witnesses their criminal drives.",
    },
    {
        id:6,
        item:"Anime 6",
        oneliner:"Natsu",
        img:"images/natsu.jpg",
        anime:"fairy Tail",
        desc:"Lucy, an aspiring Celestial Wizard, becomes a friend and ally to powerful wizards Natsu, Gray, and Erza, who are part of the (in)famous wizard guild, Fairy Tail.",
    },
    {
        id:7,
        item:"Anime 7",
        oneliner:"Taki & Mitsuha",
        img:"images/yourname.jpg",
        anime:"Your Name",
        desc:"Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    }
]

const item = document.getElementById('item');
const oneliner = document.getElementById('oneliner');
const img = document.getElementById('img');
const anime = document.getElementById('anime');
const desc = document.getElementById('desc');
const prev = document.getElementById('prev');
const random = document.getElementById('random');
const next = document.getElementById('next');

let currentMenu = 0;
window.addEventListener('DOMContentLoaded',()=>{
    allMenu(currentMenu);
})

const allMenu=()=>{
    let menu = menuItems[currentMenu]
    item.textContent = menu.item;
    oneliner.textContent = menu.oneliner;
    img.src = menu.img;
    anime.textContent = menu.anime;
    desc.textContent = menu.desc;
}

//random
random.addEventListener('click',()=>{
    currentMenu = Math.floor(Math.random()*menuItems.length)
    //console.log(currentMenu)
    allMenu(currentMenu);
})

//prev
prev.addEventListener('click',()=>{
    currentMenu--;
    if(currentMenu<0){
        currentMenu = menuItems.length-1;
    }
    allMenu(currentMenu);
})

//next
next.addEventListener('click',()=>{
    currentMenu++;
    if(currentMenu>menuItems.length-1){
        currentMenu = 0;
    }
    allMenu(currentMenu);
})
