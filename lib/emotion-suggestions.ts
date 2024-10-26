interface EmotionSuggestions {
  [key: string]: string[];
}

const suggestions: EmotionSuggestions = {
  sad: [
    "Why did the scarecrow win an award? Because he was outstanding in his field! 😄",
    "Take a moment to watch a funny video or call a friend.",
    "Remember that this feeling is temporary. How about a quick walk outside?",
  ],
  angry: [
    "Let's take a deep breath together. Count to 10 slowly.",
    "Consider stepping away for a 5-minute break.",
    "Would you like to try a quick meditation exercise?",
  ],
  happy: [
    "Your positive energy is contagious! Share it with someone.",
    "Great mood! Perfect time to tackle that challenging task.",
    "Keep riding this wave of positivity!",
  ],
  neutral: [
    "How about adding some excitement to your day?",
    "Perfect time to set a new goal or start a fun project.",
    "Take a moment to appreciate something beautiful around you.",
  ],
  surprised: [
    "What an unexpected moment! Take time to process it.",
    "Surprises keep life interesting!",
    "Use this energy boost productively!",
  ],
  fearful: [
    "Remember: you've overcome challenges before.",
    "Let's break down what's causing this feeling.",
    "Would you like to talk to someone about what's bothering you?",
  ],
  disgusted: [
    "Let's shift focus to something more pleasant.",
    "How about some fresh air to reset?",
    "Sometimes a change of environment can help.",
  ],
];

export function getEmotionSuggestion(emotion: string): string {
  const emotionSuggestions = suggestions[emotion.toLowerCase()] || suggestions.neutral;
  const randomIndex = Math.floor(Math.random() * emotionSuggestions.length);
  return emotionSuggestions[randomIndex];
}