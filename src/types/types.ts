export type CourseType = {
  _id: string;
  nameRU: string;
  nameEN: string;
  description: string;
  directions: string[];
  fitting: string[];
  // difficulty: string;
  difficulty: "начальный" | "средний" | "сложный";
  durationInDays: number;
  dailyDurationInMinutes: {
    from: number,
    to: number
  };
  workouts: string[];
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
