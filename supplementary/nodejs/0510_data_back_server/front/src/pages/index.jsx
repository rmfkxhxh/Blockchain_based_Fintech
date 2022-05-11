import axios from 'axios';

const Index = () => {
    const onClickHandler = async (e) => {
        // console.log(e)
        // alert('경고창입니다.')
        
        // get 인자 2 (주소, 해더)
        // post 인자 3 (주소, 바디, 해더)
        const result = await axios.post("http://127.0.0.1:3500/getCookie",{},{ withCredentials: true})
        console.log(result)
        
        //promise
    }


    /*
    handleClick 눌렀을때 브라우저
    POST /getCookie axios 
    router middleware -> cookie-parser cookie 생성,
    응답을 줌,
    response header set-cookie 정보가,
    브라우저 생성
    credential
    */

    return (
        <div>
            <button onClick={onClickHandler}>서버에게 요청</button>
        </div>
    )
}

export default Index