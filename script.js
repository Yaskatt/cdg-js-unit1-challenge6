//合計スコア用の変数
let score = 0;

let frag1 = false;
let frag2 = false;
let frag3 = false;

function showScore() {
  //スコア表示の処理をここに記述
  const scoreMessage = document.getElementById('score-message');
  if (score === 3) {
    scoreMessage.innerHTML = `トータルスコアは${score}です。すばらしい！`;
  } else if (score === 2) {
    scoreMessage.innerHTML = `トータルスコアは${score}です。おしい！`;
  } else if (score === 1) {
    scoreMessage.innerHTML = `トータルスコアは${score}です。まだまだだね`;
  } else if (score === 0) {
    scoreMessage.innerHTML = `トータルスコアは${score}です。残念ですね`;
  }
}

/**************
1問目の正解はBのラバト
2問目の正解はAのバイカル湖
3問目の正解はCのレンブラント
**************/

function answerQuiz1() {
  //問題1の処理をここに記述
  const quiz_1 = document.getElementById('quiz-1');
  const answer_1 = quiz_1.answer.value;
  if (frag1 === false && answer_1 === 'b') {
    score++;
    frag1 = true;
  } else if (frag1 === true && answer_1 !== 'b') {
    score--;
    frag1 = false;
  }
  switch (answer_1) {
    case 'b':
      //選択したボタンの判定
      console.log(`1問目の${answer_1}を選択しました`);
      //回答結果
      console.log('正解です');
      //現在のスコアを表示
      console.log(`現在のトータルスコア：${score}`);
      break;
    case 'a':
    case 'c':
      //選択したボタンの判定
      console.log(`1問目の${answer_1}を選択しました`);
      //回答結果
      console.log('不正解です');
      //現在のスコアを表示
      console.log(`現在のトータルスコア：${score}`);
      break;
  }
}

function answerQuiz2() {
  //問題2の処理をここに記述
  const quiz_2 = document.getElementById('quiz-2');
  const answer_2 = quiz_2.answer.value;
  if (frag2 === false && answer_2 === 'a') {
    score++;
    frag2 = true;
  } else if (frag2 === true && answer_2 !== 'a') {
    score--;
    frag2 = false;
  }
  switch (answer_2) {
    case 'a':
      //選択したボタンの判定
      console.log(`2問目の${answer_2}を選択しました`);
      //回答結果
      console.log('正解です');
      //現在のスコアを表示
      console.log(`現在のトータルスコア：${score}`);
      break;
    case 'b':
    case 'c':
      //選択したボタンの判定
      console.log(`2問目の${answer_2}を選択しました`);
      //回答結果
      console.log('不正解です');
      //現在のスコアを表示
      console.log(`現在のトータルスコア：${score}`);
      break;
  }
}

function answerQuiz3() {
  //問題3の処理をここに記述
  const quiz_3 = document.getElementById('quiz-3');
  const answer_3 = quiz_3.answer.value;
  if (frag3 === false && answer_3 === 'c') {
    score++;
    frag3 = true;
  } else if (frag3 === true && answer_3 !== 'c') {
    score--;
    frag3 = false;
  }
  switch (answer_3) {
    case 'c':
      //選択したボタンの判定
      console.log(`3問目の${answer_3}を選択しました`);
      //回答結果
      console.log('正解です');
      //現在のスコアを表示
      console.log(`現在のトータルスコア：${score}`);
      break;
    case 'a':
    case 'b':
      //選択したボタンの判定
      console.log(`3問目の${answer_3}を選択しました`);
      //回答結果
      console.log('不正解です');
      //現在のスコアを表示
      console.log(`現在のトータルスコア：${score}`);
      break;
  }
}
