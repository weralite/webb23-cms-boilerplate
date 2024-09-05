import { StoryblokComponent } from "@storyblok/react/rsc";

export default function Page({ blok }) {
    return (
        <main className="flex flex-col items-center justify-center min-h-[80vh] w-full">
            <div className="relative w-full max-w-[1500px]">
            {blok?.body?.map((blok) => (
                <StoryblokComponent blok={blok} key={blok._uid} />
            ))}
            </div>
        </main>
    )
}