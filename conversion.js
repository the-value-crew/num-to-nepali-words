
const DATA = {
    en: {
        DIGITS: [
            "Zero",
            "One",
            "Two",
            "Three",
            "Four",
            "Five",
            "Six",
            "Seven",
            "Eight",
            "Nine",
            "Ten",
            "Eleven",
            "Twelve",
            "Thirteen",
            "Fourteen",
            "Fifteen",
            "Sixteen",
            "Seventeen",
            "Eighteen",
            "Nineteen"
        ],
        DIGIT_TENS: [
            "",
            "",
            "Twenty",
            "Thirty",
            "Forty",
            "Fifty",
            "Sixty",
            "Seventy",
            "Eighty",
            "Ninety"
        ],
        DIGIT_PLACES: ["Thousand", "Lakh", "Crore", "Arab", "Kharab"]
    },

    np: {
        DIGITS: [
            "शुन्य",
            "एक",
            "दुई",
            "तीन",
            "चार",
            "पाँच",
            "छ",
            "सात",
            "आठ",
            "नौ",
            "दश",
            "एघार",
            "बाह्र",
            "तेह्र",
            "चौध",
            "पन्ध्र",
            "सोह्र",
            "सत्र",
            "अठार",
            "उन्नाइस",
            "बिस",
            "एक्काइस",
            "बाइस",
            "तेईस",
            "चौविस",
            "पच्चिस",
            "छब्बिस",
            "सत्ताइस",
            "अठ्ठाईस",
            "उनन्तिस",
            "तिस",
            "एकत्तिस",
            "बत्तिस",
            "तेत्तिस",
            "चौँतिस",
            "पैंतिस",
            "छत्तिस",
            "सैँतिस",
            "अठतिस",
            "उनन्चालीस",
            "चालीस",
            "एकचालीस",
            "बयालीस",
            "त्रियालीस",
            "चवालीस",
            "पैँतालीस",
            "छयालीस",
            "सच्चालीस",
            "अठचालीस",
            "उनन्चास",
            "पचास",
            "एकाउन्न",
            "बाउन्न",
            "त्रिपन्न",
            "चवन्न",
            "पचपन्न",
            "छपन्न",
            "सन्ताउन्न",
            "अन्ठाउन्न",
            "उनन्साठी",
            "साठी",
            "एकसट्ठी",
            "बयसट्ठी",
            "त्रिसट्ठी",
            "चौंसट्ठी",
            "पैंसट्ठी",
            "छयसट्ठी",
            "सतसट्ठी",
            "अठसट्ठी",
            "उनन्सत्तरी",
            "सत्तरी",
            "एकहत्तर",
            "बहत्तर",
            "त्रिहत्तर",
            "चौहत्तर",
            "पचहत्तर",
            "छयहत्तर",
            "सतहत्तर",
            "अठहत्तर",
            "उनासी",
            "असी",
            "एकासी",
            "बयासी",
            "त्रियासी",
            "चौरासी",
            "पचासी",
            "छयासी",
            "सतासी",
            "अठासी",
            "उनान्नब्बे",
            "नब्बे",
            "एकान्नब्बे",
            "बयानब्बे",
            "त्रियान्नब्बे",
            "चौरान्नब्बे",
            "पन्चानब्बे",
            "छयान्नब्बे",
            "सन्तान्नब्बे",
            "अन्ठान्नब्बे",
            "उनान्सय",
            "एक सय"
        ],
        DIGIT_PLACES: ["हजार", "लाख", "करोड", "अर्ब", "खर्ब"]
    }
};
const MAPPER = {
    en: {
        computeHundredsPlaceWord: digit => {
            // zero(handled from caller function) and empty string
            if (len(digit) === 0 || digit === 0) return "";
            // 1 ... 19
            else if (digit <= 19) return DATA[lang].DIGITS[parseInt(digit)];
            // 20 ... 99
            else if (digit >= 20 && digit <= 99) {
                // 20, 30 ....
                if (digit % 10 === 0) return DATA[lang].DIGIT_TENS[str(digit)[0]];
                // 20 ... 99
                else
                    return (
                        DATA[lang].DIGIT_TENS[str(digit)[0]] +
                        " " +
                        DATA[lang].DIGITS[str(digit)[1]]
                    );
            }
            // 100, 101, 1001 ....
            else if (digit > 99) {
                const hundreds =
                    DATA[lang].DIGITS[str(digit)[0]] === "0"
                        ? ""
                        : DATA[lang].DIGITS[str(digit)[0]] + " Hundred ";
                const tens =
                    digit % 100 === 0
                        ? ""
                        : MAPPER[lang].computeHundredsPlaceWord(
                            str(digit)[1] + str(digit)[2]
                        );
                return hundreds + (tens !== "" ? "and " + tens : "");
            }
        },

        computeGreaterPlaceWord: (digit, place) => {
            if (digit === 0) return "";
            return (
                MAPPER[lang].computeHundredsPlaceWord(digit) +
                " " +
                DATA[lang].DIGIT_PLACES[place - 1]
            );
        }
    },

    np: {
        computeHundredsPlaceWord: digit => {
            if (len(digit) === 0 || digit === 0) return "";
            if (len(digit) <= 2) return DATA[lang].DIGITS[digit];
            else if (len(digit) === 3) {
                if (digit === 100) return DATA[lang].DIGITS[digit];
                else if (digit % 100 === 0)
                    return DATA[lang].DIGITS[str(digit)[0]] + " सय";
                const hundreds = DATA[lang].DIGITS[str(digit)[0]];
                const tens =
                    DATA[lang].DIGITS[parseInt(str(digit)[1] + str(digit)[2])];
                return hundreds + " सय " + tens;
            }
        },

        computeGreaterPlaceWord: (digit, place) => {
            if (digit === 0) return "";

            // -1 because DIGIT_PLACES start from thousand, excluding hundred
            return (
                DATA[lang].DIGITS[digit] + " " + DATA[lang].DIGIT_PLACES[place - 1]
            );
        }
    }
};
var lang;

function computeWord(digit, place) {
    return place === 0
        ? MAPPER[lang].computeHundredsPlaceWord(digit)
        : MAPPER[lang].computeGreaterPlaceWord(digit, place);
}

// entry point
function mapToWords(number, language = "np") {
    lang = language;
    let parsedNum = Math.abs(parseInt(number));

    // invalid number
    if (len(parsedNum) > 13 || isNaN(parsedNum)) return "Invalid";

    // direct mapping
    if (lang === "en") {
        // directly map number 0...19
        if (parsedNum <= 19) return DATA[lang].DIGITS[parsedNum];
    } else if (lang === "np") {
        // directly map number 0...100
        if (parsedNum <= 100) return DATA[lang].DIGITS[parsedNum];
    }

    let splited = splitNumber(parsedNum);
    splited = splited.map((digit, place) => {
        place = splited.length - place - 1;
        return computeWord(digit, place);
    });
    return splited.filter(n => n.length > 0).join(", ");
}

// number: String, return [Number]
function splitNumber(number) {
    // don't split if <= 2 digit number
    if (len(number) <= 2) return [number];

    let collection = [];

    //last three digits
    collection.push(parseInt(getLastNChars(number, 3)));
    number = removeLastNChars(number, 3);

    //remaining digits in 2 digit chunk
    while (number.length) {
        if (number.length >= 2) {
            let chunk = getLastNChars(number, 2);
            number = removeLastNChars(number, 2);
            collection.push(parseInt(chunk));
        } else {
            collection.push(parseInt(number));
            number = "";
        }
    }

    // Split was done from ones place, so need to reverse it
    return collection.reverse();
}

// helper methods
function getLastNChars(string, n) {
    string = str(string);
    return string.substr(string.length - n, string.length);
}

function removeLastNChars(string, n) {
    string = str(string);
    return string.substr(0, string.length - n);
}

function len(digit) {
    return str(digit).length;
}

function str(digit) {
    return digit.toString();
}

if (typeof module !== "undefined")
    module.exports = mapToWords;