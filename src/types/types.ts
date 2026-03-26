export type CourseType = {
  _id: string;
  order: number;
  nameRU: string;
  nameEN: string;
  description: string;
  directions: string[];
  fitting: string[];
  difficulty: "начальный" | "средний" | "сложный";
  durationInDays: number;
  dailyDurationInMinutes: dailyDurationInMinutesType;
  workouts: string[];
  __v: number;
}

export type dailyDurationInMinutesType = {
  from: number;
  to: number;
}

export type WorkoutType = {
  _id: string;
  name: string;
  video: string;
  exercises: ExerciseType[];
}

export type ExerciseType = {
  name: string;
  quantity: number;
  _id: string;
}

export type ProgressType = {
    workoutId: string;
    workoutCompleted: boolean;
    progressData: number[];
}
