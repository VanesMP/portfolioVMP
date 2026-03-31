"use client";

import { DisplayProject, Header, Footer } from "../../components-widgets";
import { dataList } from "../../src/data.js";
import Styles from "../../styles/projectPage.module.scss";
import { useSearchParams } from "next/navigation";
import Home from "../page";

export const Project = () => {
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");

  const itemProject = dataList.filter((project) => project.id === id)[0];
  console.log(itemProject);

  if (itemProject === undefined) {
    return (
      <div>
        <Home />
      </div>
    );
  }

  return (
    <div>
      <Header
        fixPosition="positionHeaderProject"
        classNavig={Styles.navProject}
        seeProject="/"
        classNavigBurger={Styles.menu}
      />
      <div className={Styles.insidePageProject}>
        <DisplayProject
          dataLogo={itemProject.logo}
          dataEntreprise={itemProject.entreprise}
          dataSubject1={itemProject.subject1}
          dataSubject2={itemProject.subject2}
          dataObjectif={itemProject.objectif}
          dataRealisation={itemProject.realisation}
          textLinkProject={itemProject.nameLinkApercu}
          dataPictures={itemProject.pictures}
          dataLinkWebsite={itemProject.gitWebsite}
          linkGithub={itemProject.gitLink}
          linkProject={itemProject.gitWebsite}
        />
      </div>
      <Footer />
    </div>
  );
};
