import { StoryblokCMS } from "@/utils/cms";
import { notFound } from "next/navigation";

export default async function NotFound() {
  try {

    const config = await StoryblokCMS.getConfig();
    
    const { error_title, error_description } = config.content;
    
    return (
      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center p-4">
        <h1 className="text-5xl font-bold mb-4">{error_title}</h1>
        <p className="text-lg mb-8">{error_description}</p>
      </section>
    );
  } catch (error) {
    notFound();
  }
}

export const dynamic = StoryblokCMS.isDevelopment ? "force-dynamic" : "force-static";
