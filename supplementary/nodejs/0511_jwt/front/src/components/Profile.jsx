// const Profile = ({onClick}) => {
const Profile = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        props.onClick()
        // console.log(props)
    }
    return (


        <>
            <h2>회원정보</h2>
            xxx님 환영합니다.
            < a onClick={handleSubmit}> 로그아웃</a >
        </>
    )
}

export default Profile