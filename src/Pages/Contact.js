import React from "react";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import "../Styles/contact.css";
import bannerWip from "../assets/banner-wip.png";
import iconeEmail from "../assets/iconeEmail.png";
import iconeLinkedin from "../assets/iconeLinkedin.png";
import backHome from "../assets/ArrowUp.svg";
import Background from "../Composnent/Background";
import ContactLink from "../Composnent/ContactLink";
// import {dataLink} from "../data.js";


function Contact() {

    const { handleSubmit, register, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
      };

    return(
        <div>
            <Background darkorclear="clear" />
            <Link to="/">
                <img src={backHome} alt="retour vers la page d'accueil" className="backHome"/>
            </Link>
            <div className="bannerCenter">
                <div className="contactForm">
                    <h1 className="titleContact">Formulaire de contact</h1>
                        <div className="containerFormContact">
                    <div>
                        <img src={bannerWip} alt="work in progress, presque prêt" className="crimeBanner InProgress1" ></img>
                        <img src={bannerWip} alt="work in progress, presque prêt" className="crimeBanner InProgress2" ></img>
                    </div>
                            <p className="subtitleContact subtitleContactForm">- je suis là pour répondre à vos questions, n'hésitez pas à me contacter</p>
                            <form onSubmit={handleSubmit(onSubmit)} className="formulaire">
                                <label htmlFor="name" className="labelContact">Votre nom (obligatoire)</label>
                                    <input 
                                        type="text"
                                        name="name" 
                                        id="name"
                                        className="inputContact" 
                                        {...register("name")}
                                    />
                                        {errors && <p>Champs de saisi obligatoire !</p>}
                                <label htmlFor="email" className="labelContact">Votre e-mail (obligatoire)</label>
                                    <input 
                                        name="email" 
                                        type="email" 
                                        id="email"
                                        className="inputContact"
                                        {...register("email")} 
                                        required
                                    />
                                        {errors && <p>Champs de saisi obligatoire !</p>}

                                <label htmlFor="subject" className="labelContact">Sujet</label>
                                    <input 
                                        type="text"
                                        name="subject" 
                                        id="subject"
                                        className="inputContact"
                                        {...register("subject")} 
                                    />
                                <label htmlFor="message" className="labelContact">Votre message (obligatoire)</label>
                                    <textarea 
                                        type="text"
                                        name="message" 
                                        id="message"
                                        rows="20"
                                        className="textareaContact"
                                        {...register("message")}
                                    />
                                        {errors && <p>Champs de saisi obligatoire !</p>}

                                <button type="submit" value="Submit" className="submitButton">Envoyer</button>
                            </form>
                        </div>
                </div>
                        <div className="containerContact">
                            <h2 className="titleContactIcone">Contact</h2>
                            <p className="subtitleContact">- je suis là pour répondre à vos questions, n'hésitez pas à me contacter</p>
                            <div className="containerIcone" >
                                <ContactLink styleIconentext="iconentext"
                                             icone={iconeEmail}
                                             targetLink="mailto:alicemp@hotmail.fr"
                                             altText="icone contact mail"
                                             styleIconeContact="iconeContact" 
                                             styleInstruction="instruction" 
                                             subtextLink="mail me" />
                                    <ContactLink styleIconentext="iconentext"
                                                icone={iconeLinkedin}
                                                targetLink="http://www.linkedin.com/in/vanessa-macedo-pinto-devjunior"
                                                altText="icone contact Linkedin"
                                                styleIconeContact="iconeContact" 
                                                styleInstruction="instruction" 
                                                subtextLink="follow me" />
                            </div>
                        </div>
            </div>
        </div>
    )
};

export default Contact;