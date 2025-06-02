import { useEffect, useState } from "react";
import {
    Box,
    Button,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
} from "@mui/material";

export default function LessonCreationForm() {

    const [elementsInForm, setElementsInForm] = useState([])
    const [id, setId] = useState(0)

    useEffect(() => {
        addNewElement()
    }, [])

    function getElementId() {
        const currentId = id
        setId(id + 1)
        return currentId
    }

    function renderInputElements(element, key) {
        return (
            <Box key={key}>
                <Select
                    fullWidth
                    displayEmpty
                    value={element.type}
                    onChange={(e) => {
                        let copy = [...elementsInForm]
                        setElementsInForm(copy.map(el =>
                                el.id === element.id ? { ...el, type: e.target.value } : el
                            ))
                    }}
                    sx={{
                        mb: 2,
                        backgroundColor: "#f5f7f9",
                        borderRadius: 2,
                    }}
                >
                    <MenuItem value="" disabled>
                        Choose element type
                    </MenuItem>
                    <MenuItem value="paragraph">Paragraph</MenuItem>
                    <MenuItem value="subtitle">Subtitle</MenuItem>
                    <MenuItem value="image">Image</MenuItem>
                    <MenuItem value="code">Code</MenuItem>
                </Select>
                <TextField
                    multiline
                    fullWidth
                    placeholder="Enter content"
                    minRows={3}
                    onBlur={(e) => {
                        let copy = [...elementsInForm]
                        setElementsInForm(copy.map(el =>
                                el.id === element.id ? { ...el, content: e.target.value } : el
                            ))
                    }}
                    sx={{
                        mb: 2,
                        backgroundColor: "#f5f7f9",
                        borderRadius: 2,
                    }}
                />
                <Button onClick={() => { removeElement(element.id) }} variant="contained" color="error" sx={{ marginBottom: '28px' }}>Remove Element</Button>
            </Box>
        )
    }

    function removeElement(id) {
        let copy = [...elementsInForm]
        let updatedArray = copy.filter(el => (el.id != id))
        setElementsInForm(updatedArray)
    }

    function addNewElement() {
        let newElements = [...elementsInForm, {
            "type": "",
            "content": "",
            id: getElementId()
        }]
        setElementsInForm(newElements)
    }

    return (
        <Paper
            elevation={3}
            sx={{
                p: 4,
                maxWidth: '70vw',
                mx: "auto",
                mt: 4,
                borderRadius: 3,
                backgroundColor: "#fff",
            }}
        >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
                Create Lesson
            </Typography>
            <Box>
                {elementsInForm.map((element) => renderInputElements(element, element.id))}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <Button variant="contained" color="error">Cancel</Button>
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <Button variant="outlined" onClick={() => addNewElement()}>New element</Button>
                    <Button variant="contained" color="success">Finish</Button>
                </Box>
            </Box>
        </Paper>
    );
}