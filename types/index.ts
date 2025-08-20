export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  preferences?: {
    favoriteBrands: string[];
    skinType: string;
  };
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'makeup' | 'skincare' | 'fragrance' | 'accessories';
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface ThemeConfig {
  colors: {
    primary: string; // Pink
    secondary: string; // White
    accent: string; // Gold
  };
  fonts: {
    heading: string; // Elegant serif font
    body: string; // Clean sans-serif font
  };
}