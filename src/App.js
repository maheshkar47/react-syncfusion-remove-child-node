import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';
import Grid from './Grid';
import { data } from './data';
import { registerLicense } from '@syncfusion/ej2-base';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
registerLicense(
  'ORg4AjUWIQA/Gnt2V1hhQlJAfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5Ud0FjW3pZcnxcQ2ZU'
);
import './style.css';

const App1 = () => {
  const [gridData, setgridData] = React.useState([]);
  React.useEffect(() => {
    setTimeout(() => {
      setgridData(data.users);
    }, 500);
  }, []);

  const statusCheckBox = (row) => {
    return (
      <>
        <input
          type="checkbox"
          defaultChecked={row.status == 'active' ? 1 : 0}
        />
      </>
    );
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <Grid data={gridData} template={statusCheckBox} />
    </div>
  );
};

const App2 = () => {
  const [gridData, setgridData] = React.useState([]);
  React.useEffect(() => {
    setTimeout(() => {
      setgridData(data.users);
    }, 500);
  }, []);

  const buttonTemplate = (row) => {
    return (
      <div>
        <button type="button" className="btn btn-secondary">
          Click
        </button>
      </div>
    );
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <Grid data={gridData} template={buttonTemplate} />
    </div>
  );
};

const App3 = () => {
  let grid;
  // definining the dataSource
  const [gridData, setgridData] = React.useState([]);
  React.useEffect(() => {
    setTimeout(() => {
      setgridData(data.users);
    }, 500);
  }, []);

  const dropDownListTeamplate = (row) => {
    return (
      <div>
        <DropDownListComponent id="ddlelement" dataSource={row.skills} />
      </div>
    );
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <Grid data={gridData} template={dropDownListTeamplate} />
    </div>
  );
};

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div
          className="collapse navbar-collapse"
          id="navbarNavDropdown"
          style={{ marginLeft: '2rem' }}
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink to="app1" className="nav-link">
                {' '}
                App1{' '}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="app2" className="nav-link">
                App2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="app3" className="nav-link">
                {' '}
                App3
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />

        <Routes>
          <Route exact path="app1" element={<App1 />} />
          <Route exact path="app2" element={<App2 />} />
          <Route exact path="app3" element={<App3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
