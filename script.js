const toolsContainer = document.getElementById("toolsContainer");
const searchInput = document.getElementById("searchInput");

const toolColors = {};
const colorPalette = [
    "#17CADE", "#FFC107", "#4CAF50", "#FF5722", "#3F51B5",
    "#9C27B0", "#E91E63", "#00BCD4", "#8BC34A", "#FF9800"
];

function assignColorsToTools(tools) {
    let usedColors = new Set();

    tools.forEach(tool => {
        if (!toolColors[tool.name]) {
            let availableColors = colorPalette.filter(c => !usedColors.has(c));
            let color = availableColors.length > 0
                ? availableColors[Math.floor(Math.random() * availableColors.length)]
                : colorPalette[Math.floor(Math.random() * colorPalette.length)];
            toolColors[tool.name] = color;
            usedColors.add(color);
        }
    });
}

assignColorsToTools(tools);

function getRandomColor() {
    const colors = [
        "#17CADE", "#FFC107", "#4CAF50", "#FF5722", "#3F51B5",
        "#9C27B0", "#E91E63", "#00BCD4", "#8BC34A", "#FF9800"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

function createToolCard(tool, index) {
    const bgColor = toolColors[tool.name];
    const likeStatus = tool.HaveLiked ? "bx bxs-heart" : "bx bx-heart";

    return `
    <div class="ai-tool" style="background: ${bgColor};">
        <div class="title-info">
            <h1 class="ai-name">${tool.name}</h1>
            <div class="likes">
                <i class="${likeStatus} like-button" data-index="${index}" style="cursor: pointer;"></i>
                <p>${tool.likes}</p>
            </div>
        </div>
        <div class="description">
            <h1>${tool.name}</h1>
            <p>${tool.description}</p>
        </div>
        <div class="bottom-wrapper">
            <p class="developer">Developer : ${tool.developer}</p>
            <a class="go" href="${tool.link}" target="_blank">Go</a>
        </div>
    </div>`;
}


function renderTools(filteredTools,CarLimit) {
    toolsContainer.innerHTML = "";
    if (filteredTools.length === 0) {
        toolsContainer.innerHTML = `<p style="color:gray;">No AI tools found.</p>`;
        return;
    }

    let cardCount = 0;
    filteredTools.forEach(tool => {
        cardCount+=1;
        if (cardCount > CarLimit) {
            return;
        }
        toolsContainer.innerHTML += createToolCard(tool,tool.name);
    });
}

function filterTools(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    const filtered = tools.filter(tool =>
        tool.keywords.some(kw => kw.toLowerCase().includes(lowerKeyword))
    );
    renderTools(filtered,12);
    bindLikeButtons(filtered); // Rebind like buttons for filtered tools
}

// Initial load
renderTools(tools,12);

// Search functionality
searchInput.addEventListener("input", (e) => {
    filterTools(e.target.value);
});

function bindLikeButtons(tools) {
    document.querySelectorAll(".like-button").forEach((btn) => {
        btn.addEventListener("click", () => {
            const index = btn.getAttribute("data-index");
            const tool = tools.find(t => t.name === index); // Matching both index and name

            console.log(index)
            console.log(btn)
            console.log(tool)
            console.log(tools)
            if (!tool.HaveLiked) {
                tool.likes += 1;
                tool.HaveLiked = true;

                // Update the count
                const countElement = btn.nextElementSibling;
                countElement.textContent = tool.likes;

                // Change the heart icon
                btn.classList.remove("bx-heart");
                btn.classList.add("bxs-heart");
            }
        });
    });
}

// Bind like buttons after rendering tools
bindLikeButtons(tools);