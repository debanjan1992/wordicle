# Wordicle Clone

A clean, fast, and addictive clone of Wordicle built using modern frontend technologies.  
Players guess the secret word within a limited number of attempts using logical deduction and visual feedback.

---

## 🎯 Overview

This project replicates the core gameplay mechanics of Wordicle while adding a smooth UI, responsive layout, and clean code structure.  
The game provides instant feedback for each guessed letter through color indicators.

---

## ✨ Features

### 🔤 Word Guessing Gameplay
- Players must guess a hidden word.
- After each guess, letters are highlighted to indicate:
  - **Correct letter & correct position**
  - **Correct letter but wrong position**
  - **Incorrect letter**
- Helps players logically deduce the word over multiple attempts.

---

### ⏱️ Limited Attempts
- Players get a fixed number of attempts to find the correct word.
- Encourages strategy, planning, and word knowledge.

---

### 🎨 Color-Based Feedback
- The game uses intuitive color coding:
  - Green (or success color): Correct letter, correct position  
  - Yellow (or warning color): Correct letter, wrong position  
  - Gray (or neutral color): Letter not in the word  
- Makes the game easy to understand at a glance.

---

### ⌨️ On-Screen & Keyboard Input
- Users can type using:
  - Their real keyboard  
  - A responsive on-screen keyboard  
- Keyboard colors update live based on guess history.

---

### 📱 Responsive UI
- Works smoothly on desktop, tablet, and mobile devices.
- Layout adapts to different screen sizes.

---

### 🎲 Daily or Random Word Mode (optional if included)
- Daily challenge mode with the same word for all players.  
- Random mode for endless play.  
*(Remove this section if your version does not include this.)*

---

### 🧠 Game Logic Engine
- Cleanly separated logic for:
  - Word selection  
  - Guess validation  
  - Letter evaluation  
  - State update  
- Easy to extend for future features.

---

### 🔊 Other Enhancements
- Dark/Light mode toggle.

---

## 🛠️ Tech Stack (update based on your project)
- **Angular / React / Vue / Vanilla JS**  
- **TypeScript**  
- **SCSS / CSS**  

---

## ▶️ Running the Project

```bash
npm install
npm start
