import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import php from "../../assets/php.svg";

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
            }
        ]
    },
    Backend: {
        text : "esto es backend",
        detail: [
            {
                title: "PHP",
                img: php,
            }
        ]
    }
};

export default skills;
