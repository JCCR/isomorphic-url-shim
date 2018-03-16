import { URL, hasNativeURL } from "url-ponyfill"

export const URL = hasNativeURL() ? self.URL : URL
