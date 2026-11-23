const questions = [
  {
    cat: "연락 집착",
    q: "상대방이 3시간째 답장이 없다. 당신의 반응은?",
    a: [
      "바쁜가 보다. 내 할 일을 한다.",
      "한두 번 정도 메시지를 확인한다.",
      "마지막 접속 시간이나 SNS를 확인한다.",
      "내가 싫어진 건가 온갖 시나리오를 상상한다."
    ]
  },
  {
    cat: "연락 집착",
    q: "상대방이 온라인인데 내 메시지를 읽지 않았다.",
    a: [
      "별생각 없다.",
      "조금 신경 쓰이지만 기다린다.",
      "왜 답을 안 하는지 계속 궁금하다.",
      "나를 일부러 무시한다고 생각하고 감정이 상한다."
    ]
  },
  {
    cat: "연락 집착",
    q: "상대방의 답장이 평소보다 짧아졌다.",
    a: [
      "컨디션이 안 좋은가 보다.",
      "조금 서운하지만 넘긴다.",
      "나한테 무슨 일 있는지 물어본다.",
      "마음이 식었다고 느끼고 하루 종일 신경 쓴다."
    ]
  },
  {
    cat: "질투와 소유욕",
    q: "상대방이 이성 친구와 단둘이 밥을 먹는다고 한다.",
    a: [
      "잘 다녀오라고 한다.",
      "누구인지 살짝 궁금하다.",
      "누구와 어디서 만나는지 자세히 묻는다.",
      "불편하고 계속 신경 쓰여서 못 참겠다."
    ]
  },
  {
    cat: "질투와 소유욕",
    q: "상대방이 모르는 이성의 사진에 좋아요를 눌렀다.",
    a: [
      "그럴 수도 있지.",
      "누구인지 한 번 확인한다.",
      "누군지 물어보고 이유를 듣고 싶다.",
      "기분이 확 상하고 관련 계정을 찾아본다."
    ]
  },
  {
    cat: "질투와 소유욕",
    q: "상대방이 나 없이 친구들과 즐거운 시간을 보낸다.",
    a: [
      "재밌게 놀았으면 좋겠다.",
      "조금 아쉽지만 괜찮다.",
      "나와도 시간을 더 보내줬으면 한다.",
      "나 없이도 잘 지내는 모습이 서운하고 불안하다."
    ]
  },
  {
    cat: "애정 확인",
    q: "오늘따라 상대방의 애정 표현이 적다면?",
    a: [
      "표현 방식이나 컨디션은 다를 수 있다.",
      "조금 아쉽지만 먼저 표현한다.",
      "나 좋아하는 게 맞는지 확인하고 싶다.",
      "사랑이 식은 것 같아 불안해진다."
    ]
  },
  {
    cat: "애정 확인",
    q: "상대방이 먼저 사랑한다고 말해주지 않는다면?",
    a: [
      "내가 먼저 말하면 된다.",
      "가끔은 먼저 듣고 싶다.",
      "왜 먼저 말하지 않는지 서운하다.",
      "사랑받지 못한다고 느끼고 계속 확인받고 싶다."
    ]
  },
  {
    cat: "애정 확인",
    q: "상대방이 나를 예전만큼 좋아하지 않는 것 같다면?",
    a: [
      "느낌만으로 판단하지 않고 대화한다.",
      "조금 걱정되지만 지켜본다.",
      "달라진 점을 하나씩 떠올려본다.",
      "작은 변화까지 전부 의미를 부여하며 불안해한다."
    ]
  },
  {
    cat: "감정 기복",
    q: "연인과 싸우다가 감정이 격해지면?",
    a: [
      "잠깐 쉬고 차분하게 이야기한다.",
      "서운한 점을 바로 말한다.",
      "상대가 먼저 풀어주길 기다린다.",
      "헤어지자는 말이나 극단적인 표현이 튀어나온다."
    ]
  },
  {
    cat: "감정 기복",
    q: "상대방이 나에게 서운한 점을 이야기한다면?",
    a: [
      "무엇이 서운했는지 듣고 조율한다.",
      "속상하지만 일단 들어본다.",
      "나도 서운했던 일을 꺼내게 된다.",
      "나를 싫어하게 된 건 아닐지 먼저 걱정한다."
    ]
  },
  {
    cat: "이별과 미련",
    q: "헤어진 뒤 상대방의 SNS가 궁금해진다면?",
    a: [
      "굳이 찾아보지 않는다.",
      "가끔 생각날 때만 본다.",
      "새로운 게시물이나 팔로잉을 확인한다.",
      "계정을 반복해서 확인하고 흔적을 찾아본다."
    ]
  },
  {
    cat: "이별과 미련",
    q: "먼저 연락하고 싶지만 자존심 때문에 참는 상황이라면?",
    a: [
      "연락할 이유가 있는지 생각한다.",
      "하루 정도 고민하다 결정한다.",
      "메시지를 썼다 지웠다 반복한다.",
      "상대가 먼저 연락할 때까지 휴대폰을 놓지 못한다."
    ]
  },
  {
    cat: "관계 불안",
    q: "상대방이 혼자만의 시간이 필요하다고 말한다.",
    a: [
      "필요한 시간이라고 생각하고 존중한다.",
      "조금 아쉽지만 이해한다.",
      "내가 뭘 잘못했는지 물어본다.",
      "나와 멀어지려는 신호처럼 느껴진다."
    ]
  },
  {
    cat: "관계 불안",
    q: "상대방이 나를 좋아한다는 확신이 들어도?",
    a: [
      "신뢰하고 편안하게 연애한다.",
      "가끔 애정 표현을 받고 싶다.",
      "주기적으로 사랑을 확인받고 싶다.",
      "확신이 들어도 금방 불안해져 계속 확인한다."
    ]
  }
];

const categories = ["연락 집착", "질투와 소유욕", "애정 확인", "감정 기복", "이별과 미련", "관계 불안"];
const state = { answers: Array(questions.length).fill(null), index: 0 };
const $ = id => document.getElementById(id);

function show(id) {
  ["intro", "quiz", "result"].forEach(x => $(x).classList.toggle("hidden", x !== id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const i = state.index;
  const q = questions[i];
  $("stepText").textContent = `QUESTION ${String(i + 1).padStart(2, "0")} / ${questions.length}`;
  $("percentText").textContent = `${Math.round(((i + 1) / questions.length) * 100)}%`;
  $("progress").style.width = `${((i + 1) / questions.length) * 100}%`;
  $("category").textContent = `${String(i + 1).padStart(2, "0")} · ${q.cat}`;
  $("question").textContent = q.q;
  $("error").textContent = "";

  $("answers").innerHTML = "";
  q.a.forEach((answer, j) => {
    const b = document.createElement("button");
    b.className = "answer" + (state.answers[i] === j ? " selected" : "");
    b.innerHTML = `<span class="letter">${["A", "B", "C", "D"][j]}</span><span></span>`;
    b.querySelector("span:last-child").textContent = answer;
    b.addEventListener("click", () => {
      state.answers[i] = j;
      renderQuestion();
    });
    $("answers").appendChild(b);
  });

  $("prevBtn").disabled = i === 0;
  $("nextBtn").textContent = i === questions.length - 1 ? "결과 확인하기 →" : "다음 질문 →";
}

function calculate() {
  const raw = state.answers.reduce((s, v) => s + v, 0);
  const score = Math.round((raw / (questions.length * 3)) * 100);

  const sums = {};
  const counts = {};
  categories.forEach(c => {
    sums[c] = 0;
    counts[c] = 0;
  });

  questions.forEach((q, i) => {
    sums[q.cat] += state.answers[i];
    counts[q.cat]++;
  });

  const detail = {};
  categories.forEach(c => (detail[c] = Math.round((sums[c] / (counts[c] * 3)) * 100)));

  let level;
  if (score <= 20) {
    level = {
      emoji: "🕊️",
      title: "평화주의자",
      desc: "연애는 연애, 인생은 인생. 상대의 연락 하나에 하루를 맡기지 않는 타입이에요.",
      comment: "당신은 관계 안에서도 자기 리듬을 잘 지키는 편이에요. 상대를 믿고 혼자만의 시간도 존중할 줄 아는 건강한 거리 감각의 소유자! 가끔은 상대에게 애정을 표현하는 것도 잊지 마세요."
    };
  } else if (score <= 40) {
    level = {
      emoji: "🐰",
      title: "순한맛 멘헤라",
      desc: "가끔 서운하고 질투도 하지만, 대체로 이성의 브레이크가 작동하는 타입.",
      comment: "관심과 애정 표현을 좋아하지만 감정에 휩쓸리지는 않는 편이에요. 불편한 마음이 생기면 혼자 추측하기보다 차분하게 말로 전달해 보세요."
    };
  } else if (score <= 60) {
    level = {
      emoji: "🎀",
      title: "관심이 필요한 사람",
      desc: "애정 표현과 관심이 부족하면 마음속 알림창이 쉴 새 없이 울리는 타입.",
      comment: "상대의 반응에 기분이 영향을 받는 순간이 꽤 있어요. 상대가 바쁜 것과 나를 덜 사랑하는 것은 같은 뜻이 아니에요. 불안할 때는 사실과 추측을 나눠서 생각해 보세요."
    };
  } else if (score <= 80) {
    level = {
      emoji: "🖤",
      title: "고농축 멘헤라",
      desc: "읽씹 하나에도 생각이 꼬리에 꼬리를 무는, 감정 레이더 초고감도 타입.",
      comment: "관계에서 확신을 얻고 싶은 마음이 큰 편이에요. 하지만 확인을 반복할수록 잠깐 안심한 뒤 다시 불안해질 수 있어요. 내 생활과 감정의 중심을 연애 바깥에도 만들어 보세요."
    };
  } else {
    level = {
      emoji: "🚨",
      title: "인간 집착 탐지기",
      desc: "연애가 시작되면 머릿속 CPU가 상대방 한 명에게 과점유되는 타입.",
      comment: "상대의 행동을 세밀하게 살피고 관계의 작은 변화에도 크게 흔들릴 수 있어요. 이 결과가 당신을 규정하는 건 아니에요. 불안과 확인 행동 때문에 일상이나 관계가 힘들다면 믿을 만한 사람 또는 전문가와 이야기해 보는 것도 도움이 됩니다."
    };
  }

  $("resultEmoji").textContent = level.emoji;
  $("resultTitle").textContent = level.title;
  $("resultDesc").textContent = level.desc;
  $("score").innerHTML = `${score}<small> / 100</small>`;
  $("scoreMeter").style.width = score + "%";
  $("comment").textContent = level.comment;

  $("bars").innerHTML = "";
  categories.forEach(c => {
    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `<div class="bar-label">${c}</div><div class="bar-track"><div style="width:${detail[c]}%"></div></div><div class="bar-num">${detail[c]}</div>`;
    $("bars").appendChild(row);
  });
}

$("startBtn").onclick = () => {
  state.index = 0;
  show("quiz");
  renderQuestion();
};

$("prevBtn").onclick = () => {
  if (state.index > 0) {
    state.index--;
    renderQuestion();
  }
};

$("nextBtn").onclick = () => {
  if (state.answers[state.index] === null) {
    $("error").textContent = "답변을 하나 선택해 주세요!";
    return;
  }
  if (state.index < questions.length - 1) {
    state.index++;
    renderQuestion();
  } else {
    if (state.answers.some(v => v === null)) {
      $("error").textContent = "아직 답변하지 않은 질문이 있어요.";
      return;
    }
    calculate();
    show("result");
  }
};

$("retryBtn").onclick = () => {
  state.answers.fill(null);
  state.index = 0;
  show("intro");
};

$("shareBtn").onclick = async () => {
  const score = $("score").textContent.split("/")[0].trim();
  const text = `나의 멘헤라 판독 결과: ${$("resultTitle").textContent} (${score}점)\n너의 연애 집착 지수도 확인해 봐!`;
  try {
    if (navigator.share) {
      await navigator.share({ title: "멘헤라 판독기 결과", text });
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      $("toast").classList.add("show");
      setTimeout(() => $("toast").classList.remove("show"), 1800);
    } else {
      prompt("결과를 복사해 주세요.", text);
    }
  } catch (e) {}
};
