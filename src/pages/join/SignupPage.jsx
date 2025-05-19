import { useState } from "react";
import Signup from "../../components/Join/Signup";
import Terms from "../../components/Join/Terms";
import MenuTitle from "../../components/public/MenuTitle";

function SignupPage() {
    const [section, setSection] = useState(1);

    return (
        <>
        <MenuTitle title="회원가입" />
        <div className="signup_container">
            {section === 1 ? <Terms setSection={setSection} /> : null}
            {section === 2 && <Signup />}
        </div>
        </>
    );
}

export default SignupPage;
