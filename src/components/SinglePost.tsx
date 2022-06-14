import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const SinglePost = () => {
  return (
    <div className="singlePost">
    <img
      className="singlePost-img"
      src="https://media.istockphoto.com/photos/lottery-picture-id95442265?b=1&k=20&m=95442265&s=170667a&w=0&h=fKu1DRGrbfXVXWHR5c0MlE2glGse5-l8DwoUrQH4UUA="
      alt=""
    />
    <div className="post-item">
      <h1 className="post-title">Post title</h1>
      <div className="post-cat">
        <a>Leetcode</a>
        <a>Data structures</a>
        <a>Algorithms</a>
      </div>
      <div className="post-foot">
        <div className="post-action">
          <a href="">
            <FontAwesomeIcon icon={faPenToSquare} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faTrash} />
          </a>
        </div>
        <p className="post-timing">June 6 2022</p>
      </div>
      <p className="singlePost-desc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
        aliquam repellendus obcaecati beatae culpa blanditiis, corporis saepe
        quod dolores? Atque eum sint eaque, tenetur non suscipit optio
        obcaecati odit numquam officiis. Nesciunt, ullam. Ipsum suscipit at a,
        libero officia laborum velit commodi deserunt totam eveniet
        distinctio, architecto maxime voluptatibus quae.
      </p>
    
    </div>
  </div>
  )
}

export default SinglePost