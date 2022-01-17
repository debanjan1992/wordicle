const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { nanoid } = require("nanoid");

class GameEngine {

    static isDemoMode = true;

    static generateRandomId() {
        return nanoid();
    }

    static getRandomWord() {
        if (this.isDemoMode) {
            return this.createNewSession("CACTUS");
        } else {
            const dataset = JSON.parse(fs.readFileSync(path.join(__dirname, "words.json")));
            const index = Math.floor(Math.random() * dataset.length);
            const word = dataset[index].word.value;
            return this.createNewSession(word);
        }
    }

    static clearSession(sessionId) {
        const sessions = JSON.parse(fs.readFileSync(path.join(__dirname, "sessions.json")));
        delete sessions[sessionId];
        fs.writeFileSync(path.join(__dirname, "sessions.json"), JSON.stringify({}, null, 4));
    }

    static clearAllSessions() {
        fs.writeFileSync(path.join(__dirname, "sessions.json"), JSON.stringify({}, null, 4));
    }

    static isSessionValid(id) {
        const sessions = JSON.parse(fs.readFileSync(path.join(__dirname, "sessions.json")));
        if (!sessions[id]) {
            return false;
        }
        return true;
    }

    static createNewSession(word) {
        const id = this.generateRandomId();
        const sessions = JSON.parse(fs.readFileSync(path.join(__dirname, "sessions.json")));
        if (!sessions[id]) {
            sessions[id] = word;
        }
        fs.writeFileSync(path.join(__dirname, "sessions.json"), JSON.stringify(sessions, null, 4));
        return {
            id: id,
            length: word.length
        };
    }

    static getWordFromSession(sessionId) {
        const sessions = JSON.parse(fs.readFileSync(path.join(__dirname, "sessions.json")));
        if (sessions[sessionId]) {
            return sessions[sessionId].toUpperCase();
        } else {
            return null;
        }
    }

    static async isValidWord(word) {
        if (this.isDemoMode) {
            return Promise.resolve(true);
        } else {
            const response = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + word.toLowerCase());
            if (Array.isArray(response.data)) {
                return true;
            } else {
                return false;
            }
        }
    }

    static submitAnswer(sessionId, answer) {
        return this.isValidWord(answer).then(isValid => {
            if (!isValid) {
                return Promise.reject(false);
            } else {
                const output = [];
                const word = this.getWordFromSession(sessionId);
                if (word === null) {
                    return Promise.reject(false);
                }
                for (let i = 0; i < word.length; i++) {
                    const character = word[i];
                    if (character === answer[i]) {
                        output[i] = "correct";
                    } else {
                        output[i] = "absent";
                    }

                    if (output[i] !== "correct" && word.includes(answer[i])) {
                        output[i] = "present";
                    }
                }
                return Promise.resolve(Object.values(output));
            }
        });
    }
}

module.exports = GameEngine;