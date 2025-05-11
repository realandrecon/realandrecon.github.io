function verifyAnswers() {
    const answers = {
        "spin-off-games": ["dungeons", "earth", "story mode", "legends"], // Keywords for validation
        "first-name-minecraft": "Cave Game",
        "multiply-book": "multiply-book-2",
        "dyes": ["ink-sack", "cocoa-beans", "lapis-lazuli", "bone-meal"], // Correct dyes
        "bamboo-version": "1.20",
        "map-crafting-item": "Compass",
        "datapack-name": "Effect Blocks",
        "resource-pack-name": "Andrecon's Custom Splash",
        "true-false": {
            "balloon": true,
            "flotater": true,
            "bolt-banner-pattern": false,
            "shimmering-key": true,
            "nether-reactor-core": true,
            "indium-ore": false,
            "hoglin-meat": false,
            "studded-armor": true,
            "baked-poisonous-potato": false
        },
        "fire-resistance": "fire-resistance-2"
    };

    let score = 0;
    let total = 0;

    // Check text inputs
    const spinOffInput = document.getElementById("spin-off-games").value.trim().toLowerCase();
    const spinOffKeywords = answers["spin-off-games"];
    let spinOffCorrect = 0;
    spinOffKeywords.forEach(keyword => {
        if (spinOffInput.includes(keyword)) spinOffCorrect++;
    });
    score += spinOffCorrect;
    total += spinOffKeywords.length;

    if (document.getElementById("first-name-minecraft").value.trim().toLowerCase() === answers["first-name-minecraft"].toLowerCase()) {
        score++;
    }
    total++;

    if (document.getElementById("bamboo-version").value.trim() === answers["bamboo-version"]) {
        score++;
    }
    total++;

    if (document.getElementById("map-crafting-item").value.trim().toLowerCase() === answers["map-crafting-item"].toLowerCase()) {
        score++;
    }
    total++;

    if (document.getElementById("datapack-name").value.trim().toLowerCase() === answers["datapack-name"].toLowerCase()) {
        score++;
    }
    total++;

    if (document.getElementById("resource-pack-name").value.trim().toLowerCase() === answers["resource-pack-name"].toLowerCase()) {
        score++;
    }
    total++;

    // Check radio buttons
    if (document.getElementById(answers["multiply-book"]).checked) {
        score++;
    }
    total++;

    if (document.getElementById(answers["fire-resistance"]).checked) {
        score++;
    }
    total++;

    // Check checkboxes for dyes
    const dyes = answers["dyes"];
    let dyesCorrect = 0;
    let dyesIncorrect = 0;
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        if (dyes.includes(checkbox.id) && checkbox.checked) {
            dyesCorrect++;
        } else if (!dyes.includes(checkbox.id) && checkbox.checked) {
            dyesIncorrect++;
        }
    });
    score += Math.max(0, dyesCorrect - dyesIncorrect); // Prevent negative score
    total += dyes.length;

    // Check true/false switches
    const trueFalseAnswers = answers["true-false"];
    let allCorrect = true;

    Object.keys(trueFalseAnswers).forEach(id => {
        const isChecked = document.getElementById(id).checked;
        if (isChecked !== trueFalseAnswers[id]) {
            allCorrect = false; // If any answer is wrong, set allCorrect to false
        }
    });

    if (allCorrect) {
        score += 9; // Award 9 points if all answers are correct
    }
    total += 9; // Total possible points for question 9

    // Display result
    document.getElementById("result").innerText = `Your score: ${score}/${total}`;
}