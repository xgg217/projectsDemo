export default {
  mounted: (el: Event) => {
    console.log(el);
    const oImgWrap = el as unknown as HTMLElement;
    const oMagWrap = (oImgWrap.querySelector('.mag_wrap')!) as unknown as HTMLElement;
    
    const oMagImg = (oImgWrap.querySelector('.mag_img')!) as unknown as HTMLElement;
    console.log(oMagImg);
    

    // 图片宽高
    const oImgWrapStyle = getComputedStyle(oImgWrap, null);
    const imgWidth = parseInt(oImgWrapStyle.width);
    const imgHeight = parseInt(oImgWrapStyle.height);
    console.log(imgWidth, imgHeight);

    // 放大镜宽高
    const oMagWrapStyle = getComputedStyle(oMagWrap, null);
    const magWidth = parseInt(oMagWrapStyle.width);
    const magHeight = parseInt(oMagWrapStyle.height);
    console.log(magWidth, magHeight);
    

    const imgX = oImgWrap.offsetLeft;
    const imgY = oImgWrap.offsetTop;
    console.log(imgX, imgY);
    

    

    const bindEvent = () => {
      oImgWrap.addEventListener('mouseover', (e) => {
        oMagWrap.classList.add('show');

        // 开启监听
        document.addEventListener('mousemove', handleMouseMove, false);
      }, false);

      oImgWrap.addEventListener('mouseout', handleMouseOut, false);
    }

    const handleMouseMove = (e: MouseEvent) => {

    }

    const handleMouseOut = (e: MouseEvent) => {
      oMagWrap.classList.remove('show');
      // 取消监听
      document.removeEventListener('mousemove', handleMouseMove, false);
    }

    const getXY = (e: MouseEvent) => {
      return {
        x: e.pageX - imgX - magWidth / 2, // 鼠标相对于图片的位置
        y: e.pageY - imgY - magHeight / 2,
        mouseX: e.pageX - imgX, // 边界
        mouseY: e.pageY - imgY,
      }
    }

    const showMag = (x:number,y:number,mouseX:number,mouseY:number) => {
      oImgWrap.style.left = `${x}px`;
      oImgWrap.style.top = `${y}px`;

      oMagImg.style.left = `${-x}px`;
      oMagImg.style.top = `${-y}px`;
    }



    const init = () => {
      bindEvent();
    }
    init();
  }
}