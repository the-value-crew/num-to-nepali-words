var convertToWords = require('./conversion');

const TEST_DATA = {
    np: {
        inputs: [
            "1234567898234",
            "00000000000000000001000000000011",
            "0",
            "123456700000",
            "10001011"
        ],
        outputs: [
            "बाह्र खर्ब, चौँतिस अर्ब, छपन्न करोड, अठहत्तर लाख, अन्ठान्नब्बे हजार, दुई सय चौँतिस",
            "दश खर्ब, एघार",
            "शुन्य",
            "एक खर्ब, तेईस अर्ब, पैँतालीस करोड, सतसट्ठी लाख",
            "एक करोड, एक हजार, एघार"
        ]
    },

    en: {
        inputs: [
            "12345",
            "700",
            "105",
            "110",
            "30",
            "123445",
            "100001",
            "10203040"
        ],
        outputs: [
            "Twelve Thousand, Three Hundred and Forty Five",
            "Seven Hundred",
            "One Hundred and Five",
            "One Hundred and Ten",
            "Thirty",
            "One Lakh, Twenty Three Thousand, Four Hundred and Forty Five",
            "One Lakh, One",
            "One Crore, Two Lakh, Three Thousand, Forty"
        ]
    }
};

function test() {
    const report = [];

    Object.keys(TEST_DATA).forEach(language => {
        TEST_DATA[language].inputs.forEach((input, i) => {
            const output = convertToWords(input, language);
            const status =
                TEST_DATA[language].outputs[i].trim() === output.trim()
                    ? "success"
                    : "failure";
            report.push({
                language,
                status,
                input,
                output,
                stdOutput: TEST_DATA[language].outputs[i]
            });
        });
    });

    return report;
}

// Run Test
console.log(test());