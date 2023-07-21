import { useState } from "react";
function Card({id, image, info, name, price,NotInterestedHandler}) {
  const [ReadMore, setReadMore] = useState(false);
  const Description = ReadMore ? info:`${info.substring(0,200)}...`;
  function ReadMoreHandler() {
    setReadMore(!ReadMore);
  }
 
  return (
    <div className="card">
      <img src={image}className="image"></img>
      <div className="tour-info">
      <div className="tour-details">
        <h4 className="price">₹ {price}</h4>
        <h3 className="name">{name}</h3>
      </div>
      <div className="description">
        {Description}
        <span className="read-more" onClick={ReadMoreHandler}>
          {ReadMore ? `Show Less` : `Read More`}
        </span>
      </div>
      </div>
      <button className="red-button" onClick={()=>
        NotInterestedHandler(id)}
        >Not Interested</button>
    </div>
  );
}
export default Card;
