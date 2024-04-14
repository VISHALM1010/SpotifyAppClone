

    console.log("Welcome to spotify ");

    let audioElement= new Audio("MUSIC/MUSIC1.m4a");
    let songindex=0;

    let masterplay = document.getElementById("masterplay");

    let progressbar=document.getElementById("myprogressbar");

    let mastersongname= document.getElementById("mastersongname");

    let gif= document . getElementById("gif");

    let songItem = Array.from(document.getElementsByClassName("songItem"));

     

    //play song 

    masterplay.addEventListener("click",()=>{

        if(audioElement.paused || audioElement.currentTime<=0){

            audioElement.play();

            masterplay.classList.remove("fa-circle-play");
            masterplay.classList.add("fa-circle-pause");

            gif.style.ocacity='1';


        }

        else {

            audioElement.pause();

            masterplay.classList.remove("fa-circle-pause");
            masterplay.classList.add("fa-circle-play");

            gif.style.ocacity='0';


        }
    })


    audioElement.addEventListener("timeupdate",()=>{

        

        progress=parseInt((audioElement.currentTime/audioElement.duration)*100);

        progressbar.value=progress;

    })


    progressbar.addEventListener("change",()=>{

        audioElement.currentTime=(progressbar.value*audioElement.duration)/100;
    })

    let songs=[

        { Duration:"03:06",songname:"Yaar Bathere",filepath:"MUSIC/MUSIC1.m4a",coverpath: "IMAGES/imag1.jpg" },
        { Duration:"03:34",songname:"Badnam - Mankirt Aulakh",filepath:"MUSIC/MUSIC1.m4a",coverpath: "IMAGES/imag2.jpg" },
        { Duration:"03:48",songname:"Bhallwaan - Gym De Shokeen",filepath:"MUSIC/MUSIC2.m4a",coverpath: "IMAGES/imag3.jpg" },
        { Duration:"04:02",songname:"Blue Eyes  Yo Yo Honey Singh",filepath:"MUSIC/MUSIC3.m4a",coverpath: "IMAGES/imag4.jpg" },
        { Duration:"04:13",songname:"Gaal Ni Kadni",filepath:"MUSIC/MUSIC4.m4a",coverpath: "IMAGES/imag6.jpg" },
        { Duration:"04:46",songname:"GAME ",filepath:"MUSIC/5.m4a",coverpath: "IMAGES/imag5.jpg" },
        { Duration:"05:21",songname:"Main Parwaana ",filepath:"MUSIC/MUSIC6.m4a",coverpath: "IMAGES/imag7.jpg" },
        { Duration:"04:08",songname:"Nachange Saari Raat",filepath:"MUSIC/MUSIC7.m4a",coverpath: "IMAGES/imag8.jpg" },
        { Duration:"02:42",songname:"O Yaare Dil Lagana",filepath:"MUSIC/MUSIC8.m4a",coverpath: "IMAGES/imag9.jpg" },
        { Duration:"03:07",songname:"One Bottle Down  Yo Yo Honey Singh",filepath:"MUSIC/MUSIC9.m4a",coverpath: "IMAGES/imag10.jpg" },
    ]



    songItem.forEach((element,i)=>{

      

        element.getElementsByTagName("img")[0].src=songs[i].coverpath;

        element.getElementsByClassName("songname")[0].innerText=songs[i].songname;

    })



    const makeallpairplay = ()=>{

    Array.from(document.getElementsByClassName("songplayitem")).forEach((element)=>{

        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");

    })



 

    }


    Array.from(document.getElementsByClassName("songplayitem")).forEach((element)=>{

        element.addEventListener("click",(e)=>{

            songindex=parseInt(e.target.id)



         

            makeallpairplay()


            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");

           // audioElement.src="MUSIC/MUSIC${index}.m4a"
            audioElement.src=`MUSIC/MUSIC${songindex}.m4a`

        mastersongname.innerText=songs[songindex].songname;


            audioElement.currentTime=0;

            audioElement.play();
            masterplay.classList.remove("fa-circle-play");

            masterplay.classList.add("fa-circle-pause");


        })



    })


    document.getElementById("next").addEventListener("click",()=>{

        if(songindex>9){

            songindex =0;


        }

        else{

            songindex += 1;

        }

        audioElement.src=`MUSIC/MUSIC${songindex}.m4a`


        mastersongname.innerText=songs[songindex].songname;


            audioElement.currentTime=0;

            audioElement.play();
            masterplay.classList.remove("fa-circle-play");

            masterplay.classList.add("fa-circle-pause");
    })



    document.getElementById("prev").addEventListener("click",()=>{

        if(songindex<=0){

            songindex =0;


        }

        else{

            songindex -= 1;

        }

        audioElement.src=`MUSIC/MUSIC${songindex}.m4a`

        mastersongname.innerText=songs[songindex].songname;

            audioElement.currentTime=0;

            audioElement.play();
            masterplay.classList.remove("fa-circle-play");

            masterplay.classList.add("fa-circle-pause");
    })



    let songplaylistitems = document.getElementsByClassName("songplaylitem");

    for (let i = 0; i < songplaylistitems.length; i++) {
        songplaylistitems[i].addEventListener("click", function(e) {
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");
        });
    }




 

let volumeIcon = document.getElementById("volumeIcon");
let volumeSlider = document.getElementById("volumeSlider");

volumeIcon.addEventListener("click", () => {
    toggleMute();
});

volumeSlider.addEventListener("input", () => {
    setVolume(volumeSlider.value / 100);
});

function toggleMute() {
    if (audioElement.volume === 0) {
        audioElement.volume = 1;
        volumeIcon.classList.remove("fa-volume-off");
        volumeIcon.classList.add("fa-volume-up");
    } else {
        audioElement.volume = 0;
        volumeIcon.classList.remove("fa-volume-up");
        volumeIcon.classList.add("fa-volume-off");
    }
}

function setVolume(volume) {
    audioElement.volume = volume;
    if (volume === 0) {
        volumeIcon.classList.remove("fa-volume-up");
        volumeIcon.classList.add("fa-volume-off");
    } else {
        volumeIcon.classList.remove("fa-volume-off");
        volumeIcon.classList.add("fa-volume-up");
    }
}

Array.from(document.getElementsByClassName("songplayitem")).forEach((element)=>{

    element.addEventListener("click",(e)=>{

        songindex=parseInt(e.target.id)

        if(e.target.paused && currentTime<=0){

            
            e.target.classList.remove("fa-circle-pause");
            e.target.classList.add("fa-circle-play");
        }

    })

})




 