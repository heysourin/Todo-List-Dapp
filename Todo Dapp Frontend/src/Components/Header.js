import React from "react";

const Header = () => {
  return (
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <h2>
          <strong>TODO List dApp</strong>
        </h2>
        <form class="d-flex" role="search">
          {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
          <button class="btn btn-warning" type="submit">
            Connect Wallet
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
