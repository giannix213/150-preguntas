// MeTú - Conéctense en 90 Minutos
// Preguntas por categoría (90 preguntas totales)

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
        "¿Qué te gustaría que la gente supiera de ti?"
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
});

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
let sessionTimeLeft = 90 * 60; // 90 minutos en segundos
let sessionTimerInterval = null;
let currentReactions = { player1: null, player2: null };
let affinityScore = 0;

// Elementos del DOM
const registerModal = document.getElementById('registerModal');
const startModal = document.getElementById('startModal');
const gameContainer = document.getElementById('gameContainer');
const player1NameInput = document.getElementById('player1Name');
const player2NameInput = document.getElementById('player2Name');
const continueRegisterBtn = document.getElementById('continueRegisterBtn');
const startGameBtn = document.getElementById('startGameBtn');
const gameModeBadge = document.getElementById('gameModeBadge');
const sessionTimer = document.getElementById('sessionTimer');
const sessionTimerDisplay = document.getElementById('sessionTimerDisplay');
const questionText = document.getElementById('questionText');
const questionNumber = document.getElementById('questionNumber');
const currentQuestionSpan = document.getElementById('currentQuestion');
const progressFill = document.getElementById('progressFill');
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
const historyModal = document.getElementById('historyModal');
const closeHistoryBtn = document.getElementById('closeHistoryBtn');
const historyContent = document.getElementById('historyContent');
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
conunt');
const navA