Logger.clear()

var sheet = SpreadsheetApp.getActiveSheet();
var data = sheet.getDataRange().getValues();


function index() {



for (i = 1; i < data.length; i++) {
    var Difficulty = data[i][2];
    var source = data[i][1];
    var subject = data[i][3]
    var answer = data[i][5]
    var question = data[i][4]
    var elements = [source.replace(/\s/g, ''),subject[0],Difficulty,i];
    var element_ID = (elements.join(''));

    sheet.getRange(["H",i+1].join('')).setValue(element_ID);


}
}


index();
