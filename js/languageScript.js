var french = 'Fr',
    english = 'En',
    fr_txt = document.querySelectorAll('#fr'),
    en_txt = document.querySelectorAll('#en'),
    nb_fr = fr_txt.length,
    nb_en = en_txt.length;

function toggleLanguage(){
    var cache = sessionStorage.getItem("currentLangCache");

    if(cache == 'french')
        setLanguage(english,french);
     else
        setLanguage(french,english);

    console.log(cache);
}

function setLanguage(langueOn,langueOff){
    if(langueOn == 'Fr'){
        afficher(fr_txt, nb_fr);
        cacher(en_txt, nb_en);
        sessionStorage.setItem("currentLangCache","french");
    }
    else if(langueOn == 'En'){
        afficher(en_txt, nb_en);
        cacher(fr_txt, nb_fr);
        sessionStorage.setItem("currentLangCache","english");
    }
}

function afficher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'block';
    }
}
function cacher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'none';
    }
}
function init(){

    var cache = sessionStorage.getItem("currentLangCache");

    if(cache == 'french')
        setLanguage(french,english);
     else
        setLanguage(english,french); // default

    console.log(cache);
}
init();