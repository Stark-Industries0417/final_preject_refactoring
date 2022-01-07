import axios from 'axios';

function SignUp() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const signUpData = new FormData(e.target);

        const signUpDataJson = {
            email: signUpData.get('email'),
            password: signUpData.get('password'),
            password_check: signUpData.get('passwordCheck'),
            nickname: signUpData.get('nickname'),
        }

        const response = await axios.post('http://localhost:5000/api/signup', signUpDataJson)
        console.log(response.status)
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input name='email' type='email' placeholder="email"/>
                </div>
                <div>
                    <input name='password' type='password' placeholder="password"/>
                </div>
                <div>
                    <input name='passwordCheck' type='password' placeholder="password confirm"/>
                </div>
                <div>
                    <input name='nickname' type='text' placeholder="nickname"/>
                </div>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;