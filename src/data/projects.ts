export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Learn to Cloud",
    techs: ["ReactJS (Docusaurus)", "Azure", "DevOps"],
    link: "https://learntocloud.guide",
  },
  {
    title: "The DevOps Guide",
    techs: ["ReactJS (NextJS)", "AWS", "DevOps"],
    link: "https://thedevops.guide/",
  },
  {
    title: "7 Days of Python",
    techs: ["Python", "Cloud", "DevOps"],
    link: "https://7daysofpython.com/",
  },
  {
    title: "Cloud Resume API",
    techs: ["Serverless","AWS", "Azure", "GCP"],
    link: "https://cloudresumeapi.dev/",
  },
];

export default projects;
