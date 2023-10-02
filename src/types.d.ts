type Role = {
  id: number;
  name: string;
  guard_name: string;
  created_at: string;
  updated_at: string;
  pivot: {
    model_id: number;
    role_id: number;
    model_type: string;
  };
};

type User = {
  name: string;
  email: string;
  phone: string;
  age: number;
  country: string;
  updated_at: string;
  created_at: string;
  id: number;
  token: string;
  image: string | null;
  roles?: Role[] | null;
};

type Design = {
  id: number;
  event_id: number;
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
  title: string;
  description: string | null;
  event_name: string;
  design_images:
    | null
    | {
        id: number;
        design_id: number;
        image: string | null;
        created_at: string | null;
        updated_at: string | null;
        deleted_at: string | null;
      }[];
};

type Designs = {
  current_page: number;
  data: Design[];
  first_page_url: string | null;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    url: string | null;
    label: string;
    active: Boolean;
  }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};

type FenzoEvent = {
  id: number;
  locale: string;
  name: string;
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
};

type Package = {
  id: number;
  min_capacity: number | null;
  max_capacity: number | null;
  price: number;
  capacity_person_price: number | null;
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
  title: string;
  description: string | null;
  images: {
      id: number;
      package_id: number;
      image: string | null;
    }[];
  designs: {
      id: number;
      design_id: number;
      package_id: number;
      design_title: string;
      design_description: string;
      event_name: string;
    }[];
  colors: {
      id: number;
      package_id: number;
      color_id: number;
      name: string;
    }[];
  places: {
      id: number;
      package_id: number;
      place_id: number;
      name: string;
    }[];
  materials: {
      id: number;
      package_id: number;
      material_id: number;
      name: string;
    }[];
};

type Packages = {
  current_page: number;
  data: Package[];
  first_page_url: string | null;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    url: string | null;
    label: string;
    active: Boolean;
  }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};