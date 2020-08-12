import React from "react";
import { navigate } from 'gatsby-link'

import Layout from "../components/mainLayout";

import {
  Grid,
  IconButton,
  Paper,
  TextField,
  Button,
} from "@material-ui/core";
import { FaLinkedinIn,FaGithub,FaDev, } from 'react-icons/fa';

import "../styles/main.scss";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact({ data }) {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
  <Layout pageStyle={"contact-page"}>
    <Grid container direction="column" alignItems="flex-start" justify="space-between" className="container-contact">
      <Grid item>
        <h2>Contact Me</h2>
        <h5>Connect with me on social media or send me your contact info</h5>
        <Grid container className="social-media">
         <IconButton ><a href="https://www.linkedin.com/in/lambzachary/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a></IconButton>
         <IconButton ><a href="https://github.com/ZachLamb" target="_blank" rel="noopener noreferrer"><FaGithub/></a></IconButton>
         <IconButton ><a href="https://dev.to/zachlamb" target="_blank" rel="noopener noreferrer"><FaDev/></a></IconButton>
         
        </Grid>
      </Grid>
      <Grid item>
      <Paper className="contact-card">
      <form
        name="contact"
        action="/thanks/" 
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={handleSubmit}
        >
        <input type="hidden" name="bot-field" />
        <TextField
          id="outlined-secondary"
          label="Email"
          variant="outlined"
          color="secondary"
          name="email"
          type="input"
          onChange={handleChange}
        />
        <TextField
          id="outlined-secondary"
          label="Name"
          variant="outlined"
          color="secondary"
          name="name"
          type="input"
          onChange={handleChange}
        />
        <TextField
          id="outlined-secondary"
          label="Message"
          variant="outlined"
          color="secondary"
          name="message"
          type="input"
          fullWidth
          onChange={handleChange}
        />
        <Button color="primary" type="submit">Send email to Zach</Button>
      </form>
      </Paper>
      </Grid>
    </Grid>
  </Layout>
)};
