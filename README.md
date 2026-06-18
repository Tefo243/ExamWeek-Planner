# ExamWeek Planner

**ExamWeek Planner** is a web-based study planning dashboard designed for exam weeks.  
It helps students decide what to study first by combining task deadlines, exam countdowns, confidence ratings, workload scores, and priority levels.

The project was developed as a student software project and runs fully in the browser.

---

## Live Demo

```text
https://tefo243.github.io/ExamWeek-Planner/
```

---

## Project Purpose

During exam weeks, students often have to manage several subjects, revision tasks, assignments, and upcoming exams at the same time. A normal checklist can show what needs to be done, but it does not show which task is actually more urgent or risky.

ExamWeek Planner focuses on that problem. It does not only store tasks; it helps prioritize them.

---

## Main Features

### Task Planning
- Add study tasks by subject, topic, level, date, time, and priority.
- Break larger tasks into smaller subtasks.
- Mark tasks and subtasks as completed.
- When all subtasks are completed, the main task is completed automatically.

### Exam Countdown
- Add upcoming exams with subject, level, date, and time.
- See how many days are left until each exam.
- Use exam dates as part of the task prioritization logic.

### Confidence Rating
Each task has a **1–5 confidence score**.  
This allows the student to mark how prepared they feel for a topic.

Low-confidence tasks are treated as more risky, especially when an exam is close.

### IB Load Score
Each task receives a workload score based on factors such as:

- priority
- estimated study time
- HL/SL level
- confidence rating
- number of subtasks
- due date
- related exam countdown

This helps identify which tasks need attention first.

### Last-Minute Mode
The **Last-Minute Mode** filters the list and shows only the most critical tasks, such as:

- overdue tasks
- tasks due today or tomorrow
- high-priority tasks
- low-confidence tasks
- starred tasks
- tasks connected to nearby exams

### Today's Battle Plan
The app automatically highlights the most important tasks for the current day.  
This gives the student a quick starting point instead of forcing them to scan the entire list manually.

### Local Storage
All data is stored in the browser using `localStorage`.  
No account, database, or installation is required.

---

## Date and Time Format

The app uses custom date and time selectors to avoid browser-dependent formatting.

- Date format: **day / month / year**
- Time format: **24-hour clock**

This prevents browsers from displaying dates as month/day/year or times as AM/PM.

---

## Technologies Used

- HTML
- CSS
- JavaScript
- localStorage
- GitHub Pages

---

## How to Run Locally

1. Download or clone the project.
2. Open the project folder.
3. Double-click `index.html`.
4. The app will open in your browser.

No installation is required.

---

## File Structure

```text
ExamWeek-Planner/
├── index.html
├── style.css
├── app.js
├── README.md
└── CHANGELOG.md
```

---

## Why This Project Is Different

Most planner apps focus on listing tasks.  
ExamWeek Planner focuses on **study decision-making**.

Instead of only asking:

> What tasks do I have?

it also helps answer:

> Which task should I study first, and why?

This makes it more useful for exam weeks, where time is limited and prioritization matters.

---

## Future Improvements

Possible future improvements include:

- calendar view
- real notification reminders
- export to PDF
- subject-specific analytics
- cloud sync
- mobile app version

These were not added in the current version to keep the project simple, stable, and easy to present.
