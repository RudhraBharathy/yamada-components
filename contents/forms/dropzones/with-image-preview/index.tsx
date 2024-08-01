import {
  Carousel,
  CarouselIndicators,
  CarouselSlide,
} from "@yamada-ui/carousel"
import { Dropzone } from "@yamada-ui/dropzone"
import { Center, Image, Text, useLoading, VStack } from "@yamada-ui/react"
import { useState } from "react"
import type { FC } from "react"

export const ImagePreviewDropzone: FC = () => {
  const [imageURL, setImageURL] = useState<string[]>([])
  const { page } = useLoading()

  const handleAcceptedFile = async (files: File[] | undefined) => {
    if (files === undefined || files.length === 0) return

    page.start({ message: "Loading..." })

    setImageURL([])

    await new Promise((resolve) => setTimeout(resolve, 5000))

    for (const file of files) {      
      setImageURL((prev) => [...prev, URL.createObjectURL(file)])
    }
    page.finish()
  }

  return (
    <VStack>
      <Dropzone
        multiple
        accept={{
          "image/*": [],
        }}
        onDropAccepted={handleAcceptedFile}
      >
        <Text>Drag and Drop Image File</Text>
      </Dropzone>

      <Carousel
        visibility={imageURL.length > 0 ? "visible" : "hidden"}
        align="center"
        controlProps={{
          background: "blackAlpha.500",
        }}
      >
        {imageURL.map((url, index) => (
          <CarouselSlide key={index} as={Center} position="relative">
            <Image
              src={url}
              w="full"
              h="full"
              objectFit="contain"
              alt="image"
            />
          </CarouselSlide>
        ))}

        <CarouselIndicators
          sx={{
            "& > button": {
              _selected: {
                background: "blackAlpha.950",
              },
              background: "blackAlpha.500",
            },
          }}
        />
      </Carousel>
    </VStack>
  )
}

export default ImagePreviewDropzone
