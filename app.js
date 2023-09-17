let data;

fetch('./data/data.json')
    .then((response) => response.json())
    .then((json) => {
        data = json
    });

function updateLevel(button) {
    /**
     * Get user input and update level of user
     */
    const buttonValue = button.value.split(" ").join("_").toLowerCase()

    if (data[buttonValue].choices.length === 0) {
        paragraph.textContent = `${data[buttonValue].emoji} ${data[buttonValue].title}`

        buttonA.remove()
        buttonB.remove()

    } else {
        paragraph.textContent = data[buttonValue].title;

        buttonB.value = data[buttonValue].choices[1];
        buttonA.value = data[buttonValue].choices[0];
    };
};

const paragraph = document.getElementById("title");

const buttonA = document.getElementById("button-a");
const buttonB = document.getElementById("button-b");

buttonA.addEventListener("click",
    function () {
        updateLevel(buttonA);
    }
);
buttonB.addEventListener("click",
    function () {
        updateLevel(buttonB);
    }
);