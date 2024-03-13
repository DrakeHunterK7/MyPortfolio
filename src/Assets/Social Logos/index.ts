import img1 from "./youtube.png";
import img2 from "./LinkedIn.png";
import img3 from "./github.png";
import img4 from "./email.png";


type SocialLinks = {
    source: string,
    link: string
}

const logos: SocialLinks[] = [
    {source: img1, link: "https://www.youtube.com/channel/UCYNmG-kMHASaOiMdRYo_izA"},
    {source: img2, link: "https://www.linkedin.com/in/anas-peerzada-61ab6b13b/"},
    {source: img3, link: "https://github.com/DrakeHunterK7"},
    {source: img4, link: "mailto:apeerzada987@gmail.com"},
];

export default logos;