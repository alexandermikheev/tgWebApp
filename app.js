let tg = window.Telegram.WebApp;
const fio = document.getElementById("fio");
const telnuber = document.getElementById("telnumber");
const jobTitle = document.getElementById("jobTitle");
const сitizenship = document.getElementById("сitizenship");
const message = document.getElementById("message")
const form = document.querySelectorAll("input")
const texrarea = document.querySelectorAll("textarea")
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#e8ae2d";


let item = {
    fio: "",
    number: "",
    jobTitle: "",
    сship: "",
    msg: "",
};

form.forEach(inp => {
    inp.addEventListener("input", button)
    
});
texrarea.forEach(inp => {
    inp.addEventListener("input", button)
    
});

function button(){
    if (!fio.value || !telnuber.value || !сitizenship.value) {
		tg.MainButton.hide();
	}
	else {
        sendDats()
        tg.MainButton.setText("Отправить");
		tg.MainButton.show();
	}
}

function sendDats(){
    item.fio = fio.value;
    item.number = telnuber.value;
    item.jobTitle = jobTitle.value;
    item.сship = сitizenship.value;
    item.msg = message.value;
}


Telegram.WebApp.onEvent("mainButtonClicked", function(){
  tg.sendData(JSON.stringify(item));
});
