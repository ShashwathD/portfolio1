// Local images live in /public and are referenced by leading-slash paths.
// External thumbnails (YouTube) are full URLs. Components resolve the prefix.

export const projects = [
  {
    title: "IBDiary",
    tag: "FBLA Nationals Finalist '26",
    stack: "Swift · SwiftUI · iOS",
    description:
      "An iOS app that helps IBD (Inflammatory Bowel Disease) patients track symptoms, manage medications, plan meals around trigger foods, and follow IBD-friendly workouts. The centerpiece of my FBLA Capstone — a National Leadership Conference Finalist. Live on the App Store.",
    image: "/project-ibdiary.png",
    link: "https://apps.apple.com/us/app/ibdiary-companion/id6782536521",
  },
  {
    title: "EcoDive",
    tag: "NASA Global Nominee '25",
    stack: "Unity · C# .NET · Meta Quest",
    description:
      "A dynamic Unity-built VR experience for Meta Quest that uses NASA data to depict ocean pollution and lets users interactively clean the environment to raise marine-life awareness.",
    image: "https://img.youtube.com/vi/jx60oGH7uQs/hqdefault.jpg",
    link: "https://www.spaceappschallenge.org/2025/find-a-team/team-ocean-blue/?tab=project",
  },
  {
    title: "Diet Planner",
    tag: "Grand Winner · Viking Hacks",
    stack: "Swift · CoreML · OpenAI",
    description:
      "Uses your demographic data, dietary restrictions, and goals to run a CreateML model that identifies foods to eat or avoid, then pairs results with GPT-4 for a personalized diet plan.",
    image: "https://img.youtube.com/vi/jcqiLNijHZM/hqdefault.jpg",
    link: "https://devpost.com/software/diet-planner-xskzuf",
  },
  {
    title: "Fix AR",
    tag: "AR + AI",
    stack: "Swift · ARKit · Gemini",
    description:
      "FixAR simplifies device repair by sending your issue to the Gemini API and using AR object detection to highlight likely problem components in real time.",
    image: "https://img.youtube.com/vi/l9QEuWKMt2g/hqdefault.jpg",
    link: "https://devpost.com/software/fixar",
  },
  {
    title: "Fashion Killa",
    tag: "Bell Hackathon '24",
    stack: "Swift · ARKit · CoreML",
    description:
      "An AR try-on app that lets users virtually test clothing and uses an ML model for personalized recommendations — cutting the waste of buy-and-return shopping.",
    image: "https://img.youtube.com/vi/EMfJuOqe140/hqdefault.jpg",
    link: "https://devpost.com/software/fashion-kills",
  },
  {
    title: "ARt Interactive",
    tag: "AP CS Project '25",
    stack: "Swift · ARKit · SceneKit · Java",
    description:
      "An AR iOS app that builds a personalized AR art gallery using SwiftUI, SceneKit, ARKit, and a Spring Boot backend.",
    image: "https://img.youtube.com/vi/Cn7y6V-KdRk/hqdefault.jpg",
    link: "https://youtube.com/shorts/Cn7y6V-KdRk",
  },
  {
    title: "8Dify",
    tag: "2nd Prize · LancerHacks '24",
    stack: "Swift · AVAudioEngine",
    description:
      "Automatically converts uploaded songs into immersive 8D audio by applying reverb, panning, and mixing effects for a dynamic, headphone-optimized spatial sound experience.",
    image: "https://img.youtube.com/vi/iLBRJSaJpqM/hqdefault.jpg",
    link: "https://devpost.com/software/8dify",
  },
];

export const research = [
  {
    title: "NASA SEES — Artemis Lunar Mission",
    tag: "NASA SEES '26",
    stack: "Lunar Mission · Robotics · Research",
    description:
      "As a NASA Center for Space Research SEES intern (1 of 118 from 3,500+ applicants), designed an Apollo-inspired, Artemis-class lunar mission to the South Pole — a custom lunar lander and a robotics stack for sampling Permanently Shadowed Regions (PSRs). Presenting at the AGU Annual Meeting 2026.",
    image: "/nasa-sees.jpg",
    link: "https://youtu.be/xocIKrn_aMg?t=298",
  },
  {
    title: "MIT Beaverworks — Serious Game with AI",
    tag: "MIT BWSI",
    stack: "Unity · AI · Research",
    description:
      "A Unity game based on research into how AI reacts to ethical dilemmas compared to humans.",
    image: "/sga105.png",
    link: "https://www.youtube.com/watch?v=rba_D1k4kpc&t=1894s",
  },
  {
    title: "Detecting Faulty Drone Behavior with LLMs",
    tag: "Science Internship Fair '24",
    stack: "ArduPilot · Gazebo · LLMs",
    description:
      "Built a dual-agent system — one to control the drone and another to monitor it — using ArduPilot for flight control and Gazebo for simulation.",
    image: "/drone-sip.png",
    link: "https://docs.google.com/presentation/d/1B4Rikq8fIZLxuSw2LVKkMyy3BPcfZ0CvlNMm17j6UWw/edit",
  },
];

export const robotics = [
  {
    title: "ASL Gloves",
    tag: "Synopsys Science Fair '22",
    stack: "Wearable · Sensors",
    description:
      "A glove-based system demoed at the Synopsys Science Fair that helps translate American Sign Language.",
    image: "https://img.youtube.com/vi/HflxSPQdoLU/hqdefault.jpg",
    link: "https://youtu.be/HflxSPQdoLU",
  },
  {
    title: "Gesture-Controlled Robot",
    tag: "ESP32",
    stack: "ESP32 · Accelerometer",
    description:
      "An ESP32-powered robot controlled by a glove with an accelerometer — the robot moves in the direction the glove is tilted toward.",
    image: "/robot-hand.png",
    link: "https://shashwathd.github.io/ShashwathDineshBSEPortfolio/",
  },
];

export const experience = [
  {
    title: "NASA SEES Intern",
    org: "NASA Center for Space Research",
    when: "May 2026 – Jul 2026",
    description:
      "Selected as one of 118 interns out of 3,500+ applicants (~3% acceptance) for the on-site SEES Internship. Designed an Apollo-inspired, Artemis-class lunar mission to the South Pole — including a custom lunar lander and a robotics stack for exploring and sampling Permanently Shadowed Regions (PSRs). Our team will present at the AGU Annual Meeting 2026.",
    image: "/logo-nasasees.svg",
    link: "https://www.nasa.gov",
  },
  {
    title: "Founder & iOS Engineer",
    org: "IBDiary",
    when: "Jan 2026 – Present",
    description:
      "Designed and built an iOS app to help IBD patients track symptoms, manage medications, plan meals around trigger foods, and follow IBD-friendly workouts. Central to my FBLA Capstone — a National Leadership Conference Finalist. Live on the App Store.",
    image: "/logo-ibdiary.png",
    link: "https://apps.apple.com/us/app/ibdiary-companion/id6782536521",
  },
  {
    title: "MIT Beaver Works Summer Institute — Serious Games with AI",
    org: "Massachusetts Institute of Technology",
    when: "May 2025 – Aug 2025",
    description:
      "Selected as a sophomore for MIT BWSI, a highly selective STEM program. Led a team of five researching how different AI systems respond to ethical dilemmas versus humans, and built an advanced Unity game to test it. Won the Above and Beyond Human Collaboration award, plus 2 awards in a Design/Coding Challenge for a 2-player 3D FPV version of 2048.",
    image: "/logo-mitbwsi.svg",
    link: "https://www.youtube.com/watch?v=rba_D1k4kpc&t=1894s",
  },
  {
    title: "Engineering & Science Intern",
    org: "UC Santa Cruz — Science Internship Program",
    when: "Jun 2024 – Aug 2024",
    description:
      "Built a dual-agent LLM system to control and monitor a drone — one agent flying it and another supervising — using ArduPilot for flight control and Gazebo for simulation.",
    image: "/logo-ucsc.svg",
    link: "https://docs.google.com/presentation/d/1B4Rikq8fIZLxuSw2LVKkMyy3BPcfZ0CvlNMm17j6UWw/edit",
  },
  {
    title: "iOS App Developer & Machine Learning Enthusiast",
    org: "Self-Employed",
    when: "2019 – Present",
    description:
      "Designed and shipped several iOS apps and games, teaching myself ML and spatial computing along the way.",
    image: "/ios.jpg",
    link: "#projects",
  },
  {
    title: "National Honor Society STTAR Tutor",
    org: "Lynbrook High School",
    when: "2025 – Present",
    description:
      "Tutor high school students in English, Math, Physics, and Computer Science.",
    image: "/Lynbrook.png",
    link: "https://lhs.fuhsd.org/guidance-student-support/sttar-tutoring",
  },
  {
    title: "President · VP Programs · VP Philanthropy",
    org: "Boys Team Charity — Saratoga",
    when: "2018 – Present",
    description:
      "Held multiple leadership positions organizing community service and philanthropy initiatives.",
    image: "/btc.png",
    link: "https://www.boysteamcharity.org",
  },
];

export const awards = [
  "NASA Space Apps Global Nominee (2025)",
  "NASA Space Apps Mountain View — 3rd Place (2025)",
  "FBLA Capstone — Nationals Finalist (2026)",
  "FBLA Parliamentary Procedure — 2nd @ States & Nationals Qualifier (2026 & 2025)",
  "Above and Beyond Human Collaboration Award, MIT BWSI (2025)",
  "Best Adaptation (3D FPV) Award, MIT BWSI (2025)",
  "Adversarial Design Runner-Up Award, MIT BWSI (2025)",
  "National Service Honor — Gold (2026)",
  "Presidential Volunteer Service Award — Gold (2023, 2024, 2025)",
  "Presidential Volunteer Service Award — Silver (2021)",
  "Synopsys Science Fair ACM Award (2022)",
  "Synopsys Science Fair IEEE Award (2022)",
  "Multiple hackathon awards (2021 – Present)",
  "Taekwondo 2nd Degree Black Belt (2024)",
];

export const activities = [
  {
    image: "/nsda.png",
    title:
      "Varsity Public Forum Debate — advanced through elimination rounds at major tournaments including Stanford, Berkeley, and the Bronx/New York Invitational.",
  },
  {
    image: "/FBLA.jpg",
    title:
      "Future Business Leaders of America (FBLA) — competitive member and Nationals qualifier.",
  },
];

export const skills = [
  { name: "Swift, SwiftUI, Xcode", icon: "fa-brands fa-swift" },
  { name: "Java, C, C++, Python", icon: "fa-solid fa-code" },
  { name: "UIKit, ARKit", icon: "fa-solid fa-cube" },
  { name: "CoreML, TensorFlow, ML", icon: "fa-solid fa-brain" },
  { name: "Firebase", icon: "fa-solid fa-fire" },
  { name: "MATLAB", icon: "fa-solid fa-square-root-variable" },
  { name: "JavaScript, React", icon: "fa-brands fa-react" },
  { name: "Event Organizing", icon: "fa-solid fa-people-group" },
];

export const hobbies = [
  { title: "Carnatic Vocal Music", detail: "Learning for 10+ years", icon: "fa-solid fa-music" },
  { title: "Taekwondo", detail: "2nd-degree black belt, testing for 3rd", icon: "fa-solid fa-hand-fist" },
  { title: "Card Magic", detail: "Sleight of hand & illusions", icon: "fa-solid fa-wand-magic-sparkles" },
  { title: "Lego", detail: "Building & engineering", icon: "fa-solid fa-cubes" },
  { title: "Origami", detail: "Paper folding art", icon: "fa-solid fa-paper-plane" },
  { title: "Stop-Motion Video", detail: "Frame-by-frame animation", icon: "fa-solid fa-film" },
  { title: "Reading", detail: "Fiction & non-fiction", icon: "fa-solid fa-book-open" },
];
