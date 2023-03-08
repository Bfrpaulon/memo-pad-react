import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import ImageUpload from "../ImageUpload";
import './NoteForm.css'

const NoteForm = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleTextChange = (event) => setText(event.target.value);
  const handleTagChange = (event) => setTags(event.target.value.split(","));

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({ title, text, tags, image: selectedImage });
    setTitle("");
    setText("");
    setTags([]);
    setSelectedImage("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="title">Título</Label>
        <Input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleTitleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="text">Texto</Label>
        <Input
          type="textarea"
          name="text"
          id="text"
          value={text}
          onChange={handleTextChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="tags">Tags</Label>
        <Input
          type="text"
          name="tags"
          id="tags"
          value={tags.join(",")}
          onChange={handleTagChange}
          required
        />
      </FormGroup>
      <ImageUpload
        selectedImage={selectedImage}
        onImageSelect={(image) => setSelectedImage(image)}
      />
      <Button type="submit" color="primary">
        Salvar Nota
      </Button>
    </Form>
  );
};

export default NoteForm;
