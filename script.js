const textElement = document.getElementById("typing-text");

const texts = [
    "I'm Simon Olivia.",
    "I'm a Freelancer.",
    "I'm a Photographer.",
    "I'm a Designer."
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {

    let currentText = texts[textIndex];

    if (isDeleting) {

        textElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

    } else {

        textElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {

        setTimeout(() => {
            isDeleting = true;
            typeWriter();
        }, 2000);

        return;
    }

    if (isDeleting && charIndex === 0) {

        isDeleting = false;

        textIndex++;

        if (textIndex === texts.length) {
            textIndex = 0;
        }
    }

    const speed = isDeleting ? 50 : 100;

    setTimeout(typeWriter, speed);
}

typeWriter();