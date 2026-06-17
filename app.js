const STORAGE_KEY = "examweekPlannerTasksV6";
const LEGACY_TASK_KEYS = ["examweekPlannerTasksV5", "examweekPlannerTasksV4", "examweekPlannerTasksV3", "examweekTasks"];
const EXAM_STORAGE_KEY = "examweekPlannerExamsV6";
const LEGACY_EXAM_KEYS = ["examweekPlannerExamsV5"];
const THEME_KEY = "examweekPlannerThemeV6";
const TARGET_KEY = "examweekPlannerDailyTargetV6";

const subjectConfig = {
  "Physics": {
    level: "both",
    topics: ["Space, time and motion", "The particulate nature of matter", "Wave behaviour", "Fields", "Nuclear and quantum physics", "Practical skills / IA", "Past paper practice", "Other"]
  },
  "Chemistry": {
    level: "both",
    topics: ["Structure: matter and bonding", "Structure: classification of matter", "Reactivity: energy and spontaneity", "Reactivity: amount, rate and equilibrium", "Reactivity: mechanisms of chemical change", "Practical skills / IA", "Past paper practice", "Other"]
  },
  "Biology": {
    level: "both",
    topics: ["Unity and diversity", "Form and function", "Interaction and interdependence", "Continuity and change", "Practical skills / IA", "Past paper practice", "Other"]
  },
  "Computer Science": {
    level: "both",
    topics: ["System fundamentals", "Computer organization", "Networks", "Computational thinking and programming", "Abstract data structures", "Resource management", "Control", "Case study / IA", "Other"]
  },
  "Environmental Systems and Societies": {
    level: "both",
    topics: ["Foundations of ESS", "Ecosystems and ecology", "Biodiversity and conservation", "Water, food and resource systems", "Atmosphere and climate change", "Human population and sustainability", "IA", "Other"]
  },
  "Sports, Exercise and Health Science": {
    level: "both",
    topics: ["Anatomy", "Exercise physiology", "Energy systems", "Movement analysis", "Skill in sport", "Measurement and evaluation", "IA", "Other"]
  },
  "Design Technology": {
    level: "both",
    topics: ["Human factors and ergonomics", "Resource management", "Modelling", "Raw material to final product", "Innovation and design", "Classic design", "IA", "Other"]
  },
  "Mathematics: Analysis and Approaches": {
    level: "both",
    topics: ["Number and algebra", "Functions", "Geometry and trigonometry", "Statistics and probability", "Calculus", "Exploration / IA", "Past paper practice", "Other"]
  },
  "Mathematics: Applications and Interpretation": {
    level: "both",
    topics: ["Number and algebra", "Functions", "Geometry and trigonometry", "Statistics and probability", "Calculus", "Technology practice", "Exploration / IA", "Past paper practice", "Other"]
  },
  "English A": {
    level: "both",
    topics: ["Readers, writers and texts", "Time and space", "Intertextuality", "Paper 1 practice", "Paper 2 practice", "Individual oral", "HL essay", "Other"]
  },
  "Turkish A": {
    level: "both",
    topics: ["Okurlar, yazarlar ve metinler", "Zaman ve mekan", "Metinlerarasılık", "Paper 1 practice", "Paper 2 practice", "Individual oral", "HL essay", "Other"]
  },
  "Language A: Literature": {
    level: "both",
    topics: ["Works in translation", "Close analysis", "Paper 1 practice", "Paper 2 comparison", "Individual oral", "HL essay", "Other"]
  },
  "Language A: Language and Literature": {
    level: "both",
    topics: ["Language and identity", "Media and communication", "Literary analysis", "Paper 1 practice", "Paper 2 practice", "Individual oral", "HL essay", "Other"]
  },
  "English B": {
    level: "both",
    topics: ["Reading", "Writing", "Listening", "Speaking / Individual oral", "Identities", "Experiences", "Human ingenuity", "Social organization", "Sharing the planet", "Other"]
  },
  "French B": {
    level: "both",
    topics: ["Reading", "Writing", "Listening", "Speaking", "Identities", "Experiences", "Human ingenuity", "Social organization", "Sharing the planet", "Other"]
  },
  "Spanish B": {
    level: "both",
    topics: ["Reading", "Writing", "Listening", "Speaking", "Identities", "Experiences", "Human ingenuity", "Social organization", "Sharing the planet", "Other"]
  },
  "German B": {
    level: "both",
    topics: ["Reading", "Writing", "Listening", "Speaking", "Identities", "Experiences", "Human ingenuity", "Social organization", "Sharing the planet", "Other"]
  },
  "Language ab initio": {
    level: "slOnly",
    topics: ["Vocabulary", "Grammar", "Reading", "Writing", "Listening", "Speaking", "Themes", "Other"]
  },
  "History / TITC": {
    level: "both",
    topics: ["Source analysis", "Essay practice", "Turkish Revolution", "Atatürk reforms", "Turkish foreign policy", "Cold War", "20th century wars", "Authoritarian states", "Other"]
  },
  "Economics": {
    level: "both",
    topics: ["Introduction to economics", "Microeconomics", "Macroeconomics", "The global economy", "Diagrams and definitions", "IA commentary", "Past paper practice", "Other"]
  },
  "Business Management": {
    level: "both",
    topics: ["Business organization and environment", "Human resource management", "Finance and accounts", "Marketing", "Operations management", "Business management toolkit", "IA research project", "Other"]
  },
  "Geography": {
    level: "both",
    topics: ["Changing population", "Global climate", "Global resource consumption and security", "Urban environments", "Geophysical hazards", "Fieldwork / IA", "Past paper practice", "Other"]
  },
  "Psychology": {
    level: "both",
    topics: ["Research methods", "Biological approach", "Cognitive approach", "Sociocultural approach", "Abnormal psychology", "Developmental psychology", "Health psychology", "Human relationships", "IA", "Other"]
  },
  "Global Politics": {
    level: "both",
    topics: ["Power, sovereignty and international relations", "Human rights", "Development", "Peace and conflict", "Engagement activity", "Political issue analysis", "Other"]
  },
  "Philosophy": {
    level: "both",
    topics: ["Core theme", "Optional theme", "Prescribed text", "Argument analysis", "Essay practice", "Other"]
  },
  "Digital Society": {
    level: "both",
    topics: ["Systems and technologies", "Social and ethical significance", "Case studies", "Inquiry project", "Media and data", "Other"]
  },
  "Visual Arts": {
    level: "both",
    topics: ["Comparative study", "Process portfolio", "Exhibition", "Art-making practice", "Research and reflection", "Other"]
  },
  "Music": {
    level: "both",
    topics: ["Exploring music in context", "Experimenting with music", "Presenting music", "Contemporary music maker", "Listening practice", "Other"]
  },
  "Film": {
    level: "both",
    topics: ["Textual analysis", "Film theory", "Collaborative film project", "Comparative study", "Production portfolio", "Other"]
  },
  "Theatre": {
    level: "both",
    topics: ["Solo theatre piece", "Director's notebook", "Research presentation", "Production proposal", "Collaborative project", "Other"]
  },
  "TOK": {
    level: "none",
    topics: ["TOK exhibition", "TOK essay", "Knowledge questions", "Areas of knowledge", "Optional themes", "Other"]
  },
  "Extended Essay": {
    level: "none",
    topics: ["Research question", "Source research", "Outline", "First draft", "References / citations", "Reflection", "Other"]
  },
  "CAS": {
    level: "none",
    topics: ["Creativity", "Activity", "Service", "CAS reflection", "CAS project", "Other"]
  },
  "SAT": {
    level: "none",
    topics: ["Reading and Writing", "Math", "Practice test", "Error review", "Vocabulary", "Other"]
  },
  "AP": {
    level: "none",
    topics: ["Content review", "Multiple choice", "Free response", "Practice test", "Error review", "Other"]
  },
  "Other": {
    level: "none",
    topics: ["General revision", "Homework", "Quiz preparation", "Exam preparation", "Project work", "Other"]
  }
};

const elements = {
  html: document.documentElement,
  taskForm: document.getElementById("taskForm"),
  formTitle: document.getElementById("formTitle"),
  subjectInput: document.getElementById("subject"),
  levelGroup: document.getElementById("levelGroup"),
  levelInput: document.getElementById("level"),
  topicInput: document.getElementById("topic"),
  taskInput: document.getElementById("taskInput"),
  taskTypeInput: document.getElementById("taskType"),
  priorityInput: document.getElementById("priority"),
  confidenceInput: document.getElementById("confidence"),
  dueDateInput: document.getElementById("dueDate"),
  dueTimeInput: document.getElementById("dueTime"),
  estimateInput: document.getElementById("estimate"),
  recurrenceInput: document.getElementById("recurrence"),
  starredInput: document.getElementById("starred"),
  tagsInput: document.getElementById("tags"),
  stepsInput: document.getElementById("steps"),
  notesInput: document.getElementById("notes"),
  submitTask: document.getElementById("submitTask"),
  cancelEdit: document.getElementById("cancelEdit"),
  taskList: document.getElementById("taskList"),
  progressText: document.getElementById("progressText"),
  progressFill: document.getElementById("progressFill"),
  taskStats: document.getElementById("taskStats"),
  todayTime: document.getElementById("todayTime"),
  dailyTargetText: document.getElementById("dailyTargetText"),
  dailyTargetFill: document.getElementById("dailyTargetFill"),
  remainingTime: document.getElementById("remainingTime"),
  urgentCount: document.getElementById("urgentCount"),
  loadScoreText: document.getElementById("loadScoreText"),
  loadScoreHint: document.getElementById("loadScoreHint"),
  loadScoreFill: document.getElementById("loadScoreFill"),
  emptyHint: document.getElementById("emptyHint"),
  resultInfo: document.getElementById("resultInfo"),
  clearCompletedButton: document.getElementById("clearCompleted"),
  resetAllButton: document.getElementById("resetAll"),
  filterButtons: document.querySelectorAll(".filter-btn"),
  searchInput: document.getElementById("searchInput"),
  subjectFilter: document.getElementById("subjectFilter"),
  levelFilter: document.getElementById("levelFilter"),
  priorityFilter: document.getElementById("priorityFilter"),
  sortSelect: document.getElementById("sortSelect"),
  smartPlan: document.getElementById("smartPlan"),
  battleSummary: document.getElementById("battleSummary"),
  subjectBreakdown: document.getElementById("subjectBreakdown"),
  timeline: document.getElementById("timeline"),
  examForm: document.getElementById("examForm"),
  examSubject: document.getElementById("examSubject"),
  examLevelGroup: document.getElementById("examLevelGroup"),
  examLevel: document.getElementById("examLevel"),
  examName: document.getElementById("examName"),
  examDate: document.getElementById("examDate"),
  examTime: document.getElementById("examTime"),
  examCards: document.getElementById("examCards"),
  themeToggle: document.getElementById("themeToggle"),
  loadDemo: document.getElementById("loadDemo"),
  panicToggle: document.getElementById("panicToggle"),
  exportData: document.getElementById("exportData"),
  importData: document.getElementById("importData"),
  importFile: document.getElementById("importFile"),
  printSummary: document.getElementById("printSummary"),
  dailyTarget: document.getElementById("dailyTarget")
};

let tasks = loadTasks();
let exams = loadExams();
let currentFilter = "all";
let panicMode = false;
let editingId = null;

function createId() {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return `task-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}

function getLocalDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getLocalTimeString(date = new Date()) {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

function formatShortTurkishDate(dateString) {
  const monthNames = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
  ];
  const [year, month, day] = dateString.split("-").map(Number);
  return `${day} ${monthNames[month - 1]}`;
}

function setCurrentDateTimeDefaults() {
  elements.dueDateInput.value = getLocalDateString();
  elements.dueTimeInput.value = getLocalTimeString();
}

function addDays(days, baseDateString = getLocalDateString()) {
  const date = new Date(`${baseDateString}T00:00:00`);
  date.setDate(date.getDate() + days);
  return getLocalDateString(date);
}

function clampNumber(value, min, max) {
  return Math.min(max, Math.max(min, Number(value) || 0));
}

function daysUntil(dateString) {
  if (!dateString) return null;
  const target = new Date(`${dateString}T00:00:00`);
  const today = new Date(`${getLocalDateString()}T00:00:00`);
  return Math.round((target - today) / 86400000);
}

function mapLegacySubject(subject, level) {
  const legacy = {
    "Math AA HL": ["Mathematics: Analysis and Approaches", "HL"],
    "Math AA SL": ["Mathematics: Analysis and Approaches", "SL"],
    "Math AI HL": ["Mathematics: Applications and Interpretation", "HL"],
    "Math AI SL": ["Mathematics: Applications and Interpretation", "SL"]
  };

  if (legacy[subject]) return { subject: legacy[subject][0], level: level || legacy[subject][1] };
  return { subject: subject || "Other", level: level || "" };
}

function splitTags(value) {
  if (Array.isArray(value)) return value.map(tag => String(tag).trim()).filter(Boolean);
  return String(value || "")
    .split(",")
    .map(tag => tag.trim())
    .filter(Boolean)
    .slice(0, 8);
}

function parseSteps(value) {
  if (Array.isArray(value)) {
    return value.map(step => {
      if (typeof step === "string") return { text: step, done: false };
      return { text: String(step.text || "").trim(), done: Boolean(step.done) };
    }).filter(step => step.text);
  }

  return String(value || "")
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean)
    .slice(0, 12)
    .map(text => ({ text, done: false }));
}

function normalizeLevel(subject, level) {
  const config = subjectConfig[subject] || subjectConfig.Other;
  if (config.level === "both") return level === "SL" ? "SL" : "HL";
  if (config.level === "slOnly") return "SL";
  return "";
}

function normalizeTask(task) {
  const mapped = mapLegacySubject(task.subject, task.level);
  const subject = subjectConfig[mapped.subject] ? mapped.subject : "Other";
  const level = normalizeLevel(subject, mapped.level);

  return {
    id: task.id || createId(),
    subject,
    level,
    topic: task.topic || "Other",
    title: task.title || task.task || "Untitled task",
    taskType: task.taskType || "Revision",
    priority: task.priority || "medium",
    confidence: clampNumber(task.confidence || 3, 1, 5),
    dueDate: task.dueDate || "",
    dueTime: task.dueTime || "",
    estimate: Number(task.estimate || task.estimatedMinutes || 30),
    recurrence: task.recurrence || "none",
    starred: Boolean(task.starred),
    tags: splitTags(task.tags),
    steps: parseSteps(task.steps),
    notes: task.notes || "",
    completed: Boolean(task.completed),
    createdAt: task.createdAt || new Date().toISOString(),
    updatedAt: task.updatedAt || task.createdAt || new Date().toISOString()
  };
}

function readFirstStorageValue(keys) {
  for (const key of keys) {
    const value = localStorage.getItem(key);
    if (value) return value;
  }
  return null;
}

function loadTasks() {
  const raw = readFirstStorageValue([STORAGE_KEY, ...LEGACY_TASK_KEYS]);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const normalized = parsed.map(normalizeTask);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    return normalized;
  } catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function normalizeExam(exam) {
  const mapped = mapLegacySubject(exam.subject, exam.level);
  const subject = subjectConfig[mapped.subject] ? mapped.subject : "Other";
  const level = normalizeLevel(subject, mapped.level);

  return {
    id: exam.id || createId(),
    subject,
    level,
    name: String(exam.name || exam.title || "Sınav").trim().slice(0, 90) || "Sınav",
    date: exam.date || getLocalDateString(),
    time: exam.time || "",
    createdAt: exam.createdAt || new Date().toISOString(),
    updatedAt: exam.updatedAt || exam.createdAt || new Date().toISOString()
  };
}

function loadExams() {
  const raw = readFirstStorageValue([EXAM_STORAGE_KEY, ...LEGACY_EXAM_KEYS]);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const normalized = parsed.map(normalizeExam);
    localStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify(normalized));
    return normalized;
  } catch {
    return [];
  }
}

function saveExams() {
  localStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify(exams));
}

function populateSubjects() {
  const subjects = Object.keys(subjectConfig);

  elements.subjectInput.innerHTML = `<option value="">Ders seç</option>`;
  subjects.forEach(subject => elements.subjectInput.appendChild(new Option(subject, subject)));

  elements.subjectFilter.innerHTML = `<option value="all">Tüm dersler</option>`;
  subjects.forEach(subject => elements.subjectFilter.appendChild(new Option(subject, subject)));

  elements.examSubject.innerHTML = `<option value="">Ders seç</option>`;
  subjects.forEach(subject => elements.examSubject.appendChild(new Option(subject, subject)));
}

function updateLevelOptions(subject, selectedLevel = "") {
  const config = subjectConfig[subject] || { level: "none" };

  elements.levelInput.innerHTML = "";

  if (config.level === "both") {
    elements.levelGroup.classList.remove("hidden");
    elements.levelInput.disabled = false;
    elements.levelInput.appendChild(new Option("HL", "HL"));
    elements.levelInput.appendChild(new Option("SL", "SL"));
    elements.levelInput.value = selectedLevel === "SL" ? "SL" : "HL";
    return;
  }

  if (config.level === "slOnly") {
    elements.levelGroup.classList.remove("hidden");
    elements.levelInput.disabled = true;
    elements.levelInput.appendChild(new Option("SL only", "SL"));
    elements.levelInput.value = "SL";
    return;
  }

  elements.levelGroup.classList.add("hidden");
  elements.levelInput.disabled = true;
  elements.levelInput.appendChild(new Option("Seviye yok", ""));
  elements.levelInput.value = "";
}

function updateExamLevelOptions(subject, selectedLevel = "") {
  const config = subjectConfig[subject] || { level: "none" };

  elements.examLevel.innerHTML = "";

  if (config.level === "both") {
    elements.examLevelGroup.classList.remove("hidden");
    elements.examLevel.disabled = false;
    elements.examLevel.appendChild(new Option("HL", "HL"));
    elements.examLevel.appendChild(new Option("SL", "SL"));
    elements.examLevel.value = selectedLevel === "SL" ? "SL" : "HL";
    return;
  }

  if (config.level === "slOnly") {
    elements.examLevelGroup.classList.remove("hidden");
    elements.examLevel.disabled = true;
    elements.examLevel.appendChild(new Option("SL only", "SL"));
    elements.examLevel.value = "SL";
    return;
  }

  elements.examLevelGroup.classList.add("hidden");
  elements.examLevel.disabled = true;
  elements.examLevel.appendChild(new Option("Seviye yok", ""));
  elements.examLevel.value = "";
}

function populateTopics(subject, selectedTopic = "") {
  elements.topicInput.innerHTML = "";

  if (!subject || !subjectConfig[subject]) {
    elements.topicInput.appendChild(new Option("Önce ders seç", ""));
    elements.topicInput.disabled = true;
    return;
  }

  elements.topicInput.disabled = false;
  subjectConfig[subject].topics.forEach(topic => elements.topicInput.appendChild(new Option(topic, topic)));

  if (selectedTopic && subjectConfig[subject].topics.includes(selectedTopic)) {
    elements.topicInput.value = selectedTopic;
  }
}

function getPriorityText(priority) {
  if (priority === "high") return "Yüksek";
  if (priority === "medium") return "Orta";
  return "Düşük";
}

function getRecurrenceText(recurrence) {
  if (recurrence === "daily") return "Her gün";
  if (recurrence === "weekly") return "Haftalık";
  return "Tekrarsız";
}

function priorityWeight(priority) {
  if (priority === "high") return 3;
  if (priority === "medium") return 2;
  return 1;
}

function formatMinutes(minutes) {
  const value = Number(minutes || 0);
  if (value < 60) return `${value} dk`;
  const hours = Math.floor(value / 60);
  const rest = value % 60;
  return rest ? `${hours} saat ${rest} dk` : `${hours} saat`;
}

function isOverdue(task) {
  return task.dueDate && task.dueDate < getLocalDateString() && !task.completed;
}

function isToday(task) {
  return task.dueDate === getLocalDateString();
}

function formatDueDate(task) {
  const time = task.dueTime ? ` · ${task.dueTime}` : "";
  if (!task.dueDate) return task.dueTime ? `Saat ${task.dueTime}` : "Tarih yok";
  const today = getLocalDateString();
  if (task.dueDate === today) return `Bugün${time}`;
  if (task.dueDate === addDays(1)) return `Yarın${time}`;
  if (task.dueDate < today && !task.completed) return `Gecikmiş: ${task.dueDate}${time}`;
  return `${task.dueDate}${time}`;
}

function isUrgent(task) {
  return isPanicCandidate(task);
}

function nearestExamForTask(task) {
  const candidates = exams
    .filter(exam => exam.subject === task.subject && (!task.level || !exam.level || exam.level === task.level))
    .map(exam => ({ ...exam, days: daysUntil(exam.date) }))
    .filter(exam => exam.days !== null && exam.days >= 0)
    .sort((a, b) => a.days - b.days || (a.time || "").localeCompare(b.time || ""));

  return candidates[0] || null;
}

function calculateLoadScore(task) {
  if (task.completed) return 0;

  let score = 0;
  score += task.priority === "high" ? 22 : task.priority === "medium" ? 13 : 7;
  score += task.starred ? 10 : 0;
  score += task.level === "HL" ? 8 : task.level === "SL" ? 4 : 0;
  score += (6 - clampNumber(task.confidence || 3, 1, 5)) * 8;
  score += Math.min(16, Math.ceil(Number(task.estimate || 0) / 15));
  score += Math.min(12, task.steps.filter(step => !step.done).length * 2);

  const dueDays = daysUntil(task.dueDate);
  if (dueDays !== null) {
    if (dueDays < 0) score += 28;
    else if (dueDays === 0) score += 24;
    else if (dueDays === 1) score += 18;
    else if (dueDays <= 3) score += 10;
    else if (dueDays <= 7) score += 5;
  }

  const exam = nearestExamForTask(task);
  if (exam) {
    if (exam.days === 0) score += 26;
    else if (exam.days === 1) score += 20;
    else if (exam.days <= 3) score += 14;
    else if (exam.days <= 7) score += 8;
  }

  return Math.min(100, Math.round(score));
}

function getLoadLabel(score) {
  if (score >= 75) return "Kritik";
  if (score >= 55) return "Ağır";
  if (score >= 30) return "Orta";
  return "Hafif";
}

function getLoadClass(score) {
  if (score >= 75) return "critical";
  if (score >= 55) return "heavy";
  return "";
}

function getConfidenceLabel(confidence) {
  const value = clampNumber(confidence || 3, 1, 5);
  if (value <= 2) return `Güven ${value}/5`;
  if (value === 3) return "Güven 3/5";
  return `Güven ${value}/5`;
}

function getConfidenceClass(confidence) {
  const value = clampNumber(confidence || 3, 1, 5);
  if (value <= 2) return "low-confidence";
  if (value === 3) return "medium-confidence";
  return "high-confidence";
}

function isPanicCandidate(task) {
  if (task.completed) return false;
  const dueDays = daysUntil(task.dueDate);
  const exam = nearestExamForTask(task);

  return (
    isOverdue(task) ||
    isToday(task) ||
    dueDays === 1 ||
    task.priority === "high" ||
    task.starred ||
    clampNumber(task.confidence || 3, 1, 5) <= 2 ||
    task.level === "HL" ||
    (exam && exam.days <= 3) ||
    calculateLoadScore(task) >= 60
  );
}

function smartScore(task) {
  let score = calculateLoadScore(task);
  if (task.completed) score -= 1000;
  if (task.starred) score += 90;
  if (isOverdue(task)) score += 220;
  if (isToday(task)) score += 170;
  score += priorityWeight(task.priority) * 38;

  if (task.dueDate) {
    const due = new Date(`${task.dueDate}T00:00:00`);
    const today = new Date(`${getLocalDateString()}T00:00:00`);
    const daysLeft = Math.round((due - today) / 86400000);
    if (daysLeft >= 0) score += Math.max(0, 34 - daysLeft * 4);
  }

  const unfinishedSteps = task.steps.filter(step => !step.done).length;
  score += Math.min(unfinishedSteps * 3, 18);
  score -= Number(task.estimate || 0) / 22;
  return score;
}

function sortTasks(list) {
  const sorted = [...list];
  const mode = elements.sortSelect.value;

  if (mode === "due") {
    sorted.sort((a, b) => {
      const aDate = a.dueDate || "9999-12-31";
      const bDate = b.dueDate || "9999-12-31";
      return aDate.localeCompare(bDate) || priorityWeight(b.priority) - priorityWeight(a.priority);
    });
  } else if (mode === "priority") {
    sorted.sort((a, b) => priorityWeight(b.priority) - priorityWeight(a.priority));
  } else if (mode === "subject") {
    sorted.sort((a, b) => a.subject.localeCompare(b.subject) || a.level.localeCompare(b.level) || a.topic.localeCompare(b.topic));
  } else if (mode === "created") {
    sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else {
    sorted.sort((a, b) => smartScore(b) - smartScore(a));
  }

  return sorted;
}

function getFilteredTasks() {
  const search = elements.searchInput.value.trim().toLowerCase();
  const subjectFilter = elements.subjectFilter.value;
  const levelFilter = elements.levelFilter.value;
  const priorityFilter = elements.priorityFilter.value;

  const list = tasks.filter(task => {
    const searchArea = [
      task.title,
      task.subject,
      task.level,
      task.topic,
      task.taskType,
      task.notes,
      task.tags.join(" "),
      task.dueTime,
      getConfidenceLabel(task.confidence)
    ].join(" ").toLowerCase();

    const matchesSearch = !search || searchArea.includes(search);
    const matchesSubject = subjectFilter === "all" || task.subject === subjectFilter;
    const matchesLevel =
      levelFilter === "all" ||
      (levelFilter === "none" && !task.level) ||
      task.level === levelFilter;
    const matchesPriority = priorityFilter === "all" || task.priority === priorityFilter;

    let matchesStatus = true;
    if (currentFilter === "active") matchesStatus = !task.completed;
    if (currentFilter === "completed") matchesStatus = task.completed;
    if (currentFilter === "today") matchesStatus = isToday(task);
    if (currentFilter === "overdue") matchesStatus = isOverdue(task);
    if (currentFilter === "starred") matchesStatus = task.starred;
    if (currentFilter === "recurring") matchesStatus = task.recurrence !== "none";
    if (panicMode) matchesStatus = matchesStatus && isPanicCandidate(task);

    return matchesSearch && matchesSubject && matchesLevel && matchesPriority && matchesStatus;
  });

  return sortTasks(list);
}

function updateDashboard() {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const activeTasks = tasks.filter(task => !task.completed);
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
  const remaining = activeTasks.reduce((sum, task) => sum + Number(task.estimate || 0), 0);
  const urgent = tasks.filter(isUrgent).length;
  const todayTasks = tasks.filter(task => !task.completed && (isToday(task) || isOverdue(task)));
  const todayMinutes = todayTasks.reduce((sum, task) => sum + Number(task.estimate || 0), 0);
  const dailyTarget = Number(elements.dailyTarget.value || 120);
  const dailyPercent = dailyTarget === 0 ? 0 : Math.min(100, Math.round((todayMinutes / dailyTarget) * 100));

  const averageTodayLoad = todayTasks.length === 0 ? 0 : Math.round(todayTasks.reduce((sum, task) => sum + calculateLoadScore(task), 0) / todayTasks.length);
  const timePressure = dailyTarget === 0 ? 0 : Math.min(50, Math.round((todayMinutes / dailyTarget) * 50));
  const loadScore = Math.min(100, Math.round(timePressure + averageTodayLoad * 0.5));
  const loadLabel = getLoadLabel(loadScore);

  elements.progressText.textContent = `${percentage}%`;
  elements.progressFill.style.width = `${percentage}%`;
  elements.taskStats.textContent = `${total} görev / ${completed} tamamlandı`;
  elements.remainingTime.textContent = formatMinutes(remaining);
  elements.urgentCount.textContent = urgent;
  elements.todayTime.textContent = formatMinutes(todayMinutes);
  elements.dailyTargetText.textContent = `Hedef: ${formatMinutes(dailyTarget)}`;
  elements.dailyTargetFill.style.width = `${dailyPercent}%`;
  elements.loadScoreText.textContent = `${loadScore}/100`;
  elements.loadScoreHint.textContent = todayTasks.length === 0 ? "Bugün için aktif görev yok." : `${loadLabel} yük · ${todayTasks.length} görev`;
  elements.loadScoreFill.style.width = `${loadScore}%`;

  const card = elements.loadScoreText.closest(".workload-card");
  if (card) {
    card.classList.toggle("warning", loadScore >= 55 && loadScore < 75);
    card.classList.toggle("danger", loadScore >= 75);
  }
}

function createChip(text, extraClass = "") {
  const chip = document.createElement("span");
  chip.className = `chip ${extraClass}`.trim();
  chip.textContent = text;
  return chip;
}

function stepProgress(task) {
  if (!task.steps.length) return "";
  const done = task.steps.filter(step => step.done).length;
  return `${done}/${task.steps.length} adım`;
}

function renderTaskItem(task) {
  const li = document.createElement("li");
  li.className = `task-item ${task.completed ? "completed" : ""} ${isOverdue(task) ? "overdue" : ""}`;

  const checkbox = document.createElement("input");
  checkbox.className = "checkbox";
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.dataset.action = "toggle";
  checkbox.dataset.id = task.id;

  const main = document.createElement("div");
  main.className = "task-main";

  const titleRow = document.createElement("div");
  titleRow.className = "task-title-row";

  if (task.starred) {
    const star = document.createElement("span");
    star.className = "star";
    star.textContent = "★";
    titleRow.appendChild(star);
  }

  const title = document.createElement("p");
  title.className = "task-title";
  title.textContent = task.title;
  titleRow.appendChild(title);

  const meta = document.createElement("p");
  meta.className = "task-meta";
  meta.appendChild(createChip(task.subject));
  if (task.level) meta.appendChild(createChip(task.level));
  meta.appendChild(createChip(task.topic));
  meta.appendChild(createChip(task.taskType));
  meta.appendChild(createChip(formatDueDate(task), task.dueTime ? "time-chip" : ""));
  meta.appendChild(createChip(formatMinutes(task.estimate)));
  meta.appendChild(createChip(getConfidenceLabel(task.confidence), `confidence-chip ${getConfidenceClass(task.confidence)}`));
  const loadScore = calculateLoadScore(task);
  meta.appendChild(createChip(`Yük ${loadScore}`, `load-chip ${getLoadClass(loadScore)}`));
  if (task.recurrence !== "none") meta.appendChild(createChip(getRecurrenceText(task.recurrence)));
  if (task.steps.length) meta.appendChild(createChip(stepProgress(task)));

  const badge = document.createElement("span");
  badge.className = `badge ${task.priority}`;
  badge.textContent = getPriorityText(task.priority);
  meta.appendChild(badge);

  task.tags.forEach(tag => meta.appendChild(createChip(`#${tag}`, "tag-chip")));

  main.appendChild(titleRow);
  main.appendChild(meta);

  if (task.steps.length) {
    const stepsBox = document.createElement("div");
    stepsBox.className = "steps";

    const stepsTitle = document.createElement("div");
    stepsTitle.className = "steps-title";
    stepsTitle.textContent = "Alt adımlar";
    stepsBox.appendChild(stepsTitle);

    task.steps.forEach((step, index) => {
      const row = document.createElement("label");
      row.className = `step-row ${step.done ? "done" : ""}`;

      const stepCheckbox = document.createElement("input");
      stepCheckbox.type = "checkbox";
      stepCheckbox.checked = step.done;
      stepCheckbox.dataset.action = "step";
      stepCheckbox.dataset.id = task.id;
      stepCheckbox.dataset.index = String(index);

      const text = document.createElement("span");
      text.textContent = step.text;

      row.appendChild(stepCheckbox);
      row.appendChild(text);
      stepsBox.appendChild(row);
    });

    main.appendChild(stepsBox);
  }

  if (task.notes) {
    const notes = document.createElement("p");
    notes.className = "task-notes";
    notes.textContent = task.notes;
    main.appendChild(notes);
  }

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const starButton = document.createElement("button");
  starButton.className = "small-btn star-btn";
  starButton.textContent = task.starred ? "Yıldızı Kaldır" : "Yıldızla";
  starButton.dataset.action = "star";
  starButton.dataset.id = task.id;

  const editButton = document.createElement("button");
  editButton.className = "small-btn edit-btn";
  editButton.textContent = "Düzenle";
  editButton.dataset.action = "edit";
  editButton.dataset.id = task.id;

  const deleteButton = document.createElement("button");
  deleteButton.className = "small-btn delete-btn";
  deleteButton.textContent = "Sil";
  deleteButton.dataset.action = "delete";
  deleteButton.dataset.id = task.id;

  actions.appendChild(starButton);
  actions.appendChild(editButton);
  actions.appendChild(deleteButton);

  li.appendChild(checkbox);
  li.appendChild(main);
  li.appendChild(actions);

  return li;
}

function renderTasks() {
  const filteredTasks = getFilteredTasks();
  elements.taskList.innerHTML = "";

  filteredTasks.forEach(task => elements.taskList.appendChild(renderTaskItem(task)));

  elements.emptyHint.style.display = filteredTasks.length === 0 ? "inline" : "none";
  elements.resultInfo.textContent = `${filteredTasks.length} görev gösteriliyor. Toplam kayıt: ${tasks.length}.`;

  updateDashboard();
  renderSmartPlan();
  renderSubjectBreakdown();
  renderTimeline();
  renderExamCards();
}

function getTaskReasons(task) {
  const reasons = [];
  const dueDays = daysUntil(task.dueDate);
  const exam = nearestExamForTask(task);

  if (isOverdue(task)) reasons.push("gecikmiş");
  else if (isToday(task)) reasons.push("bugün");
  else if (dueDays === 1) reasons.push("yarın");
  if (task.priority === "high") reasons.push("yüksek öncelik");
  if (task.starred) reasons.push("yıldızlı");
  if (task.level === "HL") reasons.push("HL");
  if (clampNumber(task.confidence || 3, 1, 5) <= 2) reasons.push("düşük güven");
  if (exam && exam.days <= 3) reasons.push(`${exam.name}: ${exam.days === 0 ? "bugün" : exam.days + " gün"}`);

  return reasons.slice(0, 4).join(" · ") || "yük skoruna göre";
}

function getBattlePlanTasks() {
  const pool = tasks.filter(task => !task.completed);
  const todayOrPanic = pool.filter(task => isToday(task) || isOverdue(task) || isPanicCandidate(task));
  return (todayOrPanic.length ? todayOrPanic : pool)
    .sort((a, b) => smartScore(b) - smartScore(a))
    .slice(0, 5);
}

function renderSmartPlan() {
  elements.smartPlan.innerHTML = "";
  const plan = getBattlePlanTasks();

  if (plan.length === 0) {
    elements.battleSummary.textContent = "Aktif görev yok. Plan temiz.";
    const li = document.createElement("li");
    li.textContent = "Şu anda çalışılacak görev görünmüyor.";
    elements.smartPlan.appendChild(li);
    return;
  }

  const topLoad = calculateLoadScore(plan[0]);
  elements.battleSummary.textContent = `${panicMode ? "Son Dakika Modu açık · " : ""}${plan.length} görev öne çıkarıldı · en yüksek yük: ${topLoad}/100 (${getLoadLabel(topLoad)})`;
  elements.battleSummary.classList.toggle("panic-note", panicMode);

  plan.forEach(task => {
    const li = document.createElement("li");

    const title = document.createElement("span");
    title.className = "smart-title";
    title.textContent = `${task.starred ? "★ " : ""}${task.title}`;

    const meta = document.createElement("span");
    meta.className = "smart-meta";
    meta.textContent = `${task.subject}${task.level ? " " + task.level : ""} · ${formatDueDate(task)} · Yük ${calculateLoadScore(task)}/100 · ${getTaskReasons(task)}`;

    li.appendChild(title);
    li.appendChild(meta);
    elements.smartPlan.appendChild(li);
  });
}

function renderSubjectBreakdown() {
  elements.subjectBreakdown.innerHTML = "";
  const subjects = [...new Set(tasks.map(task => task.subject))].sort();

  if (subjects.length === 0) {
    elements.subjectBreakdown.textContent = "Ders bazlı veri henüz yok.";
    return;
  }

  subjects.forEach(subject => {
    const subjectTasks = tasks.filter(task => task.subject === subject);
    const completed = subjectTasks.filter(task => task.completed).length;
    const percent = Math.round((completed / subjectTasks.length) * 100);

    const row = document.createElement("div");
    row.className = "subject-row";

    const topLine = document.createElement("div");
    topLine.className = "subject-topline";

    const name = document.createElement("span");
    name.textContent = subject;

    const value = document.createElement("span");
    value.textContent = `${percent}% (${completed}/${subjectTasks.length})`;

    const bar = document.createElement("div");
    bar.className = "mini-bar";

    const fill = document.createElement("div");
    fill.className = "mini-fill";
    fill.style.width = `${percent}%`;

    topLine.appendChild(name);
    topLine.appendChild(value);
    bar.appendChild(fill);
    row.appendChild(topLine);
    row.appendChild(bar);
    elements.subjectBreakdown.appendChild(row);
  });
}

function formatExamCountdown(days) {
  if (days === null) return "Tarih yok";
  if (days < 0) return `${Math.abs(days)} gün geçti`;
  if (days === 0) return "Bugün";
  if (days === 1) return "Yarın";
  return `${days} gün`;
}

function renderExamCards() {
  elements.examCards.innerHTML = "";

  const sorted = [...exams].sort((a, b) => {
    const aKey = `${a.date || "9999-12-31"}T${a.time || "23:59"}`;
    const bKey = `${b.date || "9999-12-31"}T${b.time || "23:59"}`;
    return aKey.localeCompare(bKey);
  });

  if (sorted.length === 0) {
    const empty = document.createElement("p");
    empty.className = "section-note";
    empty.textContent = "Henüz sınav eklenmedi.";
    elements.examCards.appendChild(empty);
    return;
  }

  sorted.forEach(exam => {
    const days = daysUntil(exam.date);
    const card = document.createElement("article");
    card.className = `exam-card ${days !== null && days < 0 ? "past" : ""} ${days !== null && days <= 1 && days >= 0 ? "urgent" : ""} ${days !== null && days > 1 && days <= 4 ? "soon" : ""}`;

    const title = document.createElement("strong");
    title.textContent = exam.name;

    const countdown = document.createElement("div");
    countdown.className = "exam-countdown";
    countdown.textContent = formatExamCountdown(days);

    const meta = document.createElement("div");
    meta.className = "exam-meta";
    meta.textContent = `${exam.subject}${exam.level ? " " + exam.level : ""}`;

    const dateLine = document.createElement("div");
    dateLine.className = "exam-date-line";
    dateLine.textContent = `${formatShortTurkishDate(exam.date)}${exam.time ? " · " + exam.time : ""}`;

    const actions = document.createElement("div");
    actions.className = "exam-actions";

    const deleteButton = document.createElement("button");
    deleteButton.className = "small-btn delete-btn";
    deleteButton.textContent = "Sil";
    deleteButton.dataset.action = "delete-exam";
    deleteButton.dataset.id = exam.id;

    actions.appendChild(deleteButton);
    card.appendChild(title);
    card.appendChild(countdown);
    card.appendChild(meta);
    card.appendChild(dateLine);
    card.appendChild(actions);
    elements.examCards.appendChild(card);
  });
}

function renderTimeline() {
  elements.timeline.innerHTML = "";

  for (let i = 0; i < 7; i++) {
    const dateString = addDays(i);
    const dateTasks = tasks.filter(task => task.dueDate === dateString && !task.completed);
    const minutes = dateTasks.reduce((sum, task) => sum + Number(task.estimate || 0), 0);

    const card = document.createElement("div");
    card.className = `day-card ${i === 0 ? "today" : ""}`;

    const title = document.createElement("strong");
    title.textContent = i === 0 ? "Bugün" : i === 1 ? "Yarın" : formatShortTurkishDate(dateString);

    const count = document.createElement("span");
    count.textContent = `${dateTasks.length} görev · ${formatMinutes(minutes)}`;

    const sample = document.createElement("span");
    sample.textContent = dateTasks.slice(0, 2).map(task => `${task.dueTime ? task.dueTime + " · " : ""}${task.title}`).join(" / ") || "Plan yok";

    card.appendChild(title);
    card.appendChild(count);
    card.appendChild(sample);
    elements.timeline.appendChild(card);
  }
}

function resetForm() {
  editingId = null;
  elements.taskForm.reset();
  elements.priorityInput.value = "high";
  elements.confidenceInput.value = "3";
  elements.estimateInput.value = "30";
  elements.taskTypeInput.value = "Revision";
  elements.recurrenceInput.value = "none";
  elements.starredInput.checked = false;
  setCurrentDateTimeDefaults();
  elements.formTitle.textContent = "Yeni Görev Ekle";
  elements.submitTask.textContent = "Görev Ekle";
  elements.cancelEdit.classList.add("hidden");
  updateLevelOptions("");
  populateTopics("");
}

function getFormData() {
  const subject = elements.subjectInput.value;
  const config = subjectConfig[subject] || { level: "none" };
  let level = "";

  if (config.level === "both") level = elements.levelInput.value;
  if (config.level === "slOnly") level = "SL";

  return {
    subject,
    level,
    topic: elements.topicInput.value,
    title: elements.taskInput.value.trim(),
    taskType: elements.taskTypeInput.value,
    priority: elements.priorityInput.value,
    confidence: Number(elements.confidenceInput.value || 3),
    dueDate: elements.dueDateInput.value,
    dueTime: elements.dueTimeInput.value,
    estimate: Number(elements.estimateInput.value),
    recurrence: elements.recurrenceInput.value,
    starred: elements.starredInput.checked,
    tags: splitTags(elements.tagsInput.value),
    steps: parseSteps(elements.stepsInput.value),
    notes: elements.notesInput.value.trim()
  };
}

function fillStepsTextarea(steps) {
  return steps.map(step => step.text).join("\n");
}

function startEdit(id) {
  const task = tasks.find(item => item.id === id);
  if (!task) return;

  editingId = id;
  elements.formTitle.textContent = "Görevi Düzenle";
  elements.submitTask.textContent = "Görevi Güncelle";
  elements.cancelEdit.classList.remove("hidden");

  elements.subjectInput.value = task.subject;
  updateLevelOptions(task.subject, task.level);
  populateTopics(task.subject, task.topic);
  elements.taskInput.value = task.title;
  elements.taskTypeInput.value = task.taskType;
  elements.priorityInput.value = task.priority;
  elements.confidenceInput.value = String(task.confidence || 3);
  elements.dueDateInput.value = task.dueDate;
  elements.dueTimeInput.value = task.dueTime || "";
  elements.estimateInput.value = String(task.estimate);
  elements.recurrenceInput.value = task.recurrence;
  elements.starredInput.checked = task.starred;
  elements.tagsInput.value = task.tags.join(", ");
  elements.stepsInput.value = fillStepsTextarea(task.steps);
  elements.notesInput.value = task.notes;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function nextRecurrenceDate(task) {
  if (!task.dueDate) return "";
  if (task.recurrence === "daily") return addDays(1, task.dueDate);
  if (task.recurrence === "weekly") return addDays(7, task.dueDate);
  return "";
}

function createNextRecurringTask(task) {
  const nextDate = nextRecurrenceDate(task);
  if (!nextDate) return null;

  return normalizeTask({
    ...task,
    id: createId(),
    dueDate: nextDate,
    completed: false,
    steps: task.steps.map(step => ({ text: step.text, done: false })),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
}

function addDemoTasks() {
  const demo = [
    {
      subject: "Physics",
      level: "HL",
      topic: "Wave behaviour",
      title: "Wave behaviour tekrar + 10 soru",
      taskType: "Practice",
      priority: "high",
      confidence: 2,
      dueDate: getLocalDateString(),
      dueTime: getLocalTimeString(),
      estimate: 45,
      recurrence: "none",
      starred: true,
      tags: ["mock", "formula"],
      steps: ["Formülleri tekrar et", "10 soru çöz", "Yanlışları işaretle"],
      notes: "Önce temel formüller, sonra yanlış yapılan sorular."
    },
    {
      subject: "Mathematics: Analysis and Approaches",
      level: "HL",
      topic: "Calculus",
      title: "Integration past paper soruları",
      taskType: "Past Paper",
      priority: "high",
      confidence: 2,
      dueDate: addDays(1),
      dueTime: "19:30",
      estimate: 60,
      recurrence: "weekly",
      starred: true,
      tags: ["paper2", "calculator"],
      steps: ["3 soru seç", "Çözümü yaz", "TI-Nspire ile kontrol et"],
      notes: "Zaman tutarak çöz."
    },
    {
      subject: "Chemistry",
      level: "SL",
      topic: "Reactivity: amount, rate and equilibrium",
      title: "Stoichiometry ve equilibrium tekrar",
      taskType: "Revision",
      priority: "medium",
      confidence: 3,
      dueDate: addDays(2),
      dueTime: "20:00",
      estimate: 45,
      recurrence: "none",
      starred: false,
      tags: ["revision"],
      steps: ["Özet oku", "Mini quiz çöz"],
      notes: ""
    },
    {
      subject: "Turkish A",
      level: "SL",
      topic: "Paper 2 practice",
      title: "Paper 2 karşılaştırma planı çıkar",
      taskType: "Essay",
      priority: "medium",
      confidence: 4,
      dueDate: addDays(3),
      dueTime: "18:30",
      estimate: 30,
      recurrence: "none",
      starred: false,
      tags: ["paper2"],
      steps: ["Tez yaz", "2 karşılaştırma noktası belirle"],
      notes: "Giriş paragrafını kısa tut."
    },
    {
      subject: "TOK",
      level: "",
      topic: "TOK essay",
      title: "TOK essay başlıklarını değerlendir",
      taskType: "Reading",
      priority: "low",
      confidence: 3,
      dueDate: addDays(4),
      dueTime: "17:00",
      estimate: 30,
      recurrence: "none",
      starred: false,
      tags: ["core"],
      steps: ["Başlıkları oku", "2 olası başlık seç"],
      notes: "TOK için HL/SL yok."
    },
    {
      subject: "CAS",
      level: "",
      topic: "CAS reflection",
      title: "CAS reflection taslağı yaz",
      taskType: "Other",
      priority: "low",
      confidence: 5,
      dueDate: addDays(5),
      dueTime: "16:30",
      estimate: 15,
      recurrence: "none",
      starred: false,
      tags: ["core"],
      steps: [],
      notes: "CAS için HL/SL yok."
    }
  ].map(task => normalizeTask({ ...task, id: createId(), completed: false, createdAt: new Date().toISOString() }));

  tasks = [...demo, ...tasks];

  const demoExams = [
    normalizeExam({
      subject: "Physics",
      level: "HL",
      name: "Physics HL Mock",
      date: addDays(2),
      time: "09:00",
      createdAt: new Date().toISOString()
    }),
    normalizeExam({
      subject: "Mathematics: Analysis and Approaches",
      level: "HL",
      name: "Math AA HL Paper 2",
      date: addDays(5),
      time: "11:00",
      createdAt: new Date().toISOString()
    }),
    normalizeExam({
      subject: "Turkish A",
      level: "SL",
      name: "Turkish A Paper 2",
      date: addDays(7),
      time: "10:00",
      createdAt: new Date().toISOString()
    })
  ];

  exams = [...demoExams, ...exams];
  saveTasks();
  saveExams();
  renderTasks();
}

function exportTasks() {
  const data = {
    app: "ExamWeek Planner v6",
    exportedAt: new Date().toISOString(),
    tasks,
    exams
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `examweek-planner-v6-${getLocalDateString()}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function importTasksFromFile(file) {
  const reader = new FileReader();

  reader.onload = event => {
    try {
      const parsed = JSON.parse(event.target.result);
      const importedTasks = Array.isArray(parsed) ? parsed : parsed.tasks;

      if (!Array.isArray(importedTasks)) {
        alert("Geçerli görev listesi bulunamadı.");
        return;
      }

      tasks = importedTasks.map(normalizeTask);
      if (Array.isArray(parsed.exams)) {
        exams = parsed.exams.map(normalizeExam);
        saveExams();
      }
      saveTasks();
      renderTasks();
      alert("Görevler içe aktarıldı.");
    } catch {
      alert("Dosya okunamadı. JSON formatını kontrol et.");
    }
  };

  reader.readAsText(file);
}

function applyTheme(theme) {
  elements.html.dataset.theme = theme;
  elements.themeToggle.textContent = theme === "dark" ? "Açık Mod" : "Koyu Mod";
  localStorage.setItem(THEME_KEY, theme);
}

elements.subjectInput.addEventListener("change", () => {
  updateLevelOptions(elements.subjectInput.value);
  populateTopics(elements.subjectInput.value);
});

elements.examSubject.addEventListener("change", () => {
  updateExamLevelOptions(elements.examSubject.value);
});

elements.examForm.addEventListener("submit", event => {
  event.preventDefault();

  const subject = elements.examSubject.value;
  const config = subjectConfig[subject] || { level: "none" };
  let level = "";
  if (config.level === "both") level = elements.examLevel.value;
  if (config.level === "slOnly") level = "SL";

  const exam = normalizeExam({
    id: createId(),
    subject,
    level,
    name: elements.examName.value.trim(),
    date: elements.examDate.value,
    time: elements.examTime.value,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  if (!exam.subject || !exam.date || !exam.name) return;

  exams.unshift(exam);
  saveExams();
  elements.examForm.reset();
  elements.examDate.value = addDays(1);
  elements.examTime.value = "09:00";
  updateExamLevelOptions("");
  renderTasks();
});

elements.examCards.addEventListener("click", event => {
  if (event.target.dataset.action !== "delete-exam") return;
  const id = event.target.dataset.id;
  exams = exams.filter(exam => exam.id !== id);
  saveExams();
  renderTasks();
});

elements.panicToggle.addEventListener("click", () => {
  panicMode = !panicMode;
  document.body.classList.toggle("panic-mode", panicMode);
  elements.panicToggle.classList.toggle("active", panicMode);
  elements.panicToggle.textContent = panicMode ? "Son Dakika Modu Açık" : "Son Dakika Modu";
  renderTasks();
});

elements.taskForm.addEventListener("submit", event => {
  event.preventDefault();

  const data = getFormData();
  if (!data.subject || !data.topic || !data.title) return;

  if (editingId) {
    tasks = tasks.map(task => task.id === editingId ? {
      ...task,
      ...data,
      updatedAt: new Date().toISOString()
    } : task);
  } else {
    tasks.unshift(normalizeTask({
      id: createId(),
      ...data,
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }));
  }

  saveTasks();
  resetForm();
  renderTasks();
});

elements.cancelEdit.addEventListener("click", resetForm);

elements.taskList.addEventListener("click", event => {
  const action = event.target.dataset.action;
  const id = event.target.dataset.id;

  if (!action || !id) return;

  if (action === "toggle") {
    const task = tasks.find(item => item.id === id);
    const wasIncomplete = task && !task.completed;
    const nextCompletedState = task ? !task.completed : false;

    tasks = tasks.map(item => {
      if (item.id !== id) return item;

      const steps = item.steps.map(step => ({
        ...step,
        done: nextCompletedState ? true : false
      }));

      return {
        ...item,
        steps,
        completed: nextCompletedState,
        updatedAt: new Date().toISOString()
      };
    });

    if (task && wasIncomplete && nextCompletedState && task.recurrence !== "none") {
      const nextTask = createNextRecurringTask({ ...task, completed: true });
      if (nextTask) tasks.unshift(nextTask);
    }
  }

  if (action === "step") {
    const index = Number(event.target.dataset.index);
    let recurringClone = null;

    tasks = tasks.map(task => {
      if (task.id !== id) return task;

      const wasCompleted = task.completed;
      const steps = task.steps.map((step, stepIndex) =>
        stepIndex === index ? { ...step, done: !step.done } : step
      );
      const allStepsDone = steps.length > 0 && steps.every(step => step.done);
      const completed = allStepsDone;

      const updatedTask = {
        ...task,
        steps,
        completed,
        updatedAt: new Date().toISOString()
      };

      if (!wasCompleted && completed && task.recurrence !== "none") {
        recurringClone = createNextRecurringTask(updatedTask);
      }

      return updatedTask;
    });

    if (recurringClone) tasks.unshift(recurringClone);
  }

  if (action === "star") {
    tasks = tasks.map(task => task.id === id ? {
      ...task,
      starred: !task.starred,
      updatedAt: new Date().toISOString()
    } : task);
  }

  if (action === "edit") {
    startEdit(id);
    return;
  }

  if (action === "delete") {
    tasks = tasks.filter(task => task.id !== id);
  }

  saveTasks();
  renderTasks();
});

elements.filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    elements.filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    renderTasks();
  });
});

["input", "change"].forEach(eventName => {
  elements.searchInput.addEventListener(eventName, renderTasks);
  elements.subjectFilter.addEventListener(eventName, renderTasks);
  elements.levelFilter.addEventListener(eventName, renderTasks);
  elements.priorityFilter.addEventListener(eventName, renderTasks);
  elements.sortSelect.addEventListener(eventName, renderTasks);
});

elements.dailyTarget.addEventListener("change", () => {
  localStorage.setItem(TARGET_KEY, elements.dailyTarget.value);
  renderTasks();
});

elements.clearCompletedButton.addEventListener("click", () => {
  const completed = tasks.filter(task => task.completed).length;
  if (completed === 0) return;
  if (!confirm(`${completed} tamamlanan görev silinsin mi?`)) return;

  tasks = tasks.filter(task => !task.completed);
  saveTasks();
  renderTasks();
});

elements.resetAllButton.addEventListener("click", () => {
  if (!tasks.length) return;
  if (!confirm("Tüm görevler kalıcı olarak silinsin mi?")) return;

  tasks = [];
  saveTasks();
  resetForm();
  renderTasks();
});

elements.themeToggle.addEventListener("click", () => {
  const nextTheme = elements.html.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
});

elements.loadDemo.addEventListener("click", () => {
  if (tasks.length > 0 && !confirm("Demo görevleri mevcut listeye eklensin mi?")) return;
  addDemoTasks();
});

elements.exportData.addEventListener("click", exportTasks);

elements.importData.addEventListener("click", () => elements.importFile.click());

elements.importFile.addEventListener("change", event => {
  const file = event.target.files[0];
  if (file) importTasksFromFile(file);
  elements.importFile.value = "";
});

elements.printSummary.addEventListener("click", () => window.print());

populateSubjects();
updateLevelOptions("");
updateExamLevelOptions("");
populateTopics("");
applyTheme(localStorage.getItem(THEME_KEY) || "light");
elements.dailyTarget.value = localStorage.getItem(TARGET_KEY) || "120";
setCurrentDateTimeDefaults();
elements.examDate.value = addDays(1);
elements.examTime.value = "09:00";
renderTasks();
