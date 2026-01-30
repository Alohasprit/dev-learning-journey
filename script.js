// ============================================
// Day 5: JavaScript 기초
// ============================================

// 1. 변수 선언
let dayCount = 5; // 현재 학습 일수

// 2. HTML 요소 가져오기 (DOM 선택)
const dayCountElement = document.getElementById('dayCount');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');
const motivateBtn = document.getElementById('motivateBtn');
const motivationText = document.getElementById('motivationText');

// 3. 동기부여 메시지 배열
const motivations = [
    "매일 1시간씩, 5개월이면 전문가! 💪",
    "오늘도 한 걸음 더 가까워졌어요! 🚀",
    "꾸준함이 재능을 이긴다! 🔥",
    "당신은 이미 잘하고 있어요! ⭐",
    "포기하지 않는 것이 성공의 비결! 🎯",
    "작은 진전도 큰 성취입니다! 🌟",
    "오늘의 노력이 내일의 실력! 💡",
    "할 수 있다고 믿으면 이미 반은 성공! 🎉"
];

// 4. 함수 정의: 일수 증가
function incrementDay() {
    dayCount++; // dayCount = dayCount + 1
    updateDisplay();
    celebrateProgress();
}

// 5. 함수 정의: 리셋
function resetCounter() {
    if (confirm('정말 리셋하시겠어요?')) {
        dayCount = 0;
        updateDisplay();
    }
}

// 6. 함수 정의: 화면 업데이트
function updateDisplay() {
    dayCountElement.textContent = dayCount;
    
    // 애니메이션 효과
    dayCountElement.style.transform = 'scale(1.2)';
    dayCountElement.style.color = '#ffd700';
    
    setTimeout(() => {
        dayCountElement.style.transform = 'scale(1)';
    }, 300);
}

// 7. 함수 정의: 축하 효과
function celebrateProgress() {
    if (dayCount % 7 === 0) {
        alert(`🎉 축하합니다! ${dayCount}일 연속 학습 달성!`);
    }
}

// 8. 함수 정의: 랜덤 동기부여 메시지
function showMotivation() {
    const randomIndex = Math.floor(Math.random() * motivations.length);
    const message = motivations[randomIndex];
    
    motivationText.textContent = message;
    motivationText.style.transform = 'scale(1.1)';
    
    setTimeout(() => {
        motivationText.style.transform = 'scale(1)';
    }, 300);
}

// 9. 이벤트 리스너 연결
incrementBtn.addEventListener('click', incrementDay);
resetBtn.addEventListener('click', resetCounter);
motivateBtn.addEventListener('click', showMotivation);

// 10. 페이지 로드 시 환영 메시지
console.log('🚀 JavaScript 로드 완료!');
console.log('현재 학습 일수:', dayCount);