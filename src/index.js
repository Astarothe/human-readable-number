module.exports = function toReadable (number) {
    let ones=['','one','two','three','four','five','six','seven','eight','nine'];
    let tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let hundred = ['hundred']
    let toNumber = ["10","11","12","13","14","15","16","17","18","19"]
    let numbers = String(number).split("");
    numbers = numbers.map(function (item) {
        return parseFloat(item);
    });
    let change = numbers.slice(1).join("");
    if(number < 10 && number > 0){
        return ones[number];
    }  else if(number >= 10 && number < 20){
        let result = teens[numbers[1]];
        return result;
    }else if(number < 100 && number > 10){
        if(change == "0"){
            let first = tens[numbers[0]];
            return first;
        }
        let first = tens[numbers[0]];
        let last = (ones[numbers[1]]);
        let result = (first + " " + last);
        return result;
    } else if(number < 1000 && number >= 100){
        for(let i = 0; i < toNumber.length; i++){
            if(change === toNumber[i]){
                let first = [ones[numbers[0]],hundred];
                first = first.join(" ")
                let middle = (teens[numbers[2]]);
                let result = [first,middle];
                for(let i = 0; i < result.length; i++){
                    if(result[i] === ""){
                        result.splice(i,i)
                    }
                }
                return result.join(" ");
            }else if(change === "00"){
                let first = [ones[numbers[0]],hundred];
                first = first.join(" ")
                return first;
            }
        }
        let first = [ones[numbers[0]],hundred];
        first = first.join(" ")
        let middle = (tens[numbers[1]]);
        let last = (ones[numbers[2]]);
        let result = [first,middle,last];
        for(let i = 0; i < result.length; i++){
            if(result[i] === ""){
                result.splice(i,i)
            }
        }
        return result.join(" ");
    }else if(number === 0){
        return "zero";
    }

}
