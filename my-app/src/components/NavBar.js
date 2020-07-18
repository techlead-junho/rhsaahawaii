import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import '../style.css';

const srcRHSLogo = 'http://rhsaahawaii.org/wp-content/uploads/2019/04/cropped-logo2-2.png';

class NavBar extends React.Component {
  render() {
    const titleStyle = { padding: '10px 10px 10px 0', fontSize: '22px' };
    return (
        <Menu borderless inverted>
          <Container>
            <Menu.Item as={NavLink} activeClassName="" exact to='/' style={titleStyle}>
              <Image src={srcRHSLogo} size='mini'/>
              &nbsp;
              Roosevelt Alumni
            </Menu.Item>
            <Menu.Item as={NavLink} activeClassName="active" exact to='/impact' position='right' >Impact</Menu.Item>
            <Menu.Item as={NavLink} exact to='/events'>Events</Menu.Item>
            <Menu.Item as={NavLink} activeClassName="active" exact to='/members' >Membership</Menu.Item>
            <Menu.Item as={NavLink} activeClassName="active" exact to='/board'>Board</Menu.Item>
            <Menu.Item as={NavLink} activeClassName="active" exact to='/donate'>Donate</Menu.Item>
            <Menu.Item as={NavLink} activeClassName="active" exact to='/scholarships'>Scholarships</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

export default NavBar;
