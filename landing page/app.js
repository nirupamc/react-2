$(document).ready(function(){
    if(window.matchMedia("(max-width: 450px)").matches){
        // The viewport is less than 768 pixels wide
        gsap.from("nav", {
          opacity: 0, 
          y: 100, 
          duration: .8,
          // ease: "power2.out"
        });
      
        gsap.from(".icons", {
          opacity: 0, 
          y: 100, 
          duration: 1.9,
          // ease: "power3.out"
        });
      
        gsap.from("h1", {
          opacity: 0, 
          y: 100, 
          duration: 1.9,
          // ease: "power3.out"
        });
      
        gsap.from(".main", {
          opacity: 0, 
          y: 100, 
          duration: 2,
          // ease: "power3.out"
        });
    }else if(window.matchMedia("(max-width: 830px)").matches){
        gsap.from("nav", {
            opacity: 0, 
            y: 100, 
            duration: .8,
            // ease: "power2.out"
          });
        
          gsap.from(".icons", {
            opacity: 0, 
            y: 100, 
            duration: 1.9,
            // ease: "power3.out"
          });
        
          gsap.from("h1", {
            opacity: 0, 
            y: 100, 
            duration: 1.9,
            // ease: "power3.out"
          });
        
          gsap.from(".main", {
            opacity: 0, 
            y: 100, 
            duration: 2,
            // ease: "power3.out"
          });
        
    }else{
        // The viewport is at least 768 pixels wide
        
        
gsap.to('.videoPlayer',{
    scrollTrigger:{
        trigger:'.main',//the trigger will start with main
        start:'top top',//when it hits the top
        scrub:2, //control animation speed
        pin:'.main' //now the video player will take the space of main
    },
    width:'100%',
    
})

gsap.to('#one',{
    scrollTrigger:{
        trigger:'.main',//the trigger will start with main
        start:'top top',//when it hits the top
        scrub:2,
    },
    left:'-600px',
    opacity:0
    
})
gsap.to('#holder1',{
    scrollTrigger:{
        trigger:'.main',//the trigger will start with main
        start:'top top',//when it hits the top
        scrub:3,
    },
    left:'-300px',
    opacity:0
    
})
gsap.to('#six',{
    scrollTrigger:{
        trigger:'.main',//the trigger will start with main
        start:'top top',//when it hits the top
        scrub:2,
    },
    right:'-600px',
    opacity:0
    
})
gsap.to('#holder2',{
    scrollTrigger:{
        trigger:'.main',//the trigger will start with main
        start:'top top',//when it hits the top
        scrub:3,
    },
    right:'-300px',
    opacity:0
    
})

gsap.from("nav", {
    opacity: 0, 
    y: 100, 
    duration: .8,
    // ease: "power2.out"
  });

  gsap.from(".icons", {
    opacity: 0, 
    y: 100, 
    duration: 1.9,
    // ease: "power3.out"
  });

  gsap.from("h1", {
    opacity: 0, 
    y: 100, 
    duration: 1.9,
    // ease: "power3.out"
  });

  gsap.from(".main", {
    opacity: 0, 
    y: 100, 
    duration: 2,
    // ease: "power3.out"
  });






    }
});




