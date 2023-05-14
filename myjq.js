$(document).ready(function () {
    
    $(".first-card").hide(),$(".second-card").hide(),$(".third-card").hide(),$(".fourth-card").hide()
    $("#htmlImg").mouseover(function(){
        $(".first-card").fadeIn(600).show(600)
    })
    $("#htmlImg").mouseleave(function(){
        $(".first-card").fadeOut(600).hide(600)
    })

    
    $("#cssImg").mouseover(function(){
        $(".second-card").fadeIn(600)
    })
    $("#cssImg").mouseleave(function(){
        $(".second-card").fadeOut(600)
    })

    
    $("#jsImg").mouseover(function(){
        $(".third-card").fadeIn(600)
    })
    $("#jsImg").mouseleave(function(){
        $(".third-card").fadeOut(600)
    })
    $("#bootImg").mouseover(function(){
        $(".fourth-card").fadeIn(600)
    })
    $("#bootImg").mouseleave(function(){
        $(".fourth-card").fadeOut(600)
    })

    let home = $("#myHome")
    let about = $("#myAbout")
    let project = $("#myProjects")
    let contact = $("#myContact")


    if(about.click(function(){
        about.addClass("active")
        console.log("about clicked")
        home.removeClass("active")
        project.removeClass("active")
        contact.removeClass("active")
    }))if(home.click(function(){
        home.addClass("active")
        console.log("home clicked")
        about.removeClass("active")
        project.removeClass("active")
        contact.removeClass("active")
    }))if(project.click(function(){
        project.addClass("active")
        console.log("project clicked")
        about.removeClass("active")
        home.removeClass("active")
        contact.removeClass("active")
    }))if(contact.click(function(){
        contact.addClass("active")
        console.log("contact clicked")
        about.removeClass("active")
        home.removeClass("active")
        project.removeClass("active")
    }));
    
    
    let show = false;
    setInterval(() => {
        let myDev =show?"Saniyal Suresh":"Web Developer";
        show=!show;
        $(".myText").text(myDev).fadeToggle(1000)
    }, 1500);
    

});