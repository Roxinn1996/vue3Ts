import type { RouteRecordRaw } from 'vue-router';

import { defineComponent } from 'vue';

export type Component<T extends any = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

export interface RouteMeta {
  title?:string;
  keepAlive?:boolean;
  is_show_header?:boolean;
  is_show_footer?:boolean;
  back?:string;
}

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  path: string;
  name?: string;
  meta?: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[] | any;
}

export type AppRouteModule = AppRouteRecordRaw;
