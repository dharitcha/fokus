# Fokus Timer Project

## Overview
This project was developed as part of a study on JavaScript, based on lessons from the Alura + Oracle Next Education (ONE) program. The goal was to practice **JavaScript functionalities**, including event handling, timers, and dynamic UI updates, using a pre-provided HTML structure.

The design was customized beyond the original template, with a unique color scheme and images to create a more engaging user experience.

## Features
- **Pomodoro Timer Modes:**
  - **Focus Mode:** 25-minute timer for deep work.
  - **Short Break:** 5-minute timer for quick rest.
  - **Long Break:** 15-minute timer for extended relaxation.
- **Dynamic UI Updates:**
  - Background images and text change based on the selected mode.
  - The start/pause button updates dynamically.
- **Countdown Timer:**
  - Displays remaining time in a formatted MM:SS style.
  - Plays a sound when the session ends.
- **Audio Controls:**
  - Background music option.
  - Play/pause sound effects for interactions.

## Technologies Used
- **JavaScript**: Timer logic, event listeners, and DOM manipulation.
- **HTML**: Structure for the Pomodoro Timer interface.
- **CSS**: Custom styles and responsive design.

## How It Works
### Timer Modes
- Clicking one of the mode buttons (**Focus, Short Break, Long Break**) sets the corresponding timer.
- The UI updates dynamically to reflect the selected mode.

### Countdown Functionality
- The timer decreases every second.
- When the time reaches 0, a notification sound plays, and an alert notifies the user.
- Users can pause or reset the timer at any time.

### Start/Pause Button
- When started, the button changes to **"Pause"** with an icon update.
- When paused, the button resets to **"Start"**.
- Clicking "Pause" stops the countdown without resetting the time.

## Installation and Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/fokus-timer.git
   ```
2. Open `index.html` in a web browser.
3. Select a mode and start the timer!

## Future Improvements
- Add custom session duration settings.
- Implement local storage to save session preferences.
- Improve accessibility with keyboard shortcuts.

## Live Demo
Check out the live version here: [Fokus Timer](https://dharitcha.github.io/fokus/) 

## License
This project is open-source and available under the MIT License.

