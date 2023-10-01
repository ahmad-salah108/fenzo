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
    }[]
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
