"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Grid from "@/components/nestable/Grid";
import ImageWithText from "@/components/nestable/ImageWithText";
import Page from "@/components/content-types/Page";
import Hero from "@/components/nestable/Hero";
import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";

const components = {
  "page": Page,
  // "teaser":Teaser,
  // "richtext": RichTextDefault,
  "hero": Hero,
  "grid": Grid,
  "ImageWithText": ImageWithText,


}

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components
});

export default function StoryblokProvider({ children }) {
  return (
    children
  );
}