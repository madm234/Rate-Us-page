let sink =document.querySelector('.r1');
let ratingnum ='';

document.querySelector('.r1').addEventListener("click",()=>{
    document.querySelector('.rating_text').innerHTML ="Poor!";
    
    if(ratingnum!='')
    document.querySelector(ratingnum).style.backgroundColor ="#39404a";

    document.querySelector('.r1').style.backgroundColor ="#fc7613";
    ratingnum ='.r1';
});

document.querySelector('.r2').addEventListener("click",()=>{
    document.querySelector('.rating_text').innerHTML ="Not Good!";
    
    if(ratingnum!='')
    document.querySelector(ratingnum).style.backgroundColor ="#39404a";

    document.querySelector('.r2').style.backgroundColor ="#fc7613";
    ratingnum ='.r2';
});

document.querySelector('.r3').addEventListener("click",()=>{
    document.querySelector('.rating_text').innerHTML ="Satisfied!";
    
    if(ratingnum!='')
    document.querySelector(ratingnum).style.backgroundColor ="#39404a";

    document.querySelector('.r3').style.backgroundColor ="#fc7613";
    ratingnum ='.r3';
});

document.querySelector('.r4').addEventListener("click",()=>{
    document.querySelector('.rating_text').innerHTML ="Awesome!";
    
    if(ratingnum!='')
    document.querySelector(ratingnum).style.backgroundColor ="#39404a";

    document.querySelector('.r4').style.backgroundColor ="#fc7613";
    ratingnum ='.r4';
});

document.querySelector('.r5').addEventListener("click",()=>{
    document.querySelector('.rating_text').innerHTML ="Excellent!";
    
    
    if(ratingnum!='')
    document.querySelector(ratingnum).style.backgroundColor ="#39404a";

    document.querySelector('.r5').style.backgroundColor ="#fc7613";
    ratingnum ='.r5';
});

document.querySelector('.submit_rate').addEventListener("click",()=>{
    if(ratingnum=='')
    document.querySelector('.rating_text').innerHTML ="Not rated";
    else
    setTimeout(()=>{document.querySelector('.rating_text').innerHTML ="Thank You!"},400);
})
