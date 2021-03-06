window.addEventListener("load", function (event) {
    generateQuestions();
});

function generateQuestions() {
    let questions = {
        0: {
            question:
                "Romeo’s friends took him to the ball to help him forget Rosaline. How was their plan successful?",

            answer: "The plan was successful because Romeo forgot about Rosaline, but he fell in love with Juliet, from the rival family, this is worse than Romeo's love for Rosaline.",
        },

        1: {
            question:
                "Do you believe Juliet’s mother really sent for her? Explain your answer. What does it tell us about Juliet’s nurse?",

            answer: "I don't think Juliet's mother really sent for her, because she was only thinking about power and money, and not about Juliet's happiness.",
        },

        2: {
            question:
                "Do you think the friar’s decision to help Romeo was correct? Explain your answer.",

            answer: "I don't think the friar's decision to help Romeo was correct, because he didn't knew if Romeo and Juliet were truly in love. He was insecure about their relationship, so he should first meet the couple and then help them.",
        },

        3: {
            question:
                "How did Mercutio learn that Tybalt had challenged Romeo to a duel?",

            answer: "Mercutio learned that Tybalt had challenged Romeo to a duel because Romeo's servant told him.",
        },

        4: {
            question:
                "Why did Romeo tell the nurse to meet his servant after the wedding ceremony?",

            answer: "Romeo told the nurse to meet his servant after the wedding ceremony because the servant will give her a rope that Romeo needed to get to Juliet's room after the wedding.",
        },

        5: {
            question:
                "What did Romeo mean when he said that Juliet's beauty had made him soft?",

            answer: "Romeo mean that the love for Juliet had made him love her family too, but her family hated him and all his family, they were even trying to kill him and he didn't realized that untill Tybalt killed Mercutio.",
        },

        6: {
            question:
                "How did Lady Capulet's hatred affect her response to Tybalt's death?",

            answer: "Lady Capulet's hatred affected her response to Tybalt's death because she transformed her sadness into anger and hate to the Mountage family, she transformed Tybalt's death into a reason to hate the Mountages.",
        },

        7: {
            question:
                "How did Juliet persuade her nurse that Romeo wasn't a villain?",

            answer: "Juliet persuade her nurse making her believe that Romeo killed Tybalt in self-defence and it was not intentional at all and that Romeo wanted peace between their families.",
        },

        8: {
            question:
                "Why did Romeo think that the Prince's decision was terrible?",

            answer: "Romeo thought that the Prince's decision was terrible because he would rather die than not to be able to see Juliet anymore.",
        },

        9: {
            question:
                "In what way did Friar Laurence show great compassion for the young couple?",

            answer: "Friar Laurence showed great compassion for the couple because they were really in love and their love was going to last a life time. They had really strong feelings for each other.",
        },

        10: {
            question:
                "Was Capulet a typical father of his time? Explain your answer.",

            answer: "Yes, Lord Capulet was a typical father of his time, because he doesn't care about Juliet’s feelings or emotions, he doesn't care for her well-being either, and basically, he is not trying to protect her and he doesn’t take into account her opinions. All families in that time married their children to get power and that was the typical thing to do.",
        },

        11: {
            question:
                "Before Romeo had to leave, what shows us that he was becoming more mature?",

            answer: "The fact that Romeo left even thought he still wanted to be with Juliet shows us that he is becoming more mature, because if he didn't left there, he will probably die to the Prince's guards, so he decided to leave and live.",
        },

        12: {
            question:
                "How did Juliet feel when her mother came and told her she was going to marry Paris?",

            answer: "Juliet felt disrespected when her mother came and told her she was going to marry Paris, because her family didn't ask for her opinion on marrying Paris. She also felt angry because she did not made the desicion. She also felt powerless because she could not do anything to stop the wedding.",
        },

        13: {
            question: "What lie did Juliet tell the nurse to leave the house?",

            answer: "Juliet lied to the nurse and told her that she was going to confession in Friar Laurence's church to leave the house.",
        },

        14: {
            question: "What was Friar Laurence's plan?",

            answer: "Friar Laurence's plan was very difficult. She wanted Juliet to tell her family that she was going to marry Paris, then, the night before the wedding, she should drink a little bottle that will make her fall asleep. The Capulets will think she is dead and they will organise a funeral for her. She will wake up 48 hours after in the Capulets crypt and Romeo will be there waiting for her. They will leave Verona and leave their love happily without having to worry about their families hating each other. ",
        },

        15: {
            question:
                "Do you think his plan was a good idea? Explain your answer.",

            answer: "I don't think his plan was a good idea because it was really hard to execute and it has a lot of flaws, for example, the letter may not arrive at Romeo's or the potion may not work. Also it relies heavily on the desicions that the Capulets make.",
        },

        16: {
            question: "What was Friar John's part in the plan?",

            answer: "Friar John's part in the plan is critical. He is in charge of getting the letter to Romeo.",
        },

        17: {
            question: "In what way was the friar's plan too dangerous?",

            answer: "The plan really relies on the decisions that the Capulets make. They could a not expected decision and the plan will not go as planned. Also the plan has a lot of critical flaws that make it unreliable if the situation is not the expected one. The fact that Romeo did not receive the letter is something that was not planned so the plan went completely wrong.",
        },

        18: {
            question:
                "What part did bad luck play in the conclusion of the story?",

            answer: "Bad luck made Lord Capulet celebrate the wedding the day after Juliet told him that she agreed to marry Paris, so the plan could not work as expected. The letter did not arrive so Romeo commited suicide and Juliet ended up commiting suicide too.",
        },

        19: {
            question:
                "Do you think the characters of Romeo and Juliet were believable? Explain your answer.",

            answer: "I don't think the characters of Romeo and Juliet were believable. For example, Romeo and Juliet fell in love with each other instantly and they married right away without knowing each other well. Also, they were pretty dramatic at the end, they both commited suicide innecesarely, and also Romeo tried to kill himself before. Also, the fact that the families hated each other without any apparent reason is not really believable.",
        },

        20: {
            question:
                "Why do you think Romeo and Juliet is still popular today?",

            answer: "I think that Romeo and Juliet is still popular because it's really good and enjoyable. It's a really good story and it lets us know the context of those times. It's really well structured and written because the author is one of the best ones in history.",
        },
    };

    let questions_container = document.getElementById("questions");

    for (let i = 0; i < Object.keys(questions).length; i++) {
        let question = document.createElement("div");

        question.innerHTML =
            "<div class='row'>" +
            "<div class='col-lg-3'></div>" +
            "<div class='col-lg-6 box'>" +
            "<h3>" +
            (i + 1) +
            ") " +
            questions[i].question +
            "</h3>" +
            "<br>" +
            "<p>" +
            questions[i].answer +
            "</p>" +
            "</div>" +
            "<div class='col-lg-3'></div>" +
            "</div>";

        questions_container.appendChild(question);

        console.log("hola");
    }
}
