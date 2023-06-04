import React from 'react';
import "./Contacts.css"
import { motion } from "framer-motion"

const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.1 }

  })
}

function Contacts() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      id='contacts'
      className="contact-info"
    >
      <div>
        <motion.h3 variants={textAnimation} custom={1} >Contact Information</motion.h3>
        <motion.p variants={textAnimation} custom={2} >Address: <a href="https://en.wikipedia.org/wiki/Baku">Azerbaijan Baku</a></motion.p>
        <motion.p variants={textAnimation} custom={3} ><a href='tel:+994518305100'>Telephone: +994 (51) 830-51-00</a></motion.p>
        <motion.p variants={textAnimation} custom={4} >Teleqram: <a href="https://t.me/vuqar5100">Send Message</a></motion.p>
        <motion.p variants={textAnimation} custom={5} >< a href='mailto:vuqar.5100@mail.ru'>Email: vuqar.5100@mail.com</a></motion.p>
      </div>
    </motion.footer>
  );
}

export default Contacts;
