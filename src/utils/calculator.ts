import { QuizAnswers, AssessmentResult, SolutionClassId } from '../types';
import { SOLUTION_CLASSES } from '../data/mockData';

export function calculateAssessment(answers: QuizAnswers): AssessmentResult {
  let score = 0;

  // 1. Participant count weight
  if (answers.q3_people === 'q3_1') score += 1;
  else if (answers.q3_people === 'q3_23') score += 2;
  else if (answers.q3_people === 'q3_410') score += 3;
  else if (answers.q3_people === 'q3_over10') score += 4;

  // 2. Time spent weight
  if (answers.q4_time === 'q4_1h') score += 1;
  else if (answers.q4_time === 'q4_14h') score += 2;
  else if (answers.q4_time === 'q4_halfday') score += 2;
  else if (answers.q4_time === 'q4_fullday') score += 3;
  else if (answers.q4_time === 'q4_multidays') score += 4;

  // 3. Multiplicity of sources
  const sourceCount = answers.q5_sources.length;
  if (sourceCount >= 3 || answers.q5_sources.includes('q5_multi') || answers.q5_sources.includes('q5_erp')) {
    score += 3;
  } else if (sourceCount === 2) {
    score += 2;
  } else {
    score += 1;
  }

  // 4. Complexity in q1
  if (answers.q1_situation.includes('q1_lost') || answers.q1_situation.includes('q1_delays')) {
    score += 2;
  }

  // Determine Class
  let solutionClassId: SolutionClassId = 'class-1';
  if (score <= 5) {
    solutionClassId = 'class-1';
  } else if (score <= 8) {
    solutionClassId = 'class-2';
  } else if (score <= 11) {
    solutionClassId = 'class-3';
  } else {
    solutionClassId = 'class-4';
  }

  // Special rule: if 1C + CRM/ERP/Multi is selected -> at least Class 3 or Class 4
  const hasMultipleEnterprise = answers.q5_sources.includes('q5_1c') && (answers.q5_sources.includes('q5_crm') || answers.q5_sources.includes('q5_erp') || answers.q5_sources.includes('q5_multi'));
  if (hasMultipleEnterprise && (solutionClassId === 'class-1' || solutionClassId === 'class-2')) {
    solutionClassId = 'class-3';
  }

  const solutionClass = SOLUTION_CLASSES[solutionClassId];

  // Helper texts
  const peopleMap: Record<string, string> = {
    'q3_1': '1 сотрудник',
    'q3_23': '2–3 сотрудника',
    'q3_410': 'отдел из 4–10 человек',
    'q3_over10': 'команда из более чем 10 человек'
  };

  const timeMap: Record<string, string> = {
    'q4_1h': 'до 1 часа',
    'q4_14h': 'от 1 до 4 часов',
    'q4_halfday': 'около полдня',
    'q4_fullday': 'целый рабочий день (8 часов)',
    'q4_multidays': 'несколько рабочих дней'
  };

  const freqMap: Record<string, string> = {
    'q2_multi_daily': 'постоянно в течение дня',
    'q2_daily': 'ежедневно',
    'q2_weekly': 'каждую неделю',
    'q2_monthly': 'ежемесячно',
    'q2_periodic': 'периодически по запросу'
  };

  const sourcesNames: string[] = [];
  if (answers.q5_sources.includes('q5_excel')) sourcesNames.push('Excel/Гугл Таблицы');
  if (answers.q5_sources.includes('q5_1c')) sourcesNames.push('1С');
  if (answers.q5_sources.includes('q5_erp')) sourcesNames.push('ERP');
  if (answers.q5_sources.includes('q5_crm')) sourcesNames.push('CRM');
  if (answers.q5_sources.includes('q5_docs')) sourcesNames.push('документы (Word/PDF)');
  if (answers.q5_sources.includes('q5_email')) sourcesNames.push('почту');
  if (answers.q5_sources.includes('q5_chats')) sourcesNames.push('чаты');
  if (sourcesNames.length === 0) sourcesNames.push('разрозненные источники');

  const formattedPeople = peopleMap[answers.q3_people] || 'сотрудинки';
  const formattedTime = timeMap[answers.q4_time] || 'некоторое время';
  const formattedFreq = freqMap[answers.q2_frequency] || 'регулярно';
  const formattedSources = sourcesNames.join(', ');

  const taskPrefix = answers.preselectedTask ? `По задаче «${answers.preselectedTask}»: ` : '';

  const situationSummary = `${taskPrefix}${formattedPeople} ${formattedFreq} обрабатывают данные через ${formattedSources}. Процесс занимает ${formattedTime}.`;

  let taskScale = '';
  if (solutionClassId === 'class-1') {
    taskScale = 'Компактная регулярная задача с понятным алгоритмом. Идеально подхоит для точечной настройки.';
  } else if (solutionClassId === 'class-2') {
    taskScale = 'Задача средней сложности с логическими проверками и требованием к удобному интерфейсу.';
  } else if (solutionClassId === 'class-3') {
    taskScale = 'Многопользовательский процесс с несколькими участниками, где требуется прозрачность и правила.';
  } else {
    taskScale = 'Комплексная межотраслевая задача, затрагивающая стыковку нескольких корпоративных систем.';
  }

  let solutionWay = '';
  if (solutionClassId === 'class-1') {
    solutionWay = 'Микроавтоматизация (скрипт обработки данных / быстрый обработчик файловых реестров).';
  } else if (solutionClassId === 'class-2') {
    solutionWay = 'Рабочий инструмент (веб-сервис или интерфейсный обработчик с правилами валидации).';
  } else if (solutionClassId === 'class-3') {
    solutionWay = 'Проектирование регламента + настройка Внутренней системы / личного кабинета процессов.';
  } else {
    solutionWay = 'Интеграционный проект (настройка API-шлюзов и стандартизация обмена между системами).';
  }

  return {
    solutionClass,
    situationSummary,
    taskScale,
    solutionWay,
    checkList: solutionClass.nextStepsChecklist,
    answers
  };
}
