export default function Project({ projects }) {
    return (
      <div>
        <ul className="list-group">
        {projects.map((project) => (
          <li className="list-group-item" key={project.id}>
            {`${project.name}`}
            <br></br>
            <a href={project.application}>Link to application</a>
            <br></br>
            <a href={project.githubLink}>Link to GitHub</a> 
            <br></br>
            <img src={project.image} width="700" height="400"></img>
            <br></br>
            <br></br>
          </li>
          ))}
        </ul>
      </div>
    )
}

Project.propTypes