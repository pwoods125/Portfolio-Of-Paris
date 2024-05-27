import Project from "../components/project";
import ShareAbytes from "../assets/images/tech-blog.png";
import UGP from "../assets/images/UGP.png";
import JotItNow from "../assets/images/Jot-it-NOW.png";
import renderRecipes from "../assets/images/rendered-recipes.png";
import weatherPartner from "../assets/images/weather-app.png";
import workdayScheduler from "../assets/images/Work-Day-Scheduler.png";

const projects = [
    {
        id: 1,
        name: "Share-A-Bytes",
        image: ShareAbytes,
        application: "https://glacial-badlands-72391-2827e5e69761.herokuapp.com/",
        githubLink: "https://github.com/pwoods125/Share-A-Bytes"
    },
    {
        id: 2,
        name: "Ultimate Gamers Portal",
        image: UGP,
        application: "https://secure-river-79338-ada9d53d9b2e.herokuapp.com/",
        githubLink: "https://github.com/pwoods125/Web-Wizaars"
    },
    {
        id: 3,
        name: "Jot-It-NOW",
        image: JotItNow,
        application: "https://secure-forest-90672-7b0c1bbea82e.herokuapp.com/",
        githubLink: "https://github.com/pwoods125/Jot-It-NOW"
    },
    {
        id: 4,
        name: "Rendered Recipes",
        image: renderRecipes,
        application: "https://adpileggi.github.io/agile-avengers/",
        githubLink: "https://github.com/Adpileggi/agile-avengers"
    },
    {
        id: 5,
        name: "Weather-Partner",
        image: weatherPartner,
        application: "https://pwoods125.github.io/Weather-Partner/",
        githubLink: "https://github.com/pwoods125/Weather-Partner"
    },
    {
        id: 6,
        name: "Time-Management-Planner",
        image: workdayScheduler,
        application: "https://pwoods125.github.io/Time-Management-Planner/",
        githubLink: "https://github.com/pwoods125/Time-Management-Planner"
    },
  ];
  
export default function Portfolio() {
return (
    <div>
      <h2 className="title">My Projects</h2>
      <Project projects={projects} />
    </div>
  );
}
