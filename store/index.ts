import { create } from "zustand";
import { devtools } from 'zustand/middleware';
import orderStore from "./order";

export const useOrderStore = create(devtools(orderStore))