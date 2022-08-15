export default function responsiveEvent() {
   const isPhoneOrTablet = navigator.userAgent.search(/iPhone|Android|iPad/) !== -1;
   return isPhoneOrTablet ? 'touch' : 'click';
}