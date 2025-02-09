import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";// Ensure this points to your configured Sanity client
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
