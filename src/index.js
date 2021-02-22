module.exports = function toReadable (number) {
  let ones = ['','one','two','three','four','five','six','seven','eight','nine'];
  let tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let hundred = ['hundred']
  let toNumber = ["10","11","12","13","14","15","16","17","18","19"]
  let string = [];
  let onesStr = function(massive){
    return ones[String(number).split("")[massive]];
  }
  let tensStr = function(massive){
    return tens[String(number).split("")[massive]];
  }
  let teensStr = function(massive){
    return teens[String(number).split("")[massive]]
  }
  let stringNumber = function(massive){
    return String(number).split("")[massive];
  }

  if(number < 10 && number > 0){
    return ones[number];
  } else if(number > 9 && number < 20){
    return teensStr(1);
  } else if(number > 19 && number < 100){
    if(number % 10 !== 0){
      string = tensStr(0) + " " + onesStr(1);
      return string;
    } else{
      string = tensStr(0);
      return string;
    }
  } else if(number > 99 && number < 1000){
    if( number % 100 === 0){
      string = onesStr(0) + " " + hundred[0];
      return string;
    } else if( number % 10 === 0){
      if(stringNumber(1) === "1"){
        string = onesStr(0) + " " + hundred[0] + " " + teensStr(2);
        return string;
      } else{
        string = onesStr(0) + " " + hundred[0] + " " + tensStr(1);
        return string;
      }
    } else {
      if(stringNumber(1) === "0"){
        string = onesStr(0) + " " + hundred[0] + " " + onesStr(2);
        return string;
      } else if(stringNumber(1) === "1"){
        string = onesStr(0) + " " + hundred[0] + " " + teensStr(2);
        return string;
      }else {
        string = onesStr(0) + " " + hundred[0] + " " + tensStr(1) + " " + onesStr(2);
        return string;
      }
    }
  }
  else{
    return "zero";
  }
}
