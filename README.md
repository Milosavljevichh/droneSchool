# droneSchool

**droneSchool** is a React-based single-page application for delivering interactive drone training lessons. It uses **Vite** as a fast build tool, and the UI is built with **Material UI (MUI)** components. React’s component-based architecture powers the interface (with React Router for navigation). The app’s high-level structure consists of a main `LessonsPage` that lists available lessons (each rendered by a `LessonCard` component), and a `LessonDetails` page that dynamically loads and displays lesson content. The lesson content is stored in JSON files under `src/lessons`, and lessons are sequenced and managed via metadata in `src/lessons/index.js`.

## Setup & Installation

To run **droneSchool** locally, ensure you have Node.js (v14+) and npm installed. Then clone the repo and install dependencies:

```bash
git clone https://github.com/Milosavljevichh/droneSchool.git
cd droneSchool
npm install
```

Start the development server using Vite:

```bash
npm run dev
```

Vite will launch a local dev server (usually at `http://localhost:3000`) with hot-module reloading. To build for production, run `npm run build`, which bundles the app using Rollup (configured by Vite). No additional backend or environment variables are required for the core app. (The project is purely frontend with static lesson data.)

## Project Structure

* **public/** – Static assets and HTML:

  * `index.html` – Main HTML template.
  * `coverImages/` – Cover image files (e.g. `flyCover.jpg`, `dummy.jpg`) used by lessons.
* **src/** – React source code:

  * **components/** – Reusable UI components:

    * `Header.jsx` – The top navigation/header bar.
    * `LessonCard.jsx` – Card component that displays a lesson summary (image, title, etc.) and links to the lesson details.
  * **lessons/** – Lesson data and exports:

    * `index.js` – Exports the `lessons` array, listing all lessons with metadata (id, title, description, cover path, etc.) and a dynamic import for each lesson’s content.
    * `lessonTest.json`, `flyingLesson.json`, … – JSON files containing the actual lesson content (title, body blocks, etc.).
  * **pages/** – React page components:

    * `LessonsPage.jsx` – Displays a grid of all lessons by mapping `lessons` to `LessonCard`s.
    * `LessonDetails.jsx` – Loads and renders a single lesson’s content based on the URL parameter `lessonId`.
  * **main.jsx** – Application entry point; sets up React Router routes (e.g. the route `"/lessons/:lessonId"` points to `<LessonDetails/>`).
* **package.json**, **vite.config.js**, **eslint.config.js**, etc. – Configuration files. Notably, `package.json` should include scripts like `"dev": "vite"` and dependencies including `react`, `react-dom`, `react-router-dom`, and `@mui/material`.

## The Lesson System

### Lesson Data & Management

Lessons are defined entirely on the frontend. All lesson content lives in **JSON files** under `src/lessons/`. Each lesson JSON has the form:

```jsonc
{
  "title": "Lesson Title",
  "body": [
    { "type": "paragraph", "content": "Some text..." },
    { "type": "subtitle",  "content": "A Subtitle" },
    ...
  ]
}
```

For example, `flyingLesson.json` (a lesson about basic flight controls) begins as:

```jsonc
{
  "title": "Start Flying",
  "body": [
    {
      "type": "paragraph",
      "content": "Most drones come with a standard configuration..."
    },
    {
      "type": "subtitle",
      "content": "The Joystick"
    },
    ...
  ]
}
```

Each lesson’s **metadata** (ID, title, cover image, etc.) is listed in `src/lessons/index.js`. That file exports a `lessons` array, for example:

```js
export const lessons = [
  {
    id: "lessonTest",
    cover: "/coverImages/dummy.jpg",
    title: "Drone Selection",
    description: "Questions about which drone model to buy...",
    duration: "90min",
    level: "Beginner",
    path: "/lessons/lessonTest",
    file: () => import('./lessonTest.json')
  },
  {
    id: "flyingDrones",
    cover: "/coverImages/flyCover.jpg",
    title: "Start Flying",
    description: "Understanding drone flight controls...",
    duration: "15min",
    level: "Beginner",
    path: "/lessons/flyingDrones",
    file: () => import('./flyingLesson.json')
  },
  // Add more lessons here...
];
```

Each entry’s `file` field is a **dynamic import** of the corresponding JSON (so the JSON is loaded only when needed). The `cover` path refers to an image in `public/coverImages/`. The `id` (e.g. `"flyingDrones"`) is used for routing.

### Lesson Listing & Navigation

The `LessonsPage` component renders all lessons by mapping over the `lessons` array. For each lesson object it creates a `LessonCard`:

```jsx
{lessons.map((lesson) => (
  <LessonCard 
    key={lesson.id}
    id={lesson.id}
    cover={lesson.cover}
    title={lesson.title}
    description={lesson.description}
    duration={lesson.duration}
    level={lesson.level}
  />
))}
```

The `LessonCard` component displays the cover image, title, etc., and includes a **React Router `<Link>`** button to navigate to that lesson’s detail page:

```jsx
<Button component={Link} to={`/lessons/${id}`} variant="contained">
  View Lesson
</Button>
```

When the user clicks “View Lesson,” React Router navigates to `"/lessons/<lessonId>"`. In `main.jsx`, the route is defined as:

```js
{
  path: "/lessons/:lessonId",
  element: <LessonDetails />
}
```

where `LessonDetails` is the component that handles displaying a single lesson.

### LessonDetails & Rendering

The `LessonDetails` component reads the `lessonId` from the URL (using React Router’s `useParams()`), finds the matching lesson object from the `lessons` array, and then dynamically loads its JSON:

```jsx
const { lessonId } = useParams();
const lesson = lessons.find(l => l.id === lessonId);
const [lessonBody, setLessonBody] = useState(null);

useEffect(() => {
  // Dynamically import the JSON and set its "body" content in state
  lesson.file().then(module => {
    setLessonBody(module.default.body);
  });
}, [lesson.file]);
```

After loading, it displays the lesson title and level, then maps over `lessonBody` to render each block. A helper function like:

```jsx
function createElement(type, content) {
  switch(type) {
    case "paragraph": return <p>{content}</p>;
    case "subtitle":  return <h2>{content}</h2>;
    // add cases for other content types if needed
  }
}
```

is used to turn each JSON block into JSX. The render part looks roughly like:

```jsx
<div className="lesson-details">
  <h1>{lesson.title}</h1>
  <h5>{lesson.level} level</h5>
  {lessonBody 
    ? lessonBody.map(el => createElement(el.type, el.content))
    : <p>Loading content...</p>
  }
</div>
```

### Lesson Sequencing & Progress

Currently, lessons are independent entries in the array, and the app simply navigates to each by ID. There is no built-in “sequence” logic or user-progress tracking in the code; all lessons are unlocked by default and available on the main page. A possible extension could store progress (e.g. completed lesson IDs in `localStorage`) and conditionally render future lessons. As written, the app does not persist any user state beyond normal React state.

### Adding or Editing Lessons

To **add a new lesson**:

1. Place a new JSON file in `src/lessons/` with the lesson content. Follow the existing format (include `"title"` and a `"body"` array of content blocks).
2. Add a corresponding entry to the `lessons` array in `src/lessons/index.js`. Give it a unique `id`, point `file` to your new JSON (e.g. `file: () => import('./myNewLesson.json')`), and set its `cover`, `title`, etc.
3. (If needed) add a cover image file into `public/coverImages/` and reference it in the `cover` field (e.g. `"/coverImages/myCover.jpg"`).

To **edit a lesson**, simply modify its JSON file or update its metadata in `index.js`. The app will reflect changes on reload. No build step is required for JSON changes (Vite will reload the module).

## Example Code Snippets

* *Lessons array (src/lessons/index.js)*:

  ```js
  export const lessons = [
    {
      id: "flyingDrones",
      cover: "/coverImages/flyCover.jpg",
      title: "Start Flying",
      description: "Understanding how to manipulate drone controls.",
      duration: "15min",
      level: "Beginner",
      path: "/lessons/flyingDrones",
      file: () => import('./flyingLesson.json')
    },
    // ... other lessons ...
  ];
  ```

* *LessonDetails dynamic import (src/pages/LessonDetails.jsx)*:

  ```jsx
  const lesson = lessons.find(l => l.id === lessonId);
  const [lessonBody, setLessonBody] = useState(null);

  useEffect(() => {
    lesson.file().then(module => {
      setLessonBody(module.default.body);
    });
  }, [lesson.file]);
  ```

* *LessonsPage rendering the list (src/pages/LessonsPage.jsx)*:

  ```jsx
  <Box sx={styles.lessonContainer}>
    {lessons.map(lesson => (
      <LessonCard
        key={lesson.id}
        id={lesson.id}
        cover={lesson.cover}
        title={lesson.title}
        description={lesson.description}
        duration={lesson.duration}
        level={lesson.level}
      />
    ))}
  </Box>
  ```

Each of these illustrates how the code manages lessons as data and ties them into the UI.

## Technologies

* **React** – a JavaScript library for building UIs.
* **Vite** – a modern build tool that provides a fast development server and bundling.
* **React Router** – for client-side routing (maps `/lessons/:id` to `<LessonDetails/>`).
* **Material UI (MUI)** – UI component library implementing Google’s Material Design. Used for styling (`Box`, `Typography`, `Button`, icons, etc.).
* **JavaScript/JSX Modules** – Lessons are stored as JSON and imported dynamically, enabling rich content without a backend.

With this structure and code organization, **droneSchool** makes it easy for developers to add new lessons, modify content, and understand the flow from the lesson listing to detailed lesson views. The combination of React’s component model, React Router, and Vite’s development server provides a responsive, developer-friendly environment.

