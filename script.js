// Preguntas por categoría
const questionsByMode = {
    colaborativo: [
        "¿Cuál es tu recuerdo más feliz de la infancia?",
        "¿Qué es lo que más valoras en una amistad?",
        "¿Cuál es tu mayor miedo?",
        "¿Qué te hace sentir más vivo/a?",
        "¿Cuál es tu sueño más grande?",
        "¿Qué harías si supieras que no puedes fallar?",
        "¿Cuál es tu mayor arrepentimiento?",
        "¿Qué te hace reír sin control?",
        "¿Cuál es tu lugar favorito en el mundo?",
        "¿Qué canción describe tu vida actual?",
        // ... (resto de preguntas colaborativas)
    ],
    romantico: [
        "¿Qué significa el amor para ti?",
        "¿Cuál fue tu primera impresión de mí?",
        "¿Qué es lo que más te atrae de una persona?",
        "¿Crees en el amor a primera vista?",
        "¿Cuál es tu idea de una cita perfecta?",
        "¿Qué gesto romántico te derrite el corazón?",
        "¿Cuál es tu canción de amor favorita?",
        "¿Qué te hace sentir amado/a?",
        "¿Cuál es tu mayor fantasía romántica?",
        "¿Qué cualidad buscas en una pareja?",
    ],
    amigos: [
        "¿Cuál es tu chiste favorito?",
        "¿Qué superpoder elegirías y por qué?",
        "¿Cuál es tu comida favorita?",
        "¿Qué harías con un millón de dólares?",
        "¿Cuál es tu película favorita?",
        "¿Qué videojuego te encanta?",
        "¿Cuál es tu hobby secreto?",
        "¿Qué talento oculto tienes?",
        "¿Cuál es tu serie favorita?",
        "¿Qué te hace reír hasta llorar?",
    ],
    deep: [
        "¿Cuál es el propósito de tu vida?",
        "¿Qué te mantiene despierto por las noches?",
        "¿En qué crees profundamente?",
        "¿Cuál es tu mayor inseguridad?",
        "¿Qué te gustaría cambiar del mundo?",
        "¿Cuál es tu mayor arrepentimiento?",
        "¿Qué te hace sentir más vulnerable?",
        "¿Cuál es tu mayor miedo existencial?",
        "¿Qué legado quieres dejar?",
        "¿Qué verdad sobre ti mismo/a te cuesta aceptar?",
    ]
};

// Completar con más preguntas
for (let i = 0; i < 140; i++) {
    questionsByMode.colaborativo.push(`Pregunta colaborativa ${i + 11}`);
    questionsByMode.romantico.push(`Pregunta romántica ${i + 11}`);
    questionsByMode.amigos.push(`Pregunta de amigos ${i + 11}`);
    questionsByMode.deep.push(`Pregunta profunda ${i + 11}`);
}

// Variables globales
let gameMode = 'colaborativo';
let currentQuestionIndex = 0;
let score1 = 0;
let score2 = 0;
let player1Answered = false;
let player2Answered = false;
let usedQuestions = [];
let player1Name = "Jugador 1";
let player2Name = "Jugador 2";
let player1Avatar = "👤";
let player2Avatar = "👤";
let history = [];
let timerEnabled = false;
let timerInterval = null;
let timeLeft = 60;
let currentReactions = { player1: null, player2: null };
let affinityScore = 0;

// Elementos del DOM
const startModal = document.getElementById('startModal');
const gameContainer = document.getElementById('gameContainer');
const player1NameInput = document.getElementById('player1Name');
const player2NameInput = document.getElementById('player2Name');
const startGameBtn = document.getElementById('startGameBtn');
const timerEnabledCheckbox = document.getElementById('timerEnabled');
const gameModeBadge = document.getElementById('gameModeBadge');
const affinityDisplay = document.getElementById('affinityDisplay');
const affinityScoreSpan = document.getElementById('affinityScore');
const questionText = document.getElementById('questionText');
const questionNumber = document.getElementById('questionNumber');
const currentQuestionSpan = document.getElementById('currentQuestion');
const progressFill = document.getElementById('progressFill');
const timer = document.getElementById('timer');
const timerDisplay = document.getElementById('timerDisplay');
const score1Element = document.getElementById('score1');
const score2Element = document.getElementById('score2');
const player1Title = document.getElementById('player1Title');
const player2Title = document.getElementById('player2Title');
const player1AvatarSpan = document.getElementById('player1Avatar');
const player2AvatarSpan = document.getElementById('player2Avatar');
const status1 = document.getElementById('status1');
const status2 = document.getElementById('status2');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const submitBtn1 = document.getElementById('submitBtn1');
const submitBtn2 = document.getElementById('submitBtn2');
const nextBtn = document.getElementById('nextBtn');

const randomBtn = document.getElementById('randomBtn');
const customQuestion = document.getElementById('customQuestion');
const customBtn = document.getElementById('customBtn');
const historyBtn = document.getElementById('historyBtn');
const historyModal = document.getElementById('historyModal');
const closeHistoryBtn = document.getElementById('closeHistoryBtn');
const historyContent = document.getElementById('historyContent');
const historyCount = document.getElementById('historyCount');
const reactionPanel = document.getElementById('reactionPanel');
const reactions1 = document.getElementById('reactions1');
const reactions2 = document.getElementById('reactions2');
const reactionDisplay1 = document.getElementById('reactionDisplay1');
const reactionDisplay2 = document.getElementById('reactionDisplay2');
const otherPlayer1 = document.getElementById('otherPlayer1');
const otherPlayer2 = document.getElementById('otherPlayer2');
const affinityModal = document.getElementById('affinityModal');
const affinityPercentage = document.getElementById('affinityPercentage');
const affinityMessage = document.getElementById('affinityMessage');
const closeAffinityBtn = document.getElementById('closeAffinityBtn');

// Inicializar
function init() {
    createParticles();
    loadGameState();
    setupEventListeners();
}

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particlesContainer.appendChild(particle);
    }
}

function setupEventListeners() {
    // Selector de modo
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            gameMode = this.dataset.mode;
        });
    });

    // Selector de avatares
    document.querySelectorAll('#avatar1Options .avatar-option').forEach(opt => {
        opt.addEventListener('click', function() {
            document.querySelectorAll('#avatar1Options .avatar-option').forEach(o => o.classList.remove('active'));
            this.classList.add('active');
            player1Avatar = this.dataset.avatar;
        });
    });

    document.querySelectorAll('#avatar2Options .avatar-option').forEach(opt => {
        opt.addEventListener('click', function() {
            document.querySelectorAll('#avatar2Options .avatar-option').forEach(o => o.classList.remove('active'));
            this.classList.add('active');
            player2Avatar = this.dataset.avatar;
        });
    });

    // Iniciar juego
    startGameBtn.addEventListener('click', startGame);
    
    // Enter en inputs
    player1NameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') startGame();
    });
    player2NameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') startGame();
    });

    // Habilitar botones de enviar
    answer1.addEventListener('input', () => {
        submitBtn1.disabled = answer1.value.trim() === '';
    });

    answer2.addEventListener('input', () => {
        submitBtn2.disabled = answer2.value.trim() === '';
    });

    // Enviar respuestas
    submitBtn1.addEventListener('click', () => submitAnswer(1));
    submitBtn2.addEventListener('click', () => submitAnswer(2));

    // Navegación
    nextBtn.addEventListener('click', nextQuestion);

    randomBtn.addEventListener('click', loadRandomQuestion);
    customBtn.addEventListener('click', loadCustomQuestion);
    customQuestion.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') loadCustomQuestion();
    });

    // Historial
    historyBtn.addEventListener('click', openHistory);
    closeHistoryBtn.addEventListener('click', closeHistory);
    historyModal.addEventListener('click', (e) => {
        if (e.target === historyModal) closeHistory();
    });

    // Reacciones
    document.querySelectorAll('.reaction-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const reaction = this.dataset.reaction;
            handleReaction(reaction);
        });
    });

    // Modal de afinidad
    closeAffinityBtn.addEventListener('click', () => {
        affinityModal.style.display = 'none';
    });
}

function startGame() {
    const name1 = player1NameInput.value.trim();
    const name2 = player2NameInput.value.trim();

    if (!name1 || !name2) {
        shakeElement(startGameBtn);
        return;
    }

    player1Name = name1;
    player2Name = name2;
    timerEnabled = timerEnabledCheckbox.checked;

    player1Title.textContent = player1Name;
    player2Title.textContent = player2Name;
    player1AvatarSpan.textContent = player1Avatar;
    player2AvatarSpan.textContent = player2Avatar;
    otherPlayer1.textContent = player2Name;
    otherPlayer2.textContent = player1Name;

    answer1.placeholder = `${player1Name}, escribe tu respuesta aquí...`;
    answer2.placeholder = `${player2Name}, escribe tu respuesta aquí...`;

    // Actualizar badge de modo
    const modeNames = {
        colaborativo: '🤝 Modo Colaborativo',
        romantico: '💕 Modo Romántico',
        amigos: '🎉 Modo Amigos',
        deep: '🧠 Modo Deep Talks'
    };
    gameModeBadge.textContent = modeNames[gameMode];

    startModal.style.display = 'none';
    gameContainer.style.display = 'block';

    saveGameState();
    updateUI();
}

function loadRandomQuestion() {
    if (currentQuestionIndex >= 150) {
        alert('¡Ya han completado las 150 preguntas! 🎉');
        return;
    }

    const questions = questionsByMode[gameMode];
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(randomIndex));

    usedQuestions.push(randomIndex);
    const question = questions[randomIndex];
    displayQuestion(question);
}

function loadCustomQuestion() {
    const custom = customQuestion.value.trim();
    if (custom === '') {
        shakeElement(customQuestion);
        return;
    }

    if (currentQuestionIndex >= 150) {
        alert('¡Ya han completado las 150 preguntas! 🎉');
        return;
    }

    displayQuestion(custom);
    customQuestion.value = '';
}

function displayQuestion(question) {
    currentQuestionIndex++;
    questionText.textContent = question;
    questionNumber.textContent = currentQuestionIndex;
    
    // Animación de entrada
    questionText.style.opacity = '0';
    setTimeout(() => {
        questionText.style.transition = 'opacity 0.5s ease';
        questionText.style.opacity = '1';
    }, 10);

    resetForNewQuestion();
    
    if (timerEnabled) {
        startTimer();
    }

    updateUI();
    saveGameState();
}

function startTimer() {
    timeLeft = 60;
    timer.style.display = 'flex';
    timerDisplay.textContent = timeLeft;
    timer.classList.remove('warning');

    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 10) {
            timer.classList.add('warning');
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimerEnd();
        }
    }, 1000);
}

function handleTimerEnd() {
    alert('⏰ ¡Se acabó el tiempo! Ambos jugadores deben enviar sus respuestas ahora.');
}

function submitAnswer(player) {
    const answerText = player === 1 ? answer1.value.trim() : answer2.value.trim();
    
    if (player === 1) {
        player1Answered = true;
        score1++;
        submitBtn1.disabled = true;
        answer1.disabled = true;
        status1.textContent = '✅ Respuesta enviada';
        status1.classList.remove('waiting');
        status1.classList.add('answered');
        score1Element.textContent = `${score1} puntos`;
        animateScore(score1Element);
        createConfetti();
    } else {
        player2Answered = true;
        score2++;
        submitBtn2.disabled = true;
        answer2.disabled = true;
        status2.textContent = '✅ Respuesta enviada';
        status2.classList.remove('waiting');
        status2.classList.add('answered');
        score2Element.textContent = `${score2} puntos`;
        animateScore(score2Element);
        createConfetti();
    }

    // Guardar en historial
    const currentQuestion = questionText.textContent;
    let historyItem = history.find(h => h.question === currentQuestion);
    
    if (!historyItem) {
        historyItem = {
            question: currentQuestion,
            questionNumber: currentQuestionIndex,
            answers: {},
            reactions: {}
        };
        history.push(historyItem);
    }

    if (player === 1) {
        historyItem.answers[player1Name] = answerText;
    } else {
        historyItem.answers[player2Name] = answerText;
    }

    updateHistoryCount();

    // Habilitar siguiente pregunta y reacciones si ambos respondieron
    if (player1Answered && player2Answered) {
        if (timerInterval) clearInterval(timerInterval);
        timer.style.display = 'none';
        
        nextBtn.disabled = false;
        nextBtn.style.animation = 'bounce 1s ease infinite';
        
        // Mostrar panel de reacciones
        reactionPanel.style.display = 'block';
        
        // Calcular afinidad cada 10 preguntas
        if (currentQuestionIndex % 10 === 0) {
            calculateAffinity();
        }
    }

    updateUI();
    saveGameState();
}

function handleReaction(reaction) {
    // Determinar quién reacciona
    if (player1Answered && !currentReactions.player2) {
        currentReactions.player2 = reaction;
        reactionDisplay1.textContent = reaction;
        reactions1.style.display = 'block';
        
        // Guardar en historial
        const currentQuestion = questionText.textContent;
        const historyItem = history.find(h => h.question === currentQuestion);
        if (historyItem) {
            historyItem.reactions[player2Name] = reaction;
        }
    } else if (player2Answered && !currentReactions.player1) {
        currentReactions.player1 = reaction;
        reactionDisplay2.textContent = reaction;
        reactions2.style.display = 'block';
        
        // Guardar en historial
        const currentQuestion = questionText.textContent;
        const historyItem = history.find(h => h.question === currentQuestion);
        if (historyItem) {
            historyItem.reactions[player1Name] = reaction;
        }
    }

    // Si ambos reaccionaron, ocultar panel
    if (currentReactions.player1 && currentReactions.player2) {
        reactionPanel.style.display = 'none';
    }

    saveGameState();
}

function calculateAffinity() {
    // Algoritmo simple de afinidad basado en longitud de respuestas y palabras comunes
    let totalSimilarity = 0;
    let count = 0;

    history.forEach(item => {
        const answers = Object.values(item.answers);
        if (answers.length === 2) {
            const [ans1, ans2] = answers;
            
            // Similitud por longitud
            const lengthSimilarity = 1 - Math.abs(ans1.length - ans2.length) / Math.max(ans1.length, ans2.length);
            
            // Palabras comunes
            const words1 = ans1.toLowerCase().split(/\s+/);
            const words2 = ans2.toLowerCase().split(/\s+/);
            const commonWords = words1.filter(w => words2.includes(w) && w.length > 3);
            const wordSimilarity = commonWords.length / Math.max(words1.length, words2.length);
            
            totalSimilarity += (lengthSimilarity * 0.3 + wordSimilarity * 0.7);
            count++;
        }
    });

    affinityScore = Math.round((totalSimilarity / count) * 100);
    
    // Mostrar modal de afinidad
    showAffinityModal();
}

function showAffinityModal() {
    affinityPercentage.textContent = affinityScore + '%';
    
    let message = '';
    if (affinityScore >= 80) {
        message = '¡Increíble! Tienen una conexión muy fuerte. Sus respuestas muestran gran afinidad emocional. 💕';
    } else if (affinityScore >= 60) {
        message = '¡Muy bien! Tienen bastante en común. Siguen conociéndose cada vez mejor. 😊';
    } else if (affinityScore >= 40) {
        message = 'Están en buen camino. Cada pregunta los acerca más. ¡Sigan así! 🌟';
    } else {
        message = 'Tienen perspectivas diferentes, ¡y eso es genial! La diversidad enriquece. 🎨';
    }
    
    affinityMessage.textContent = message;
    affinityModal.style.display = 'flex';
    
    // Actualizar display de afinidad en header
    affinityDisplay.style.display = 'block';
    affinityScoreSpan.textContent = affinityScore;
    
    createMassiveConfetti();
}

function nextQuestion() {
    if (currentQuestionIndex >= 150) {
        showFinalMessage();
        return;
    }

    resetForNewQuestion();
    loadRandomQuestion();
}


    if (history.length === 0) return;
    
    const prevItem = history[history.length - 1];
    questionText.textContent = prevItem.question;
    questionNumber.textContent = prevItem.questionNumber;
    
    // Mostrar respuestas anteriores
    const answers = Object.entries(prevItem.answers);
    if (answers.length > 0) {
        answers.forEach(([name, answer]) => {
            if (name === player1Name) {
                answer1.value = answer;
                answer1.disabled = true;
                status1.textContent = '✅ Respuesta enviada';
                status1.classList.add('answered');
            } else {
                answer2.value = answer;
                answer2.disabled = true;
                status2.textContent = '✅ Respuesta enviada';
                status2.classList.add('answered');
            }
        });
    }
    
    // Mostrar reacciones si existen
    if (prevItem.reactions) {
        Object.entries(prevItem.reactions).forEach(([name, reaction]) => {
            if (name === player1Name) {
                reactionDisplay2.textContent = reaction;
                reactions2.style.display = 'block';
            } else {
                reactionDisplay1.textContent = reaction;
                reactions1.style.display = 'block';
            }
        });
    }
    
    nextBtn.disabled = false;

}

function resetForNewQuestion() {
    player1Answered = false;
    player2Answered = false;
    currentReactions = { player1: null, player2: null };
    
    answer1.value = '';
    answer2.value = '';
    answer1.disabled = false;
    answer2.disabled = false;
    submitBtn1.disabled = true;
    submitBtn2.disabled = true;
    nextBtn.disabled = true;
    nextBtn.style.animation = 'none';

    
    status1.textContent = '⏳ Esperando respuesta...';
    status1.classList.remove('answered');
    status1.classList.add('waiting');
    
    status2.textContent = '⏳ Esperando respuesta...';
    status2.classList.remove('answered');
    status2.classList.add('waiting');
    
    reactions1.style.display = 'none';
    reactions2.style.display = 'none';
    reactionPanel.style.display = 'none';
}

function updateUI() {
    currentQuestionSpan.textContent = currentQuestionIndex;
    const progress = (currentQuestionIndex / 150) * 100;
    progressFill.style.width = `${progress}%`;

    if (currentQuestionIndex >= 150) {
        randomBtn.disabled = true;
        customBtn.disabled = true;
        showFinalMessage();
    }
}

function showFinalMessage() {
    questionText.textContent = `¡Felicidades ${player1Name} y ${player2Name}! Han completado las 150 preguntas. 🎉 Ahora se conocen mucho mejor. ❤️`;
    nextBtn.disabled = true;
    randomBtn.disabled = true;
    customBtn.disabled = true;
    
    // Calcular afinidad final
    if (history.length > 0) {
        calculateAffinity();
    }
    
    createMassiveConfetti();
}

function openHistory() {
    if (history.length === 0) {
        historyContent.innerHTML = '<p class="empty-history">Aún no hay respuestas en el historial.</p>';
    } else {
        let html = '';
        history.forEach((item, index) => {
            html += `
                <div class="history-item" style="animation-delay: ${index * 0.05}s">
                    <div class="history-question">💬 Pregunta #${item.questionNumber}: ${item.question}</div>
                    <div class="history-answers">
            `;
            
            for (const [playerName, answer] of Object.entries(item.answers)) {
                const avatar = playerName === player1Name ? player1Avatar : player2Avatar;
                const reaction = item.reactions && item.reactions[playerName === player1Name ? player2Name : player1Name] || '';
                
                html += `
                    <div class="history-answer">
                        <div class="history-answer-player">${avatar} ${playerName}: ${reaction}</div>
                        <div class="history-answer-text">${answer}</div>
                    </div>
                `;
            }
            
            html += `
                    </div>
                </div>
            `;
        });
        historyContent.innerHTML = html;
    }
    
    historyModal.style.display = 'flex';
}

function closeHistory() {
    historyModal.style.display = 'none';
}

function updateHistoryCount() {
    historyCount.textContent = history.length;
}

function animateScore(element) {
    element.classList.add('animate');
    setTimeout(() => {
        element.classList.remove('animate');
    }, 500);
}

function shakeElement(element) {
    element.style.animation = 'shake 0.5s ease';
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#ff6b6b', '#51cf66', '#ffa94d'];
    const confettiContainer = document.getElementById('confetti');
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.opacity = '1';
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

function createMassiveConfetti() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#ff6b6b', '#51cf66', '#ffa94d'];
    const confettiContainer = document.getElementById('confetti');
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = '0s';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.opacity = '1';
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 10 + 5) + 'px';
            
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 30);
    }
}

// LocalStorage
function saveGameState() {
    const gameState = {
        gameMode,
        currentQuestionIndex,
        score1,
        score2,
        player1Name,
        player2Name,
        player1Avatar,
        player2Avatar,
        history,
        usedQuestions,
        affinityScore,
        timerEnabled
    };
    localStorage.setItem('150preguntasGameState', JSON.stringify(gameState));
}

function loadGameState() {
    const saved = localStorage.getItem('150preguntasGameState');
    if (saved) {
        const gameState = JSON.parse(saved);
        // Opcionalmente cargar estado guardado
        // Por ahora solo guardamos para no perder progreso en refresh
    }
}

// Iniciar la aplicación
init();

function continueToModeSelection(){
    const n1=document.getElementById('player1Name').value.trim();
    const n2=document.getElementById('player2Name').value.trim();
    if(!n1||!n2){alert('Ingresa ambos nombres');return;}
    player1Name=n1;player2Name=n2;
    document.getElementById('registerModal').style.display='none';
    document.getElementById('startModal').style.display='flex';
    console.log('Cambiando a modo selección');
}
