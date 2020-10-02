var test = getUPDATE(0);
var a = 0;
var thisYEAR = "";
var thisMONTH = "";
var thisDAY = "";

// diaryID : 0=1~5日分、5=6~10日分、10=11~15日分...

function getUPDATE(diaryID){
  var num = 1;
  fetch('json/update3.json')
  .then((res) => res.json())
  .then((data) => {
    data.reverse();
    data.slice(diaryID).forEach((value) => {
      // console.log(value[3]);
      thisDAY = value[3];
      // console.log("a=" + thisDAY);
      const params = {
        "year": value[1],
        "month": value[2],
        "day": value[3]
      };

      // const query_params = new URLSearchParams(params);
      // console.log(value[5] + "?" + query_params);
      fetch(value[5])
      .then((res) => res.text())
      .then((data) => {
        // console.log("data=" + data);
        // let querySplit = data.split('?');
        // console.log(querySplit);
        // console.log("b=" + thisDAY); // ここで、thisDAYが14に固定されている。なぜ
        // console.log("c=" + data); // dataには、htmlのテキストが入っている。
        document.getElementById('dia' + num)
        .innerHTML = data;
        // document.getElementById('date')
        // .innerHTML = value[1] + "年" + value[2] + "月" + thisDAY + "日の日記";
        // getDate();
        if(num === 5){ return; }
        num++
      });
    })
  })
}

function getDate(a){
  console.log(a);
  document.getElementById('date')
  .innerHTML = a;
  console.log(test);
}

document.getElementById("past-page").onclick = function() {
  console.log("pastが押された!");
  // if(a < 0){
    a += 5;
    console.log(1);
    getUPDATE(a);
  // }
}

document.getElementById("future-page").onclick = function() {
  console.log("futureが押された!");
  if(a === 0){
    console.log("a=" + a);
  }else{
    a += -5;
    console.log(2);
    getUPDATE(a);
  }
}

var test2 = getPAGEs();

function getPAGEs(){
  fetch('json/update.json')
  .then((res) => res.json())
  .then((data) => {
    data.reverse();
    var lastID = data[0].id;
    // console.log(lastID);
    return lastID;
  })
  .then((ID) => { // idからpage数を決めてリンクを作る
    ID += 1; // 初期IDが0なので1を加算
    // console.log(ID);
    // for (i = 0; i*5 < ID; i++) {
    //   document.getElementById("footID")
    // }
    // document.getElementById("footID")
    // .innerHTML = "<a href='#top'>test</a>";
  });
}