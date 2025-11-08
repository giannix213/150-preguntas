// Lista de 150 preguntas para conocerse
const questions = [
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
    "¿Cuál es tu mayor logro hasta ahora?",
    "¿Qué te gustaría cambiar de ti mismo/a?",
    "¿Cuál es tu película favorita y por qué?",
    "¿Qué te hace sentir más agradecido/a?",
    "¿Cuál es tu mayor inseguridad?",
    "¿Qué consejo le darías a tu yo de hace 5 años?",
    "¿Cuál es tu comida favorita?",
    "¿Qué te apasiona realmente?",
    "¿Cuál es tu mayor fortaleza?",
    "¿Qué te gustaría aprender?",
    "¿Cuál es tu libro favorito?",
    "¿Qué te hace sentir en paz?",
    "¿Cuál es tu mayor debilidad?",
    "¿Qué te motiva cada día?",
    "¿Cuál es tu color favorito y por qué?",
    "¿Qué te hace sentir más conectado/a con otros?",
    "¿Cuál es tu mayor esperanza para el futuro?",
    "¿Qué te hace sentir más vulnerable?",
    "¿Cuál es tu estación del año favorita?",
    "¿Qué te gustaría que la gente supiera de ti?",
    "¿Cuál es tu mayor talento oculto?",
    "¿Qué te hace sentir más orgulloso/a?",
    "¿Cuál es tu animal favorito?",
    "¿Qué te gustaría hacer antes de morir?",
    "¿Cuál es tu mayor desafío actual?",
    "¿Qué te hace sentir más amado/a?",
    "¿Cuál es tu hobby favorito?",
    "¿Qué te gustaría mejorar en tu vida?",
    "¿Cuál es tu recuerdo más vergonzoso?",
    "¿Qué te hace sentir más inspirado/a?",
    "¿Cuál es tu bebida favorita?",
    "¿Qué te gustaría decirle a alguien pero no te atreves?",
    "¿Cuál es tu mayor cualidad?",
    "¿Qué te hace sentir más seguro/a?",
    "¿Cuál es tu serie favorita?",
    "¿Qué te gustaría experimentar por primera vez?",
    "¿Cuál es tu mayor preocupación?",
    "¿Qué te hace sentir más libre?",
    "¿Cuál es tu deporte favorito?",
    "¿Qué te gustaría que fuera diferente en el mundo?",
    "¿Cuál es tu mayor virtud?",
    "¿Qué te hace sentir más cómodo/a?",
    "¿Cuál es tu artista musical favorito?",
    "¿Qué te gustaría perdonarte a ti mismo/a?",
    "¿Cuál es tu mayor defecto?",
    "¿Qué te hace sentir más emocionado/a?",
    "¿Cuál es tu postre favorito?",
    "¿Qué te gustaría celebrar más en tu vida?",
    "¿Cuál es tu mayor lección aprendida?",
    "¿Qué te hace sentir más tranquilo/a?",
    "¿Cuál es tu ciudad favorita?",
    "¿Qué te gustaría que la gente recordara de ti?",
    "¿Cuál es tu mayor valor personal?",
    "¿Qué te hace sentir más ansioso/a?",
    "¿Cuál es tu videojuego favorito?",
    "¿Qué te gustaría hacer más a menudo?",
    "¿Cuál es tu mayor sueño no cumplido?",
    "¿Qué te hace sentir más feliz?",
    "¿Cuál es tu olor favorito?",
    "¿Qué te gustaría cambiar del pasado?",
    "¿Cuál es tu mayor creencia?",
    "¿Qué te hace sentir más triste?",
    "¿Cuál es tu tradición favorita?",
    "¿Qué te gustaría hacer con más tiempo?",
    "¿Cuál es tu mayor meta?",
    "¿Qué te hace sentir más enojado/a?",
    "¿Cuál es tu momento del día favorito?",
    "¿Qué te gustaría decirle a tu yo del futuro?",
    "¿Cuál es tu mayor principio?",
    "¿Qué te hace sentir más esperanzado/a?",
    "¿Cuál es tu tipo de música favorita?",
    "¿Qué te gustaría experimentar de nuevo?",
    "¿Cuál es tu mayor convicción?",
    "¿Qué te hace sentir más nostálgico/a?",
    "¿Cuál es tu paisaje favorito?",
    "¿Qué te gustaría agradecer más?",
    "¿Cuál es tu mayor ideal?",
    "¿Qué te hace sentir más curioso/a?",
    "¿Cuál es tu flor favorita?",
    "¿Qué te gustaría compartir más con otros?",
    "¿Cuál es tu mayor aspiración?",
    "¿Qué te hace sentir más sorprendido/a?",
    "¿Cuál es tu estilo de ropa favorito?",
    "¿Qué te gustaría explorar más?",
    "¿Cuál es tu mayor ambición?",
    "¿Qué te hace sentir más confundido/a?",
    "¿Cuál es tu tipo de comida favorita?",
    "¿Qué te gustaría descubrir sobre ti mismo/a?",
    "¿Cuál es tu mayor deseo?",
    "¿Qué te hace sentir más relajado/a?",
    "¿Cuál es tu forma de arte favorita?",
    "¿Qué te gustaría aceptar más de ti?",
    "¿Cuál es tu mayor anhelo?",
    "¿Qué te hace sentir más energizado/a?",
    "¿Cuál es tu época del año favorita para viajar?",
    "¿Qué te gustaría soltar o dejar ir?",
    "¿Cuál es tu mayor ilusión?",
    "¿Qué te hace sentir más cansado/a?",
    "¿Cuál es tu tipo de película favorita?",
    "¿Qué te gustaría abrazar más en tu vida?",
    "¿Cuál es tu mayor fantasía?",
    "¿Qué te hace sentir más despierto/a?",
    "¿Cuál es tu actividad de fin de semana favorita?",
    "¿Qué te gustaría manifestar en tu vida?",
    "¿Cuál es tu mayor visión?",
    "¿Qué te hace sentir más somnoliento/a?",
    "¿Cuál es tu tipo de libro favorito?",
    "¿Qué te gustaría crear?",
    "¿Cuál es tu mayor propósito?",
    "¿Qué te hace sentir más alerta?",
    "¿Cuál es tu forma de ejercicio favorita?",
    "¿Qué te gustaría construir?",
    "¿Cuál es tu mayor misión?",
    "¿Qué te hace sentir más presente?",
    "¿Cuál es tu tipo de vacaciones favoritas?",
    "¿Qué te gustaría cultivar en tu vida?",
    "¿Cuál es tu mayor vocación?",
    "¿Qué te hace sentir más ausente?",
    "¿Cuál es tu forma de relajarte favorita?",
    "¿Qué te gustaría nutrir más?",
    "¿Cuál es tu mayor llamado?",
    "¿Qué te hace sentir más conectado/a contigo mismo/a?",
    "¿Cuál es tu tipo de conversación favorita?",
    "¿Qué te gustaría honrar más en tu vida?",
    "¿Cuál es tu mayor destino?",
    "¿Qué te hace sentir más desconectado/a?",
    "¿Cuál es tu forma de expresarte favorita?",
    "¿Qué te gustaría celebrar de ti mismo/a?",
    "¿Cuál es tu mayor camino?",
    "¿Qué te hace sentir más auténtico/a?",
    "¿Cuál es tu tipo de persona favorita?",
    "¿Qué te gustaría reconocer más en ti?",
    "¿Cuál es tu mayor viaje?",
    "¿Qué te hace sentir más genuino/a?",
    "¿Cuál es tu forma de amar favorita?",
    "¿Qué te gustaría valorar más?",
    "¿Cuál es tu mayor aventura?",
    "¿Qué te hace sentir más real?",
    "¿Cuál es tu tipo de día favorito?",
    "¿Qué te gustaría apreciar más de la vida?",
    "¿Cuál es tu mayor transformación deseada?",
    "¿Qué te hace sentir más tú mismo/a?"
];

let currentQuestionIndex = 0;
let score1 = 0;
let score2 = 0;
let player1Answered = false;
let player2Answered = false;
let usedQuestions = [];

// Elementos del DOM
const questionText = document.getElementById('questionText');
const currentQuestionSpan = document.getElementById('currentQuestion');
const progressFill = document.getElementById('progressFill');
const score1Element = document.getElementById('score1');
const score2Element = document.getElementById('score2');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const submitBtn1 = document.getElementById('submitBtn1');
const submitBtn2 = document.getElementById('submitBtn2');
const nextBtn = document.getElementById('nextBtn');
const randomBtn = document.getElementById('randomBtn');
const customQuestion = document.getElementById('customQuestion');
const customBtn = document.getElementById('customBtn');

// Inicializar
function init() {
    updateUI();
    setupEventListeners();
}

function setupEventListeners() {
    // Habilitar botones de enviar cuando hay texto
    answer1.addEventListener('input', () => {
        submitBtn1.disabled = answer1.value.trim() === '';
    });

    answer2.addEventListener('input', () => {
        submitBtn2.disabled = answer2.value.trim() === '';
    });

    // Enviar respuestas
    submitBtn1.addEventListener('click', () => submitAnswer(1));
    submitBtn2.addEventListener('click', () => submitAnswer(2));

    // Siguiente pregunta
    nextBtn.addEventListener('click', nextQuestion);

    // Pregunta random
    randomBtn.addEventListener('click', loadRandomQuestion);

    // Pregunta personalizada
    customBtn.addEventListener('click', loadCustomQuestion);
}

function loadRandomQuestion() {
    if (currentQuestionIndex >= 150) {
        alert('¡Ya han completado las 150 preguntas! 🎉');
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(randomIndex));

    usedQuestions.push(randomIndex);
    questionText.textContent = questions[randomIndex];
    currentQuestionIndex++;
    resetForNewQuestion();
    updateUI();
}

function loadCustomQuestion() {
    const custom = customQuestion.value.trim();
    if (custom === '') {
        alert('Por favor escribe una pregunta');
        return;
    }

    if (currentQuestionIndex >= 150) {
        alert('¡Ya han completado las 150 preguntas! 🎉');
        return;
    }

    questionText.textContent = custom;
    customQuestion.value = '';
    currentQuestionIndex++;
    resetForNewQuestion();
    updateUI();
}

function submitAnswer(player) {
    if (player === 1) {
        player1Answered = true;
        score1++;
        submitBtn1.disabled = true;
        answer1.disabled = true;
        score1Element.textContent = `${score1} puntos`;
    } else {
        player2Answered = true;
        score2++;
        submitBtn2.disabled = true;
        answer2.disabled = true;
        score2Element.textContent = `${score2} puntos`;
    }

    // Habilitar siguiente pregunta solo si ambos respondieron
    if (player1Answered && player2Answered) {
        nextBtn.disabled = false;
    }

    updateUI();
}

function nextQuestion() {
    if (currentQuestionIndex >= 150) {
        showFinalMessage();
        return;
    }

    resetForNewQuestion();
    loadRandomQuestion();
}

function resetForNewQuestion() {
    player1Answered = false;
    player2Answered = false;
    answer1.value = '';
    answer2.value = '';
    answer1.disabled = false;
    answer2.disabled = false;
    submitBtn1.disabled = true;
    submitBtn2.disabled = true;
    nextBtn.disabled = true;
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
    questionText.textContent = `¡Felicidades! Han completado las 150 preguntas. 🎉 Ahora se conocen mucho mejor. ❤️`;
    nextBtn.disabled = true;
    randomBtn.disabled = true;
    customBtn.disabled = true;
}

// Iniciar la aplicación
init();
