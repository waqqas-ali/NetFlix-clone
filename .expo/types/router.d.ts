/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/DetailScreen` | `/DetailScreen`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Home` | `/Home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Home_Banner` | `/Home_Banner`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Login` | `/Login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/MovieCards` | `/MovieCards`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Profile` | `/Profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Signup` | `/Signup`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/fake` | `/fake`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/DetailScreen` | `/DetailScreen`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Home` | `/Home`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Home_Banner` | `/Home_Banner`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Login` | `/Login`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/MovieCards` | `/MovieCards`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Profile` | `/Profile`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Signup` | `/Signup`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/fake` | `/fake`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/DetailScreen${`?${string}` | `#${string}` | ''}` | `/DetailScreen${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Home${`?${string}` | `#${string}` | ''}` | `/Home${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Home_Banner${`?${string}` | `#${string}` | ''}` | `/Home_Banner${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Login${`?${string}` | `#${string}` | ''}` | `/Login${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/MovieCards${`?${string}` | `#${string}` | ''}` | `/MovieCards${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Profile${`?${string}` | `#${string}` | ''}` | `/Profile${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Signup${`?${string}` | `#${string}` | ''}` | `/Signup${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/fake${`?${string}` | `#${string}` | ''}` | `/fake${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/DetailScreen` | `/DetailScreen`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Home` | `/Home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Home_Banner` | `/Home_Banner`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Login` | `/Login`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/MovieCards` | `/MovieCards`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Profile` | `/Profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Signup` | `/Signup`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/fake` | `/fake`; params?: Router.UnknownInputParams; };
    }
  }
}
