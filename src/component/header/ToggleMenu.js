import React, { useState } from 'react';

function ToggleMenu(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div>
      <button onClick={toggleMenu} className={props.className}>
        {props.title}
      </button>

      {openMenu && (
        <div className="popper">
          <div className="popper-inner">{props.children}</div>
        </div>
      )}
    </div>
  );
}

export default ToggleMenu;
