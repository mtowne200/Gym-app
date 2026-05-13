export const coaches = [
  {
    id: 'arnold',
    name: 'Arnold Schwarzenegger',
    nickname: 'The Austrian Oak',
    era: '1966–1980',
    birthplace: 'Thal, Austria',
    titles: ['7x Mr. Olympia', '5x Mr. Universe', 'Mr. World'],
    gradient: 'from-red-700 via-orange-600 to-yellow-500',
    accentColor: 'amber',
    trainingStyle: 'High Volume',
    split: '6-Day Arnold Split',
    frequency: 6,
    intensity: 'Moderate–High',
    bestFor: 'Overall mass & symmetry',
    difficulty: 'Advanced',
    philosophy:
      'Maximum volume for maximum gains. Arnold believed in shocking the muscle through high sets, mind-muscle connection, and chasing the pump every single session.',
    quote:
      '"The last three or four reps is what makes the muscle grow. This area of pain divides the champion from someone who is not a champion."',
    scienceBase:
      "Arnold's volume approach aligns with meta-analyses by Schoenfeld et al. (2017) confirming that higher weekly volume (sets × reps) produces significantly greater hypertrophy. His emphasis on mind-muscle connection is supported by EMG research showing up to 22% greater muscle activation when focusing on the target muscle.",
    principles: [
      {
        title: 'Volume Is King',
        icon: '📊',
        description:
          'Arnold performed 20–26 sets per muscle group per week. Research confirms a dose-response relationship: more volume = more growth, up to a recoverable threshold.',
      },
      {
        title: 'Mind-Muscle Connection',
        icon: '🧠',
        description:
          'Consciously contracting the target muscle during each rep increases EMG activation by 20–30%. Arnold famously visualized his bicep as a mountain while curling.',
      },
      {
        title: 'The Pump',
        icon: '🩸',
        description:
          'Cell swelling from the pump triggers anabolic signaling pathways (mTOR, IGF-1 locally). Arnold said: "The pump is as satisfying to me as coming."',
      },
      {
        title: 'Shock the Muscle',
        icon: '⚡',
        description:
          'Periodically changing exercises, angles, and rep ranges prevents adaptation. Modern periodization science supports this principle completely.',
      },
    ],
    weeklyPlan: {
      Monday: {
        focus: 'Chest + Back',
        exercises: [
          { name: 'Barbell Bench Press', sets: 4, reps: '10', rest: '90s', note: 'Full ROM, touch chest' },
          { name: 'Incline Dumbbell Press', sets: 4, reps: '10', rest: '90s', note: 'Focus upper chest' },
          { name: 'Dumbbell Flyes', sets: 3, reps: '12', rest: '60s', note: 'Deep stretch at bottom' },
          { name: 'Cable Crossover', sets: 3, reps: '12', rest: '60s', note: 'Squeeze hard at peak' },
          { name: 'Bent-Over Barbell Row', sets: 4, reps: '10', rest: '90s', note: 'Pull to lower chest' },
          { name: 'Pull-Up', sets: 4, reps: 'Max', rest: '90s', note: 'Full hang at bottom' },
          { name: 'Seated Cable Row', sets: 3, reps: '12', rest: '60s', note: 'Elbows tight, squeeze' },
        ],
      },
      Tuesday: {
        focus: 'Shoulders + Arms',
        exercises: [
          { name: 'Barbell Overhead Press', sets: 4, reps: '10', rest: '90s', note: 'Press to lockout' },
          { name: 'Dumbbell Lateral Raise', sets: 4, reps: '12', rest: '60s', note: 'Slight forward lean' },
          { name: 'Arnold Press', sets: 3, reps: '12', rest: '60s', note: 'Rotate palms fully' },
          { name: 'Barbell Bicep Curl', sets: 4, reps: '10', rest: '60s', note: 'No cheating, full squeeze' },
          { name: 'Hammer Curl', sets: 3, reps: '12', rest: '60s', note: 'Builds brachialis thickness' },
          { name: 'Tricep Dips', sets: 4, reps: '12', rest: '60s', note: 'Lean slightly forward' },
          { name: 'Tricep Pushdown', sets: 3, reps: '12', rest: '60s', note: 'Lock elbows to sides' },
        ],
      },
      Wednesday: {
        focus: 'Legs',
        exercises: [
          { name: 'Barbell Back Squat', sets: 5, reps: '10', rest: '120s', note: 'Parallel or below' },
          { name: 'Leg Press', sets: 4, reps: '15', rest: '90s', note: 'Full range of motion' },
          { name: 'Romanian Deadlift', sets: 4, reps: '10', rest: '90s', note: 'Feel hamstring stretch' },
          { name: 'Lying Leg Curl', sets: 4, reps: '12', rest: '60s', note: 'Curl to full contraction' },
          { name: 'Standing Calf Raise', sets: 5, reps: '15', rest: '60s', note: 'Full stretch at bottom' },
        ],
      },
      Thursday: {
        focus: 'Chest + Back (Repeat)',
        exercises: [
          { name: 'Barbell Bench Press', sets: 4, reps: '10', rest: '90s', note: 'Add weight from Monday if possible' },
          { name: 'Incline Dumbbell Press', sets: 4, reps: '10', rest: '90s', note: 'Beat Monday\'s reps' },
          { name: 'Dumbbell Flyes', sets: 3, reps: '12', rest: '60s', note: 'Slow eccentric' },
          { name: 'Cable Crossover', sets: 3, reps: '12', rest: '60s', note: 'High to low angle' },
          { name: 'Bent-Over Barbell Row', sets: 4, reps: '10', rest: '90s', note: 'Heavier than Monday' },
          { name: 'Pull-Up', sets: 4, reps: 'Max', rest: '90s', note: 'Beat Tuesday rep count' },
          { name: 'Seated Cable Row', sets: 3, reps: '12', rest: '60s', note: 'Pause at contraction' },
        ],
      },
      Friday: {
        focus: 'Shoulders + Arms (Repeat)',
        exercises: [
          { name: 'Barbell Overhead Press', sets: 4, reps: '10', rest: '90s', note: 'Progressive overload goal' },
          { name: 'Dumbbell Lateral Raise', sets: 4, reps: '12', rest: '60s', note: 'Slow and controlled' },
          { name: 'Arnold Press', sets: 3, reps: '12', rest: '60s', note: 'Full rotation ROM' },
          { name: 'Barbell Bicep Curl', sets: 4, reps: '10', rest: '60s', note: '3 second negative' },
          { name: 'Hammer Curl', sets: 3, reps: '12', rest: '60s', note: 'Alternating' },
          { name: 'Tricep Dips', sets: 4, reps: '12', rest: '60s', note: 'Weighted if possible' },
          { name: 'Tricep Pushdown', sets: 3, reps: '12', rest: '60s', note: 'Rope attachment for split' },
        ],
      },
      Saturday: {
        focus: 'Legs (Repeat)',
        exercises: [
          { name: 'Barbell Back Squat', sets: 5, reps: '10', rest: '120s', note: 'Add 5lb from Wednesday' },
          { name: 'Leg Press', sets: 4, reps: '15', rest: '90s', note: 'Vary foot position' },
          { name: 'Romanian Deadlift', sets: 4, reps: '10', rest: '90s', note: 'Heavier than Wednesday' },
          { name: 'Lying Leg Curl', sets: 4, reps: '12', rest: '60s', note: '2-second pause at top' },
          { name: 'Standing Calf Raise', sets: 5, reps: '15', rest: '60s', note: 'Pause at peak contraction' },
        ],
      },
      Sunday: { focus: 'Rest & Recovery', exercises: [] },
    },
  },

  {
    id: 'ronnie',
    name: 'Ronnie Coleman',
    nickname: 'The King',
    era: '1990–2007',
    birthplace: 'Monroe, Louisiana, USA',
    titles: ['8x Mr. Olympia', 'Mr. USA', 'Mr. World'],
    gradient: 'from-blue-700 via-purple-700 to-blue-900',
    accentColor: 'blue',
    trainingStyle: 'Heavy Volume',
    split: 'Bro Split (5-6 Day)',
    frequency: 6,
    intensity: 'Very High',
    bestFor: 'Maximum mass & strength',
    difficulty: 'Advanced',
    philosophy:
      'Everybody wants to be a bodybuilder but don\'t nobody want to lift no heavy-ass weights. Ronnie combined Olympia-level volume with powerlifter-level loads.',
    quote:
      '"Everybody wants to be a bodybuilder, but don\'t nobody want to lift no heavy-ass weights."',
    scienceBase:
      "Ronnie's approach combined mechanical tension (heavy loads) with metabolic stress (high reps). Research by Wernbom (2007) confirms this dual-stimulus approach maximizes hypertrophy. His high-frequency leg training matches studies showing legs respond to higher frequencies due to greater muscle mass.",
    principles: [
      {
        title: 'Mechanical Tension',
        icon: '🏋️',
        description:
          'Lifting heavy weights creates maximum mechanical tension — the primary driver of myofibrillar hypertrophy. Ronnie squatted 800lbs and deadlifted 800lbs for reps.',
      },
      {
        title: 'High Volume + Heavy Weight',
        icon: '📈',
        description:
          'Unlike most HIT advocates, Ronnie combined heavy weights WITH high volume. Science shows this combination maximizes both strength and size gains.',
      },
      {
        title: 'Compound First',
        icon: '💪',
        description:
          'Always start with the biggest compound movements. Fresh muscles + maximal neural drive = greatest overload on target muscle groups.',
      },
      {
        title: 'Progressive Overload',
        icon: '⬆️',
        description:
          'Continuously adding weight is the most proven principle for long-term muscle growth. Ronnie consistently pushed for new PRs throughout his career.',
      },
    ],
    weeklyPlan: {
      Monday: {
        focus: 'Back',
        exercises: [
          { name: 'Bent-Over Barbell Row', sets: 5, reps: '10–15', rest: '120s', note: 'GO HEAVY. This is Ronnie\'s signature' },
          { name: 'Deadlift', sets: 4, reps: '8–12', rest: '180s', note: '800lbs was just a warmup for him' },
          { name: 'Pull-Up', sets: 4, reps: 'Max', rest: '90s', note: 'Add weight when you can do 15+' },
          { name: 'Seated Cable Row', sets: 4, reps: '12', rest: '90s', note: 'Squeeze shoulder blades' },
        ],
      },
      Tuesday: {
        focus: 'Chest',
        exercises: [
          { name: 'Barbell Bench Press', sets: 5, reps: '12–15', rest: '120s', note: 'Ronnie pressed 500lbs here' },
          { name: 'Incline Dumbbell Press', sets: 4, reps: '12', rest: '90s', note: 'Upper chest priority' },
          { name: 'Dumbbell Flyes', sets: 4, reps: '12', rest: '60s', note: 'Full stretch at bottom' },
          { name: 'Cable Crossover', sets: 3, reps: '15', rest: '60s', note: 'Finisher, pump the chest' },
        ],
      },
      Wednesday: {
        focus: 'Legs',
        exercises: [
          { name: 'Barbell Back Squat', sets: 5, reps: '10–20', rest: '180s', note: 'Ronnie squatted 800lbs. Go as heavy as possible' },
          { name: 'Leg Press', sets: 4, reps: '20', rest: '120s', note: 'High reps, massive burn' },
          { name: 'Romanian Deadlift', sets: 4, reps: '10', rest: '90s', note: 'Ham focus, deep stretch' },
          { name: 'Lying Leg Curl', sets: 4, reps: '12', rest: '60s', note: 'Isolate the hammies' },
          { name: 'Standing Calf Raise', sets: 5, reps: '15', rest: '60s', note: 'Ronnie had legendary calves' },
        ],
      },
      Thursday: {
        focus: 'Shoulders',
        exercises: [
          { name: 'Barbell Overhead Press', sets: 4, reps: '12–15', rest: '120s', note: 'Seated, strict form' },
          { name: 'Dumbbell Lateral Raise', sets: 4, reps: '15', rest: '60s', note: '3D delts require volume' },
          { name: 'Face Pull', sets: 4, reps: '15', rest: '60s', note: 'Rear delts are Ronnie\'s secret weapon' },
          { name: 'Barbell Overhead Press', sets: 3, reps: '12', rest: '90s', note: 'Drop to lighter weight, more reps' },
        ],
      },
      Friday: {
        focus: 'Arms',
        exercises: [
          { name: 'Barbell Bicep Curl', sets: 4, reps: '12', rest: '60s', note: 'Heavy, controlled negatives' },
          { name: 'Hammer Curl', sets: 4, reps: '12', rest: '60s', note: 'Builds brachialis for arm thickness' },
          { name: 'Tricep Dips', sets: 4, reps: '12', rest: '60s', note: 'Weighted for maximum overload' },
          { name: 'Tricep Pushdown', sets: 4, reps: '12', rest: '60s', note: 'Full extension every rep' },
        ],
      },
      Saturday: {
        focus: 'Legs (Second Session)',
        exercises: [
          { name: 'Barbell Back Squat', sets: 5, reps: '10', rest: '180s', note: 'Ronnie trained legs twice a week — do the same' },
          { name: 'Leg Press', sets: 5, reps: '20', rest: '120s', note: 'Push through the burn' },
          { name: 'Standing Calf Raise', sets: 6, reps: '15', rest: '60s', note: '6 sets — calves need volume' },
        ],
      },
      Sunday: { focus: 'Rest & Recovery', exercises: [] },
    },
  },

  {
    id: 'tomPlatz',
    name: 'Tom Platz',
    nickname: 'The Quadfather',
    era: '1973–1987',
    birthplace: 'Fort Sill, Oklahoma, USA',
    titles: ['Mr. Universe 1978', 'IFBB Pro Bodybuilder'],
    gradient: 'from-emerald-700 via-green-600 to-teal-700',
    accentColor: 'emerald',
    trainingStyle: 'Extreme Volume + Intensity',
    split: 'Leg-Focused Upper/Lower',
    frequency: 5,
    intensity: 'Extreme',
    bestFor: 'Legendary leg development',
    difficulty: 'Elite',
    philosophy:
      'Tom Platz built the greatest legs in bodybuilding history through an almost psychotic dedication to leg training. He would squat for 10 minutes straight and perform 100+ rep sets.',
    quote:
      '"If you want legs like mine, you have to love squatting more than you love eating. You have to love the pain."',
    scienceBase:
      "Tom's extreme high-rep squatting creates massive metabolic stress and cellular swelling — both proven drivers of hypertrophy. Research on blood flow restriction training (which mimics high-rep low-rest training) shows it can match heavy training for muscle growth. His training demonstrates that muscle damage + metabolic stress = maximum adaptation.",
    principles: [
      {
        title: 'Love the Pain',
        icon: '🔥',
        description:
          'Tom would perform 20-minute sets to absolute failure. Training past the comfort zone triggers maximum anabolic hormone release (GH, testosterone spike post-training).',
      },
      {
        title: 'High-Rep Squatting',
        icon: '🦵',
        description:
          'Sets of 20, 30, 50, even 100 reps on squats. High reps with relatively lighter load increases metabolic stress, a key hypertrophy mechanism.',
      },
      {
        title: 'Leg Specialization',
        icon: '🏆',
        description:
          'Training a lagging body part more frequently (2-3x/week) overrides genetics. Tom turned average genetics into the greatest legs ever seen.',
      },
      {
        title: 'Mental Mastery',
        icon: '🧘',
        description:
          'Tom entered a trance-like state during squatting. Psychological arousal during exercise increases pain tolerance and muscular output.',
      },
    ],
    weeklyPlan: {
      Monday: {
        focus: 'LEGS (Primary - Tom\'s Specialty)',
        exercises: [
          { name: 'Barbell Back Squat', sets: 10, reps: '8–20', rest: '120s', note: 'TOM\'S SPECIALTY: Work up to weight for 20 reps, then do more sets. Agonize. Cry. Grow.' },
          { name: 'Leg Press', sets: 5, reps: '20–30', rest: '90s', note: 'After squats. Your legs are pre-exhausted. Perfect.' },
          { name: 'Romanian Deadlift', sets: 4, reps: '15', rest: '90s', note: 'Hamstring balance is crucial' },
          { name: 'Lying Leg Curl', sets: 5, reps: '15', rest: '60s', note: 'Hamstrings deserve love too' },
          { name: 'Standing Calf Raise', sets: 8, reps: '15', rest: '45s', note: 'Calves respond to volume and frequency' },
        ],
      },
      Tuesday: {
        focus: 'Chest + Back',
        exercises: [
          { name: 'Barbell Bench Press', sets: 4, reps: '10', rest: '90s', note: 'Standard chest work — conserve energy for legs' },
          { name: 'Incline Dumbbell Press', sets: 4, reps: '10', rest: '90s', note: 'Upper chest focus' },
          { name: 'Bent-Over Barbell Row', sets: 4, reps: '10', rest: '90s', note: 'Heavy back work' },
          { name: 'Pull-Up', sets: 4, reps: 'Max', rest: '90s', note: 'Weighted when possible' },
        ],
      },
      Wednesday: {
        focus: 'LEGS (Secondary)',
        exercises: [
          { name: 'Barbell Back Squat', sets: 8, reps: '15–50', rest: '180s', note: 'This is where legends are made. 50-rep squat sets. You will want to quit. Don\'t.' },
          { name: 'Leg Press', sets: 5, reps: '20', rest: '90s', note: 'Drop set on the last set' },
          { name: 'Lying Leg Curl', sets: 4, reps: '15', rest: '60s', note: 'Don\'t neglect hammies' },
          { name: 'Standing Calf Raise', sets: 6, reps: '20', rest: '45s', note: 'Calves twice a week' },
        ],
      },
      Thursday: {
        focus: 'Shoulders + Arms',
        exercises: [
          { name: 'Barbell Overhead Press', sets: 4, reps: '10', rest: '90s', note: 'Heavy overhead pressing' },
          { name: 'Dumbbell Lateral Raise', sets: 4, reps: '12', rest: '60s', note: 'Side delts for width' },
          { name: 'Barbell Bicep Curl', sets: 4, reps: '10', rest: '60s', note: 'Arms needed work too' },
          { name: 'Tricep Dips', sets: 4, reps: '12', rest: '60s', note: 'Weighted if possible' },
        ],
      },
      Friday: {
        focus: 'LEGS (Third Session)',
        exercises: [
          { name: 'Barbell Back Squat', sets: 6, reps: '20', rest: '120s', note: 'Third leg session. Tom did this. Most people cannot fathom this dedication.' },
          { name: 'Romanian Deadlift', sets: 4, reps: '12', rest: '90s', note: 'Keep the hamstrings working' },
          { name: 'Standing Calf Raise', sets: 8, reps: '15', rest: '45s', note: 'Tom\'s calf routine was legendary' },
        ],
      },
      Saturday: { focus: 'Rest & Light Cardio', exercises: [] },
      Sunday: { focus: 'Rest & Recovery', exercises: [] },
    },
  },

  {
    id: 'mentzer',
    name: 'Mike Mentzer',
    nickname: 'The Heavy Duty Guy',
    era: '1970–1980',
    birthplace: 'Germantown, Pennsylvania, USA',
    titles: ['Mr. Universe 1978 (Perfect Score)', 'Mr. America', 'IFBB Pro'],
    gradient: 'from-indigo-800 via-indigo-600 to-blue-500',
    accentColor: 'indigo',
    trainingStyle: 'Heavy Duty HIT',
    split: 'Consolidated Routine',
    frequency: 3,
    intensity: 'Maximum',
    bestFor: 'Time-efficient mass building',
    difficulty: 'Intermediate',
    philosophy:
      'More is NOT better. Intensity is the key variable. One set to absolute failure — not comfortable failure, but failure where you literally cannot move the weight — is all that is needed. Then you REST.',
    quote:
      '"More is not better. Better is better. Training should be brief, infrequent, and intense."',
    scienceBase:
      "Mentzer's Heavy Duty is grounded in the Overload Principle and Weider's research into muscle fiber recruitment. Modern science by Krieger (2010) meta-analysis shows that single sets can produce meaningful hypertrophy, especially when taken to true failure. The long rest periods are backed by research on muscle protein synthesis windows (24-72 hours post-training). His approach most resembles modern HIT research.",
    principles: [
      {
        title: 'True Failure',
        icon: '💥',
        description:
          'A rep is only growth-inducing if you reach true muscular failure — the point where proper form breaks down. Stopping at "hard" is leaving gains on the table.',
      },
      {
        title: 'Minimum Effective Dose',
        icon: '⚖️',
        description:
          'Muscle protein synthesis peaks at 24-48 hours post-training. Doing more volume than needed doesn\'t add growth — it just impairs recovery.',
      },
      {
        title: 'Infrequent Training',
        icon: '📅',
        description:
          'Muscles need 4-7 days to fully recover from true-failure training. Training before full recovery is the #1 cause of overtraining and stalled progress.',
      },
      {
        title: 'Pre-Exhaust Method',
        icon: '🎯',
        description:
          'Perform an isolation exercise before a compound to pre-fatigue the target muscle, ensuring it — not the secondary muscles — reaches failure first.',
      },
    ],
    weeklyPlan: {
      Monday: {
        focus: 'Chest + Back (One Working Set Each)',
        exercises: [
          { name: 'Dumbbell Flyes', sets: 1, reps: '6–10 to failure', rest: 'None', note: 'PRE-EXHAUST: Fail here, then immediately...' },
          { name: 'Barbell Bench Press', sets: 1, reps: '6–10 to failure', rest: '10 min', note: 'One brutal set. Force out every rep. This is ALL you need.' },
          { name: 'Cable Crossover', sets: 1, reps: '6–10 to failure', rest: 'None', note: 'PRE-EXHAUST for back session' },
          { name: 'Bent-Over Barbell Row', sets: 1, reps: '6–10 to failure', rest: '10 min', note: 'After pre-exhaust, this one set destroys the back' },
          { name: 'Pull-Up', sets: 1, reps: 'Max to failure', rest: '10 min', note: 'Weighted if you can do 10+ bodyweight' },
        ],
      },
      Tuesday: { focus: 'Rest — DO NOT TRAIN', exercises: [] },
      Wednesday: { focus: 'Rest — DO NOT TRAIN', exercises: [] },
      Thursday: {
        focus: 'Legs (One Working Set Each)',
        exercises: [
          { name: 'Leg Press', sets: 1, reps: '8–12 to failure', rest: 'None', note: 'PRE-EXHAUST: Fail completely, then immediately...' },
          { name: 'Barbell Back Squat', sets: 1, reps: '8–12 to failure', rest: '10 min', note: 'The only leg set that matters this session. Make it count.' },
          { name: 'Lying Leg Curl', sets: 1, reps: '8–12 to failure', rest: 'None', note: 'PRE-EXHAUST hammies' },
          { name: 'Romanian Deadlift', sets: 1, reps: '8–12 to failure', rest: '10 min', note: 'One set, full intensity' },
          { name: 'Standing Calf Raise', sets: 2, reps: '10–15 to failure', rest: '5 min', note: 'Calves may need extra set' },
        ],
      },
      Friday: { focus: 'Rest — DO NOT TRAIN', exercises: [] },
      Saturday: { focus: 'Rest — DO NOT TRAIN', exercises: [] },
      Sunday: {
        focus: 'Shoulders + Arms',
        exercises: [
          { name: 'Dumbbell Lateral Raise', sets: 1, reps: '8–12 to failure', rest: 'None', note: 'PRE-EXHAUST delts' },
          { name: 'Barbell Overhead Press', sets: 1, reps: '6–10 to failure', rest: '10 min', note: 'One set. Absolute failure. Done.' },
          { name: 'Barbell Bicep Curl', sets: 1, reps: '6–10 to failure', rest: '10 min', note: 'Controlled negative, explosive positive' },
          { name: 'Tricep Dips', sets: 1, reps: '8–12 to failure', rest: '10 min', note: 'Weighted. Brutal. Effective.' },
        ],
      },
    },
  },

  {
    id: 'dorian',
    name: 'Dorian Yates',
    nickname: 'The Shadow',
    era: '1988–1997',
    birthplace: 'Sutton Coldfield, England, UK',
    titles: ['6x Mr. Olympia', 'English Grand Prix Champion'],
    gradient: 'from-red-900 via-red-700 to-orange-600',
    accentColor: 'red',
    trainingStyle: 'Blood & Guts HIT',
    split: '4-Day Split',
    frequency: 4,
    intensity: 'Extreme',
    bestFor: 'Dense, grainy muscle mass',
    difficulty: 'Advanced',
    philosophy:
      'Dorian trained like a hermit — training in his dungeon gym in Birmingham. Four days a week, one all-out working set per exercise. His physique revolutionized bodybuilding forever.',
    quote:
      '"Most people who train hard don\'t train hard enough. There\'s a fine line between training hard and overtraining."',
    scienceBase:
      "Dorian's single working set approach (after 2-3 progressive warm-up sets) ensures maximum motor unit recruitment while minimizing junk volume. His 3-4 day recovery periods match research on muscle protein synthesis duration. The 'forced reps with a training partner' technique creates extra mechanical tension beyond volitional failure — a powerful growth stimulus.",
    principles: [
      {
        title: 'One Working Set',
        icon: '🎯',
        description:
          'After proper warm-ups, one all-out set to absolute failure (then forced reps if possible). This maximizes quality without unnecessary fatigue accumulation.',
      },
      {
        title: 'Progressive Warm-ups',
        icon: '📊',
        description:
          'Dorian performed 2-3 warm-up sets before each exercise. These prepare the nervous system without causing fatigue, ensuring the working set is truly maximal.',
      },
      {
        title: 'Forced Reps',
        icon: '🤝',
        description:
          'After reaching volitional failure, a training partner provides minimal assistance for 2-3 additional reps. This extends time under tension beyond what\'s possible alone.',
      },
      {
        title: 'Controlled Negative',
        icon: '⬇️',
        description:
          'The eccentric (lowering) phase causes the most muscle damage. Dorian emphasized 2-3 second negatives on every rep to maximize this growth stimulus.',
      },
    ],
    weeklyPlan: {
      Monday: {
        focus: 'Delts, Triceps, Biceps',
        exercises: [
          { name: 'Barbell Overhead Press', sets: 1, reps: '8–10 to failure', rest: '5 min', note: 'WORKING SET. 2-3 warmup sets first. Then one all-out set with forced reps.' },
          { name: 'Dumbbell Lateral Raise', sets: 1, reps: '10–12 to failure', rest: '5 min', note: 'One set. Raise to shoulder height, pause at top.' },
          { name: 'Face Pull', sets: 1, reps: '12 to failure', rest: '5 min', note: 'Rear delts — critical for Dorian\'s 3D look' },
          { name: 'Tricep Pushdown', sets: 1, reps: '10–12 to failure', rest: '5 min', note: 'One brutal set after warmups' },
          { name: 'Barbell Bicep Curl', sets: 1, reps: '8–10 to failure', rest: '5 min', note: 'Squeeze at top, slow negative' },
        ],
      },
      Tuesday: { focus: 'Rest', exercises: [] },
      Wednesday: {
        focus: 'Back + Rear Delts',
        exercises: [
          { name: 'Deadlift', sets: 1, reps: '6–8 to failure', rest: '8 min', note: 'Dorian\'s deadlift was legendary. One set, maximum weight.' },
          { name: 'Bent-Over Barbell Row', sets: 1, reps: '8–10 to failure', rest: '5 min', note: 'Underhand or overhand. One brutal set.' },
          { name: 'Seated Cable Row', sets: 1, reps: '10–12 to failure', rest: '5 min', note: 'Focus on lats, not biceps' },
          { name: 'Pull-Up', sets: 1, reps: 'Max to failure', rest: '5 min', note: 'One set, full failure' },
        ],
      },
      Thursday: { focus: 'Rest', exercises: [] },
      Friday: {
        focus: 'Chest + Biceps (finisher)',
        exercises: [
          { name: 'Incline Dumbbell Press', sets: 1, reps: '8–10 to failure', rest: '5 min', note: 'Dorian preferred incline for upper chest thickness' },
          { name: 'Barbell Bench Press', sets: 1, reps: '8–10 to failure', rest: '5 min', note: 'One set. Touch chest. Full range.' },
          { name: 'Dumbbell Flyes', sets: 1, reps: '10–12 to failure', rest: '5 min', note: 'Deep stretch — one set to failure' },
          { name: 'Hammer Curl', sets: 1, reps: '10–12 to failure', rest: '5 min', note: 'Extra bicep work after back day' },
        ],
      },
      Saturday: {
        focus: 'Legs',
        exercises: [
          { name: 'Leg Press', sets: 1, reps: '10–12 to failure', rest: '5 min', note: 'PRE-EXHAUST before squats. One set to failure.' },
          { name: 'Barbell Back Squat', sets: 1, reps: '10–12 to failure', rest: '8 min', note: 'After pre-exhaust, one all-out squat set is devastating.' },
          { name: 'Romanian Deadlift', sets: 1, reps: '10–12 to failure', rest: '5 min', note: 'Hamstring focus. Slow eccentric.' },
          { name: 'Lying Leg Curl', sets: 1, reps: '12 to failure', rest: '5 min', note: 'One set, pause at full contraction' },
        ],
      },
      Sunday: { focus: 'Rest & Recovery', exercises: [] },
    },
  },

  {
    id: 'leeHaney',
    name: 'Lee Haney',
    nickname: 'The Master Blaster',
    era: '1982–1991',
    birthplace: 'Spartanburg, South Carolina, USA',
    titles: ['8x Mr. Olympia', 'Tied Ronnie\'s Record', 'NABBA Universe'],
    gradient: 'from-teal-700 via-cyan-600 to-sky-700',
    accentColor: 'teal',
    trainingStyle: 'Moderate Volume',
    split: '5-Day Upper/Lower Split',
    frequency: 5,
    intensity: 'Moderate–High',
    bestFor: 'Balanced mass, joint health, longevity',
    difficulty: 'Intermediate',
    philosophy:
      'Stimulate, don\'t annihilate. Lee Haney built 8 Olympia titles without destroying his body. He trained smart, recovered well, and proved you can build incredible size without grinding your joints to dust.',
    quote:
      '"Stimulate, don\'t annihilate. The muscle needs to be stimulated, not annihilated."',
    scienceBase:
      "Lee's moderate-intensity approach aligns with research showing that training to failure on every set isn't necessary for hypertrophy. Stopping 1-2 reps short of failure allows for more total volume with less joint stress. His high frequency (5 days) matches modern optimal frequency research showing 2x/week per muscle is superior to 1x.",
    principles: [
      {
        title: 'Stimulate, Don\'t Annihilate',
        icon: '🎓',
        description:
          'Stop 1-2 reps short of failure on most sets. This allows more total volume, better form, and less injury risk while still providing a sufficient growth stimulus.',
      },
      {
        title: 'Joint Health First',
        icon: '🦴',
        description:
          'Choose exercises and loads that don\'t cause joint pain. Sustainable training for years beats unsustainable training for months. Lee has zero major injuries from training.',
      },
      {
        title: 'Full Body Balance',
        icon: '⚖️',
        description:
          'Train every muscle equally. Lee\'s perfect proportions came from never neglecting any body part, even the ones that were already strong.',
      },
      {
        title: 'Recovery is Training',
        icon: '😴',
        description:
          'Sleep, nutrition, and stress management are part of the program. Lee was ahead of his time in understanding that recovery determines 50% of results.',
      },
    ],
    weeklyPlan: {
      Monday: {
        focus: 'Chest',
        exercises: [
          { name: 'Barbell Bench Press', sets: 4, reps: '10', rest: '90s', note: 'Stop 1-2 reps shy of failure. Perfect form every rep.' },
          { name: 'Incline Dumbbell Press', sets: 3, reps: '10', rest: '90s', note: 'Upper chest — squeeze at top' },
          { name: 'Dumbbell Flyes', sets: 3, reps: '12', rest: '60s', note: 'Deep stretch, controlled movement' },
          { name: 'Cable Crossover', sets: 3, reps: '12', rest: '60s', note: 'Pump finisher' },
        ],
      },
      Tuesday: {
        focus: 'Back',
        exercises: [
          { name: 'Pull-Up', sets: 4, reps: '10', rest: '90s', note: 'Lee\'s foundation of back training' },
          { name: 'Bent-Over Barbell Row', sets: 4, reps: '10', rest: '90s', note: 'Moderate weight, perfect form' },
          { name: 'Seated Cable Row', sets: 3, reps: '12', rest: '60s', note: 'Full stretch, full contraction' },
        ],
      },
      Wednesday: {
        focus: 'Legs',
        exercises: [
          { name: 'Barbell Back Squat', sets: 4, reps: '12', rest: '120s', note: 'Controlled descent, powerful ascent. Don\'t grind.' },
          { name: 'Romanian Deadlift', sets: 4, reps: '10', rest: '90s', note: 'Hamstring stretch is the point' },
          { name: 'Leg Press', sets: 3, reps: '15', rest: '90s', note: 'High reps, full range' },
          { name: 'Lying Leg Curl', sets: 3, reps: '12', rest: '60s', note: 'Don\'t neglect hamstrings' },
          { name: 'Standing Calf Raise', sets: 4, reps: '15', rest: '60s', note: 'Full stretch every rep' },
        ],
      },
      Thursday: {
        focus: 'Shoulders',
        exercises: [
          { name: 'Barbell Overhead Press', sets: 4, reps: '10', rest: '90s', note: 'Seated for lower back safety' },
          { name: 'Dumbbell Lateral Raise', sets: 4, reps: '12', rest: '60s', note: 'Side delts = width' },
          { name: 'Face Pull', sets: 4, reps: '15', rest: '60s', note: 'Rear delts and rotator cuff health' },
        ],
      },
      Friday: {
        focus: 'Arms',
        exercises: [
          { name: 'Barbell Bicep Curl', sets: 4, reps: '10', rest: '60s', note: 'Full ROM, no swinging' },
          { name: 'Hammer Curl', sets: 3, reps: '12', rest: '60s', note: 'Brachialis for arm thickness' },
          { name: 'Tricep Dips', sets: 4, reps: '12', rest: '60s', note: 'Bodyweight or lightly weighted' },
          { name: 'Tricep Pushdown', sets: 3, reps: '12', rest: '60s', note: 'Rope for full extension' },
        ],
      },
      Saturday: { focus: 'Light Cardio + Stretching', exercises: [] },
      Sunday: { focus: 'Rest & Recovery', exercises: [] },
    },
  },
]

export const getCoach = (id) => coaches.find((c) => c.id === id)
