export function isTablet() {
   return navigator.userAgent.search(/iPad|iPhone|Android/) !== -1;
}

export default function responsiveEvent() {
   return isTablet() ? 'touchstart' : 'click';
}