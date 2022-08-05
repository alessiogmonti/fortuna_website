import { Flex, FlexProps,Tabs, TabList, TabPanels, Tab, TabPanel, Container } from '@chakra-ui/react'

export const Footer = (props: FlexProps) => (
  // <Flex as="footer" py="8rem" {...props} />
    <Tabs>
      <TabList>
        <Tab>3%</Tab>
        <Tab>2%</Tab>
        <Tab>2%</Tab>
      </TabList>

      <TabPanels>
        <Container centerContent>
        <TabPanel>
          <p>Development</p>
        </TabPanel>
        <TabPanel>
          <p>Marketing</p>
        </TabPanel>
        <TabPanel>
          <p>Liquidity</p>
        </TabPanel>
        </Container>
      </TabPanels>
  </Tabs>
)
