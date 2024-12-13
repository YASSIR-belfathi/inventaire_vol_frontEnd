import Form from "./Form";
import image from "../assets/8744.jpg";
import "../style/SignUp.css";

export default function SignUp() {
  return (
    <div className="containerSignUp">
      <Form />
      <div className="containerImage">
        <img alt="en-cours" src={image} />
      </div>
    </div>
  );
}
