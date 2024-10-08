document.getElementById('addButton').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    if (name) {
        const li = document.createElement('li');
        li.textContent = name;
        document.getElementById('peopleList').appendChild(li);
        nameInput.value = '';
    } else {
        alert("Please enter a name.");
    }
});

document.getElementById('drawButton').addEventListener('click', function() {
    const people = Array.from(document.querySelectorAll('#peopleList li'));
    if (people.length < 2) {
        alert("Please add at least 2 people to the list before drawing.");
        return;
    }
    const randomIndex = Math.floor(Math.random() * people.length);
    const luckyPerson = people[randomIndex].textContent;

    document.getElementById('result').textContent = `CONGRATULATIONS, ${luckyPerson}, YOU ARE THE LUCKY ONE!`;
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('peopleList').innerHTML = '';
    document.getElementById('nameInput').value = '';
    document.getElementById('result').textContent = '';
});
