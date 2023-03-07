const MyString = "Привет, как дела?";
const YourString = "Привет, всё хорошо! А твои?";

function getVowels(string){
    const referens = ['а','е','ё','и','о','у','ы','э','ю','я'];
    var updateString='';

    for (var i=0; i<string.length;i++){
        var letter = string[i];
        letter=letter.toLowerCase();

        if (referens.includes(string[i])){
            updateString=updateString + string[i];
        }
    }
    console.log(updateString);
}

getVowels(MyString);
getVowels(YourString);
