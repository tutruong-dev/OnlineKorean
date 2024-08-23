import PageDots from "./PageDots";
import PropTypes from "prop-types";
import "./Pagination.css";

const Pagination = ({ className = "" }) => {
  return (
    <div className={`pagination ${className}`}>
      <PageDots
        propFlex="1"
        propBorder="1px solid #eaeaea"
        propBackgroundColor="unset"
        prop="1 "
        div={false}
        propWidth="7px"
        propColor="#ff782d"
        propMinWidth="unset"
        component2="/component-2-12.svg"
        showComponent2Icon
      />
      <PageDots
        propFlex="0.4"
        propBorder="unset"
        propBackgroundColor="#000"
        prop="1 "
        div
        propWidth="unset"
        propColor="#fff"
        propMinWidth="7px"
        component2="/component-211.svg"
        showComponent2Icon={false}
      />
      <PageDots
        propFlex="0.55"
        propBorder="1px solid #eaeaea"
        propBackgroundColor="unset"
        prop="2 "
        div
        propWidth="unset"
        propColor="#000"
        propMinWidth="11px"
        component2="/component-211.svg"
        showComponent2Icon={false}
      />
      <PageDots
        propFlex="0.55"
        propBorder="1px solid #eaeaea"
        propBackgroundColor="unset"
        prop="3 "
        div
        propWidth="unset"
        propColor="#000"
        propMinWidth="11px"
        component2="/component-211.svg"
        showComponent2Icon={false}
      />
      <PageDots
        prop="1 "
        div
        component2="/component-2-13.svg"
        showComponent2Icon
      />
    </div>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
};

export default Pagination;
