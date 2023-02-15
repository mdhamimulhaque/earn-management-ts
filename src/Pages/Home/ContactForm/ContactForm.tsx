import React from 'react';
import { ContactFormBox, FormLeftSide, FormRightSide, SubmitButtonBox } from '../../../Components/styles/ContactForm.style';
import { Button, H4, Input, Span } from '../../../Components/styles';

const ContactForm = () => {
    return (
        <ContactFormBox>
            <FormLeftSide>
                <H4>Earnmanagement.com </H4>
                <H4><Span>US</Span>  +1 (872) 288 9283 </H4>
                <H4><Span>UA</Span>  +1 (872) 288 9283 </H4>
            </FormLeftSide>
            <FormRightSide>
                <Input type="text" placeholder='Your Name' />
                <Input type="email" placeholder='Your Email Address' />
                <Input type="text" placeholder='Describe your needs' />
                <SubmitButtonBox>
                    <Button>Submit Request</Button>
                </SubmitButtonBox>
            </FormRightSide>
        </ContactFormBox>
    );
};

export default ContactForm;