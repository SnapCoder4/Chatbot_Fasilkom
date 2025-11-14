// Variabel utama
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatlog = document.getElementById("chatlog");

// Jadwal kampus
const jadwal = {
  senin:
    "Jadwal hari Senin:\n- 08.00 – Algoritma Dasar\n- 10.00 – Matematika Diskrit\n- 13.00 – Praktikum Logika",
  selasa:
    "Jadwal hari Selasa:\n- 09.00 – Struktur Data\n- 11.00 – Sistem Operasi\n- 14.00 – Praktikum Struktur Data",
  rabu: "Jadwal hari Rabu:\n- 08.00 – Basis Data\n- 10.00 – Jaringan Komputer\n- 13.00 – Praktikum Basis Data",
  kamis:
    "Jadwal hari Kamis:\n- 09.00 – Pemrograman Web\n- 11.00 – Interaksi Manusia dan Komputer\n- 15.00 – Praktikum Web",
  jumat:
    "Jadwal hari Jumat:\n- 08.00 – Kecerdasan Buatan\n- 10.00 – Keamanan Informasi\n- 13.00 – Seminar Teknologi",
};

// Fungsi kirim pesan
function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") {
    return;
  }

  addMessage("user", message);
  userInput.value = "";
  botReply(message);
}

// Tambah elemen pesan ke DOM
function addMessage(type, text) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.classList.add(type);
  div.textContent = text;
  chatlog.appendChild(div);
  chatlog.scrollTop = chatlog.scrollHeight;
}

// Logika jawaban chatbot
function botReply(message) {
  const teks = message.toLowerCase();
  let reply = "";

  // sapaan sederhana
  if (teks.includes("halo") || teks.includes("hai")) {
    reply =
      "Halo! Aku chatbot jadwal kampus. Coba tanya seperti:\n- jadwal hari senin apa?\n- jadwal selasa\n- jadwal hari jumat";
  }
  // cek per hari
  else if (teks.includes("senin")) {
    reply = jadwal.senin;
  } else if (teks.includes("selasa")) {
    reply = jadwal.selasa;
  } else if (teks.includes("rabu")) {
    reply = jadwal.rabu;
  } else if (teks.includes("kamis")) {
    reply = jadwal.kamis;
  } else if (teks.includes("jumat") || teks.includes("jum'at")) {
    reply = jadwal.jumat;
  }
  // weekend
  else if (teks.includes("sabtu") || teks.includes("minggu")) {
    reply =
      "Hari Sabtu dan Minggu tidak ada jadwal kuliah, waktunya istirahat 😴";
  }
  // kalau cuma nanya "jadwal" doang
  else if (teks.includes("jadwal")) {
    reply =
      "Kamu bisa tanya seperti:\n- jadwal hari senin apa?\n- jadwal selasa?\n- jadwal hari kamis?";
  }
  // default
  else {
    reply =
      "Maaf, aku belum paham pertanyaan itu.\nCoba tanya soal jadwal, misalnya: 'jadwal hari rabu apa?'";
  }

  addMessage("bot", reply);
}

// Event Listener
sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Pesan awal ketika halaman dibuka
addMessage(
  "bot",
  "Halo! Aku chatbot jadwal kampus dummy.\nCoba tanya: 'jadwal hari senin apa?' 😊"
);
