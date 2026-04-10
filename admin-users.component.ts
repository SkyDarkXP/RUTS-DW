export interface Course {
  id?: number;
  faculty_id?: number | null;
  faculty_name_th?: string;
  faculty_name_en?: string;
  title_th: string;
  title_en?: string;
  degree_full_th?: string;
  degree_abbr_th?: string;
  degree_full_en?: string;
  degree_abbr_en?: string;
  major?: string;
  degree_th?: string;
  degree_en?: string;
  duration_years?: number;
  total_credits?: number | null;
  level?: string;
  program_format?: string;
  faculty_staff?: string;
  faculty_staff_label?: string;
  faculty_staff_url?: string;
  study_plan_url?: string;
  study_plan_label?: string;
  contact_info?: string;
  description?: string;
  requirements?: string;
  career_path?: string;
  image_url?: string;
  badge_color?: string;
  is_active?: boolean | number;
  is_featured?: boolean | number;
  sort_order?: number;
  created_at?: string;
  updated_at?: string;
}

export interface Faculty {
  id?: number;
  name_th: string;
  name_en?: string;
  code?: string;
  description?: string;
  is_active?: boolean | number;
}

export interface AuthUser {
  id: number;
  username: string;
  full_name: string;
  role: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  count?: number;
  insertId?: number;
}
