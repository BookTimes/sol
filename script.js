const qn = document.getElementById("tbox");
const sub = document.getElementById("sel");
const sbtn = document.getElementById("tb");
var ol = [];
let params = new URLSearchParams(window.location.search);
document.all.tbox.textContent = params.has("question") ? params.get("question") : "";
fetch("https://jsonblob.com/api/1043609418884988928")
  .then((response) => response.json())
  .then((json) => (ol = json));
const user = {
  id: getCookie("id"),
  gr: getCookie("gr"),
  role: getCookie("role"),
  suj: getCookie("suj"),
};
document.getElementById("userId").innerHTML = user.id;
if (user.role == "tr") {
  document.getElementById("userGr").innerHTML = "Subject: " + user.suj;
  document.getElementById("qnb").classList.add("hid");
  document.getElementById("ol").innerHTML = "Doubts";
} else {
  document.getElementById("userGr").innerHTML = "Grade: " + user.gr;
}

function submit() {
  if (qn.value.replace(" ", "") != "") {
    if (sub.value != "nono") {
      subm(qn.value, sub.value, user.id, user.gr);
      send(false, list[list.length - 1]);
      setTimeout(function () {
        window.open("https://booktimes.github.io/sol/",'_self');
      }, 1000);
    } else {
      alert('Choose a subject')
    }
  }
}

class qury {
  constructor(qun, suj, us, gr, cm) {
    (this.qun = qun),
      (this.suj = suj),
      (this.us = us),
      (this.gr = gr),
      (this.cm = cm);
  }
}

list = [];

function subm(qun, suj, us, gr, cm = []) {
  newTask = new qury(qun, suj, us, gr, cm);
  list.push(newTask);
}

function send(linda = true, qn = "") {
  var url = "https://jsonblob.com/api/1043609418884988928";
  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
    }
  };
  if (linda == false) {
    ol.push(JSON.parse(JSON.stringify(qn)));
  }
  // qns = JSON.stringify(ol).push(JSON.stringify(qn));
  // var data = JSON.stringify(qns);
  console.log(qn);
  var data = JSON.stringify(ol);
  xhr.send(data);
}
var setn = 0;
setTimeout(function () {
  ol.forEach(function (i) {
    var reco = "";
    var thme = "";
    if (user.role == "sd") {
      if (user.gr != i.gr) {
        reco = "hid";
      }
    }
    if (user.role == "tr") {
      if (user.suj != i.suj) {
        reco = "hid";
      }
    }

    const alcm = i.cm.join("<br><hr>");
    document.getElementById("dbts").insertAdjacentHTML(
      "afterbegin",
      `
      <div class="dbt ${reco} ${i.suj}">
      <div class="dbc">
        <span id="userId">${i.us}</span> <span class="suj">${i.suj}</span><br><br>
                  <span id="qn">${i.qun}</span>
          <hr>
          <h2>Answers</h2>
      <div class="cms">
        <div class="cm">
          <div class="cmt">
          <span id='qn'>
           ${alcm}
              </span>
          </div>
          <div style="display: flex;"><textarea onclick='ent(this)' name='${setn}'  placeholder="Do you know the answer" class="cmbox sel" id="cmbox ${setn}"></textarea><button onclick='ansub(this)' id ='${setn}' button class="tb" style="  background: rgb(36, 36, 41);
            ">Answer</button></div>
          
          
        </div>
      </div>
    </div>
  </div>
    `
    );
    setn += 1;
  });
}, 1000);

function ansub(el) {
  const txb = document.getElementById(`cmbox ${el.id}`);
  ol[el.id].cm.push(user.id + ": " + txb.value);
  send(null, true);
  location.reload();
}

function ent(w) {
  const h = w;
  h.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById(h.name).click();
    }
  });
}
const modsel = document.getElementById("modsel");
const rosel = document.getElementById("rosel");
const ossel = document.getElementById("ossel");
const subsel = document.getElementById("subsel");

rosel.addEventListener("change", function () {
  if (rosel.value == "sd") {
    document.getElementById("grsel").classList.remove("hid");
    document.getElementById("sujsel").classList.add("hid");
  } else {
    document.getElementById("grsel").classList.add("hid");
    document.getElementById("sujsel").classList.remove("hid");
  }
});
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function checkCookie() {
  let id = getCookie("id");
  if (id != "") {
  } else {
    send();
    modsel.classList.remove("hid");
    ossel.classList.remove("hid");
    id = document.getElementById("ussel").value;
    const gr = document.getElementById("grsel").value;
    const suj = document.getElementById("sujsel").value;
    const role = rosel.value;
    if (id != "" && role != "nono") {
      setCookie("id", id, 365);
      setCookie("role", role, 365);
      setCookie("suj", suj, 365);
      setCookie("gr", gr, 365);
    }
  }
}
function delc() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
  setCookie("id", "", 365);

  location.reload();
}


