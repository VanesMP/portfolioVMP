"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import Styles from "../../styles/contact.module.scss";
import {
  Background,
  bannerWip,
  iconeEmail,
  iconeLinkedin,
  arrowUp as backHome,
} from "../../components-shared";
import { ContactLink } from "../../components-widgets";
import clsx from "clsx";
// import {dataLink} from "../data.js";

const Contact = () => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Background darkorclear="clear" />
      <Link href="/">
        <img src={backHome} alt="retour vers la page d'accueil" className={Styles.backHome} />
      </Link>
      <div className={Styles.bannerCenter}>
        <div className={Styles.contactForm}>
          <h1 className={Styles.titleContact}>Formulaire de contact</h1>
          <div className={Styles.containerFormContact}>
            <div>
              <img
                src={bannerWip}
                alt="work in progress, presque prêt"
                className={clsx(Styles.crimeBanner, Styles.InProgress1)}
              />
              <img
                src={bannerWip}
                alt="work in progress, presque prêt"
                className={clsx(Styles.crimeBanner, Styles.InProgress2)}
              />
            </div>
            <p className={Styles.subtitleContact + " " + Styles.subtitleContactForm}>
              - je suis là pour répondre à vos questions, n'hésitez pas à me contacter
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className={Styles.formulaire}>
              <label htmlFor="name" className={Styles.labelContact}>
                Votre nom (obligatoire)
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className={Styles.inputContact}
                {...register("name")}
              />
              {errors && <p>Champs de saisi obligatoire !</p>}
              <label htmlFor="email" className={Styles.labelContact}>
                Votre e-mail (obligatoire)
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className={Styles.inputContact}
                {...register("email")}
                required
              />
              {errors && <p>Champs de saisi obligatoire !</p>}

              <label htmlFor="subject" className="labelContact">
                Sujet
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="inputContact"
                {...register("subject")}
              />
              <label htmlFor="message" className="labelContact">
                Votre message (obligatoire)
              </label>
              <textarea
                type="text"
                name="message"
                id="message"
                rows="20"
                className="textareaContact"
                {...register("message")}
              />
              {errors && <p>Champs de saisi obligatoire !</p>}

              <button type="submit" value="Submit" className="submitButton">
                Envoyer
              </button>
            </form>
          </div>
        </div>
        <div className="containerContact">
          <h2 className="titleContactIcone">Contact</h2>
          <p className="subtitleContact">
            - je suis là pour répondre à vos questions, n'hésitez pas à me contacter
          </p>
          <div className="containerIcone">
            <ContactLink
              styleIconentext="iconentext"
              icone={iconeEmail}
              targetLink="mailto:alicemp@hotmail.fr"
              altText="icone contact mail"
              styleIconeContact="iconeContact"
              styleInstruction="instruction"
              subtextLink="mail me"
            />
            <ContactLink
              styleIconentext="iconentext"
              icone={iconeLinkedin}
              targetLink="http://www.linkedin.com/in/vanessa-macedo-pinto-devjunior"
              altText="icone contact Linkedin"
              styleIconeContact="iconeContact"
              styleInstruction="instruction"
              subtextLink="follow me"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
