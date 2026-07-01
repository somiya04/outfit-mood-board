//console.log("JS connected!")
//const UNSPLASH_KEY = "i0ws_EaAoWH2denXM9bWe6AR5aIdtfX6vKiPSsiGa5E";
function saveLook(imgUrl) {
    let savedLooks = JSON.parse(localStorage.getItem("savedLooks")) || [];
    savedLooks.push(imgUrl);
    localStorage.setItem("savedLooks", JSON.stringify(savedLooks));
}

function removeLook(imgUrl) {
    let savedLooks = JSON.parse(localStorage.getItem("savedLooks")) || [];
    savedLooks = savedLooks.filter(function(url) {
        return url !== imgUrl;
    });
    localStorage.setItem("savedLooks", JSON.stringify(savedLooks));
}
const quizQuestions = [
    {
        question: "Your ideal weekend?",
        options: [
            { text: "Reading in a cozy café 📚", mood: "dark academia" },
            { text: "Dancing at a house party 🪩", mood: "Y2K" },
            { text: "Picking flowers in a garden 🌸", mood: "cottagecore" },
            { text: "Thrifting at a street market 🛹", mood: "streetwear" }
        ]
    },
    {
        question: "Pick a drink",
        options: [
            { text: "Black coffee, no sugar ☕", mood: "dark academia" },
            { text: "Strawberry milkshake 🍓", mood: "coquette" },
            { text: "Champagne at golden hour 🥂", mood: "quiet luxury" },
            { text: "Energy drink before a rave ⚡", mood: "Y2K" }
        ]
    },
    {
        question: "Your dream destination?",
        options: [
            { text: "Oxford library tour 🏛️", mood: "dark academia" },
            { text: "Countryside cottage in France 🏡", mood: "cottagecore" },
            { text: "Milan fashion week 👜", mood: "quiet luxury" },
            { text: "Tokyo street style scene 🗼", mood: "streetwear" }
        ]
    },
    {
        question: "Pick an aesthetic word",
        options: [
            { text: "Romantic 🎀", mood: "coquette" },
            { text: "Mysterious 🖤", mood: "dark academia" },
            { text: "Bold 🔥", mood: "streetwear" },
            { text: "Elegant ✨", mood: "quiet luxury" }
        ]
    }
];
const moodData = {
    "dark academia": {
        colors: ["#2C2416", "#5C4A2A", "#C4A882"],
    outfit: "Wool Blazer + Turtleneck + Plaid Trousers",
    vibe: "moody, intellectual, literary",
     bg: "#EDE4D3",  
            query: "woman outfit dark academia clothing",
            images:["https://i.pinimg.com/736x/85/bb/50/85bb509de9b85616490169692b19769e.jpg",
                "https://i.pinimg.com/736x/fa/fb/d0/fafbd066e8ec0e6a2838e07007751253.jpg",
                "https://i.pinimg.com/736x/48/73/f7/4873f728a3fc1c2870e33e8a1e57153f.jpg",
                "https://i.pinimg.com/1200x/a9/8c/0c/a98c0cf5769e04030f42b1bba8308e76.jpg",
                "https://i.pinimg.com/1200x/54/f2/c7/54f2c7c3e50fb18eaeaaf3b3d9afbea5.jpg",
                "https://i.pinimg.com/736x/0d/57/ab/0d57ab27fceec1dec45d97a4e088fb7f.jpg",
                

            ]

    },
     "Y2K": {
        colors: ["#FF6EC7", "#A855F7", "#38BDF8"],
        outfit: "Baby Tee + Low-Rise Cargo + Platform Sneakers",
        vibe: "nostalgic, playful, bold",
         bg: "#FFE5F5",  
        query: "woman y2k outfit clothing style",
            images: [
        "https://i.pinimg.com/736x/a9/c6/5b/a9c65bd0e403ab9a5f887a9186a40e8f.jpg",
        "https://i.pinimg.com/736x/5f/8d/62/5f8d628850eb166f806a055fd3e338b5.jpg",
        "https://i.pinimg.com/736x/11/e1/07/11e10727f054a0ef664309c345718029.jpg",
       "https://i.pinimg.com/736x/f5/18/c9/f518c9c59df2c7b2c3da99f97be370f4.jpg",
       "https://i.pinimg.com/736x/4a/0c/31/4a0c316b55ce53062b4c6ddf1c52e717.jpg",
       "https://i.pinimg.com/736x/9e/68/a3/9e68a31109bf18bac352cdfef9794eb2.jpg"
    ]

    },
    "coquette": {
        colors: ["#FDE8EF", "#F4A7BE", "#D4668A"],
        outfit: "Satin Corset + Chiffon Skirt + Ballet Flats",
        vibe: "feminine, dreamy, romantic",
         bg: "#FFF0F3",
        query: "woman coquette dress outfit style",
        images: [
            "https://i.pinimg.com/736x/a2/28/5d/a2285d280b5cd5c42da29d5b469f356d.jpg",
            "https://i.pinimg.com/736x/b6/a1/55/b6a1557446283c0491b4ff1c72da5b86.jpg",
            "https://i.pinimg.com/736x/10/0c/ad/100caddc4acd05e356687c82c159b364.jpg",
            "https://i.pinimg.com/736x/6d/42/68/6d4268ce7dce0cebc797e14891c169a0.jpg",
            "https://i.pinimg.com/736x/6e/7f/a2/6e7fa2e6682a4c2dbb4e080184925c73.jpg",
            "https://i.pinimg.com/736x/61/05/18/610518943c40a675f7c122b575e9e576.jpg"
        ]
    },
    "quiet luxury": {
        colors: ["#F5F2EE", "#D4C9B8", "#6B5B4E"],
        outfit: "Cashmere Coat + Silk Shirt + Tailored Trousers",
        vibe: "minimal, timeless, understated",
         bg: "#F5F0E8",
           query: "woman quiet luxury outfit clothing",
            images: [
                "https://i.pinimg.com/736x/88/5a/c0/885ac02220babd5fabdba023b6125fc9.jpg",
                "https://i.pinimg.com/736x/95/3c/6a/953c6a94ecc00b5e6833f9111ccd495c.jpg",
                "https://i.pinimg.com/1200x/b7/3b/ae/b73baeb70f93e5f1ec5ac042769d205b.jpg",
                "https://i.pinimg.com/736x/8c/74/b7/8c74b7b89b0ca4c993b8967f670b2feb.jpg",
                "https://i.pinimg.com/736x/e9/b6/91/e9b691640573c81e5d38a200c179f250.jpg",
                "https://i.pinimg.com/736x/c0/61/88/c061880c38ac98dcb81696700e9be772.jpg"

            ]
    },
    "cottagecore": {
        colors: ["#A8C5A0", "#D4B896", "#8B6F47"],
        outfit: "Floral Midi Dress + Crochet Cardigan + Mary Janes",
        vibe: "whimsical, earthy, dreamy",
         bg: "#EEF3E5",
         query: "woman cottagecore dress outfit",
         images:[
          "https://i.pinimg.com/736x/7c/51/de/7c51deedc4dc2e375029ac09dc9604a8.jpg",
          "https://i.pinimg.com/736x/a3/57/06/a357061044ed5ebb13bffe774d4de00c.jpg",
          "https://i.pinimg.com/736x/7a/ae/dc/7aaedc0902d075094ba590c81982ee30.jpg",
          "https://i.pinimg.com/736x/cc/f8/98/ccf89861eaf17d0f75dc8aa42d04e6c9.jpg",
          "https://i.pinimg.com/736x/78/cb/10/78cb10b394644a44e5af03ed1a5a5651.jpg",
          "https://i.pinimg.com/736x/0c/c2/bd/0cc2bd962d586d3d4cc4c7fbd45cb1c7.jpg"
         ]
    },

    "streetwear": {
        colors: ["#1A1A1A", "#FF3B00", "#F5F5F5"],
        outfit: "Puffer Jacket + Graphic Tee + Baggy Cargos",
        vibe: "bold, urban, effortless",
          bg: "#F0F0F0",
          query: "woman streetwear outfit clothing",
           images: [
            "https://i.pinimg.com/736x/c7/bb/bc/c7bbbc33379e7866d8a2ea426efa27bb.jpg ",
            "https://i.pinimg.com/736x/4c/8d/8d/4c8d8d0c50e026134526090bf6a2f59b.jpg",
            "https://i.pinimg.com/webp/1200x/50/f2/60/50f260a66ba864f490837f6b41dbef63.webp",
            "https://i.pinimg.com/736x/c4/59/4a/c4594abc504c5cafee8deadcfc1a9790.jpg",
            "https://i.pinimg.com/1200x/01/1d/90/011d90e1d71c376b50da2eea232ba946.jpg",
            "https://i.pinimg.com/736x/06/e3/b6/06e3b625f059ff83468a26e615703ad8.jpg"
           ]
    }
   

}
let currentQuestion = 0;
let scores = {};

function startQuiz() {
     highlightTopButton(document.querySelectorAll("#top-actions button")[0]);
    currentQuestion = 0;
    scores = {};
    showQuestion();
}

function showQuestion() {
    const q = quizQuestions[currentQuestion];
    
    board.innerHTML = `
        <h2>${q.question}</h2>
        <div id="quiz-options"></div>
    `;
    
    const optionsDiv = document.getElementById("quiz-options");
    
    q.options.forEach(function(option) {
        const btn = document.createElement("button");
        btn.innerText = option.text;
        btn.addEventListener("click", function() {
            selectAnswer(option.mood);
        });
        optionsDiv.appendChild(btn);
    });
}

function selectAnswer(mood) {
    if(scores[mood]) {
        scores[mood] = scores[mood] + 1;
    } else {
        scores[mood] = 1;
    }
    
    currentQuestion = currentQuestion + 1;
    
    if(currentQuestion < quizQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let winningMood = "";
    let highestScore = 0;
    
    for(let mood in scores) {
        if(scores[mood] > highestScore) {
            highestScore = scores[mood];
            winningMood = mood;
        }
    }
    
    board.innerHTML = `<h2>Your vibe is: ${winningMood}! ✨</h2>`;
    
    const matchedButton = Array.from(buttons).find(b => b.innerText === winningMood);
    matchedButton.click();
}
const buttons = document.querySelectorAll("button");
const board = document.getElementById("board");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const mood = button.innerText;
        const data = moodData[mood];
        document.body.style.backgroundColor = data.bg;
        buttons.forEach(function(b) {
    b.style.backgroundColor = "#fdf6f0";
    b.style.color = "#3d2c2c";
});
button.style.backgroundColor = "#3d2c2c";
button.style.color = "#fdf6f0";
        board.innerHTML = `<p style="text-align:center;">Loading your vibe...</p>`;
        setTimeout(function() {
        board.innerHTML = `
    <h2>${mood}</h2>
    <div id="color-circles">
        ${data.colors.map(color => `
            <div style="
                background-color: ${color};
                width: 30px;
                height: 30px;
                display: inline-block;
                margin: 5px;
                border-radius: 50%;
            "></div>
        `).join('')}
    </div>
    <p>Outfit: ${data.outfit}</p>
    <p>Vibe: ${data.vibe}</p>
`;
           
     if(data.images) {
    data.images.forEach(function(imgUrl) {
        const image = document.createElement("img");
        image.src = imgUrl;
        image.style.width = "150px";
        image.style.height = "200px";
        image.style.margin = "5px";
        image.style.borderRadius = "12px";
        image.style.objectFit = "cover";
        // YAHAN SE NAYA CODE START
        image.style.cursor = "pointer";
        const imageWrapper = document.createElement("div");
imageWrapper.style.position = "relative";
imageWrapper.style.display = "inline-block";
imageWrapper.style.width = "150px";

const heartBtn = document.createElement("button");
heartBtn.innerText = "🤍";
heartBtn.style.position = "absolute";
heartBtn.style.bottom = "8px";
heartBtn.style.right = "8px";
heartBtn.style.background = "transparent";
heartBtn.style.border = "none";
heartBtn.style.fontSize = "18px"
heartBtn.style.cursor = "pointer";

heartBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    if(heartBtn.innerText === "🤍") {
        heartBtn.innerText = "❤️";
        saveLook(imgUrl);
    } else {
        heartBtn.innerText = "🤍";
        removeLook(imgUrl);
    }
});

imageWrapper.appendChild(image);
imageWrapper.appendChild(heartBtn);
        image.addEventListener("click", function() {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0,0,0,0.8)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = "999";

            const bigImg = document.createElement("img");
            bigImg.src = imgUrl;
            bigImg.style.maxWidth = "80%";
            bigImg.style.maxHeight = "80%";
            bigImg.style.borderRadius = "12px";

            overlay.appendChild(bigImg);
            overlay.addEventListener("click", function() {
                overlay.remove();
            });

            document.body.appendChild(overlay);
        });
        // YAHAN TAK NAYA CODE END
  board.appendChild(imageWrapper);
    });
}


     }, 600);
      

        
    })
})

function showSavedLooks() {
       highlightTopButton(document.querySelectorAll("#top-actions button")[1]);
    const savedLooks = JSON.parse(localStorage.getItem("savedLooks")) || [];
    
    board.innerHTML = `<h2>My Saved Looks 💗</h2>`;
    
    if(savedLooks.length === 0) {
        board.innerHTML += `<p>No looks saved yet — go like some! 🤍</p>`;
        return;
    }
    savedLooks.forEach(function(imgUrl) {
    const imageWrapper = document.createElement("div");
    imageWrapper.style.position = "relative";
    imageWrapper.style.display = "inline-block";
    imageWrapper.style.width = "150px";

    const image = document.createElement("img");
    image.src = imgUrl;
    image.style.width = "150px";
    image.style.height = "200px";
    image.style.margin = "5px";
    image.style.borderRadius = "12px";
    image.style.objectFit = "cover";

    const heartBtn = document.createElement("button");
    heartBtn.innerText = "❤️";
    heartBtn.style.position = "absolute";
    heartBtn.style.bottom = "8px";
    heartBtn.style.right = "8px";
    heartBtn.style.background = "transparent";
    heartBtn.style.border = "none";
    heartBtn.style.fontSize = "18px";
    heartBtn.style.cursor = "pointer";

    heartBtn.addEventListener("click", function() {
        removeLook(imgUrl);

        showSavedLooks();
    });

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(heartBtn);
    board.appendChild(imageWrapper);
});
   
}

document.getElementById("photo-upload").addEventListener("change", function(e) {
     highlightTopButton(document.querySelectorAll("#top-actions button")[2]);
    const file = e.target.files[0];
    
    if(file) {
        const reader = new FileReader();
        
        reader.onload = function(event) {
            const imgUrl = event.target.result;
            saveLook(imgUrl);
            showSavedLooks();
        };
        
        reader.readAsDataURL(file);
    }
});
const topButtons = document.querySelectorAll("#top-actions button");

function highlightTopButton(clickedBtn) {
    topButtons.forEach(function(btn) {
        btn.style.backgroundColor = "#fdf6f0";
        btn.style.color = "#3d2c2c";
    });
    clickedBtn.style.backgroundColor = "#3d2c2c";
    clickedBtn.style.color = "#fdf6f0";
     document.querySelectorAll("#mood-buttons button").forEach(function(btn) {
        btn.style.backgroundColor = "#fdf6f0";
        btn.style.color = "#3d2c2c";
    });
}