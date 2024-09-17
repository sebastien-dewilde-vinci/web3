import logo from "../Header/LOGO HE VINCI.png"

const Header = (props) => {
    return (
      <>
        <img src={logo} alt="logo vinci" />
        <h1>{props.course}</h1>
      </>
    )
}

export default Header