import { type Image } from '@/lib/sanity/sanity-image';
import { hasSanityConfig, sanityClient } from '@/lib/sanity/client';
import groq from 'groq';

type Testimonial = {
  _id: string;
  _type: 'testimonial';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  title: string;
  quote: string;
  logo: Image;
  avatar: Image;
};

function getTestimonials() {
  if (!hasSanityConfig) {
    return Promise.resolve([] as Testimonial[]);
  }

  const query = groq`
    *[_type == "testimonial"] { 
      ...,
      "logo": logo { ..., asset-> },
      "avatar": avatar { ..., asset-> },
    }
  `;

  return sanityClient.fetch<Testimonial[]>(query);
}

export { getTestimonials, type Testimonial };
