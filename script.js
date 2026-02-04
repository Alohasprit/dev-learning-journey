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


// ============================================
// Day 6: 학습 목표 관리 앱
// ============================================

// 목표 배열 (모든 목표를 여기 저장)
let goals = [];

// DOM 요소 선택
const goalInput = document.getElementById('goalInput');
const addGoalBtn = document.getElementById('addGoalBtn');
const goalList = document.getElementById('goalList');
const totalGoalsElement = document.getElementById('totalGoals');
const completedGoalsElement = document.getElementById('completedGoals');
const clearAllBtn = document.getElementById('clearAllBtn');

// 목표 추가 함수
function addGoal() {
    const goalText = goalInput.value.trim(); // 공백 제거
    
    // 입력값 검증
    if (goalText === '') {
        alert('목표를 입력해주세요! 📝');
        goalInput.focus();
        return;
    }
    
    if (goalText.length < 3) {
        alert('목표는 3글자 이상 입력해주세요! ✏️');
        goalInput.focus();
        return;
    }
    
    // 새 목표 객체 생성
    const newGoal = {
        id: Date.now(), // 고유 ID (현재 시간)
        text: goalText,
        completed: false,
        createdAt: new Date().toLocaleString('ko-KR')
    };
    
    // 배열에 추가
    goals.push(newGoal);
    
    // 입력창 비우기
    goalInput.value = '';
    
    // 화면 업데이트
    renderGoals();
    
    // 성공 피드백
    showToast('목표가 추가되었습니다! 🎯');
}

// 목표 토글 (완료/미완료)
function toggleGoal(id) {
    const goal = goals.find(g => g.id === id);
    if (goal) {
        goal.completed = !goal.completed;
        renderGoals();
    }
}

// 목표 삭제
function deleteGoal(id) {
    if (confirm('이 목표를 삭제하시겠어요?')) {
        goals = goals.filter(g => g.id !== id);
        renderGoals();
        showToast('목표가 삭제되었습니다! 🗑️');
    }
}

// 모두 삭제
function clearAllGoals() {
    if (goals.length === 0) {
        alert('삭제할 목표가 없습니다!');
        return;
    }
    
    if (confirm(`정말 모든 목표(${goals.length}개)를 삭제하시겠어요?`)) {
        goals = [];
        renderGoals();
        showToast('모든 목표가 삭제되었습니다! 🗑️');
    }
}

// 화면에 목표 렌더링
function renderGoals() {
    // 리스트 비우기
    goalList.innerHTML = '';
    
    // 목표가 없으면 안내 메시지
    if (goals.length === 0) {
        goalList.innerHTML = '<li class="empty-state">아직 목표가 없습니다. 첫 목표를 추가해보세요! 🎯</li>';
    } else {
        // 각 목표를 HTML로 생성
        goals.forEach(goal => {
            const li = document.createElement('li');
            li.className = `goal-item ${goal.completed ? 'completed' : ''}`;
            
            // 체크박스
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'goal-checkbox';
            checkbox.checked = goal.completed;
            checkbox.addEventListener('change', () => toggleGoal(goal.id));
            
            // 목표 텍스트
            const text = document.createElement('span');
            text.className = 'goal-text';
            text.textContent = goal.text;
            
            // 삭제 버튼
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = '삭제';
            deleteBtn.addEventListener('click', () => deleteGoal(goal.id));
            
            // 요소 조립
            li.appendChild(checkbox);
            li.appendChild(text);
            li.appendChild(deleteBtn);
            
            goalList.appendChild(li);
        });
    }
    
    // 통계 업데이트
    updateStats();
}

// 통계 업데이트
function updateStats() {
    const total = goals.length;
    const completed = goals.filter(g => g.completed).length;
    
    totalGoalsElement.textContent = total;
    completedGoalsElement.textContent = completed;
    
    // 애니메이션 효과
    totalGoalsElement.style.transform = 'scale(1.2)';
    completedGoalsElement.style.transform = 'scale(1.2)';
    
    setTimeout(() => {
        totalGoalsElement.style.transform = 'scale(1)';
        completedGoalsElement.style.transform = 'scale(1)';
    }, 200);
}

// 토스트 메시지 (간단한 알림)
function showToast(message) {
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: #333;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: slideUp 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// 이벤트 리스너
addGoalBtn.addEventListener('click', addGoal);
clearAllBtn.addEventListener('click', clearAllGoals);

// Enter 키로도 추가 가능
goalInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addGoal();
    }
});

// 초기 렌더링
renderGoals();

console.log('✅ 목표 관리 앱 로드 완료!');