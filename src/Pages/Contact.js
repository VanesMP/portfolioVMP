import React from "react";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import "../Styles/contact.css";
import iconeEmail from "../assets/iconeEmail.png";
import iconeLinkedin from "../assets/iconeLinkedin.png";
import backHome from "../assets/ArrowUp.svg";
import Background from "../Composnent/Background";


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
                    <h1 className="titleContact">Formulaire de contact</h1>
                        <div className="containerFormContact">
                            <h3 className="subtitleContact">- je suis là pour répondre à vos questions, n'hésitez pas à me contacter</h3>
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
                        <div className="containerIconeContact">
                            <h2 className="titleContactIcone">Contact</h2>
                            <img src={iconeEmail} alt="icone email contact" className="iconeContact" />
                            <img src={iconeLinkedin} alt="icone contact Linkedin" className="iconeContact" />
                        </div>
            </div>
        </div>
    )
};

export default Contact;