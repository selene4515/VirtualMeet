import { DownloadType } from "fluentt-api-types";

/**
 * Check for Desktop Device's OS Type
 * @returns DownloadType
 */
export const isDesktopOS: () => DownloadType = () => {
  let check: DownloadType = {} as DownloadType;
  let desktopOS = navigator.platform.toLowerCase();

  if ("win16|win32|win64|windows".indexOf(desktopOS) >= 0)
    check.downloadType = "window";
  else if ("mac|macintel|linux|freebsd|openbsd|sunos".indexOf(desktopOS) >= 0)
    check.downloadType = "mac";

  return check;
};

/**
 * Get UserAgent's Information (check device & verify OS type)
 * @returns DownloadType
 */
export const getUAInfo: () => DownloadType = () => {
  let platformDataType: DownloadType = {} as DownloadType;

  platformDataType = isDesktopOS();

  return platformDataType;
};

/**
 * Used for Fetching download
 * Temp - need to refactor this in the future.
 * Error handling needed.
 * Cleaner way to denote endpoint needed.
 */
export const fetchFunctionality: () =>
  | Promise<void | Response>
  | undefined = () => {
  let _platform: DownloadType = {} as DownloadType;
  _platform.downloadType = getUAInfo().downloadType;

  let _url: string | undefined = process.env.REACT_APP_MAIN_URL;
  let _port: string | undefined = process.env.REACT_APP_PORT;

  let _apiCall: string | undefined =
    _url + ":" + _port + "/download/" + _platform.downloadType;

  return fetch(_apiCall)
    .then((data) => data.json())
    .then((data) => {
      var a = document.createElement("a");
      a.href = data;

      switch (_platform.downloadType) {
        case "window":
          a.download = "VM-Demo-UAT.exe";
          break;
        case "mac":
          a.download = "VM-Demo-UAT.dmg";
          break;
        case "android":
          a.download = "VM-Demo-UAT.apk";
          break;
        case "iOS":
          a.download = "VM-Demo-UAT.txt";
          break;
        default:
          break;
      }
      document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
      a.click();
      a.remove(); //afterwards we remove the element again
    });
};
