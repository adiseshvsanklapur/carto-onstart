import {
    Button,
    Anchor,
    Box,
    Grommet,
    Header,
    Nav,
    Image,
    Heading,
    TextInput
  } from 'grommet';

function Navbar() {
    return (
        <Grommet>
            <Header background="black" pad="medium" align="center">
                <Box direction="row" gap="small" align="center">
                    <Image fit="cover" src="./carto-campus-dark.png" width="50px" height="50px" />
                    <Anchor size="x-large" href="/" color="white" label="Carto-Campus" />
                </Box>
                <Nav margin={{ right: "50px" }} direction="row">
                    <Anchor  color="white" href="/" label="Home" />
                    <Anchor color="white" href="/About" label="About Us" />
                </Nav>
                <Nav direction="row" align="center">
                    <Button secondary color= "red" href="https://carto-campus.vercel.app/register" target="_blank" label="Sign Up" />
                    <Button weight="bold" primary color="red" href="https://carto-campus.vercel.app" target="_blank" label="Log In" />
                </Nav>
            </Header>
        </Grommet>
    );
}

export default Navbar;
