const ghostContainer = document.getElementById('ghost-container');
const texts = [
    "boo!",
    "this is jerma and today we're gonna play ghost",
    "meow",
    "cheesed to meet you",
    "your mother eats cookies in hell",
    "happy halloween",
    "you are BOOtiful",
    "will you be my BOO?",
    "you've casted a spell on me",
    "*ghost noises*",
    "my name is samantha and I'm a ghost",
    "wow whorisharachnid is so cool",
    "*is a ghost*",
    "wooooooooo",
    "candy?",
    "why did the ghost go to the party? cause he heard it was going to be a BOOlast!",
    "what kind of music do mummies listen to? wrap music",
    "what do you call a ghost with a broken leg? hoblin'",
    "why did the vampire read the newspaper? he heard it had great circulation!",
    "have a fang-tastic halloween!",
    "*pees*",
    "*throws candy at you*",
    "*posts on tumblr*",
    "hi",
    "witches",
    "what do you call a skeleton that won't work? lazy bones",
    "why are ghosts such bad liars? cause you can see right through them!",
    "just ghostin’ around",
    "you've got me spooked!",
    "life after death is a grave issue",
    "boo-tiful night",
    "I promise I won’t ghost you!",
    "why did the ghost get a job? he wanted to earn some scary-change!",
    "feeling a little spooky today",
    "ready to get spooky?",
    "I'm scared of ghosts!",
    "you’re haunting my dreams",
    ":3",
    "i’m here for the trickery",
    "*creepy laughter*",
    "you’re my favorite ghost!",
    "what do you call a cleaning skeleton? the grim sweeper",
    "*sad ghost noises*",
    "yikes",
    "what do ghosts serve for dessert? ice scream!",
    "*argues with people on twitter*!",
    "*eats all of your halloween candy*",
    "*haunts you*",
    "*creak creak*",
    "*whooooosh*",
    "*spooky whispers*",
    "*eerie moans*",
    "*rustling leaves*",
    "*hiss*",
    "*chains rattling*",
    "*cackles like a witch*",
    "*thud*",
    "*howls at the moon*",
    "*bumps in the night*",
    "*dances ghostily*",
    "*ghostly giggle*",
    "*clap clap clap*",
    "*swoosh*",
    "૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა",
    "(づ๑•ᴗ•๑)づ♡",
    "૮⸝⸝> ̫ <⸝⸝ ა",
    "(❀❛ ֊ ❛„)♡",
    "(づ˶•༝•˶)づ♡",
    "ε(´｡•᎑•`)っ 💕",
    "(づ ᴗ _ᴗ)づ♡",
    "(´｡• ◡ •｡`) ♡",
    "(｡♥‿♥｡)",
    "(っ´ω`c)",
    "(✿◠‿◠)",
    "(ノ^o^)ノ",
    "(｡•̀ᴗ-)✧",
    "(╯✧▽✧)╯",
    "(｡•̀ᴗ-)✧",
    "(๑•̀ㅂ•́)و✧",
    "(≧▽≦)",
    "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
    "✧･ﾟ: *✧･ﾟ:* \(≧▽≦)/ *:･ﾟ✧*:･ﾟ✧",
    "( •̀ .̫ •́ )✧",
    "(˵ •̀ ᴗ - ˵)",
    "(ﾉ´ з `)ノ",
    "（＾ω＾）",
    "(•̀ᴗ•́)و",
    "( ˘ ³˘)♥",
    "(｡•́︿•̀｡)",
    "(◕ᴗ◕✿)",
    "(¬‿¬)",
    "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
    "(✿◕ ‿◕)",
    "(⌒ω⌒)",
    "(ง •̀_•́)ง",
    "(⁄ ⁄•⁄ω⁄•⁄ ⁄)"
];

document.body.addEventListener('click', (event) => {
    createGhost(event.clientX, event.clientY);
});

function createGhost(x, y) {
    const ghost = document.createElement('img');
    ghost.src = 'ghost.png'; 
    ghost.classList.add('ghost');
    ghost.style.left = `${x}px`;
    ghost.style.top = `${y}px`;

    ghostContainer.appendChild(ghost);

    const text = document.createElement('div');
    text.classList.add('ghost-text');
    text.innerText = getRandomText();
    text.style.left = `${x}px`;
    text.style.top = `${y - 50}px`; 
    ghostContainer.appendChild(text);

    floatGhost(ghost, text);
}

function getRandomText() {
    return texts[Math.floor(Math.random() * texts.length)];
}

function floatGhost(ghost, text) {
    let directionX = Math.random() < 0.5 ? -1 : 1; 
    let directionY = -1; 

    const speedX = Math.random() * 2 + 1;
    const speedY = Math.random() * 1 + 0.5; 

    const floatInterval = setInterval(() => {
        let left = parseFloat(ghost.style.left);
        let top = parseFloat(ghost.style.top);
        
        left += directionX * speedX;
        top += directionY * speedY;

        ghost.style.left = `${left}px`;
        ghost.style.top = `${top}px`;

        text.style.left = `${left}px`;
        text.style.top = `${top - 50}px`; 

        if (Math.random() < 0.05) { 
            directionX *= -1; 
        }
        if (Math.random() < 0.05) { 
            directionY *= -1; 
        }

        if (left < 0) {
            ghost.style.left = '0px';
            directionX *= -1; 
        }
        if (left > window.innerWidth - 50) { 
            ghost.style.left = `${window.innerWidth - 50}px`;
            directionX *= -1; 
        }

        if (top < -50) { 
            clearInterval(floatInterval);
            ghost.remove();
            text.remove();
        }
    }, 100);
}
