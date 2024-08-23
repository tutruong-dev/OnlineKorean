import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Button1.css";

const Button1 = ({
  className = "",
  postsComment,
  propDisplay,
  propMinWidth,
}) => {
  const postsCommentStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={`button3 ${className}`}>
      <div className="posts-comment" style={postsCommentStyle}>
        {postsComment}
      </div>
    </div>
  );
};

Button1.propTypes = {
  className: PropTypes.string,
  postsComment: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Button1;
