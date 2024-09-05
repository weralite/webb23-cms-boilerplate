"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Grid from "@/components/nestable/Grid";
import ImageWithText from "@/components/nestable/ImageWithText";
import Page from "@/components/content-types/Page";
import Hero from "@/components/nestable/Hero";
import HeroWithVideo from "@/components/nestable/HeroWithVideo";
import NotFoundTeaser from "@/components/nestable/NotFoundTeaser";

const components = {
  "page": Page,
  "hero": Hero,
  "grid": Grid,
  "imageWithText": ImageWithText,
  "heroWithVideo": HeroWithVideo,
  "notFoundTeaser": NotFoundTeaser
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