import { Link } from "react-router-dom";

export const PhoneCriteria = () => {
  return (
    <div className="phoneCriteria">
      <Link to='/' className="phoneCriteria__back">
        <div className="phoneCriteria__back--arrow" />
        <p className="phoneCriteria__back--text">Back</p>
      </Link>

      <div className="phoneCriteria__name"></div>

      <div className="phoneCriteria__containerImg">
        
      </div>
    </div>
  );
}
