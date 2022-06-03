window.addEventListener("load", function (event) {
    generateclouds(document.body.scrollHeight / 150);
});

let background = document.getElementById("background");

function generateclouds(count) {
    if (count <= 0) {
        return;
    }

    for (let i = 0; i < count; i++) {
        let cloud = document.createElement("div");

        cloud.classList.add("cloud");

        switch (Math.floor(Math.random() * 4)) {
            case 0:
                cloud.classList.add("cloud-1");

                break;

            case 1:
                cloud.classList.add("cloud-2");

                break;

            case 2:
                cloud.classList.add("cloud-3");

                break;

            case 3:
                cloud.classList.add("cloud-4");

                break;
        }

        let width = Math.floor(Math.random() * 36) + 24;

        cloud.style.width = width + "rem";

        cloud.style.height = Math.floor(Math.random() * 9) + 1 + "rem";

        cloud.style.top = Math.floor(Math.random() * 100) + "%";

        cloud.style.left =
            -(Math.floor(Math.random() * 100) + width) * 1.5 + "rem";

        cloud.setAttribute("speed", Math.floor(Math.random() * 20) + 10);

        background.appendChild(cloud);
    }
}

let intervalID = setInterval(function () {
    let clouds = document.getElementsByClassName("cloud");

    for (let i = 0; i < clouds.length; i++) {
        let cloud = clouds[i];

        let computedStyle = window.getComputedStyle(cloud, null);

        cloud.style.left =
            parseFloat(computedStyle.getPropertyValue("left")) +
            cloud.getAttribute("speed") * 0.1 +
            "px";

        if (
            parseFloat(computedStyle.getPropertyValue("left")) -
                parseFloat(computedStyle.getPropertyValue("width")) >
            window.innerWidth
        ) {
            background.removeChild(cloud);

            generateclouds(1);
        }
    }
}, 10);
