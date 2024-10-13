import Form from './components/Form';
import FormBody from './components/FormBody';
import FormHeader from './components/FormHeader';
import Input from './components/Input';
import InputCheckbox from './components/InputCheckbox';
import InputRadio from './components/InputRadio';
import InputSubmit from './components/InputSubmit';
import InputTextArea from './components/InputTextArea';

function App() {
  return (
    <main className="p-4 m-4 rounded-md bg-neutral-white">
      <Form>
        <FormHeader />
        <FormBody>
          <Input label="First Name" />
          <Input label="Last Name" />
          <Input label="Email Address" />
          <InputRadio
            label="Query Type *"
            inputValues={['General Enquiry', 'Support Request']}
          />
          <InputTextArea label="Message" />
          <InputCheckbox label="I consent to being contacted by the team" />
          <InputSubmit text="Submit" />
        </FormBody>
      </Form>
    </main>
  );
}

export default App;

// Contact Us First Name This field is required Last Name This field is
//       required Email Address Please enter a valid email address This field is
//       required Query Type General Enquiry Support Request Please select a query
//       type Message This field is required I consent to being contacted by the
//       team To submit this form, please consent to being contacted Submit Message
//       Sent! Thanks for completing the form. We'll be in touch soon!
//       <div className="attribution">
//         Challenge by{' '}
//         <a href="https://www.frontendmentor.io?ref=challenge">
//           Frontend Mentor
//         </a>
//         . Coded by <a href="#">Your Name Here</a>.
//       </div>
