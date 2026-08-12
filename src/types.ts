export interface LogoConcept {
  id: string;
  name: string;
  metaphor: string;
  description: string;
  tag: string;
}

export interface ProblemCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface AudienceCard {
  id: string;
  role: string;
  title: string;
  subtitle: string;
  points: string[];
  iconName: string;
}

export interface TaskCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: string;
  defaultScope?: string;
}

export interface SolutionTypeCard {
  id: string;
  level: number;
  title: string;
  subtitle: string;
  examples: string;
  iconName: string;
  suitableFor: string;
  badge: string;
  badgeColor: string;
}

export interface QuizOption {
  id: string;
  label: string;
  weight: number; // 1 = micro, 2 = tool, 3 = internal system, 4 = integration
  iconName?: string;
  tag?: string;
}

export interface QuizQuestion {
  id: number;
  title: string;
  subtitle?: string;
  isMultiSelect?: boolean;
  options: QuizOption[];
}

export type SolutionClassId = 'class-1' | 'class-2' | 'class-3' | 'class-4';

export interface SolutionClassInfo {
  id: SolutionClassId;
  code: string;
  title: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  bgGradient: string;
  borderColor: string;
  description: string;
  typicalTimeframe: string;
  keyCharacteristics: string[];
  nextStepsChecklist: string[];
}

export interface QuizAnswers {
  preselectedTask?: string;
  q1_situation: string[];
  q2_frequency: string;
  q3_people: string;
  q4_time: string;
  q5_sources: string[];
  q6_output: string;
}

export interface AssessmentResult {
  solutionClass: SolutionClassInfo;
  situationSummary: string;
  taskScale: string;
  solutionWay: string;
  checkList: string[];
  answers: QuizAnswers;
}
