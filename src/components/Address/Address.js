import classes from "./Address.module.css";

import phone from "../../assets/images/icons/phone.png";
import location from "../../assets/images/icons/location.png";

function Address() {
  return (
    <div className={classes.Address}>
      <div className={classes.phone}>
        <span>
          <img src={phone} alt="phone icon" />
          +7 (495) 555-55-55
        </span>
      </div>
      <div className={classes.street}>
        <span>
          <img src={location} alt="location icon" />
          г. Москва, ул. Расплетина, 24
        </span>
      </div>
    </div>
  );
}

export default Address;
