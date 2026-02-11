(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.si-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "He?? Qué???";
                document.querySelector('.si-button')?.textContent = "eh?";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.si-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Estás piko segura?",
    "En serioite decis??",
    "Amanose hina",
    "*c muere*",
    "Hola estás hablando con el fantasma de Alex, decí que sí y resucita",
    "Ndrk, no tenés corazón. Le voy a contar a Tae",
    "Hola,soy Tae. Por favor, aceptale a Alex",
    "Kp, dijo que no",
    "Te transfiero plata",
    "DECIQUESIYANOAGUANTO AHHHHH"
    "Bueno, okay. Hacé lo que querés"
    "..."
    "Seguís piko acá?"
    "Tanto querés verme mal?"
    "Oima, quédate nomás. Yo voy a dibujar"
    "Mirá, sé dibujar a Homero"
    "Empezas así ("
    "Luego así (_"
    "Le pones ojos (_8"
    "No te olvides de la boca (_8(l)"
    "omero siknson (8_(l)---/---<"
    "Seguís diciéndome que no?"
    "Y bueno, yo sigo acá"
    "Atrapado en la eternidad del no"
    "Decí que sí, por favor, ya me quiero ir al baño"
    "Ay Dios, ya no aguantooOooOOooOOOoO"
    "Amanose jey"
    "◝⁠(⁠⁰⁠▿⁠⁰⁠)⁠◜0LA M IAMO TIMOTI"
    "(⁠◠⁠‿⁠・⁠)⁠—⁠☆ T DEJO L K ALE M EMBIO"
    "(⁠｡⁠•̀⁠ᴗ⁠-⁠) OGALA T KUST MUXIO JIJI"
    "Bueno,hola. Te hice esto con mucho cariño y aprecio. Espero que te guste."
    "Sé que no es mucho, es algo bastante básico, lamentablemente no tuve tiempo para hacer algo mejor"
    "Pero supongo que lo que cuenta es la intención de hacer algo para alguien especial"
    "Quisiera pedirte si es que deseas pasar conmigo el día de San Valentin, o pasar juntos algún día antes de irme"
    "Ir a cenar, comer algo en tu casa, jugar Minecraft o hacer lo que siempre hacemos"
    "Siempre disfruto de tu compañía y quisiera pasar más tiempo contigo"
    "Y eso es todo. Ojalá aceptes"
    "A partir de ahora todo se repite, no hay nada nuevo jsjs"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const siButton = document.querySelector('.si-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(siButton).fontSize);
    siButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}