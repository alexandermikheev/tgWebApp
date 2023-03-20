let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = {
    fio:"",
    muber:"",
    jobTitle:"",
    сitizenship:"",
    message:"",
};

const fio = document.getElementById("fio");
const telnuber = document.getElementById("telnuber");
const jobTitle = document.getElementById("jobTitle");
const сitizenship = document.getElementById("сitizenship");
const message = document.getElementById("message")


fio.addEventListener("input", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Отправить");

        fio.value = `${tg.initDataUnsafe.user.first_name + tg.initDataUnsafe.user.last_name}`;        

        item.fio = fio.value;
        item.muber = telnuber;
        item.jobTitle = jobTitle;
        item.сitizenship = сitizenship;
        item.message = message.value;
		tg.MainButton.show();
	}
});



Telegram.WebApp.onEvent("mainButtonClicked", function(){
  JSON.stringify(tg.sendData(item));
});
