$('.main-slider-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.thumb-slider-content'
});

$('.thumb-slider-content').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.main-slider-content',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    prevArrow: `
        <button type="button" class="slick-prev">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17" cy="17" r="16.5" fill="white" stroke="#E5E5E5"/>
                <path d="M20.6646 10.2427C20.9066 10.4816 20.9286 10.8555 20.7306 11.119L20.6646 11.1944L14.7833 17.0001L20.6646 22.8057C20.9066 23.0446 20.9286 23.4185 20.7306 23.682L20.6646 23.7575C20.4225 23.9964 20.0437 24.0182 19.7768 23.8227L19.7003 23.7575L13.3367 17.476C13.0946 17.237 13.0726 16.8631 13.2707 16.5997L13.3367 16.5242L19.7003 10.2427C19.9666 9.97982 20.3983 9.97982 20.6646 10.2427Z" fill="#1D1D1D"/>
            </svg>
        </button>`,
    nextArrow: `
        <button type="button" class="slick-next">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17" cy="17" r="16.5" transform="rotate(180 17 17)" fill="white" stroke="#E5E5E5"/>
                <path d="M13.3364 23.7573C13.0944 23.5184 13.0724 23.1445 13.2704 22.881L13.3364 22.8055L19.2176 16.9999L13.3364 11.1943C13.0944 10.9554 13.0724 10.5815 13.2704 10.318L13.3364 10.2425C13.5785 10.0036 13.9573 9.98184 14.2242 10.1773L14.3007 10.2425L20.6643 16.524C20.9064 16.763 20.9284 17.1369 20.7303 17.4003L20.6643 17.4758L14.3007 23.7573C14.0344 24.0202 13.6027 24.0202 13.3364 23.7573Z" fill="#1D1D1D"/>
            </svg>
        </button>`,
    responsive: [
        {
            breakpoint: 640, // 1024px screen width ke liye settings
            settings: {
                prevArrow: `
                <button type="button" class="slick-prev">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9.86751" cy="9.86751" r="9.36751" fill="white" stroke="#E5E5E5"/>
                    <path d="M11.9935 5.94523C12.134 6.08392 12.1467 6.30094 12.0318 6.45388L11.9935 6.49769L8.57976 9.86752L11.9935 13.2373C12.134 13.376 12.1467 13.5931 12.0318 13.746L11.9935 13.7898C11.853 13.9285 11.6331 13.9411 11.4782 13.8276L11.4338 13.7898L7.74006 10.1437C7.59956 10.0051 7.58678 9.78803 7.70174 9.6351L7.74006 9.59129L11.4338 5.94523C11.5883 5.79267 11.8389 5.79267 11.9935 5.94523Z" fill="#1D1D1D"/>
                    </svg>

                </button>`,
                nextArrow: `
                <button type="button" class="slick-next">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10.1325" cy="10.1325" r="9.36751" transform="rotate(180 10.1325 10.1325)" fill="white" stroke="#E5E5E5"/>
                    <path d="M8.00654 14.0548C7.86604 13.9161 7.85326 13.6991 7.96822 13.5461L8.00654 13.5023L11.4202 10.1325L8.00654 6.76265C7.86604 6.62396 7.85326 6.40694 7.96822 6.25401L8.00654 6.21019C8.14704 6.0715 8.3669 6.05889 8.52183 6.17237L8.56622 6.21019L12.2599 9.85625C12.4004 9.99494 12.4132 10.212 12.2983 10.3649L12.2599 10.4087L8.56622 14.0548C8.41167 14.2073 8.16109 14.2073 8.00654 14.0548Z" fill="#1D1D1D"/>
                    </svg>

                </button>`,
            }
        }
    ]
});


