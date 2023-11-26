import React, { useState } from 'react';
import { Form, Button, Header, Icon, Modal } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../NavSlider/NavBar';
import Footer from '../../Footer/Footer';
import Copyright from '../../Copyright/Copyright';
import './adminLogIn.css';

const AdminLogIn = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [adminId, setAdminId] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const AddAdmin = () => {
    const adminDetails = {
      adminId: adminId,
      adminPassword: adminPassword,
    };

    localStorage.setItem(adminId, JSON.stringify(adminDetails));

    setOpen(false);
    alert("You are an Admin now. Try to log in with your credentials.");
  };

  const [inputAdminId, setInputAdminId] = useState('');
  const [inputAdminPass, setInputAdminPass] = useState('');

  const Login = () => {
    const adminDetails = JSON.parse(localStorage.getItem(inputAdminId));

    if (adminDetails && inputAdminPass === adminDetails.adminPassword) {
      alert("Your credentials are valid.");
      // sessionStorage.setItem("temp", inputAdminId);

      navigate('../Adminconsole');
    } else {
      alert("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="AdminLogInmain">
      <NavBar />
      <div className="Content">
        <Form>
          <Form.Field>
            <label>
              <p style={{ color: "#F4D160", fontWeight:"bold" , fontSize:"30px",fontFamily: "Times New Roman"  }}> Enter Admin ID :</p>
            </label>
            <input
              placeholder="Enter Admin ID"
              value={inputAdminId}
              onChange={(e) => setInputAdminId(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>
              <p style={{ color: "#F4D160", fontWeight:"bold" , fontSize:"30px",fontFamily: "Times New Roman"  }}> Enter Password :</p>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              value={inputAdminPass}
              onChange={(e) => setInputAdminPass(e.target.value)}
            />
          </Form.Field>
          <br />
          <Button
            type="submit"
            onClick={Login}
            
            style={{ borderRadius: "15px" }}
          >
            <h4 style={{ fontSize: "15px" }}> Log In </h4>
          </Button>
          <br />
          <br />

          <Modal style={{borderRadius:"20px", height:"500px", marginLeft:"230px", marginTop:"100px", backgroundColor:"#F4D160"}}
            closeIcon
            open={open}
            trigger={
              <Button
                
                style={{ borderRadius: "15px" }}
              >
                <h4 style={{ fontSize: "15px" }}> Become an Admin </h4>
              </Button>
            }
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
          >
            <Header style={{marginLeft:"100px",fontSize:"40px",color: "#263A29",fontFamily: "Times New Roman", marginTop:"40px"}}
              icon="clipboard outline"
              content="Please fill the following details."
            />
            <Modal.Content >
              <h1 style={{marginLeft:"100px", marginTop:"70px",color: "#263A29",fontFamily: "Times New Roman" }}>Enter Unique ID : <input style={{ fontSize:"20px",marginLeft:"10px", marginTop:"0px",color: "#263A29",fontFamily: "Times New Roman" }}
                type="text"
                placeholder="Enter Unique ID here"
                value={adminId}
                onChange={(e) => setAdminId(e.target.value)}
              /></h1>
              
              <h1 style={{marginLeft:"100px", marginTop:"70px",color: "#263A29",fontFamily: "Times New Roman" }}>Enter Password : <input style={{ fontSize:"20px",marginLeft:"10px", marginTop:"0px",color: "#263A29",fontFamily: "Times New Roman" }}
                type="password"
                placeholder="Enter Password here"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
              /></h1>
              
            </Modal.Content>
            <Modal.Actions style={{marginRight:"300px"}}> 
              <Button color="red" onClick={() => setOpen(false)}>
                <Icon name="remove" /> Cancel
              </Button>
              <Button color="green" onClick={AddAdmin}>
                <Icon name="checkmark" /> Submit
              </Button>
            </Modal.Actions>
          </Modal>
        </Form>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
     
      
      <Footer />
      <Copyright />
    </div>
  );
};

export default AdminLogIn;
