import React from 'react';


const Header = (props) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} justify-content-end`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Text | Play
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input
                onClick={props.toggleMode}
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    Dark Mode
                </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
