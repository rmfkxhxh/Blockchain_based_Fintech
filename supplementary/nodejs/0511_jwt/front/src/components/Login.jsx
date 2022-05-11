import axios from 'axios';
/*
API 설계 먼저
front 3000
POST /user/login {userid, userpw} : cookie 생성

프론트 먼저?
빽 먼저?
*/
const Login = (props) => {
    // console.log(props)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const { userid, userpw } = e.target
        // console.log(e.target.userid.value)
        try {
            const result = await axios.post('http://localhost:3500/user/login', {
                userid: userid.value,
                userpw: userpw.value,
            }, { 
                withCredentials: true,
                 
            })
            // console.log(result.data.response)
            const {response, error} = result.data
            if (error!==null) return alert(error)
            props.onClick()
        } catch (e) {
            alert("/user/login 백서버 오류")
        }

        // props.onClick() //백엔드에서 응답이 왔을때

    }

    return (
        <>
            <h2>로그인 화면</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="userid" />
                <input type="password" name="userpw" />
                <input type="submit" value="로그인" />
            </form>
        </>
    )
}

export default Login