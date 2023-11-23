export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      bank_account: {
        Row: {
          account_holder_name_id: string
          account_number: string
          bank_id: number
          created_at: string
          id: number
        }
        Insert: {
          account_holder_name_id: string
          account_number: string
          bank_id: number
          created_at?: string
          id?: number
        }
        Update: {
          account_holder_name_id?: string
          account_number?: string
          bank_id?: number
          created_at?: string
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "bank_account_account_holder_name_id_fkey"
            columns: ["account_holder_name_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bank_account_bank_id_fkey"
            columns: ["bank_id"]
            isOneToOne: false
            referencedRelation: "banks"
            referencedColumns: ["id"]
          }
        ]
      }
      banks: {
        Row: {
          bank_name: string
          id: number
        }
        Insert: {
          bank_name: string
          id?: number
        }
        Update: {
          bank_name?: string
          id?: number
        }
        Relationships: []
      }
      booking_status: {
        Row: {
          id: number
          status_name: string
        }
        Insert: {
          id?: number
          status_name: string
        }
        Update: {
          id?: number
          status_name?: string
        }
        Relationships: []
      }
      bookings: {
        Row: {
          bank_account_id: number | null
          booking_status_id: number
          call_center_id: string | null
          customer_id: string
          driver_id: string | null
          dropoff_datetime: string
          dropoff_latitude: number
          dropoff_location: string
          dropoff_longitude: number
          id: string
          payment_method_id: number
          payment_status_id: number
          pickup_datetime: string
          pickup_latitude: number
          pickup_location: string
          pickup_longitude: number
          price_unit_id: number
          total_price: number
        }
        Insert: {
          bank_account_id?: number | null
          booking_status_id: number
          call_center_id?: string | null
          customer_id: string
          driver_id?: string | null
          dropoff_datetime: string
          dropoff_latitude: number
          dropoff_location: string
          dropoff_longitude: number
          id?: string
          payment_method_id: number
          payment_status_id: number
          pickup_datetime: string
          pickup_latitude: number
          pickup_location: string
          pickup_longitude: number
          price_unit_id: number
          total_price: number
        }
        Update: {
          bank_account_id?: number | null
          booking_status_id?: number
          call_center_id?: string | null
          customer_id?: string
          driver_id?: string | null
          dropoff_datetime?: string
          dropoff_latitude?: number
          dropoff_location?: string
          dropoff_longitude?: number
          id?: string
          payment_method_id?: number
          payment_status_id?: number
          pickup_datetime?: string
          pickup_latitude?: number
          pickup_location?: string
          pickup_longitude?: number
          price_unit_id?: number
          total_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "bookings_bank_account_id_fkey"
            columns: ["bank_account_id"]
            isOneToOne: false
            referencedRelation: "bank_account"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_booking_status_id_fkey"
            columns: ["booking_status_id"]
            isOneToOne: false
            referencedRelation: "booking_status"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_call_center_id_fkey"
            columns: ["call_center_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_payment_method_id_fkey"
            columns: ["payment_method_id"]
            isOneToOne: false
            referencedRelation: "payment_method"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_payment_status_id_fkey"
            columns: ["payment_status_id"]
            isOneToOne: false
            referencedRelation: "payment_status"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_price_unit_id_fkey"
            columns: ["price_unit_id"]
            isOneToOne: false
            referencedRelation: "price_unit"
            referencedColumns: ["id"]
          }
        ]
      }
      customers: {
        Row: {
          avatar_url: string | null
          citizen_id: string | null
          deleted_at: string | null
          email: string
          full_name: string | null
          id: string
          is_active: boolean
          language_id: number
          mode_theme_id: number
          phone_number: string | null
        }
        Insert: {
          avatar_url?: string | null
          citizen_id?: string | null
          deleted_at?: string | null
          email: string
          full_name?: string | null
          id: string
          is_active?: boolean
          language_id?: number
          mode_theme_id?: number
          phone_number?: string | null
        }
        Update: {
          avatar_url?: string | null
          citizen_id?: string | null
          deleted_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          is_active?: boolean
          language_id?: number
          mode_theme_id?: number
          phone_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customers_language_id_fkey"
            columns: ["language_id"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customers_mode_theme_id_fkey"
            columns: ["mode_theme_id"]
            isOneToOne: false
            referencedRelation: "mode_theme"
            referencedColumns: ["id"]
          }
        ]
      }
      drivers: {
        Row: {
          avatar_url: string | null
          citizen_id: string | null
          deleted_at: string | null
          email: string
          full_name: string | null
          id: string
          is_active: boolean
          is_online: boolean
          language_id: number
          level_id: number
          mode_theme_id: number
          phone_number: string | null
        }
        Insert: {
          avatar_url?: string | null
          citizen_id?: string | null
          deleted_at?: string | null
          email: string
          full_name?: string | null
          id: string
          is_active?: boolean
          is_online?: boolean
          language_id?: number
          level_id?: number
          mode_theme_id?: number
          phone_number?: string | null
        }
        Update: {
          avatar_url?: string | null
          citizen_id?: string | null
          deleted_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          is_active?: boolean
          is_online?: boolean
          language_id?: number
          level_id?: number
          mode_theme_id?: number
          phone_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "drivers_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "drivers_language_id_fkey"
            columns: ["language_id"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "drivers_level_id_fkey"
            columns: ["level_id"]
            isOneToOne: false
            referencedRelation: "levels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "drivers_mode_theme_id_fkey"
            columns: ["mode_theme_id"]
            isOneToOne: false
            referencedRelation: "mode_theme"
            referencedColumns: ["id"]
          }
        ]
      }
      languages: {
        Row: {
          id: number
          language_code: string
          language_name: string
        }
        Insert: {
          id?: number
          language_code: string
          language_name: string
        }
        Update: {
          id?: number
          language_code?: string
          language_name?: string
        }
        Relationships: []
      }
      levels: {
        Row: {
          id: number
          level_name: string
        }
        Insert: {
          id?: number
          level_name: string
        }
        Update: {
          id?: number
          level_name?: string
        }
        Relationships: []
      }
      mode_theme: {
        Row: {
          description: string | null
          id: number
          mode_name: string
        }
        Insert: {
          description?: string | null
          id?: number
          mode_name?: string
        }
        Update: {
          description?: string | null
          id?: number
          mode_name?: string
        }
        Relationships: []
      }
      payment_method: {
        Row: {
          id: number
          method_name: string
        }
        Insert: {
          id?: number
          method_name: string
        }
        Update: {
          id?: number
          method_name?: string
        }
        Relationships: []
      }
      payment_status: {
        Row: {
          id: number
          status_name: string
        }
        Insert: {
          id?: number
          status_name: string
        }
        Update: {
          id?: number
          status_name?: string
        }
        Relationships: []
      }
      price_unit: {
        Row: {
          id: number
          unit_name: string
        }
        Insert: {
          id?: number
          unit_name: string
        }
        Update: {
          id?: number
          unit_name?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          citizen_id: string | null
          deleted_at: string | null
          email: string
          full_name: string | null
          id: string
          is_active: boolean
          language_id: number
          mode_theme_id: number
          phone_number: string | null
          role_id: number | null
        }
        Insert: {
          avatar_url?: string | null
          citizen_id?: string | null
          deleted_at?: string | null
          email: string
          full_name?: string | null
          id: string
          is_active?: boolean
          language_id?: number
          mode_theme_id?: number
          phone_number?: string | null
          role_id?: number | null
        }
        Update: {
          avatar_url?: string | null
          citizen_id?: string | null
          deleted_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          is_active?: boolean
          language_id?: number
          mode_theme_id?: number
          phone_number?: string | null
          role_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_language_id_fkey"
            columns: ["language_id"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_mode_theme_id_fkey"
            columns: ["mode_theme_id"]
            isOneToOne: false
            referencedRelation: "mode_theme"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["role_id"]
          }
        ]
      }
      roles: {
        Row: {
          created_at: string
          id: string
          role_id: number
          role_name: string
        }
        Insert: {
          created_at?: string
          id?: string
          role_id: number
          role_name: string
        }
        Update: {
          created_at?: string
          id?: string
          role_id?: number
          role_name?: string
        }
        Relationships: []
      }
      test: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_deleted: boolean
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_deleted: boolean
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_deleted?: boolean
          title?: string
        }
        Relationships: []
      }
      vehicles: {
        Row: {
          color: string
          driver_id: string
          id: number
          model: string
          plate_number: string
          year: number
        }
        Insert: {
          color: string
          driver_id: string
          id?: number
          model: string
          plate_number: string
          year: number
        }
        Update: {
          color?: string
          driver_id?: string
          id?: number
          model?: string
          plate_number?: string
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "vehicles_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
