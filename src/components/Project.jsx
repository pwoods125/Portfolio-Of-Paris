import PropTypes from 'prop-types';

export default function Project({ projects }) {
    return (
      <div>
        <ul className="list-group">
        {projects.map((project) => (
          <li className="list-group-item" key={project.id}>
            {`${project.name}`}
            <br />
            <a href={project.application}>Link to application</a>
            <br />
            <a href={project.githubLink}>Link to GitHub</a>
            <br />
            <img src={project.image} width="700" height="400" alt={`${project.name} project`} />
            <br /><br />
          </li>
          ))}
        </ul>
      </div>
    )
}

Project.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    application: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired
  })).isRequired
}