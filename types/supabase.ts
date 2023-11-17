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
      booking: {
        Row: {
          created_at: string
          customer_uuid: number
          description: string | null
          id: number
        }
        Insert: {
          created_at?: string
          customer_uuid: number
          description?: string | null
          id?: number
        }
        Update: {
          created_at?: string
          customer_uuid?: number
          description?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "booking_customer_uuid_fkey"
            columns: ["customer_uuid"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          }
        ]
      }
      customers: {
        Row: {
          created_at: string
          customer_id: number
          customer_name: string
          id: number
        }
        Insert: {
          created_at?: string
          customer_id: number
          customer_name: string
          id?: number
        }
        Update: {
          created_at?: string
          customer_id?: number
          customer_name?: string
          id?: number
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          deleted_at: string | null
          email: string
          full_name: string | null
          id: string
          is_active: boolean
          role_id: number | null
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          deleted_at?: string | null
          email: string
          full_name?: string | null
          id: string
          is_active?: boolean
          role_id?: number | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          deleted_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          is_active?: boolean
          role_id?: number | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
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
