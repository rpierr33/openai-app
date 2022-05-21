import React from "react";
import { Component } from "react";

import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Card, Button, Nav } from "react-bootstrap";

class Main extends Component {
    render() {
        const { theLink } = this.props
      return (
        <div>
          <Card>
                  <Nav.Link href={ theLink }>
                      <Button variant='primary' size='lg' >Let's Go!</Button>
                  </Nav.Link>
          </Card>
        </div>
      );
    }
  }
  
  export default Main;
  