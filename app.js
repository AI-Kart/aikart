// ScienceLab Pro - Main Application JavaScript
// ================================================

// Global State Management
const AppState = {
    currentView: 'dashboard',
    experiments: [],
    filteredExperiments: [],
    completedExperiments: new Set(),
    savedExperiments: new Set(),
    notebook: [],
    achievements: [],
    quizScores: {},
    darkMode: true,
    currentExperiment: null,
    simulationData: {},
    chartInstances: {}
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    loadFromLocalStorage();
    loadExperiments();
    setupEventListeners();
    applyTheme();
    renderDashboard();
}

// Local Storage Functions
function saveToLocalStorage() {
    localStorage.setItem('scienceLab_completed', JSON.stringify([...AppState.completedExperiments]));
    localStorage.setItem('scienceLab_saved', JSON.stringify([...AppState.savedExperiments]));
    localStorage.setItem('scienceLab_notebook', JSON.stringify(AppState.notebook));
    localStorage.setItem('scienceLab_achievements', JSON.stringify(AppState.achievements));
    localStorage.setItem('scienceLab_quizScores', JSON.stringify(AppState.quizScores));
    localStorage.setItem('scienceLab_darkMode', AppState.darkMode);
}

function loadFromLocalStorage() {
    const completed = localStorage.getItem('scienceLab_completed');
    const saved = localStorage.getItem('scienceLab_saved');
    const notebook = localStorage.getItem('scienceLab_notebook');
    const achievements = localStorage.getItem('scienceLab_achievements');
    const quizScores = localStorage.getItem('scienceLab_quizScores');
    const darkMode = localStorage.getItem('scienceLab_darkMode');

    if (completed) AppState.completedExperiments = new Set(JSON.parse(completed));
    if (saved) AppState.savedExperiments = new Set(JSON.parse(saved));
    if (notebook) AppState.notebook = JSON.parse(notebook);
    if (achievements) AppState.achievements = JSON.parse(achievements);
    if (quizScores) AppState.quizScores = JSON.parse(quizScores);
    if (darkMode !== null) AppState.darkMode = darkMode === 'true';
}

// Load Experiments Data
function loadExperiments() {
    if (typeof experimentsData !== 'undefined') {
        AppState.experiments = experimentsData;
        AppState.filteredExperiments = [...experimentsData];
    } else {
        console.error('Experiments data not loaded');
        AppState.experiments = [];
        AppState.filteredExperiments = [];
    }
}

// Event Listeners Setup
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => handleNavigation(item.dataset.view));
    });

    // Sidebar Toggle
    document.getElementById('sidebarToggle')?.addEventListener('click', toggleSidebar);

    // Theme Toggle
    const themeSwitch = document.getElementById('themeSwitch');
    if (themeSwitch) {
        themeSwitch.addEventListener('change', toggleTheme);
        themeSwitch.checked = !AppState.darkMode;
    }

    // Search Input
    document.getElementById('globalSearch')?.addEventListener('input', handleSearch);

    // Filter Buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => handleFilter(btn.dataset.category));
    });

    // Sort Select
    document.getElementById('sortSelect')?.addEventListener('change', handleSort);

    // JSON Manager Buttons
    setupJSONManagerListeners();

    // Notebook Save Button
    document.getElementById('saveNoteBtn')?.addEventListener('click', saveNotebookEntry);

    // Export Report Button
    document.getElementById('exportReportBtn')?.addEventListener('click', exportReport);

    // Close Modal Buttons
    document.querySelectorAll('.close-modal, .modal-overlay').forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target === el) closeModal();
        });
    });
}

function setupJSONManagerListeners() {
    document.getElementById('exportJSONBtn')?.addEventListener('click', exportJSON);
    document.getElementById('importJSONBtn')?.addEventListener('click', () => {
        document.getElementById('jsonFileInput')?.click();
    });
    document.getElementById('jsonFileInput')?.addEventListener('change', importJSON);
    document.getElementById('validateJSONBtn')?.addEventListener('click', validateJSON);
    document.getElementById('backupJSONBtn')?.addEventListener('click', backupJSON);
}

// Navigation Handler
function handleNavigation(view) {
    AppState.currentView = view;
    
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.view === view);
    });

    // Hide all views
    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected view
    const targetView = document.getElementById(`${view}-view`);
    if (targetView) {
        targetView.classList.add('active');
        
        // Render view-specific content
        switch(view) {
            case 'dashboard':
                renderDashboard();
                break;
            case 'experiments':
                renderExperimentsLibrary();
                break;
            case 'notebook':
                renderNotebook();
                break;
            case 'achievements':
                renderAchievements();
                break;
            case 'json-manager':
                renderJSONManager();
                break;
        }
    }

    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar')?.classList.remove('open');
    }
}

// Sidebar Toggle
function toggleSidebar() {
    document.getElementById('sidebar')?.classList.toggle('open');
}

// Theme Toggle
function toggleTheme() {
    AppState.darkMode = !AppState.darkMode;
    applyTheme();
    saveToLocalStorage();
}

function applyTheme() {
    document.body.classList.toggle('dark-mode', AppState.darkMode);
    document.body.classList.toggle('light-mode', !AppState.darkMode);
    
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        themeIcon.textContent = AppState.darkMode ? '☀️' : '🌙';
    }
}

// Search Handler
function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    filterExperiments(query, AppState.currentCategory || 'all');
}

// Filter Handler
let AppState_currentCategory = 'all';
function handleFilter(category) {
    AppState_currentCategory = category;
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    
    const searchQuery = document.getElementById('searchInput')?.value.toLowerCase().trim() || '';
    filterExperiments(searchQuery, category);
}

// Sort Handler
function handleSort(e) {
    const sortBy = e.target.value;
    sortExperiments(sortBy);
}

// Filter Experiments
function filterExperiments(query, category) {
    let filtered = [...AppState.experiments];
    
    // Filter by category
    if (category && category !== 'all') {
        filtered = filtered.filter(exp => exp.category.toLowerCase() === category.toLowerCase());
    }
    
    // Filter by search query
    if (query) {
        filtered = filtered.filter(exp => 
            exp.name.toLowerCase().includes(query) ||
            exp.objective.toLowerCase().includes(query) ||
            exp.category.toLowerCase().includes(query) ||
            exp.difficulty.toLowerCase().includes(query)
        );
    }
    
    AppState.filteredExperiments = filtered;
    renderExperimentsGrid();
}

// Sort Experiments
function sortExperiments(sortBy) {
    let sorted = [...AppState.filteredExperiments];
    
    switch(sortBy) {
        case 'name-asc':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sorted.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'difficulty-easy':
            sorted.sort((a, b) => getDifficultyOrder(a.difficulty) - getDifficultyOrder(b.difficulty));
            break;
        case 'difficulty-hard':
            sorted.sort((a, b) => getDifficultyOrder(b.difficulty) - getDifficultyOrder(a.difficulty));
            break;
        case 'time-short':
            sorted.sort((a, b) => parseInt(a.time) - parseInt(b.time));
            break;
        case 'time-long':
            sorted.sort((a, b) => parseInt(b.time) - parseInt(a.time));
            break;
    }
    
    AppState.filteredExperiments = sorted;
    renderExperimentsGrid();
}

function getDifficultyOrder(difficulty) {
    const order = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
    return order[difficulty] || 0;
}
// Dashboard Rendering
function renderDashboard() {
    const totalExperiments = AppState.experiments.length;
    const physicsCount = AppState.experiments.filter(e => e.category === 'Physics').length;
    const chemistryCount = AppState.experiments.filter(e => e.category === 'Chemistry').length;
    const biologyCount = AppState.experiments.filter(e => e.category === 'Biology').length;
    const completedCount = AppState.completedExperiments.size;
    const savedCount = AppState.savedExperiments.size;

    // Update stat cards
    updateStatCard('total-experiments', totalExperiments);
    updateStatCard('physics-count', physicsCount);
    updateStatCard('chemistry-count', chemistryCount);
    updateStatCard('biology-count', biologyCount);
    updateStatCard('completed-count', completedCount);
    updateStatCard('saved-count', savedCount);

    // Render charts
    renderCategoryChart();
    renderProgressChart();
    
    // Update recent experiments
    renderRecentExperiments();
}

function updateStatCard(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
        // Animate number
        animateNumber(element, value);
    }
}

function animateNumber(element, target) {
    const start = 0;
    const duration = 1000;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (target - start) * easeOutQuart);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

function renderCategoryChart() {
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;

    // Destroy existing chart
    if (AppState.chartInstances.category) {
        AppState.chartInstances.category.destroy();
    }

    const physicsCount = AppState.experiments.filter(e => e.category === 'Physics').length;
    const chemistryCount = AppState.experiments.filter(e => e.category === 'Chemistry').length;
    const biologyCount = AppState.experiments.filter(e => e.category === 'Biology').length;

    AppState.chartInstances.category = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Physics', 'Chemistry', 'Biology'],
            datasets: [{
                data: [physicsCount, chemistryCount, biologyCount],
                backgroundColor: [
                    'rgba(99, 102, 241, 0.8)',
                    'rgba(168, 85, 247, 0.8)',
                    'rgba(34, 197, 94, 0.8)'
                ],
                borderColor: [
                    'rgb(99, 102, 241)',
                    'rgb(168, 85, 247)',
                    'rgb(34, 197, 94)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: AppState.darkMode ? '#e5e7eb' : '#374151',
                        padding: 15
                    }
                }
            }
        }
    });
}

function renderProgressChart() {
    const ctx = document.getElementById('progressChart');
    if (!ctx) return;

    // Destroy existing chart
    if (AppState.chartInstances.progress) {
        AppState.chartInstances.progress.destroy();
    }

    const completedCount = AppState.completedExperiments.size;
    const totalCount = AppState.experiments.length;
    const remainingCount = totalCount - completedCount;

    AppState.chartInstances.progress = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Completed', 'Remaining'],
            datasets: [{
                label: 'Experiment Progress',
                data: [completedCount, remainingCount],
                backgroundColor: [
                    'rgba(34, 197, 94, 0.8)',
                    'rgba(107, 114, 128, 0.5)'
                ],
                borderColor: [
                    'rgb(34, 197, 94)',
                    'rgb(107, 114, 128)'
                ],
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: AppState.darkMode ? '#e5e7eb' : '#374151'
                    },
                    grid: {
                        color: AppState.darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: AppState.darkMode ? '#e5e7eb' : '#374151'
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function renderRecentExperiments() {
    const container = document.getElementById('recent-experiments');
    if (!container) return;

    const recentIds = [...AppState.completedExperiments].slice(-5).reverse();
    const recentExps = recentIds.map(id => AppState.experiments.find(e => e.id === id)).filter(Boolean);

    if (recentExps.length === 0) {
        container.innerHTML = '<p class="no-data">No experiments completed yet. Start exploring!</p>';
        return;
    }

    container.innerHTML = recentExps.map(exp => `
        <div class="recent-item" onclick="openExperiment(${exp.id})">
            <span class="recent-icon">${getCategoryIcon(exp.category)}</span>
            <div class="recent-info">
                <h4>${exp.name}</h4>
                <p>${exp.category} • ${exp.difficulty}</p>
            </div>
            <span class="recent-status">✓ Completed</span>
        </div>
    `).join('');
}

function getCategoryIcon(category) {
    const icons = { 'Physics': '⚡', 'Chemistry': '🧪', 'Biology': '🔬' };
    return icons[category] || '📊';
}

// Experiments Library Rendering
function renderExperimentsLibrary() {
    renderExperimentsGrid();
}

function renderExperimentsGrid() {
    const container = document.getElementById('experiments-grid');
    if (!container) return;

    if (AppState.filteredExperiments.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <span class="no-results-icon">🔍</span>
                <h3>No experiments found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }

    container.innerHTML = AppState.filteredExperiments.map(exp => createExperimentCard(exp)).join('');
    
    // Add click listeners to cards
    container.querySelectorAll('.experiment-card').forEach(card => {
        card.addEventListener('click', () => {
            const expId = parseInt(card.dataset.id);
            openExperiment(expId);
        });
    });
}

function createExperimentCard(exp) {
    const isCompleted = AppState.completedExperiments.has(exp.id);
    const isSaved = AppState.savedExperiments.has(exp.id);
    const difficultyClass = exp.difficulty.toLowerCase();
    
    return `
        <div class="experiment-card" data-id="${exp.id}">
            <div class="card-header">
                <span class="category-badge ${exp.category.toLowerCase()}">${exp.category}</span>
                <button class="save-btn ${isSaved ? 'saved' : ''}" onclick="event.stopPropagation(); toggleSave(${exp.id})">
                    ${isSaved ? '⭐' : '☆'}
                </button>
            </div>
            <div class="card-body">
                <h3 class="experiment-name">${exp.name}</h3>
                <p class="experiment-objective">${exp.objective.substring(0, 100)}${exp.objective.length > 100 ? '...' : ''}</p>
                
                <div class="experiment-meta">
                    <div class="meta-item">
                        <span class="meta-icon">⏱️</span>
                        <span>${exp.time} min</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-icon">📊</span>
                        <span class="difficulty-${difficultyClass}">${exp.difficulty}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-icon">🛡️</span>
                        <span>${exp.safety}</span>
                    </div>
                </div>

                <div class="learning-outcome">
                    <strong>Learn:</strong> ${exp.learningOutcome}
                </div>
            </div>
            <div class="card-footer">
                <button class="start-btn ${isCompleted ? 'completed' : ''}" onclick="event.stopPropagation(); openExperiment(${exp.id})">
                    ${isCompleted ? '✓ Review' : '▶ Start Experiment'}
                </button>
            </div>
        </div>
    `;
}

// Open Experiment Detail View
function openExperiment(expId) {
    const experiment = AppState.experiments.find(e => e.id === expId);
    if (!experiment) return;

    AppState.currentExperiment = experiment;
    
    // Switch to experiment detail view
    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.remove('active');
    });
    
    const detailView = document.getElementById('experiment-detail-view');
    if (detailView) {
        detailView.classList.add('active');
        renderExperimentDetail(experiment);
    }
}

// Render Experiment Detail
function renderExperimentDetail(exp) {
    // Header
    document.getElementById('detail-title').textContent = exp.name;
    document.getElementById('detail-category').textContent = exp.category;
    document.getElementById('detail-difficulty').textContent = exp.difficulty;
    document.getElementById('detail-time').textContent = `${exp.time} minutes`;
    document.getElementById('detail-safety').textContent = exp.safety;

    // Objective
    document.getElementById('detail-objective').textContent = exp.objective;

    // Theory
    document.getElementById('theory-eli10').textContent = exp.theory.el10;
    document.getElementById('theory-advanced').textContent = exp.theory.advanced;
    document.getElementById('theory-applications').innerHTML = 
        exp.theory.applications.map(app => `<li>${app}</li>`).join('');

    // Materials
    document.getElementById('materials-list').innerHTML = 
        exp.materials.map(mat => `
            <label class="material-item">
                <input type="checkbox" class="material-check">
                <span>${mat}</span>
            </label>
        `).join('');

    // Safety Instructions
    document.getElementById('safety-badges').innerHTML = 
        exp.safetyInstructions.badges.map(badge => `
            <span class="safety-badge">${badge}</span>
        `).join('');
    
    document.getElementById('safety-warnings').innerHTML = 
        exp.safetyInstructions.warnings.map(warn => `
            <div class="warning-item">⚠️ ${warn}</div>
        `).join('');

    document.getElementById('safety-dos').innerHTML = 
        exp.safetyInstructions.dos.map(doItem => `<li>${doItem}</li>`).join('');
    
    document.getElementById('safety-donts').innerHTML = 
        exp.safetyInstructions.donts.map(dontItem => `<li>${dontItem}</li>`).join('');

    // Variables
    document.getElementById('independent-vars').textContent = exp.variables.independent.join(', ');
    document.getElementById('dependent-vars').textContent = exp.variables.dependent.join(', ');
    document.getElementById('controlled-vars').textContent = exp.variables.controlled.join(', ');

    // Parameters
    renderParameters(exp.parameters);

    // Formula
    renderFormula(exp.formula);

    // Pro Tips
    renderProTips(exp.proTips);

    // Quiz
    renderQuiz(exp.quiz);

    // Initialize simulation
    initializeSimulation(exp);
}

function renderParameters(parameters) {
    const container = document.getElementById('parameters-container');
    if (!container) return;

    container.innerHTML = parameters.map(param => `
        <div class="parameter-group">
            <label for="param-${param.name}">${param.label}</label>
            <div class="parameter-controls">
                <input type="range" 
                       id="param-${param.name}" 
                       class="param-slider"
                       data-param="${param.name}"
                       min="${param.min}" 
                       max="${param.max}" 
                       step="${param.step}" 
                       value="${param.value}">
                <div class="parameter-value">
                    <span id="value-${param.name}">${param.value}</span>
                    <span class="unit">${param.unit}</span>
                </div>
            </div>
        </div>
    `).join('');

    // Add slider listeners
    container.querySelectorAll('.param-slider').forEach(slider => {
        slider.addEventListener('input', (e) => {
            const paramName = e.target.dataset.param;
            const value = e.target.value;
            document.getElementById(`value-${paramName}`).textContent = value;
            runSimulation();
        });
    });
}

function renderFormula(formula) {
    const container = document.getElementById('formula-display');
    if (!container) return;

    container.innerHTML = `
        <div class="formula-main">
            <code>${formula.equation}</code>
        </div>
        <div class="formula-explanation">
            <p><strong>Where:</strong></p>
            <ul>
                ${formula.variables.map(v => `<li>${v.symbol} = ${v.description}</li>`).join('')}
            </ul>
        </div>
        <div class="formula-units">
            <p><strong>Units:</strong> ${formula.units}</p>
        </div>
    `;

    // Render MathJax
    if (window.MathJax) {
        MathJax.typesetPromise([container]);
    }
}

function renderProTips(proTips) {
    const container = document.getElementById('pro-tips-content');
    if (!container) return;

    container.innerHTML = `
        <div class="tips-section">
            <h4>📝 Exam Tips</h4>
            <ul>${proTips.examTips.map(tip => `<li>${tip}</li>`).join('')}</ul>
        </div>
        <div class="tips-section">
            <h4>❓ Viva Questions</h4>
            <ul>${proTips.vivaQuestions.map(q => `<li>${q}</li>`).join('')}</ul>
        </div>
        <div class="tips-section">
            <h4>⚠️ Common Mistakes</h4>
            <ul>${proTips.commonMistakes.map(m => `<li>${m}</li>`).join('')}</ul>
        </div>
        <div class="tips-section">
            <h4>🔧 Troubleshooting</h4>
            <ul>${proTips.troubleshooting.map(t => `<li>${t}</li>`).join('')}</ul>
        </div>
    `;
}
// Simulation Engine
function initializeSimulation(exp) {
    AppState.simulationData = {
        experimentId: exp.id,
        parameters: {},
        results: [],
        observations: []
    };

    // Initialize parameter values
    exp.parameters.forEach(param => {
        AppState.simulationData.parameters[param.name] = param.value;
    });

    // Run initial simulation
    runSimulation();
}

function runSimulation() {
    const exp = AppState.currentExperiment;
    if (!exp) return;

    // Get current parameter values
    const params = {};
    exp.parameters.forEach(param => {
        const slider = document.getElementById(`param-${param.name}`);
        if (slider) {
            params[param.name] = parseFloat(slider.value);
        }
    });

    AppState.simulationData.parameters = params;

    // Calculate results based on experiment type
    let results = calculateResults(exp, params);
    AppState.simulationData.results = results;

    // Display results
    displayResults(results);

    // Generate graph
    generateGraph(exp, params, results);
}

function calculateResults(exp, params) {
    // Generic calculation based on formula
    const results = [];
    
    // Create variation of parameters for table
    const baseParam = exp.parameters[0];
    if (baseParam) {
        const variations = [];
        const step = (baseParam.max - baseParam.min) / 5;
        
        for (let i = 0; i <= 5; i++) {
            variations.push(baseParam.min + step * i);
        }

        variations.forEach(value => {
            const testParams = { ...params, [baseParam.name]: value };
            const result = evaluateFormula(exp.formula, testParams);
            results.push({
                [baseParam.name]: value.toFixed(2),
                result: result.toFixed(4),
                unit: exp.formula.resultUnit
            });
        });
    }

    return results;
}

function evaluateFormula(formula, params) {
    try {
        // Create a safe evaluation context
        let expression = formula.equation;
        
        // Replace variable symbols with actual values
        formula.variables.forEach(v => {
            const regex = new RegExp(`\\b${v.symbol}\\b`, 'g');
            expression = expression.replace(regex, params[v.symbol] || 0);
        });

        // Clean up the expression (remove LaTeX formatting if any)
        expression = expression.replace(/\$/g, '')
                              .replace(/\\times/g, '*')
                              .replace(/\\div/g, '/')
                              .replace(/\\sqrt{/g, 'Math.sqrt(')
                              .replace(/\\pi/g, 'Math.PI')
                              .replace(/\^/g, '**');

        // Safe evaluation
        const result = Function('"use strict";return (' + expression + ')')();
        return isNaN(result) ? 0 : result;
    } catch (e) {
        console.error('Formula evaluation error:', e);
        return 0;
    }
}

function displayResults(results) {
    const container = document.getElementById('results-table-body');
    if (!container) return;

    if (results.length === 0) {
        container.innerHTML = '<tr><td colspan="3">Run simulation to see results</td></tr>';
        return;
    }

    const columns = Object.keys(results[0]);
    
    // Table header
    const headerRow = columns.map(col => `<th>${col}</th>`).join('');
    
    // Table body
    const rows = results.map(row => {
        const cells = columns.map(col => `<td>${row[col]}</td>`).join('');
        return `<tr>${cells}</tr>`;
    }).join('');

    container.innerHTML = `
        <tr class="header-row">${headerRow}</tr>
        ${rows}
    `;

    // Calculate statistics
    const resultValues = results.map(r => parseFloat(r.result));
    const avg = resultValues.reduce((a, b) => a + b, 0) / resultValues.length;
    const min = Math.min(...resultValues);
    const max = Math.max(...resultValues);

    document.getElementById('result-average').textContent = avg.toFixed(4);
    document.getElementById('result-min').textContent = min.toFixed(4);
    document.getElementById('result-max').textContent = max.toFixed(4);
}

function generateGraph(exp, params, results) {
    const ctx = document.getElementById('simulationChart');
    if (!ctx) return;

    // Destroy existing chart
    if (AppState.chartInstances.simulation) {
        AppState.chartInstances.simulation.destroy();
    }

    if (results.length === 0) return;

    const firstKey = Object.keys(results[0])[0];
    const labels = results.map(r => r[firstKey]);
    const data = results.map(r => parseFloat(r.result));

    AppState.chartInstances.simulation = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: `${exp.name} - Results`,
                data: data,
                borderColor: 'rgb(99, 102, 241)',
                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: AppState.darkMode ? '#e5e7eb' : '#374151'
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    ticks: {
                        color: AppState.darkMode ? '#e5e7eb' : '#374151'
                    },
                    grid: {
                        color: AppState.darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: AppState.darkMode ? '#e5e7eb' : '#374151'
                    },
                    grid: {
                        color: AppState.darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                    }
                }
            }
        }
    });
}

// Quiz System
function renderQuiz(quiz) {
    const container = document.getElementById('quiz-container');
    if (!container) return;

    if (!quiz || quiz.questions.length === 0) {
        container.innerHTML = '<p>No quiz available for this experiment.</p>';
        return;
    }

    AppState.currentQuiz = {
        questions: quiz.questions,
        currentQuestion: 0,
        score: 0,
        answers: []
    };

    renderQuizQuestion();
}

function renderQuizQuestion() {
    const container = document.getElementById('quiz-question-area');
    if (!container || !AppState.currentQuiz) return;

    const quiz = AppState.currentQuiz;
    if (quiz.currentQuestion >= quiz.questions.length) {
        showQuizResults();
        return;
    }

    const question = quiz.questions[quiz.currentQuestion];
    
    container.innerHTML = `
        <div class="quiz-progress">
            <span>Question ${quiz.currentQuestion + 1} of ${quiz.questions.length}</span>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${(quiz.currentQuestion / quiz.questions.length) * 100}%"></div>
            </div>
        </div>
        
        <div class="question-text">${question.question}</div>
        
        <div class="options-list">
            ${question.options.map((opt, idx) => `
                <button class="option-btn" data-index="${idx}" onclick="selectQuizOption(${idx})">
                    ${opt}
                </button>
            `).join('')}
        </div>
    `;
}

function selectQuizOption(optionIndex) {
    const quiz = AppState.currentQuiz;
    const question = quiz.questions[quiz.currentQuestion];
    
    // Record answer
    quiz.answers.push({
        questionIndex: quiz.currentQuestion,
        selected: optionIndex,
        correct: question.correct === optionIndex
    });

    if (question.correct === optionIndex) {
        quiz.score++;
    }

    // Move to next question
    quiz.currentQuestion++;
    renderQuizQuestion();
}

function showQuizResults() {
    const container = document.getElementById('quiz-question-area');
    if (!container || !AppState.currentQuiz) return;

    const quiz = AppState.currentQuiz;
    const percentage = (quiz.score / quiz.questions.length) * 100;

    // Save score
    if (AppState.currentExperiment) {
        AppState.quizScores[AppState.currentExperiment.id] = {
            score: quiz.score,
            total: quiz.questions.length,
            percentage: percentage,
            date: new Date().toISOString()
        };
        saveToLocalStorage();
    }

    container.innerHTML = `
        <div class="quiz-results">
            <div class="score-display">
                <span class="score-number">${quiz.score}/${quiz.questions.length}</span>
                <span class="score-percentage">${percentage.toFixed(0)}%</span>
            </div>
            
            <div class="score-message">
                ${getMessageForScore(percentage)}
            </div>

            <div class="review-answers">
                <h4>Review Answers:</h4>
                ${quiz.answers.map((answer, idx) => {
                    const question = quiz.questions[idx];
                    return `
                        <div class="review-item ${answer.correct ? 'correct' : 'incorrect'}">
                            <p><strong>Q${idx + 1}:</strong> ${question.question}</p>
                            <p>Your answer: ${question.options[answer.selected]}</p>
                            ${!answer.correct ? `<p class="correct-answer">Correct: ${question.options[question.correct]}</p>` : ''}
                        </div>
                    `;
                }).join('')}
            </div>

            <button class="retry-btn" onclick="restartQuiz()">🔄 Retry Quiz</button>
        </div>
    `;
}

function getMessageForScore(percentage) {
    if (percentage === 100) return '🏆 Perfect Score! You\'re a master!';
    if (percentage >= 80) return '🌟 Excellent work! Keep it up!';
    if (percentage >= 60) return '👍 Good job! Room for improvement.';
    if (percentage >= 40) return '📚 Keep studying! You\'ll get better.';
    return '💪 Don\'t give up! Try again!';
}

function restartQuiz() {
    if (AppState.currentExperiment) {
        renderQuiz(AppState.currentExperiment.quiz);
    }
}

// Toggle Save Experiment
function toggleSave(expId) {
    if (AppState.savedExperiments.has(expId)) {
        AppState.savedExperiments.delete(expId);
    } else {
        AppState.savedExperiments.add(expId);
    }
    saveToLocalStorage();
    
    // Re-render if on experiments view
    if (AppState.currentView === 'experiments') {
        renderExperimentsGrid();
    }
    
    // Update detail view button if open
    updateSaveButtonState(expId);
}

function updateSaveButtonState(expId) {
    const btn = document.getElementById('save-experiment-btn');
    if (btn) {
        const isSaved = AppState.savedExperiments.has(expId);
        btn.textContent = isSaved ? '⭐ Saved' : '☆ Save';
        btn.classList.toggle('saved', isSaved);
    }
}

// Mark Experiment Complete
function markExperimentComplete() {
    if (AppState.currentExperiment) {
        AppState.completedExperiments.add(AppState.currentExperiment.id);
        saveToLocalStorage();
        
        // Check achievements
        checkAchievements();
        
        // Show completion message
        showNotification('Experiment completed! 🎉');
        
        // Update UI
        const completeBtn = document.getElementById('mark-complete-btn');
        if (completeBtn) {
            completeBtn.textContent = '✓ Completed';
            completeBtn.disabled = true;
        }
    }
}

// Achievement System
function checkAchievements() {
    const newAchievements = [];
    
    // First experiment
    if (AppState.completedExperiments.size === 1) {
        newAchievements.push({
            id: 'first_experiment',
            name: 'First Steps',
            description: 'Complete your first experiment',
            icon: '🎯',
            unlockedAt: new Date().toISOString()
        });
    }

    // Physics Explorer
    const physicsCompleted = [...AppState.completedExperiments].filter(
        id => AppState.experiments.find(e => e.id === id)?.category === 'Physics'
    ).length;
    
    if (physicsCompleted >= 3 && !hasAchievement('physics_explorer')) {
        newAchievements.push({
            id: 'physics_explorer',
            name: 'Physics Explorer',
            description: 'Complete 3 Physics experiments',
            icon: '⚡',
            unlockedAt: new Date().toISOString()
        });
    }

    // Chemistry Expert
    const chemistryCompleted = [...AppState.completedExperiments].filter(
        id => AppState.experiments.find(e => e.id === id)?.category === 'Chemistry'
    ).length;
    
    if (chemistryCompleted >= 3 && !hasAchievement('chemistry_expert')) {
        newAchievements.push({
            id: 'chemistry_expert',
            name: 'Chemistry Expert',
            description: 'Complete 3 Chemistry experiments',
            icon: '🧪',
            unlockedAt: new Date().toISOString()
        });
    }

    // Biology Researcher
    const biologyCompleted = [...AppState.completedExperiments].filter(
        id => AppState.experiments.find(e => e.id === id)?.category === 'Biology'
    ).length;
    
    if (biologyCompleted >= 3 && !hasAchievement('biology_researcher')) {
        newAchievements.push({
            id: 'biology_researcher',
            name: 'Biology Researcher',
            description: 'Complete 3 Biology experiments',
            icon: '🔬',
            unlockedAt: new Date().toISOString()
        });
    }

    // Lab Master
    if (AppState.completedExperiments.size >= 10 && !hasAchievement('lab_master')) {
        newAchievements.push({
            id: 'lab_master',
            name: 'Lab Master',
            description: 'Complete 10 experiments',
            icon: '🏆',
            unlockedAt: new Date().toISOString()
        });
    }

    // Science Champion
    if (AppState.completedExperiments.size === AppState.experiments.length && !hasAchievement('science_champion')) {
        newAchievements.push({
            id: 'science_champion',
            name: 'Science Champion',
            description: 'Complete all experiments!',
            icon: '👑',
            unlockedAt: new Date().toISOString()
        });
    }

    // Add new achievements
    newAchievements.forEach(ach => {
        if (!hasAchievement(ach.id)) {
            AppState.achievements.push(ach);
            showNotification(`🏅 Achievement Unlocked: ${ach.name}!`);
        }
    });

    saveToLocalStorage();
}

function hasAchievement(id) {
    return AppState.achievements.some(a => a.id === id);
}

function renderAchievements() {
    const container = document.getElementById('achievements-grid');
    if (!container) return;

    if (AppState.achievements.length === 0) {
        container.innerHTML = `
            <div class="no-achievements">
                <span class="achievement-icon">🏆</span>
                <h3>No achievements yet</h3>
                <p>Complete experiments to unlock achievements!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = AppState.achievements.map(ach => `
        <div class="achievement-card unlocked">
            <span class="achievement-icon">${ach.icon}</span>
            <div class="achievement-info">
                <h4>${ach.name}</h4>
                <p>${ach.description}</p>
                <span class="unlocked-date">${new Date(ach.unlockedAt).toLocaleDateString()}</span>
            </div>
        </div>
    `).join('');
}

// Notebook Functions
function renderNotebook() {
    const container = document.getElementById('notebook-entries');
    if (!container) return;

    if (AppState.notebook.length === 0) {
        container.innerHTML = `
            <div class="no-notes">
                <span class="note-icon">📓</span>
                <h3>No notes yet</h3>
                <p>Start taking notes during experiments!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = AppState.notebook.map((entry, idx) => `
        <div class="notebook-entry">
            <div class="note-header">
                <h4>${entry.title || 'Untitled Note'}</h4>
                <span class="note-date">${new Date(entry.date).toLocaleString()}</span>
            </div>
            <div class="note-content">${entry.content}</div>
            ${entry.experimentId ? `<span class="note-experiment">Related: ${getExperimentName(entry.experimentId)}</span>` : ''}
            <div class="note-actions">
                <button onclick="editNote(${idx})">✏️ Edit</button>
                <button onclick="deleteNote(${idx})">🗑️ Delete</button>
            </div>
        </div>
    `).join('');
}

function getExperimentName(expId) {
    const exp = AppState.experiments.find(e => e.id === expId);
    return exp ? exp.name : 'Unknown Experiment';
}

function saveNotebookEntry() {
    const title = document.getElementById('note-title')?.value || '';
    const content = document.getElementById('note-content')?.value || '';
    
    if (!content.trim()) {
        showNotification('Please enter some content for your note.');
        return;
    }

    const entry = {
        id: Date.now(),
        title,
        content,
        date: new Date().toISOString(),
        experimentId: AppState.currentExperiment?.id || null
    };

    AppState.notebook.push(entry);
    saveToLocalStorage();
    
    // Clear form
    if (document.getElementById('note-title')) document.getElementById('note-title').value = '';
    if (document.getElementById('note-content')) document.getElementById('note-content').value = '';
    
    renderNotebook();
    showNotification('Note saved successfully! 📝');
}

function editNote(index) {
    const entry = AppState.notebook[index];
    if (!entry) return;

    document.getElementById('note-title').value = entry.title;
    document.getElementById('note-content').value = entry.content;
    
    // Remove old entry
    AppState.notebook.splice(index, 1);
    saveToLocalStorage();
    renderNotebook();
}

function deleteNote(index) {
    if (confirm('Are you sure you want to delete this note?')) {
        AppState.notebook.splice(index, 1);
        saveToLocalStorage();
        renderNotebook();
        showNotification('Note deleted.');
    }
}
// JSON Manager Functions
function renderJSONManager() {
    const container = document.getElementById('json-manager-content');
    if (!container) return;

    // Render current experiment count
    document.getElementById('current-experiment-count').textContent = AppState.experiments.length;
}

function exportJSON() {
    const dataStr = JSON.stringify(AppState.experiments, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `science-lab-experiments-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Experiments exported successfully! 📥');
}

function importJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const importedData = JSON.parse(e.target.result);
            
            // Validate structure
            if (!validateExperimentData(importedData)) {
                throw new Error('Invalid experiment data structure');
            }

            // Merge with existing experiments
            const newIds = new Set(importedData.map(exp => exp.id));
            const existingWithoutDuplicates = AppState.experiments.filter(
                exp => !newIds.has(exp.id)
            );
            
            AppState.experiments = [...existingWithoutDuplicates, ...importedData];
            AppState.filteredExperiments = [...AppState.experiments];
            
            saveToLocalStorage();
            showNotification(`Successfully imported ${importedData.length} experiments! 📤`);
            
            // Update count
            document.getElementById('current-experiment-count').textContent = AppState.experiments.length;
            
        } catch (error) {
            showNotification('Error importing JSON: ' + error.message);
            console.error('Import error:', error);
        }
    };
    reader.readAsText(file);
    
    // Reset file input
    event.target.value = '';
}

function validateJSON() {
    const textarea = document.getElementById('json-validate-input');
    if (!textarea) return;

    const jsonStr = textarea.value.trim();
    if (!jsonStr) {
        showNotification('Please enter JSON to validate.');
        return;
    }

    try {
        const parsed = JSON.parse(jsonStr);
        
        if (validateExperimentData(parsed)) {
            document.getElementById('validation-result').innerHTML = `
                <div class="validation-success">
                    ✅ Valid JSON structure!<br>
                    Found ${Array.isArray(parsed) ? parsed.length : 1} experiment(s)
                </div>
            `;
        } else {
            document.getElementById('validation-result').innerHTML = `
                <div class="validation-error">
                    ❌ Invalid structure. Expected array of experiments or single experiment object.
                </div>
            `;
        }
    } catch (error) {
        document.getElementById('validation-result').innerHTML = `
            <div class="validation-error">
                ❌ Invalid JSON: ${error.message}
            </div>
        `;
    }
}

function validateExperimentData(data) {
    if (!data) return false;
    
    // Handle array of experiments
    if (Array.isArray(data)) {
        return data.every(exp => validateSingleExperiment(exp));
    }
    
    // Handle single experiment
    return validateSingleExperiment(data);
}

function validateSingleExperiment(exp) {
    const requiredFields = ['id', 'name', 'category', 'objective', 'theory', 'materials'];
    return requiredFields.every(field => exp.hasOwnProperty(field));
}

function backupJSON() {
    const backup = {
        experiments: AppState.experiments,
        completedExperiments: [...AppState.completedExperiments],
        savedExperiments: [...AppState.savedExperiments],
        notebook: AppState.notebook,
        achievements: AppState.achievements,
        quizScores: AppState.quizScores,
        backupDate: new Date().toISOString()
    };

    const dataStr = JSON.stringify(backup, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `science-lab-backup-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Backup created successfully! 💾');
}

// Report Export Functions
function exportReport() {
    if (!AppState.currentExperiment) {
        showNotification('Please open an experiment first.');
        return;
    }

    const exp = AppState.currentExperiment;
    const results = AppState.simulationData.results || [];
    
    let report = `
SCIENCE LAB - EXPERIMENT REPORT
================================

Experiment: ${exp.name}
Category: ${exp.category}
Difficulty: ${exp.difficulty}
Date: ${new Date().toLocaleString()}

---------------------------------
OBJECTIVE
---------------------------------
${exp.objective}

---------------------------------
THEORY
---------------------------------
ELI10: ${exp.theory.el10}

Advanced: ${exp.theory.advanced}

Applications:
${exp.theory.applications.map(app => `• ${app}`).join('\n')}

---------------------------------
MATERIALS USED
---------------------------------
${exp.materials.map(m => `□ ${m}`).join('\n')}

---------------------------------
SAFETY INSTRUCTIONS
---------------------------------
Badges: ${exp.safetyInstructions.badges.join(', ')}

Warnings:
${exp.safetyInstructions.warnings.map(w => `⚠️ ${w}`).join('\n')}

Do's:
${exp.safetyInstructions.dos.map(d => `✓ ${d}`).join('\n')}

Don'ts:
${exp.safetyInstructions.donts.map(d => `✗ ${d}`).join('\n')}

---------------------------------
VARIABLES
---------------------------------
Independent: ${exp.variables.independent.join(', ')}
Dependent: ${exp.variables.dependent.join(', ')}
Controlled: ${exp.variables.controlled.join(', ')}

---------------------------------
FORMULA
---------------------------------
${exp.formula.equation}

${exp.formula.variables.map(v => `${v.symbol} = ${v.description}`).join('\n')}

Units: ${exp.formula.units}

---------------------------------
SIMULATION RESULTS
---------------------------------
`;

    if (results.length > 0) {
        const headers = Object.keys(results[0]).join('\t| ');
        report += `\n${headers}\n`;
        report += '-'.repeat(headers.length) + '\n';
        
        results.forEach(row => {
            report += Object.values(row).join('\t| ') + '\n';
        });

        const resultValues = results.map(r => parseFloat(r.result));
        const avg = resultValues.reduce((a, b) => a + b, 0) / resultValues.length;
        const min = Math.min(...resultValues);
        const max = Math.max(...resultValues);

        report += `
Statistics:
• Average: ${avg.toFixed(4)}
• Minimum: ${min.toFixed(4)}
• Maximum: ${max.toFixed(4)}
`;
    }

    report += `
---------------------------------
PRO TIPS
---------------------------------
Exam Tips:
${exp.proTips.examTips.map(t => `• ${t}`).join('\n')}

Viva Questions:
${exp.proTips.vivaQuestions.map(q => `• ${q}`).join('\n')}

Common Mistakes:
${exp.proTips.commonMistakes.map(m => `• ${m}`).join('\n')}

Troubleshooting:
${exp.proTips.troubleshooting.map(t => `• ${t}`).join('\n')}

---------------------------------
NOTES
---------------------------------
${document.getElementById('note-content')?.value || 'No notes added.'}

================================
End of Report
================================
`;

    // Download as text file
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${exp.name.replace(/[^a-z0-9]/gi, '_')}_report.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Report downloaded! 📄');
}

// Utility Functions
function showNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

function goBackToList() {
    document.getElementById('experiment-detail-view')?.classList.remove('active');
    document.getElementById('experiments-view')?.classList.add('active');
    AppState.currentExperiment = null;
}

// Initialize on load
window.addEventListener('load', () => {
    // Ensure Chart.js is loaded
    if (typeof Chart === 'undefined') {
        console.warn('Chart.js not loaded yet, waiting...');
        setTimeout(() => window.dispatchEvent(new Event('load')), 500);
        return;
    }
    
    initializeApp();
});

// Handle keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // ESC to close modals
    if (e.key === 'Escape') {
        closeModal();
    }
    
    // Ctrl+S to save note
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        saveNotebookEntry();
    }
    
    // Ctrl+E to export report
    if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();
        exportReport();
    }
});

// Prevent accidental navigation during experiment
window.addEventListener('beforeunload', (e) => {
    if (AppState.currentExperiment) {
        e.preventDefault();
        e.returnValue = '';
    }
});

console.log('ScienceLab Pro initialized successfully! 🔬');
