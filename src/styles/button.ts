import { mode } from "@chakra-ui/theme-tools";
var cfun = require("simple-color-functions")
export const ButtonStyles = {
    baseStyle: {},
    sizes: {},
    variants: {
        primary: (props) => ({
            bg: "transparent",
            border: "1px solid black",
            // color: "grey.200",
            // stroke: "grey.900",
            _hover: {
                bg: mode( "blue.200", "blue.600" )(props),
                border: "transparent",
                text: "grey"
            } 
        }),
        secondary: (props) => ({
            bg: "green.500",
            // color: "grey.200",
            // stroke: "grey.900",
            _hover: {
                bg: mode( "transparent", "grey.200" )(props),
                border: "1px solid grey"
            } 
        })
    },
    defaultProps: {}
};