document.addEventListener("DOMContentLoaded", function () {
    // Get all toggle buttons and forms
    const toggleButtons = document.querySelectorAll(".toggle-form");
    const forms = document.querySelectorAll(".contact-form");

    // Function to show a specific form
    function showForm(form) {
        form.style.display = "block";
    }

    // Function to hide all forms
    function hideAllForms() {
        forms.forEach((form) => {
            form.style.display = "none";
        });
    }

    // Hide all forms when the page loads
    hideAllForms();

    // Add click event listeners to all toggle buttons
    toggleButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const formId = event.target.getAttribute("data-form");
            const form = document.getElementById(formId);

            hideAllForms();
            showForm(form);
        });
    });

    // Add a click event listener to the document to hide forms when clicking outside
    document.addEventListener("click", (event) => {
        if (!event.target.classList.contains("contact-btn")) {
            hideAllForms();
        }
    });

    // Prevent the click event on the forms from closing them
    forms.forEach((form) => {
        form.addEventListener("click", (event) => {
            event.stopPropagation();
        });
    });
});



//swiper/slider
let slide_number = 1;

function setcaption(slide_number){
    if (slide_number == 1){
        return "I designed UI and UX for mobile for <a href='https://www.superleeft.com' style='color:white; text-decoration:underline;' target='_blank'>superleeft,<a> a ride hailing startup in East Africa. I also worked with the team for design thinking and market research during the product development"
    }

    else if (slide_number == 2){
        return "On this project, I worked with a team as a product designer, We developed a <a style='color:white; text-decoration:underline;' href='https://www.figma.com/proto/eepQra4vRZievRkic7iV4G/MEST-EIT's-attendance-management?type=design&node-id=310-377&t=vy1zVjEmblGWTuNr-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3&mode=design' target='_blank'>custom software</a> for MESTafrica, to streamline their communication pipelines and attendance tracking";
    }
    
    else if (slide_number == 3){
        return "I have done few projects on 3d modeling and animation on blender (entry level skills). I model and animate 3d game assets used for game development, for indie game studios.";
    }
    
    else if (slide_number == 4){
        return "I am currently attending an intensive training at MEST, as the training proceeds, I constantly improve my skills and increase my efficiency in the software product development domain";
    }
}

document.getElementById("the-caption").innerText = "Browse Some Of My Work";
    var element = document.getElementById("lower-caption");
        element.style.position = "absolute";
        element.style.bottom = "20px";
        element.style.padding = "20px";
        element.style.textAlign = "center";
        element.style.flex = "1";



// prev
document.getElementById("prev").addEventListener("click", function(){
    slide_number > 1? slide_number = slide_number-1:slide_number = slide_number;
    document.getElementById("slider-image").src = `assets/images/picha${slide_number}.png`;
    document.getElementById("the-caption").innerHTML = setcaption(slide_number);
    var element = document.getElementById("lower-caption");
        element.style.position = "absolute";
        element.style.bottom = "10px";
        element.style.padding = "20px";
        element.style.textAlign = "center";
        element.style.flex = "1";
})

// next
document.getElementById("next").addEventListener("click", function(){
    slide_number < 4? slide_number = slide_number+1:slide_number = slide_number;
    document.getElementById("slider-image").src = `assets/images/picha${slide_number}.png`;
    document.getElementById("the-caption").innerHTML = setcaption(slide_number);
    var element = document.getElementById("lower-caption");
        element.style.position = "absolute";
        element.style.bottom = "10px";
        element.style.padding = "20px";
        element.style.textAlign = "center";
        element.style.flex = "1";
})

// Read more and show less
document.addEventListener("DOMContentLoaded", function () {
    const readMoreLink = document.getElementById("read-more-text");
    const moreText = document.getElementById("read-more-paragraph");
    const dots = document.querySelector(".dots");
    const dp = document.getElementById("dp");
    const introductionText = document.getElementById("introduction-text");
    const readMoreDiv = document.getElementById("read-more-div");

    readMoreLink.addEventListener("click", function (e) {
        e.preventDefault();

        // Hide the introduction text
        introductionText.style.display = "none";
        introductionText.style.marginTop = "0px";

        // Display the "read-more-div" immediately
        readMoreDiv.style.display = "block";
        readMoreLink.style.marginTop = "-100px";

        // Check if the text is hidden or not
        const textIsHidden = moreText.style.display === "none";

        // Hide both the dots and extra text
        dots.style.display = textIsHidden ? "none" : "inline";
        moreText.style.display = textIsHidden ? "inline" : "none";

        // Adjust the image margin and text margin based on whether the text is hidden or not
        dp.style.marginTop = textIsHidden ? "280px" : "50px";

        // Update the "Read More" link text
        readMoreLink.innerHTML = textIsHidden ? "<a id='show-less' href='index.html'>Show less</a>" : "Read more";

        // Add a click event listener to "Show less" link
        const showLessLink = document.getElementById("show-less");
        showLessLink.addEventListener("click", function () {
            location.reload();
        });
    });
});
