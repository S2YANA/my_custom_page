// 탭 기능
function showTab(tab) {
  const tabs = ['game', 'cafe', 'emoji'];
  tabs.forEach(t => {
    document.getElementById(`${t}-section`).style.display = (t === tab) ? '' : 'none';
    const btn = document.querySelector(`.tab-btn:nth-child(${tabs.indexOf(t)+1})`);
    if (btn) btn.classList.toggle('active', t === tab);
  });
}

// 끝말잇기 기능
let wordChain = [];
const botWords = ['기차', '차표', '표지', '지갑', '갑옷', '옷걸이', '이불', '불꽃', '꽃병', '병아리', '리본', '본드', '드라마', '마음', '음료', '요리', '리더', '더미', '미소', '소나기', '기린', '린넨', '넨도', '도장', '장미', '미역', '역사', '사과', '과자', '자동차', '차도', '도토리', '리모컨', '컨디션', '션트', '트럭', '크레파스', '스키', '키위', '위성', '성냥', '양말', '말풍선', '선풍기'];
function submitWord() {
  const input = document.getElementById('word-input');
  const word = input.value.trim();
  if (!word) return;
  if (wordChain.length === 0 || wordChain[wordChain.length-1].slice(-1) === word[0]) {
    wordChain.push(word);
    document.getElementById('word-chain').innerText = wordChain.join(' → ');
    input.value = '';
    setTimeout(botWord, 700); // 웹사이트가 이어서 말함
  } else {
    alert('올바른 끝말잇기가 아닙니다!');
  }
}
function botWord() {
  if (wordChain.length === 0) return;
  const lastChar = wordChain[wordChain.length-1].slice(-1);
  const candidates = botWords.filter(w => w[0] === lastChar && !wordChain.includes(w));
  if (candidates.length > 0) {
    const botPick = candidates[Math.floor(Math.random() * candidates.length)];
    wordChain.push(botPick);
    document.getElementById('word-chain').innerText = wordChain.join(' → ');
  } else {
    document.getElementById('word-chain').innerText += '\n웹사이트가 더 이상 이어갈 단어를 찾지 못했습니다!';
  }
}

// 카페 메뉴 추천 기능
const cafeMenus = ['아메리카노', '카페라떼', '카푸치노', '바닐라라떼', '콜드브루', '카라멜마끼아또', '녹차라떼', '유자차', '자몽에이드', '딸기스무디'];
function recommendMenu() {
  const menu = cafeMenus[Math.floor(Math.random() * cafeMenus.length)];
  document.getElementById('menu-result').innerText = `추천 메뉴: ${menu}`;
}

// 랜덤 이모지 추출 기능
const emojis = ['😀','😂','😍','🥰','😎','🤔','😇','😜','🥳','😭','😱','👍','👏','🙏','💖','🍀','🌈','🔥','🎉','🍔','☕','🍦','🍕','🍩','🍓'];
function randomEmoji() {
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  document.getElementById('emoji-result').innerText = emoji;
}
