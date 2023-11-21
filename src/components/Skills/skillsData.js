import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwindcss.svg";
import vite from "../../assets/vite.svg";
import webpack from "../../assets/webpack.svg";
import php from "../../assets/php.svg";
import firebase from "../../assets/firebase.svg";
import sqlserver from "../../assets/sqlserver.svg";
import mysql from "../../assets/mysql.svg";
import git from "../../assets/git.svg";
import aws from "../../assets/aws.svg";

const skills = {
    Frontend: {
        text : "esto es frontend",
        detail: [
            {
                title: "HTML",
                img: html,
            },
            {
                title: "CSS",
                img: css,
            },
            {
                title: "JavaScript",
                img: js,
            },
            {
                title: "React",
                img: react,
            },
            {
                title: "Vite",
                img: vite,
            },
            {
                title: "Tailwind CSS",
                img: tailwind,
            },
            {
                title: "Webpack",
                img: webpack,
            }
        ]
    },
    Backend: {
        text : "esto es backend",
        detail: [
            {
                title: "PHP",
                img: php,
            },
            {
                title: "MySQL",
                img: mysql,
            },
            {
                title: "SQL Server",
                img: sqlserver,
            },
            {
                title: "Firebase",
                img: firebase,
            }
        ]
    },
    "Control de versiones": {
        text : "esto es backend",
        detail: [
            {
                title: "Git",
                img: git,
            },
            {
                title: "AWS CodeCommit",
                img: aws,
            }
        ]
    }
};

export default skills;
