import Stripe from "stripe";

export interface Song {
  id: string;
  user_id: string;
  author: string;
  title: string;
  song_path: string;
  image_path: string;
}

export interface UserDetails {
  id: string;
  first_name: string;
  last_name: string;
  full_name?: string;
  avatar_url?: string;
  billing_addresss?: Stripe.Address;
  payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type]
}

export interface Product {
  id: string;
  active?:  boolean
  name?: string
  description?: string
  image?: string;
  metadata?: Stripe.Metadata
}

export interface Price {
  id: string;
  product_id?: string
  active?: boolean;
  description?: string;
  unit_amount?: number;
  currency?: string;
  type?: Stripe.Price.Type;
  interval?: Stripe.Price.Recurring.Interval;
  interval_count?: number;
  trial_period_days?: number | null;
  metadata?:  Stripe.Metadata;
  products?: Product;
}

export interface Subscription {
  id: string;
  user_id: string;
  status?: Stripe.Subscription.Status;
  metadata?: Stripe.Mandate;
  price_id?: string;
  quantity?: number;
  cancle_at_period_end?: boolean
  current_period_start: string;
  current_pariod_end: string;
  ended_at?: string;
  cancle_at?: string;
  cancled_at?: string;
  trial_start?: string;
  trial_end?: string;
  prices?: Price;
}
