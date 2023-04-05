export const arrayItems = [
    {
        name: "Q&A",
        id: "q&a",
        description: "Answer questions on existing knowledge",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: "Grammer Correction",
        id: "grammercorrection",
        description: "Corrects grammer on existing knowledge",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: "Summarize for a 2nd grader",
        id: "summary",
        description: "Translates difficult text into simpler concepts",
        option: {
            model: "text-davinci-003",
            temperature: 0.7,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: "English to other languages",
        id: "translate",
        description: "translates english to other languages",
        option: {
            model: "text-davinci-003",
            temperature: 0.3,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: "Movie to Emoji",
        id: "movieToEmoji",
        description: "converts movie titles into emoji",
        option: {
            model: "text-davinci-003",
            temperature: 0.8,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    }, {
        name: "Explain code",
        id: "explaincode",
        description: "explains a piece of code",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 150,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    }, {
        name: "Javascript to Python",
        id: "jstopy",
        description: "converts javascript to python",
        option:{
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
]