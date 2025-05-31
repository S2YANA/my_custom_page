// 끝말잇기 기능
let wordChain = [];
function submitWord() {
  const input = document.getElementById('word-input');
  const word = input.value.trim();
  if (!word) return;
  if (wordChain.length === 0 || wordChain[wordChain.length-1].slice(-1) === word[0]) {
    wordChain.push(word);
    document.getElementById('word-chain').innerText = wordChain.join(' → ');
    input.value = '';
  } else {
    alert('올바른 끝말잇기가 아닙니다!');
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
