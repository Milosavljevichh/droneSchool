import { useParams } from "react-router-dom";
import { useState, useEffect, cloneElement } from "react";
import { lessons } from "../lessons/index.js"; 
import { Typography, Box } from "@mui/material";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling
import { border, borderRadius, color, display, fontWeight, height, margin, minHeight, padding, width } from "@mui/system";

export default function LessonDetails() {
  const { lessonId } = useParams();
  
  const lesson = lessons.find(l => l.id === lessonId);

  if (!lesson) {
    return <div>Lesson not found.</div>;
  }

  const [lessonBody, setLessonBody] = useState(null);
  const [summaryBody, setSummaryBody] = useState(null);

  const styles = {
    page:{
        padding:'17vh 7vw 10vh 13vw',
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
    overviewParagraph:{
        marginBottom:"20px"
    },
    image:{
        width:'100%',
        borderRadius:'12px',
        // border:'2px solid #ECEFCA',
        marginBottom:"46px"
    },
    list:{
        marginBottom:"46px",
    },
    additionalResource:{
        color:"#ECEFCA",
        display:'block',
        marginY:'32px',
        textDecoration:'underline'
    }
  }

  useEffect(() => {
    lesson.file().then(module => {
      setLessonBody(module.default.body);
    });
  }, [lesson.file]);

  useEffect(()=>{
    let summaryBody = []
    if (lessonBody) {
        lessonBody.forEach((element) => {
            if (element.type === 'subtitle') {
                summaryBody.push(element.content)
            }
        })
        summaryBody.push("Additional Resources")
    }
    setSummaryBody(summaryBody)
  }, [lessonBody])

  function createElement(type, content, alt) {
    let element
    switch(type){
        case "paragraph":
            element = <Typography variant="body1" component="p" sx={styles.paragraph}>{content}</Typography>
            break;
        case "overviewParagraph":
            element = <Typography variant="body1" component="p" sx={styles.overviewParagraph}>{content}</Typography>
            break;
        case "subtitle":
            element = <Typography variant="h4" component="h2" sx={styles.subtitle} id={content}>{content}</Typography>
            break;
        case "image":
            element = <Box sx={{margin:'0 auto', width:'100%'}}><img src={content} alt={alt} style={styles.image} /></Box>
            break;
        case "assignment":
            element = <List sx={{width:'fit-content',backgroundColor:"#54779290", padding:'40px 65px', borderRadius:'10px', marginBottom:'32px' }}> 
                        {content.map((assignmentDetails, index)=>(
                            assignmentDetails.type === "video" ? (
                                <ListItem  sx={{ display: 'list-item', listStyleType: 'decimal', padding: 0, marginLeft:'32px', 
                                    marginBottom: index === content.length - 1 ? '0' : '32px'
                                    }}>
                                    <ListItemText primary={assignmentDetails.text} />
                                    {assignmentDetails.link ? (
                                        <iframe
                                        width="533"
                                        height="330"
                                        src={`https://www.youtube.com/embed/${assignmentDetails.link}`}
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Embedded youtube"
                                        loading="lazy"
                                        />
                                    ) : null}
                                </ListItem>
                            ) :
                            null
                        ))}
                      </List>
            break;
        case "additionalResources":
            element = <Box id="Additional Resources">
                <Typography variant="h4" component="h2" sx={styles.subtitle} id={content}>Additional Resources</Typography>
                {content.map((link)=>(
                    <Link href={link.link} target="_blank" sx={styles.additionalResource}>
                        {link.text}
                    </Link>
                ))}
                </Box>
            break;
        case "list":
            element =
            <List dense={false} sx={styles.list}> 
                {content.map((item)=>(
                    <ListItem  sx={{ display: 'list-item', listStyleType: 'circle', pl: 0, marginLeft:'32px' }}>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
            break;
    }
    return element
  }

  function generateSummary(element) {
    return element.map((subtitle, index) =>
        <ListItemButton key={"summary"+index} component={ScrollLink} to={subtitle} smooth={true} duration={500}>
            <ListItemText
                primary={subtitle}
            />
        </ListItemButton>
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
                {lessonBody.map((element)=>(
                    createElement(element.type, element.content, element.alt)
                ))}
            </Box>
            <Box sx={{position:'relative', marginLeft:'6vw'}}>
                <Box sx={{position:'sticky', top:'10vh'}}>
                <Typography variant="h5"  component="h5" sx={{marginBottom:"26px", fontWeight:'500'}}>Lesson Content</Typography>
                <List dense={false} sx={styles.summary}>
                    {generateSummary(summaryBody)}
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
