import { URL as URLShim, hasNativeURL } from "url-ponyfill"

export const URL = hasNativeURL() ? self.URL : URLShim
