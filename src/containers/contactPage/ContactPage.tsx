import { Input, Button } from "antd";
import React from "react";
import {
  ContactPageContainer,
  FormContainer,
  GetInTouchContainer,
} from "./ContactPage.Styled";

const { TextArea } = Input;

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <GetInTouchContainer>
        <h2>GET IN TOUCH</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi
          possimus quisquam fugiat aspernatur vel quae. Ducimus debitis, quia
          reiciendis mollitia beatae, ipsam necessitatibus quibusdam voluptatum
          harum soluta veritatis illum!
        </p>
      </GetInTouchContainer>
      <FormContainer>
        <h3>Contact Form</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
            columnGap: "10px",
          }}
        >
          <div>
            <p>Name</p>
            <Input />
          </div>
          <div>
            <p>Email Address</p>
            <Input />
          </div>
        </div>
        <p>Message</p>
        <TextArea rows={4} />
        <Button
          type="primary"
          style={{
            alignSelf: "flex-end",
            marginTop: "10px",
          }}
        >
          Send
        </Button>
      </FormContainer>
    </ContactPageContainer>
  );
};

export default ContactPage;
