import React from "react";
import Photo from "img/arthur_photo.jpg";
import { FaAt, FaMapMarkerAlt, FaPhone, FaGithub } from "react-icons/fa";

const Me = () => (
  <div className="flex flex-col items-center">
    <img
      className="h-40 w-40 my-4 p-1 rounded-full border-3 border-white"
      src={Photo}
      alt="Me"
    />
    <p className="text-3xl font-medium">Laurent Arthur</p>
    <p className="text-lg mb-2">30 ans</p>
  </div>
);

const Contact = () => (
  <div className="flex flex-col items-center leading-6 text-sm md:pl-6 md:items-start">
    <p className="hidden font-medium mt-2 mb-2 text-2xl md:text-xl md:block">
      Contact
    </p>

    <p className="flex">
      <FaAt className="mr-1 mt-1" />
      laurent.arthur75@gmail.com
    </p>
    <p className="flex">
      <FaMapMarkerAlt className="mr-1 mt-1" />
      64 rue Brancion, Paris 75015
    </p>
    <p className="flex">
      <FaPhone className="mr-1 mt-1" />
      07 81 29 91 41
    </p>
    <a
      className="flex hover:text-link mb-4 md:mb-auto"
      href="https://github.com/ludwig778/"
    >
      <FaGithub className="mr-1 mt-1" />
      Github
    </a>
  </div>
);

const Title = () => (
  <p className="text-4xl py-6 text-center font-bold md:pt-7 md:pb-0">
    Ingénieur Logiciel/Devops
  </p>
);

const Job = ({ date, name, tasks }) => (
  <div className="mt-4 md:mt-3">
    <p className="text-primary-light text-xs">{date}</p>
    <p className="text-primary text-xl leading-tight font-medium mt-0">{name}</p>
    <ul className="list-disc list-inside">
      {tasks.map((task, i) => (
        <li key={i} className="text-xs pl-3 pt-1">
          {task}
        </li>
      ))}
    </ul>
  </div>
);

const Jobs = () => (
  <div className="px-6">
    <p className="text-primary-light font-medium text-3xl text-center mt-4 md:mt-6 md:text-left md:text-2xl">
      Expériences
    </p>

    <div>
      <Job
        date={"Decembre 2020 - Septembre 2021 (9 mois)"}
        name={"Alkemics - Software Engineer"}
        tasks={[
          "Maintient et évolution des solutions de traitement de larges volumes de données",
          "Évolution de fonctionnalités Frontend",
          "Migration Python3",
          "Mise en place d'utilitaires Python et d'environnements Docker",
        ]}
      />

      <Job
        date={"Septembre 2017 - Novembre 2020 (3 ans et 2 mois)"}
        name={"Wifirst - Développeur architecture"}
        tasks={[
          "Mise en place d'outils de déploiement projet avec ansible",
          "Industrialisation de configuration d'équipements actifs",
          "Gestion de référentiels et mise en correspondance de différents SI",
          "Mise en place de l'intégration continue",
          "Référent intégration continue/Docker auprès des équipes",
        ]}
      />

      <Job
        date={"Septembre 2016 - septembre 2017 (1 an)"}
        name={"Wifirst - Apprenti Ingénieur Système et Réseau"}
        tasks={[
          "Analyse télémétriques des liens fibres et mise en évidence d'anomalies",
          "Analyse de site client, aggrégat de données pour export",
          "Amélioration des interfaces de supervision",
        ]}
      />

      <Job
        date={"Septembre 2014 - septembre 2016 (2 ans)"}
        name={"Wifirst - Administrateur Système et Réseau"}
        tasks={[
          "Administration de serveurs Linux et d'équipements actifs (switches, routeurs, points d'accès WiFi)",
          "Automatisation de tâches (Python/bash)",
          "Mise en service",
          "Déclenchement et suvi d'interventions",
          "Gestion des lignes ADSL/fibre",
        ]}
      />

      <Job
        date={"Janvier 2012 - aout 2013 (1 an 8 mois)"}
        name={
          "Allied Telesis - Technicien support technique niveau 1 en alternance"
        }
        tasks={[
          "Traitement des demandes clients",
          "Diagnostic matériel et logiciel (Switch, routeur, point d'accès Wifi)",
          "Logistique, et suivi RMA",
          "Configuration spécifique de matériels",
        ]}
      />
    </div>
  </div>
);

const Diploma = ({ date, name, honours }) => (
  <div className="flex items-baseline mt-1 md:mt-1">
    <p className="text-primary min-w-[100px] sm:min-w-[20%] md:min-w-[100px] pr-2 font-medium text-sm">
      {date}
    </p>
    <div>
      <p className="text-primary text-sm font-normal md:text-base">{name}</p>
      {honours && <p className="text-primary-light pl-4">{honours}</p>}
    </div>
  </div>
);

const Diplomas = () => (
  <div className="px-6 mb-6 md:mb-auto sm:mb-4">
    <p className="text-primary-light font-medium text-center mt-6 mb-5 text-3xl md:text-left md:text-2xl">
      Diplômes
    </p>

    <div>
      <Diploma
        date={"2016-2017"}
        name={"IPI - Master 2, Expert en ingénierie sécurité informatique"}
      />

      <Diploma
        date={"2014-2016"}
        name={
          "IPI - Master 1, Administrateur systèmes, réseaux et base de données"
        }
        honours={"Félicitations du jury"}
      />

      <Diploma
        date={"2011-2013"}
        name={
          "Lycée Dorian - BTS Informatique et réseaux pour l’industrie et les services (IRIS)"
        }
      />

      <Diploma
        date={"2011"}
        name={"Lycée Dorian - Bac STI électronique"}
        honours={"Mention assez bien"}
      />
    </div>
  </div>
);

const SkillSection = ({ name, skills }) => (
  <div>
    <p className="text-lg text-center font-medium md:text-left">{name}</p>
    <p className="w-[80%] mx-auto mt-1 leading-6 text-center sm:w-auto md:text-justify">
      {skills}
    </p>
  </div>
);

const SkillSections = () => (
  <div className="px-6">
    <p className="text-center font-medium md:text-left md:text-xl mt-4 mb-5 text-3xl md:mb-1 md:mt-3">
      Compétences
    </p>

    <div className="grid grid-cols-none gap-2 sm:grid-cols-2 md:grid-cols-none">
      <SkillSection
        name={"Devops"}
        skills={
          "Docker | Kubernetes | Ansible | Docker-compose | Traefik | Prometheus | Grafana | Gitlab-CI | Jenkins | Terraform | Stack ELK"
        }
      />

      <SkillSection
        name={"Backend"}
        skills={
          "Python | Django | Postgres | Pytest | Django-rest-framework | Pandas | Flask | Mongodb | Redis | Influxdb"
        }
      />

      <SkillSection
        name={"Frontend"}
        skills={
          "HTML | CSS | Javascript | Typescript | Webpack | React (hooks, testing library) | Redux | Jest | Flexbox | Grid | Bootstrap | Sass | Pug | Tailwind"
        }
      />

      <SkillSection
        name={"Autres"}
        skills={
          "Bash | Debian | Ubuntu | NGinx | Linux | Qt | Git | Scraping Web | TCP/IP | DNS | openSSL | AWS | S3"
        }
      />
    </div>
  </div>
);

const Interests = () => (
  <div className="px-6">
    <p className="text-center font-medium mt-7 mb-3 text-3xl md:text-left md:text-xl md:mt-5">
      Intérets
    </p>

    <p className="w-[75%] mb-12 text-center mx-auto leading-6 md:w-auto md:text-left md:mb-auto">
      Guitare | basse | piano | MAO | vélo | natation | gymnastique | nouvelles
      technologies | économétrie | théorie musicale | cryptomonnaie | Mooc
      (Udemy)
    </p>
  </div>
);

export default () => (
  <div className="text-xs min-h-screen min-w-screen bg-background">
    <div className="flex flex-col flex-wrap md:bg-gray-700 md:h-sheet-height md:w-md md:mx-auto">
      <div className="bg-primary-dark text-white md:w-side md:order-1">
        <Me />
      </div>

      <div className="bg-primary-dark text-white md:bg-primary md:w-side md:order-2">
        <Contact />
      </div>

      <div className="bg-primary text-white md:w-main md:bg-white md:text-primary md:order-6">
        <Title />
      </div>

      <div className="bg-white md:w-main md:order-7">
        <Jobs />
      </div>

      <div className="bg-white md:w-main md:grow md:order-8">
        <Diplomas />
      </div>

      <div className="bg-primary text-white md:w-side md:order-3">
        <SkillSections />
      </div>

      <div className="bg-primary text-white md:w-side md:grow md:order-4">
        <Interests />
      </div>

      <div className="hidden w-0 basis-[100%] md:block md:order-5"></div>
    </div>
  </div>
);
