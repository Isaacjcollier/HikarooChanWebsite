import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styles from './ContactUs.module.css'
class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state

    let templateParams = {
        from_name: name,
        email: email,
        to_name: 'Isaac Collier',
        subject: subject,
        message_html: message,
    }

    if (templateParams.email === "") {
      alert('Please fill out the "Email" field before trying to submit.')
      return
    }
    if (templateParams.from_name === "") {
      alert('Please fill out the "Name" field before trying to submit.')
      return
    }
    if (templateParams.subject === "") {
      alert('Please fill out the "Subject"" field before trying to submit.')
      return
    }
    if (templateParams.message_html === "") {
      alert('Please fill out the "Message" field before trying to submit.')
      return
    }

    emailjs.send(
        'service_q52rx3l',
        'template_i53jiw9',
        templateParams,
        'user_JKPsd9UwD1wKI65ktWEPn'
    )
    this.resetForm()
}

resetForm() {
    this.setState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
}

handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
}

render() {
    return (
        <Form className={styles.formContainer} onSubmit={this.handleSubmit.bind(this)}>

          <FormGroup className={styles.formItem}>
            <Label className={styles.formLabelText}>Email Address</Label>
            <Input
              type="email"
              name="email"
              value={this.state.email}
              className={styles.inputBox}
              onChange={this.handleChange.bind(this, 'email')}
              placeholder="Enter Your Email"
            />
          </FormGroup>


          <FormGroup className={styles.formItem}>
            <Label className={styles.formLabelText} >Name</Label>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              className={styles.inputBox}
              onChange={this.handleChange.bind(this, 'name')}
              placeholder="Enter Your Name"
            />
          </FormGroup>


          <FormGroup className={styles.formItem}>
            <Label className={styles.formLabelText} >Subject</Label>
            <Input
              type="text"
              name="subject"
              className={styles.inputBox}
              value={this.state.subject}
              onChange={this.handleChange.bind(this, 'subject')}
              placeholder="Enter the Subject"
            />
          </FormGroup>


          <FormGroup className={styles.formItemMessageBox}>
            <Label className={styles.formLabelText} >Message</Label>
            <Input
              type="textarea"
              name="message"
              className={styles.inputMessageBox}
              value={this.state.message}
              onChange={this.handleChange.bind(this, 'message')}
              placeholder="Enter your questions, inquiries, or anything else you'd like me to know here!"
            />
          </FormGroup>


          <Button className={styles.formButton}  variant="primary" type="submit">Submit</Button>


        </Form>
    )
  }
}
export default ContactForm