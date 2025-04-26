import { useParams } from "react-router-dom";
import { useState, useEffect, cloneElement } from "react";
import { lessons } from "../lessons/index.js"; 
import { Typography, Box } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { border, borderRadius, color, display, fontWeight, height, margin, minHeight, padding, width } from "@mui/system";

export default function LessonDetails() {
  const { lessonId } = useParams();
  
  const lesson = lessons.find(l => l.id === lessonId);

  if (!lesson) {
    return <div>Lesson not found.</div>;
  }

  const [lessonBody, setLessonBody] = useState(null);

  const styles = {
    page:{
        padding:'10vh 13vw',
        minHeight:'100vh',
        height:'fit-content',
        color:"#ECEFCA"
    },
    lessonDetails:{
        width:'70%'
    },
    summary:{
        borderLeft:'2px solid #ECEFCA',
    },
    lessonTitle:{
        fontWeight:'500'
    },
    lessonSubtitle:{
        color:"#ECEFCAB1",
    },
    subtitle:{
        marginBottom:"20px"
    },
    paragraph:{
        marginBottom:"46px"
    },
    image:{
        width:'100%',
        borderRadius:'12px',
        border:'2px solid #ECEFCA',
        marginBottom:"46px"
    }
  }

  useEffect(() => {
    lesson.file().then(module => {
      setLessonBody(module.default.body);
    });
  }, [lesson.file]);

  function createElement(type, content, alt) {
    let element
    switch(type){
        case "paragraph":
            element = <Typography variant="body1" component="p" sx={styles.paragraph}>{content}</Typography>
            break;
        case "subtitle":
            element = <Typography variant="h4" component="h2" sx={styles.subtitle}>{content}</Typography>
            break;
        case "image":
            element = <Box sx={{margin:'0 auto', width:'50%'}}><img src={content} alt={alt} style={styles.image} /></Box>
            break;
    }
    return element
  }

  function generate(element) {
    return [0, 1, 2].map((value) =>
      cloneElement(element, {
        key: value,
      }),
    );
  }
  

  return (
    <Box sx={styles.page}>
      {lessonBody ? (
        <Box sx={{display:'flex', width:'100%', height:'100%', justifyContent:'space-between'}}>
            <Box sx={styles.lessonDetails}>
                <Box sx={{display:'flex', alignItems:'center', gap:'64px', marginBottom:"10vh"}}>
                    <img src="/lessonImages/drone.png" alt="drone icon" />
                    <Box>
                        <Typography variant="h3" component="h1" sx={styles.lessonTitle}>{lesson.title}</Typography>
                        <Typography variant="h6"  component="h5" sx={styles.lessonSubtitle}>{lesson.level} level</Typography>
                    </Box>
                </Box>
                <Typography variant="h4"  component="h4" sx={styles.subtitle}>Introduction</Typography>
                {lessonBody.map((element)=>(
                    createElement(element.type, element.content, element.alt)
                ))}
            </Box>
            <Box sx={{position:'relative'}}>
                <Box sx={{position:'sticky', top:'10vh'}}>
                <Typography variant="h5"  component="h5" sx={{marginBottom:"26px", fontWeight:'500'}}>Lesson Content</Typography>
                <List dense={false} sx={styles.summary}>
                {generate(
                    <ListItem>
                    <ListItemText
                        primary="Single-line item"
                    />
                    </ListItem>,
                )}
                </List>
                </Box>
            </Box>
        </Box>
      ) : (
        <p>Loading content...</p>
      )}
    </Box>
  );
}
