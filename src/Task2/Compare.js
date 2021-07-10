function compare(ruText, enTextWithComments) {

    let equalPairs = [];

    let nonLetters = [' ', ',', '.', ':', '-', ';', '\'']

    for (let i = 0; i < ruText.length; i++) {

        let ruStringIndex = 0;

        let ruLetterIndex = 0.5;

        for (let j = 0; j < ruText[j].length; j++) {

            if (!nonLetters.includes(ruText[i][j])) {

                ruStringIndex += ruLetterIndex;

                ruLetterIndex += 1;

            }

        }

        for (let k = 0; k < enTextWithComments.length; k++) {

            let enStringIndex = 0;

            let enLetterIndex = 0.5;

            let enCommentIndex = 0;

            let commentLetterIndex = 0.5;

            let enText = enTextWithComments[k].split('|')[0];

            let comment = enTextWithComments[k].split('|')[1]

            function i1(value, a1, a2) {
                for (let m = 0; m < value.length; m++) {

                    if (!nonLetters.includes(value[m])) {

                        a1 += a2;

                        a2 += 1;

                    }


                }

                return (value, a1, a2, '');
            }

            enText, enStringIndex, enLetterIndex = i1(enText, enStringIndex, enLetterIndex);


            enText, enStringIndex, enLetterIndex = i1(comment, enCommentIndex, commentLetterIndex);

            }

            if (ruStringIndex === enStringIndex + enCommentIndex) {

                equalPairs.push({

                    ruText: ruText[i],

                    enText: enTextWithComments[k]

                });

            }

        }

    }

    return equalPairs;

}