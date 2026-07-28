export interface Collection {
  id: string;
  name: string;
  image: string;
  link?: string;
}

export interface Space {
  id: string;
  name: string;
  iconName: string;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  showroom: string;
}

export interface Showroom {
  id: string;
  name: string;
  address: string;
  pincode: string;
  timing: string;
  phone: string;
  whatsapp: string;
  mapEmbedUrl: string;
  directionsUrl: string;
  isMain?: boolean;
}
