export default {
  mounted: (el: Event) => {
    console.log(el);
    const oImgWrap = el as unknown as HTMLElement;
    const OMagWrap = oImgWrap.querySelector('.mag_wrap')!;
    
    const OMagImg = oImgWrap.querySelector('.mag_img')!;

    // 图片宽高
    const oImgWrapStyle = getComputedStyle(oImgWrap, null);
    const imgWidth = parseInt(oImgWrapStyle.width);
    const imgHeight = parseInt(oImgWrapStyle.height);
    console.log(imgWidth, imgHeight);

    // 放大镜宽高
    const OMagWrapStyle = getComputedStyle(OMagWrap, null);
    const magWidth = parseInt(OMagWrapStyle.width);
    const magHeight = parseInt(OMagWrapStyle.height);
    console.log(magWidth, magHeight);
    

    const imgX = oImgWrap.offsetLeft;
    const imgY = oImgWrap.offsetTop;
    console.log(imgX, imgY);
    

    

    const bindEvent = () => {
      oImgWrap.addEventListener('mouseover', (e) => {
        OMagWrap.classList.add('show');
        document.addEventListener('mousemove', handleMouseMove, false);
      }, false);

      oImgWrap.addEventListener('mouseout', handleMouseOut, false);
    }

    const handleMouseMove = (e: MouseEvent) => {}

    const handleMouseOut = (e: MouseEvent) => {
      OMagWrap.classList.remove('show');
    }

    const init = () => {
      bindEvent();
    }
    init();
  }
}