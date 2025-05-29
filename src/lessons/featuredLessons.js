
export const lessons = [
    {
      id: "lessonTest",
      cover:"/coverImages/drone.jpg",
      title: "Drone Selection",
      description: "In this lesson, we will be addressing common questions about purchasing a drone, including which model offers the best value and what features are essential.",
      duration:"90",
      level:"Beginner",
      path: "/lessons/lessonTest",
      file: () => import('./lessonTest.json')
    },
    {
      id: "flyingDrones",
      cover:"/coverImages/flyCover.jpg",
      title: "Start Flying",
      description: "The primary focus of operating a drone is understanding how to manipulate its flight controls, which are primarily found on the controller.",
      duration:"15",
      level:"Beginner",
      path: "/lessons/lessonTest",
      file: () => import('./flyingLesson.json')
    },
    {
      id: "flyingDrones",
      cover:"/coverImages/flyCover.jpg",
      title: "Start Flying",
      description: "The primary focus of operating a drone is understanding how to manipulate its flight controls, which are primarily found on the controller.",
      duration:"15",
      level:"Beginner",
      path: "/lessons/lessonTest",
      file: () => import('./flyingLesson.json')
    },
  ];
  