const USERS = [
  { username: "Xstar Store", password: "123456" },
  { username: "Admin",       password: "admin123" },
  { username: "Tester",      password: "tester123" }
];

const form = document.getElementById('loginForm');
const toast = document.getElementById('toast');
const loginCard = document.getElementById('loginCard');
const menuPage = document.getElementById('menuPage');
const textPage = document.getElementById('textPage');
const textTitle = document.getElementById('textTitle');
const textContent = document.getElementById('textContent');
const usageBox = document.getElementById('usage');
const passwordInput = document.getElementById('password');
const togglePass = document.getElementById('togglePass');

function showToast(msg, ok=false){
  toast.textContent = msg;
  toast.className = 'toast ' + (ok ? 'ok':'err') + ' show';
  setTimeout(()=> toast.classList.remove('show'), 2000);
}

togglePass.addEventListener('click', ()=>{
  const isPwd = passwordInput.type === 'password';
  passwordInput.type = isPwd ? 'text' : 'password';
  togglePass.textContent = isPwd ? 'Hide' : 'Show';
});

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const user = document.getElementById('username').value.trim();
  const pass = passwordInput.value;
  const found = USERS.find(u => u.username === user && u.password === pass);
  if(found){
    showToast('Login sukses!', true);
    setTimeout(()=>{ loginCard.style.display="none"; menuPage.style.display="block"; },800);
  }else{ showToast('Username atau password salah.'); }
});

const TEXTS = {
  "Unband 1": {
    text: `Mohon aktifkan kembali nomor saya karena saya tidak melanggar aturan WhatsApp, tiba-tiba nomor saya di banned, mohon aktifkan kembali nomor ini: +62xxxxxxx

karena saya tidak melakukan kesalahan apapun, tiba-tiba nomor saya di ban ketika saya melihat status, maka saya meminta kepada pihak whatsapp yang terhormat, tolong aktifkan kembali nomor saya, terima kasih.`,
    usage: `Cara menggunakan nya adalah :
-Salin Teks
-hubungi lewat gmail
-Tunggu 1-2mingu`
  },
  "Unband 2": {
    text: `Hallo team WhatsApp, akun saya +62xxxxxx di blokir. saya meminta anda untuk mengembalikan akun WhatsApp saya, saya mohon kembalikan. karena itu akun pribadi WhatsApp saya. sekali lagi tolong unbanned akun saya +62xxxxxx`,
    usage: `Cara menggunakan nya adalah :
-Salin Teks
-hubungi lewat gmail
-Tunggu 1-2mingu`
  },
  "band 1": {
    text: `Saya ingin melaporkan nomor WhatsApp yang menyalahgunakan layanan. Nomor tersebut melakukan tindakan yang melanggar ketentuan WhatsApp dan merugikan pengguna lain. Mohon untuk segera menonaktifkan nomor WhatsApp dengan nomor: +628XXX

Terima kasih atas bantuan tim WhatsApp.`,
    usage: `Cara menggunakan nya adalah :
-Salin Teks
-hubungi lewat gmail
-Tunggu beberapa hari`
  },
  "band 2": {
    text: `Hello WhatsApp developer, to deactivate someone's WhatsApp account because he has sold prohibited items in the form of drugs in the WhatsApp application, I ask to deactivate that person's WhatsApp account in order to reduce the number of sales of prohibited items, and so as not to damage the nation and state generation. I ask Mark Zuckerberg and WhatsApp developers for help.

The WhatsApp number of the seller of prohibited items is +628XXX

Thanks to Mark Zuckerberg and WhatsApp developers for helping me.`,
    usage: `Cara menggunakan nya adalah :
-Salin Teks
-hubungi lewat gmail
-Tunggu beberapa hari`
  },
  "band 3": {
    text: `Olá desenvolvedor do WhatsApp, peço para desativar a conta do WhatsApp de alguém por ter vendido itens proibidos em forma de drogas no aplicativo WhatsApp. Peço a desativação da conta dessa pessoa para diminuir o número de vendas de itens proibidos e para não prejudicar a nação e a geração do estado. Peço ajuda a Mark Zuckerberg e aos desenvolvedores do WhatsApp.

O número do WhatsApp do vendedor de itens proibidos é +628XXX

Obrigado a Mark Zuckerberg e ao desenvolvedor do WhatsApp por me ajudar.`,
    usage: `Cara menggunakan nya adalah :
-Salin Teks
-hubungi lewat gmail
-Tunggu beberapa hari`
  }
};

document.querySelectorAll('.menu-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const name = btn.textContent.trim();
    textTitle.textContent = name;
    textContent.textContent = TEXTS[name]?.text || "Teks belum tersedia.";
    usageBox.textContent = TEXTS[name]?.usage || "";
    menuPage.style.display = "none";
    textPage.style.display = "block";
  });
});

function copyText(){
  navigator.clipboard.writeText(textContent.textContent)
    .then(()=> showToast("Teks disalin!", true))
    .catch(()=> showToast("Gagal menyalin"));
}
function backMenu(){ textPage.style.display="none"; menuPage.style.display="block"; }