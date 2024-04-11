const elements = document.querySelectorAll("#first");
elements.forEach (element => {
    const image = element.querySelector("img");
    image.addEventListener("click",() => {
        element.innerHTML = `<h3> What is Frontend Mentor, and how will it help me?</h3>
        <img src = "icon-minus.svg">
        <h6>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML , CSS , JavaScript. It's Ssuitable for all levels and ideal for portfolio building.</h6>`
        image.style.position="absolute";
        image.style.left="75px";
        image.style.right="10px"
        let id = image.getAttribute("id");
        console.log(id);
    });
});

const seconds = document.querySelectorAll("#second");
seconds.forEach (second => {
    const image = second.querySelector("img");
    image.addEventListener("click",() => {
        second.innerHTML = `<h3> Is Frontend Mentor free? </h3>
        <img src = "icon-minus.svg">
        <h6>As of my last update in January 2022, Frontend Mentor offers both free and paid options for its platform.You can check their website or contact them directly to see if there have been any changes to their pricing or offerings since then.</h6>`
        let id = image.getAttribute("id");
        console.log(id);
    });
});

const thirds = document.querySelectorAll("#third");
thirds.forEach (third => {
    const image = third.querySelector("img");
    image.addEventListener("click",() => {
        third.innerHTML = `<h3>Can I use Frontend Mentor projects in my protfolio?</h3>
        <img src = "icon-minus.svg">
        <h6>Yes, you can definitely use Frontend Mentor projects in your portfolio! Frontend Mentor provides a variety of real-world design challenges that are great for showcasing your skills to potential employers or clients.</h6>`
        let id = image.getAttribute("id");
        console.log(id);
    });
});

const fourths = document.querySelectorAll("#fourth");
fourths.forEach (fourth => {
    const image = fourth.querySelector("img");
    image.addEventListener("click",() => {
        fourth.innerHTML = `<h3>How can I get help if I'm stuck on a challenge?</h3>
        <img src = "icon-minus.svg">
        <h6>f you're stuck on a challenge on Frontend Mentor, there are several ways you can seek help:If you're still struggling after exploring these options, don't hesitate to reach out to the Frontend Mentor team directly for assistance or clarification. They're usually responsive and willing to help their community members succeed.</h6>`
        let id = image.getAttribute("id");
        console.log(id);
    });
});








