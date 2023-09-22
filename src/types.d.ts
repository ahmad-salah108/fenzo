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