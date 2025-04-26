import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { lessons } from "../lessons/index.js"; 

export default function LessonDetails() {
  const { lessonId } = useParams();
  
  const lesson = lessons.find(l => l.id === lessonId);

  if (!lesson) {
    return <div>Lesson not found.</div>;
  }

  const [lessonBody, setLessonBody] = useState(null);

  useEffect(() => {
    lesson.file().then(module => {
      setLessonBody(module.default.body);
    });
  }, [lesson.file]);

  function createElement(type, content) {
    let element
    switch(type){
        case "paragraph":
            element = <p>{content}</p>
            break;
        case "subtitle":
            element = <h2>{content}</h2>
            break;
    }
    console.log(element)
    return element
  }

  return (
    <div className="lesson-details">
      <h1>{lesson.title}</h1>
      <h5>{lesson.level} level</h5>
      {lessonBody ? (
        lessonBody.map((element)=>(
            createElement(element.type, element.content)
        ))
      ) : (
        <p>Loading content...</p>
      )}
    </div>
  );
}
