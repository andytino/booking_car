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
            referencedRelation: "Customers"
            referencedColumns: ["id"]
          }
        ]
      }
      Customers: {
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
      Test: {
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
