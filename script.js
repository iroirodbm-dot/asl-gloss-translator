const translateBtn = document.getElementById("translateBtn");
const englishInput = document.getElementById("englishInput");
const aslOutput = document.getElementById("aslOutput");

let aslRules = [];

// Load ASL rules from JSON
fetch('data/asl_rules.json')
    .then(response => response.json())
    .then(data => aslRules = data.rules);

translateBtn.addEventListener("click", () => {
    const text = englishInput.value.trim().toLowerCase();
    if(!text) {
        aslOutput.textContent = "Please enter text.";
        return;
    }

    // Search for matching rule
    const match = aslRules.find(rule => rule.english.toLowerCase() === text);
    if(match) {
        aslOutput.innerHTML = match.asl.join("<br>");
    } else {
        aslOutput.textContent = "No translation found.";
    }
});

