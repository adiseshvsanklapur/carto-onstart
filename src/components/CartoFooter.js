import {
    Button,
    Anchor,
    Box,
    Grommet,
    Nav,
    Image,
    TextInput,
    Heading,
    Text,
    Footer,
    Main,
} from 'grommet';

import {
    Domain,
    FacebookOption,
    Instagram,
    Twitter,
    Grommet as GrommetIcon,
} from 'grommet-icons';

const Media = () => (
    <Box direction="row" gap="xxsmall" justify="center">
      <Anchor
        a11yTitle="Follow us on Instagram"
        href="https://www.instagram.com/"
        target="_blank"
        icon={<Instagram color="white" />}
      />
      <Anchor
        a11yTitle="Check us out on Facebook"
        href="https://www.facebook.com/"
        target="_blank"
        icon={<FacebookOption color="white" />}
      />
      <Anchor
        a11yTitle="Follow us on Twitter"
        href="https://twitter.com/"
        target="_blank"
        icon={<Twitter color="white" />}
      />
    </Box>
  );

function CartoFooter() {
    return (
        <Grommet>
            <Footer background="black" pad="small">
                <Box align="center" direction="row" gap="xsmall">
                    <Image fit="cover" src="./carto-campus-dark.png" width="50px" height="50px" />
                    <Text alignSelf="center" color="brand" size="small" color="white">
                        Carto-Campus
                    </Text>
                </Box>
                <Media />
                <Text textAlign="center" size="xsmall">
                    ©Copyright November 2021
                </Text>
            </Footer>
        </Grommet>
    );
}

export default CartoFooter;
