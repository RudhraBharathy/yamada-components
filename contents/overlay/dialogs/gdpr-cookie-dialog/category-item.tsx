import {
  Accordion,
  AccordionItem,
  AccordionLabel,
  AccordionPanel,
  Box,
  Text,
  Spacer,
  Switch,
  VStack,
} from "@yamada-ui/react"
import type { FC } from "react"
import { CookieTable } from "./table"

export const CategoryItem: FC<{
  title: string
  description: string
  isDisabled?: boolean
  isChecked: boolean
  onCheckChange: (isChecked: boolean) => void
  tableData?: {
    provider: string
    domain: string
    cookie: string
    expiration: string
    description: string
  }[]
}> = ({
  title,
  description,
  isDisabled,
  isChecked,
  tableData,
  onCheckChange,
}) => {
  return (
    <>
      <Accordion variant="unstyled" isToggle>
        <AccordionItem
          borderBottom="1px solid"
          borderColor={["blackAlpha.300", "whiteAlpha.300"]}
        >
          <AccordionLabel p="0">
            {title}
            <Spacer />
            <Switch
              px="2"
              py="4"
              isDisabled={isDisabled}
              isChecked={isChecked}
              onChange={(e) => {
                onCheckChange(e.target.checked)
              }}
            />
          </AccordionLabel>
          <AccordionPanel>
            <VStack>
              <Text color={["blackAlpha.700", "whiteAlpha.700"]}>
                {description}
              </Text>
              {tableData === undefined ? (
                <Box
                  border="1px solid"
                  borderColor={["blackAlpha.300", "whiteAlpha.300"]}
                  fontSize="sm"
                  p="2"
                >
                  We do not use cookies of this type.
                </Box>
              ) : (
                <Box
                  overflowX="auto"
                  color={["blackAlpha.700", "whiteAlpha.700"]}
                >
                  <CookieTable tableData={tableData} />
                </Box>
              )}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}
