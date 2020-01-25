import React from 'react';
import { withRouter } from 'react-router-dom';
import Date from '../date/Date';
import Button from '../button/Button';
import Logo from '../../images/rolling.png';
import Icon from '../icon/Icon';
import Navbar from '../navbar/Navbar';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.Logged = this.Logged.bind(this);
    this.ViewAdmin = this.ViewAdmin.bind(this);
  }

  Logged(isLoggedIn) {
    if (isLoggedIn) {
      return (
        <>
          <h4>Username</h4>
          <Button 
            id="2"
            text="LogOut"
            type="submit"
            size="md"
            color="danger"
          />
        </>
      );
    } else {
      return (
        <>
          <Button
            id="1"
            text="LogIn"
            type="submit"
            size="md"
            color="light"
            onClick={() => {
              this.props.history.push('/login');
            }}
          />
        </>
      );
    }
  }

  ViewAdmin(admin){
    let renderViewAdmin;      
    if(admin){
        renderViewAdmin = 
          <div>
            <div className="d-flex justify-content-between">
                <div>
                  <img className ="imglogo m-2" src={Logo} />
                </div>
              <div className="p-2">
                <Date />
              </div>
              <div className ="mt-1">
                <a href="https://www.facebook.com" target="_blank">
                  <Icon
                    name="facebook" 
                    size="2x" 
                    color="#3b5998"
                  />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <Icon
                    name="twitter"
                    size="2x"
                    color="#00acee"
                  />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <Icon
                    name="instagram"
                    size="2x"
                    color="#e95058"
                  />
                </a>
              </div>
              <div>
                {this.Logged(false)}
              </div>
            </div>
            <div>
              <Navbar
                items={[ 
                  {
                    id: 0,
                    title: 'Inicio', 
                    path: '/'
                  }, 
                  {
                    id: 1,
                    title: 'Policiales', 
                    path: '/policiales'
                  },
                  {
                    id: 2,
                    title: 'Deportes', 
                    path: '/deportes'
                  },
                  {
                    id: 3,
                    title: 'Actualidad', 
                    path: '/actualidad'
                  }
              ]}
              />
            </div>
          </div>;
    } else {
      renderViewAdmin = 
      <div>      
        <div className="d-flex justify-content-between">
          <img className ="imglogo m-2" src={Logo} />
          {this.Logged(true)}
        </div>
      </div>;
    }
    return(renderViewAdmin);
  }

  render () {
    return (
      <header className ="bg-dark p-4">
        {this.ViewAdmin(true)}       
      </header>
    );
  }
}

export default withRouter(Header);
