import { extendTheme } from '@chakra-ui/react';

const customTheme = {
    components: {
        Colors: {
            variants: {
                green: {
                    backgroundColor: '#74C69D'
                },
            },
        },
        Fonts: {
            variants: {
                workSans: {
                    fontFamily: "'Work Sans', sans-serif",
                },
                crimsonText: {
                    fontFamily: "'Crimson Text', serif"
                }
            }
        }
    },
};

const theme = extendTheme(customTheme);

export default theme;