import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
const AddNewBlog = (props) => {
  let [open, setOpen] = useState(true);
  let [title, setTitle] = useState("");
  let [body, setBody] = useState("");

  const toggle = () => {
    setOpen(!open);
    props.setOpen(!open);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("title=>", title);
    console.log("body=>", body);

    if (title === "" || body === "") {
      alert("missing paragram");
      return;
    }
    let data = {
      title: title,
      body: body,
      userId: 1,
    };
    let res = await axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then();
    console.log(res.data);
    props.addToBlog(res.data);
    toggle();
  };
  return (
    <Modal isOpen={open} toggle={toggle} backdrop="static">
      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
      <ModalBody>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Label>Title</Label>
            <Input
              value={title}
              name="title"
              placeholder="with a placeholder"
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Body</Label>
            <Input
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
              name="password"
              placeholder="type something....."
              type="textarea"
              rows="10"
            />
          </FormGroup>

          <Button type="submit">Submit</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default AddNewBlog;
