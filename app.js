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

let fio = document.getElementById("fio");
let telnuber = document.getElementById("telnuber");
let jobTitle = document.getElementById("jobTitle");
let сitizenship = document.getElementById("сitizenship");


fio.addEventListener("input", function(){
    event.preventDefault();
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Отправить");
		let datafio = document.getElementById("fio").value;

        datafio.value = `${tg.initDataUnsafe.user.first_name + tg.initDataUnsafe.user.last_name}`;

        let datamuber = document.getElementById("telnuber").value;
        let datajobTitle = document.getElementById("jobTitle").value;
        let dataсitizenship = document.getElementById("сitizenship").value;
        let datamessage = document.getElementById("message").value;
        item.fio = datafio;
        item.muber = datamuber;
        item.jobTitle = datajobTitle;
        item.сitizenship = dataсitizenship;
        item.message = datamessage;
		tg.MainButton.show();
	}
});



Telegram.WebApp.onEvent("mainButtonClicked", function(){
  JSON.stringify(tg.sendData(item));
});
