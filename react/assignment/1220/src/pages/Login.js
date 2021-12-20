const Loginform = () => {
    const myStyle = {
        flex_direction:'column'
    }
    return (
        <>
            <form>
                <div style={myStyle}>
                    <label> ID: </label>
                    <input type="text" name="id" ></input>
                    <br />
                    <label> PWD: </label>
                    <input type="password" name="pwd"></input>
                    <br />
                </div>
                <button type="submit">로그인</button>
                <br/>
                <button>회원가입</button>
            </form>
        </>
    );
}
export default Loginform;