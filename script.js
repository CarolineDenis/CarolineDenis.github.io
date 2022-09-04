// MOUSE FOLLOW PRESENTATION COLOR
var filler = document.getElementById("filler");

const fill = e => {
    filler.style.width = e.offsetX + "px";
};

document.addEventListener("mousemove", fill);

// CAROLINE FOLLOW MOUSE
let circle = document.querySelector('#mouse');
const onMouseMove = (e) => {
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

// content time line work to change 
var p1 = document.querySelector("#lineUp");
var p2 = document.querySelector("#p2");
var p3 = document.querySelector("#p3");
var p4 = document.querySelector("#p4");
var p5 = document.querySelector("#p5");
var title1 = document.querySelector("#workTitle1");
var dates = document.querySelector("#workDates");


function change1() {
    p1.innerText = "Start up in the clean beauty active on the American market.";
    p2.innerText = "Designed the company's legal and financial structure.";
    p3.innerText = "Created the branding, designs, website and content. Product development, formula creation, quality control.";
    p4.innerText = "Managed a team of 8 people active in marketing, sales and manufacturing.";
    p5.innerText = "Communicated with the suppliers and oversaw the orders.";
    title1.innerHTML = "CEO & Founder <span id='color'> @Tbg.</span>";
    dates.innerText = "2020 - PRESENT";
}

function change2() {
    p1.innerText = "NGO creating and distributing innovative kit face masks during the pandemic.";
    p2.innerText = "Developed the product and the production line. ";
    p3.innerText = "Formed the financial plan, oversaw the company’s bank accounts. Handled relationship with investors and donors.";
    p4.innerText = "Ensured the presentation in front of clients. Liaised with the suppliers and controlled the orders. ";
    p5.innerText = "Supervised a team of 20 people.";
    title1.innerHTML = "President & Founder <span id='color'>@ Maskit</span>";
    dates.innerText = "2020 - 2021";
}

function change3() {
    p1.innerText = "After school start up offering families supervised DIY classes.";
    p2.innerText = "Conceptualized the curriculums.";
    p3.innerText = "Coordinated a team of teachers, and lead large group of students.";
    p4.innerText = "";
    p5.innerText = "";
    title1.innerHTML = "Founder & Manger <span id='color'>@ DIY</span>";
    dates.innerText = "2015 - 2018";
}

function change4() {
    p1.innerText = "Head of class teacher in various international school.";
    p2.innerText = "Taught a group of 23+ students in diverse cultures, languages and countries.";
    p3.innerText = "Installed positive classroom management strategies that promoted time management, responsibility and teamwork.";
    p4.innerText = "Provided individual and group support to students using methods such as direct instruction and learning centers to motivate and instill an enthusiasm for learning.";
    p5.innerText = "Supervised the program and teacher assistants.";
    title1.innerText = "Head of Class Teacher";
    dates.innerText = "2014 - 2020";
}

// technologie slide in timer 

$(window).on('load scroll', function () {
    var scrollTop = $(window).scrollTop(),
        windowHeight = $(window).height(),
        threshold = 200;

    $('.slide-in-right').each(function () {
        console.log('test')
        var offTop = $(this).offset().top;
        if ((scrollTop + windowHeight) > offTop) { 
            $(this).addClass('anim');
        }
    });
    $('.slide-in-rightb').each(function () {
        console.log('test')
        var offTop = $(this).offset().top;
        if ((scrollTop + windowHeight) > offTop) {
            $(this).addClass('anim');
        }
    });
    $('.slide-in-left').each(function () {
        console.log('test')
        var offTop = $(this).offset().top;
        if ((scrollTop + windowHeight) > offTop) {
            $(this).addClass('anim');
        }
    });
    $('.slide-in-leftb').each(function () {
        console.log('test')
        var offTop = $(this).offset().top;
        if ((scrollTop + windowHeight) > offTop) { 
            $(this).addClass('anim');
        }
    });
});
