// Load solved problems from localStorage
let solvedProblems = JSON.parse(localStorage.getItem('solvedProblems')) || [];
let problemNotes = JSON.parse(localStorage.getItem('problemNotes')) || {};
let currentProblemId = null;

// Update progress bar
function updateProgress() {
    const progressCount = document.getElementById('progress-count');
    const progressFill = document.getElementById('progress-fill');
    const percentage = (solvedProblems.length / problems.length) * 100;
    
    progressCount.textContent = `${solvedProblems.length}/${problems.length}`;
    progressFill.style.width = `${percentage}%`;
}

// Filter problems
function filterProblems() {
    const categoryFilter = document.getElementById('category-filter').value;
    const difficultyFilter = document.getElementById('difficulty-filter').value;
    const statusFilter = document.getElementById('status-filter').value;

    return problems.filter(problem => {
        const categoryMatch = categoryFilter === 'all' || problem.category === categoryFilter;
        const difficultyMatch = difficultyFilter === 'all' || problem.difficulty === difficultyFilter;
        const isSolved = solvedProblems.includes(problem.id);
        const statusMatch = statusFilter === 'all' || 
            (statusFilter === 'solved' && isSolved) || 
            (statusFilter === 'unsolved' && !isSolved);

        return categoryMatch && difficultyMatch && statusMatch;
    });
}

// Create problem card
function createProblemCard(problem) {
    const isSolved = solvedProblems.includes(problem.id);
    const note = problemNotes[problem.id] || "";
    
    return `
        <div class="problem-card">
            <div class="problem-header">
                <h3 class="problem-title">${problem.title}</h3>
                <span class="difficulty ${problem.difficulty}">${problem.difficulty}</span>
            </div>
            <div class="problem-category">${problem.category}</div>
            <p>${problem.description}</p>
            <div class="problem-actions">
                <a href="${problem.link}" target="_blank" class="solve-btn ${isSolved ? 'solved' : ''}">
                    ${isSolved ? 'Solved' : 'Solve'}
                </a>
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="problem-${problem.id}" 
                        ${isSolved ? 'checked' : ''} 
                        onchange="toggleProblem(${problem.id})">
                    <label for="problem-${problem.id}">Mark as solved</label>
                </div>
                <button class="note-btn" onclick="openNoteModal(${problem.id}, '${problem.title}')">Take Note</button>
            </div>
        </div>
    `;
}

// Toggle problem solved status
function toggleProblem(id) {
    const index = solvedProblems.indexOf(id);
    if (index === -1) {
        solvedProblems.push(id);
    } else {
        solvedProblems.splice(index, 1);
    }
    
    localStorage.setItem('solvedProblems', JSON.stringify(solvedProblems));
    updateProgress();
    renderProblems();
}

// Open note modal
function openNoteModal(id, title) {
    currentProblemId = id;
    document.getElementById('problem-title').textContent = title;
    document.getElementById('note-textarea').value = problemNotes[id] || "";
    document.getElementById('note-modal').style.display = 'block';
}

// Close note modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('note-modal').style.display = 'none';
});

// Save note
document.getElementById('save-note-btn').addEventListener('click', () => {
    const note = document.getElementById('note-textarea').value;
    if (currentProblemId !== null) {
        problemNotes[currentProblemId] = note;
        localStorage.setItem('problemNotes', JSON.stringify(problemNotes));
        renderProblems();
    }
    document.getElementById('note-modal').style.display = 'none';
});

// Delete note
document.getElementById('delete-note-btn').addEventListener('click', () => {
    if (currentProblemId !== null) {
        delete problemNotes[currentProblemId];
        localStorage.setItem('problemNotes', JSON.stringify(problemNotes));
        renderProblems();
    }
    document.getElementById('note-modal').style.display = 'none';
});

// Render problems
function renderProblems() {
    const filteredProblems = filterProblems();
    const problemsList = document.getElementById('problems-list');
    problemsList.innerHTML = filteredProblems.map(createProblemCard).join('');
}

// Toggle Night Mode
document.getElementById('night-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('night-mode');
    const footer = document.querySelector('footer');
    footer.classList.toggle('night-mode');
    const problems = document.querySelector('.problems-container');
    problems.classList.toggle('night-mode');
    const nav = document.querySelector('nav');
    nav.classList.toggle('night-mode');
    renderProblems();
});


// Add event listeners
document.getElementById('category-filter').addEventListener('change', renderProblems);
document.getElementById('difficulty-filter').addEventListener('change', renderProblems);
document.getElementById('status-filter').addEventListener('change', renderProblems);

// Initial render
updateProgress();
renderProblems();
