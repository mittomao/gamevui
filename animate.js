
const t2 = new TimelineMax();
t2.to("h1.title",1,{
    y : 0,
    ease : Power1.easeInOut
})
.to(".wrapper",0.5,{
    scale : 1,
    ease : Power1.easeInOut
})
.staggerTo(".play-money",0.5, {
    x : "0",
    yoyo : true ,  
    ease : Power1.easeInOut
    },0.5)
    .staggerTo(".number-ques",0.5, {
        y : "0",
        opacity:1,
        yoyo : true ,
        ease : Power1.easeInOut
    },0.2)
    
    .to(".img-avatar img",0.4,{
        x : 0,
        ease : Power1.easeInOut
    })