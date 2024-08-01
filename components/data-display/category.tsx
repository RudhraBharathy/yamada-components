import { ChevronIcon, Heading, HStack, Text, VStack } from "@yamada-ui/react"
import type { FC } from "react"
import { memo } from "react"
import { Authors } from "./authors"
import { ComponentCard } from "./component-card"
import { NextLink } from "components/navigation"
import { useApp } from "contexts/app-context"
import { useI18n } from "contexts/i18n-context"

export const Category: FC = memo(() => {
  const { categoryGroup, category } = useApp()
  const { t } = useI18n()

  return (
    <>
      <NextLink alignSelf="start" href={categoryGroup?.slug}>
        <ChevronIcon transform="rotate(90deg)" fontSize="1.25em" me="xs" />
        {t("component.category.back-to")}
      </NextLink>

      <HStack as="header" gap={{ base: "md", sm: "sm" }}>
        <HStack
          flex="1"
          flexDirection={{ base: "row", sm: "column" }}
          alignItems={{ base: "end", sm: "stretch" }}
          gap={{ base: "md", sm: "0" }}
        >
          <Heading
            as="h2"
            size="lg"
            fontWeight="semibold"
            lineHeight="shorter"
            lineClamp={1}
          >
            {category?.title}
          </Heading>

          <Text color="muted" whiteSpace="nowrap">
            {t("component.category.count", category?.items?.length ?? 0)}
          </Text>
        </HStack>

        <Authors authors={category?.authors} />
      </HStack>

      <VStack as="nav" gap="lg">
        {category?.items?.map(({ name, ...rest }) => (
          <ComponentCard key={name} {...{ name, ...rest }} />
        ))}
      </VStack>
    </>
  )
})

Category.displayName = "Category"
