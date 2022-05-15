import React from 'react';
import './style.scss';

export default function Calendar() {
  return (
    <>
      <div className="flex flex-col w-full mt-[48px]">
        <p>May 30, 2022</p>
        <div className="flex justify-between items-center w-full h-[112px] bg-[#262338] mt-[21px]">
          <div className="flex items-center">
            <img src="https://s2.glbimg.com/kY7AbKs0CqXQuNd3Q65Ld-oIb58=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/A/S/EFBSAgSqyRRFei3zG3Cg/1.jpg" alt="img" className="rounded-full border ml-[24px] h-[64px] w-[64px] object-cover" />
            <div className="flex flex-col  ml-[16px] text-left font-[Manrope]">
              <h4 className="text-[#F7F7FC] title hover:border-b-2 border-blue-500 cursor-default w-[auto]">
                Spaces NFT
              </h4>
              <span className="text-[#6E7191] cursor-default hover:border-b-2 border-blue-500 cursor-default">
                May 30th 2022 - 12:00 pm
              </span>
            </div>
          </div>
          <div className="flex items-center ml-[52px] mr-[80px]">
            <div className="flex flex-col items-center unit-info">
              <div className="flex items-center w-full justify-start">
                <span className="flex flex-col items-center ">
                  <svg className="mb-1" width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H12" stroke="#FCFCFC" strokeWidth="1.5" />
                  </svg>
                  <svg className="mb-1" width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H10" stroke="#FCFCFC" strokeWidth="1.5" />
                  </svg>
                  <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H12" stroke="#FCFCFC" strokeWidth="1.5" />
                  </svg>
                </span>
                <span className="unit flex-col items-center ml-1 hover:border-b-2 border-blue-500 cursor-default">
                  140
                </span>
              </div>
              <span className="sub  hover:border-b-2 border-blue-500 cursor-default">
                PRICE
              </span>
            </div>
            <div className="flex flex-col items-center ml-[84px] unit-info">
              <div className="flex items-center w-full justify-start ">
                <span className="flex flex-col items-center ">
                  <svg className="mb-1" width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H12" stroke="#FCFCFC" strokeWidth="1.5" />
                  </svg>
                  <svg className="mb-1" width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H10" stroke="#FCFCFC" strokeWidth="1.5" />
                  </svg>
                  <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H12" stroke="#FCFCFC" strokeWidth="1.5" />
                  </svg>
                </span>
                <span className="unit flex-col items-center ml-1 hover:border-b-2 border-blue-500 cursor-default">
                  140
                </span>
              </div>
              <span className="sub  hover:border-b-2 border-blue-500 cursor-default">
                TOKENS
              </span>
            </div>
          </div>
          <div className="flex items-center mr-[32px]">
            <div className="flex items-center  mr-[16px]">
              <div className="w-[116px] h-[48px] bg-[#4E4B66] flex items-center justify-center">
                Sponsors
              </div>
            </div>
            <div className="flex items-center mr-[16px]">
              <div className="w-[116px] h-[48px] bg-[#4E4B66] flex items-center justify-center">
                Website
              </div>
            </div>
            <div className="flex items-center mr-[16px]">
              <div className="w-[116px] h-[48px] bg-[#4E4B66] flex items-center justify-center">
                <span className="mr-[8px]">
                  <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.643 2.93708C22.808 3.30708 21.911 3.55708 20.968 3.67008C21.941 3.08787 22.669 2.17154 23.016 1.09208C22.1019 1.63507 21.1014 2.01727 20.058 2.22208C19.3564 1.47294 18.4271 0.976403 17.4143 0.809551C16.4016 0.642699 15.3621 0.814868 14.4572 1.29933C13.5524 1.78379 12.8328 2.55344 12.4102 3.48878C11.9875 4.42412 11.8855 5.47283 12.12 6.47208C10.2677 6.37907 8.45564 5.89763 6.80144 5.05898C5.14723 4.22034 3.68785 3.04324 2.51801 1.60408C2.11801 2.29408 1.88801 3.09408 1.88801 3.94608C1.88757 4.71307 2.07644 5.46832 2.43789 6.14481C2.79934 6.8213 3.32217 7.39812 3.96001 7.82408C3.22029 7.80054 2.49688 7.60066 1.85001 7.24108V7.30108C1.84994 8.37682 2.22204 9.41946 2.90319 10.2521C3.58434 11.0847 4.53258 11.656 5.58701 11.8691C4.9008 12.0548 4.18135 12.0821 3.48301 11.9491C3.78051 12.8747 4.36001 13.6841 5.14038 14.264C5.92075 14.8439 6.86293 15.1653 7.83501 15.1831C6.18485 16.4785 4.1469 17.1812 2.04901 17.1781C1.67739 17.1782 1.30609 17.1565 0.937012 17.1131C3.06649 18.4823 5.54535 19.2089 8.07701 19.2061C16.647 19.2061 21.332 12.1081 21.332 5.95208C21.332 5.75208 21.327 5.55008 21.318 5.35008C22.2293 4.69105 23.0159 3.87497 23.641 2.94008L23.643 2.93708V2.93708Z" fill="#A0A3BD" />
                  </svg>
                </span>
                Twitter
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-[116px] h-[48px] bg-[#4E4B66] flex items-center justify-center">
                <span className="mr-[8px]">
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 1.49197C18.787 0.801974 17.147 0.291974 15.432 0.0019736C15.4167 -0.000958481 15.4009 0.000931061 15.3868 0.00738094C15.3726 0.0138308 15.3608 0.0245219 15.353 0.0379736C15.143 0.406974 14.909 0.887974 14.745 1.26797C12.9261 0.99621 11.0769 0.99621 9.25799 1.26797C9.07533 0.846834 8.86934 0.436198 8.64099 0.0379736C8.63325 0.0243563 8.62154 0.0134234 8.60743 0.00663373C8.59331 -0.000155898 8.57746 -0.00247938 8.56199 -2.64894e-05C6.84799 0.289973 5.20799 0.799974 3.67699 1.49097C3.66382 1.4965 3.65265 1.50592 3.64499 1.51797C0.532992 6.09297 -0.320008 10.555 0.0989923 14.961C0.100158 14.9718 0.103508 14.9822 0.108837 14.9917C0.114167 15.0011 0.121364 15.0094 0.129992 15.016C1.94638 16.3384 3.97233 17.3458 6.12299 17.996C6.13798 18.0006 6.15402 18.0006 6.16901 17.9959C6.18399 17.9913 6.19723 17.9823 6.20699 17.97C6.66979 17.351 7.07989 16.6944 7.43299 16.007C7.43789 15.9976 7.44072 15.9872 7.44127 15.9766C7.44183 15.9661 7.44011 15.9555 7.43622 15.9456C7.43233 15.9358 7.42637 15.9268 7.41874 15.9195C7.41111 15.9121 7.40199 15.9065 7.39199 15.903C6.746 15.6597 6.12008 15.3661 5.51999 15.025C5.50921 15.0188 5.50012 15.0101 5.49355 14.9995C5.48698 14.989 5.48312 14.977 5.48233 14.9646C5.48153 14.9522 5.48383 14.9398 5.48901 14.9286C5.49418 14.9173 5.50208 14.9075 5.51199 14.9C5.63799 14.807 5.76399 14.71 5.88399 14.613C5.89479 14.6043 5.9078 14.5987 5.92158 14.5969C5.93535 14.5952 5.94934 14.5973 5.96199 14.603C9.88899 16.367 14.142 16.367 18.023 14.603C18.0357 14.5969 18.0498 14.5946 18.0638 14.5961C18.0778 14.5977 18.091 14.6032 18.102 14.612C18.222 14.71 18.347 14.807 18.474 14.9C18.484 14.9073 18.492 14.917 18.4974 14.9282C18.5027 14.9394 18.5052 14.9517 18.5046 14.9641C18.504 14.9765 18.5004 14.9885 18.494 14.9991C18.4876 15.0098 18.4787 15.0186 18.468 15.025C17.87 15.369 17.248 15.66 16.595 15.902C16.585 15.9056 16.5758 15.9114 16.5682 15.9188C16.5606 15.9263 16.5546 15.9353 16.5507 15.9452C16.5468 15.9551 16.5451 15.9658 16.5457 15.9764C16.5463 15.9871 16.5491 15.9975 16.554 16.007C16.914 16.694 17.326 17.348 17.779 17.969C17.7884 17.9817 17.8015 17.9912 17.8166 17.9963C17.8316 18.0013 17.8478 18.0015 17.863 17.997C20.0173 17.3486 22.0466 16.3407 23.865 15.016C23.8739 15.0098 23.8813 15.0017 23.8868 14.9924C23.8923 14.9831 23.8958 14.9727 23.897 14.962C24.397 9.86797 23.059 5.44197 20.348 1.51997C20.3413 1.50723 20.3303 1.49729 20.317 1.49197ZM8.01999 12.278C6.83799 12.278 5.86299 11.209 5.86299 9.89797C5.86299 8.58597 6.81899 7.51797 8.01999 7.51797C9.22999 7.51797 10.196 8.59497 10.177 9.89797C10.177 11.21 9.22099 12.278 8.01999 12.278ZM15.995 12.278C14.812 12.278 13.838 11.209 13.838 9.89797C13.838 8.58597 14.793 7.51797 15.995 7.51797C17.205 7.51797 18.171 8.59497 18.152 9.89797C18.152 11.21 17.206 12.278 15.995 12.278Z" fill="#A0A3BD" />
                  </svg>
                </span>
                Discord
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full h-[112px] bg-[#262338] mt-[21px]">
          <div className="flex items-center">
            <img src="https://s2.glbimg.com/kY7AbKs0CqXQuNd3Q65Ld-oIb58=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/A/S/EFBSAgSqyRRFei3zG3Cg/1.jpg" alt="img" className="rounded-full border ml-[24px] h-[64px] w-[64px] object-cover" />
            <div className="flex flex-col  ml-[16px] text-left font-[Manrope]">
              <h4 className="text-[#F7F7FC] title hover:border-b-2 border-blue-500 cursor-default w-[auto]">
                Spaces NFT
              </h4>
              <span className="text-[#6E7191]  hover:border-b-2 border-blue-500 cursor-default">
                May 30th 2022 - 12:00 pm
              </span>
            </div>
          </div>
          <div className="flex items-center ml-[52px] mr-[80px]">
            <div className="flex flex-col items-center unit-info">
              <div className="flex items-center w-full justify-start">
                <span className="flex flex-col items-center ">
                  <svg className="mb-1" width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H12" stroke="#FCFCFC" strokeWidth="1.5" />
                  </svg>
                  <svg className="mb-1" width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H10" stroke="#FCFCFC" strokeWidth="1.5" />
                  </svg>
                  <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H12" stroke="#FCFCFC" strokeWidth="1.5" />
                  </svg>
                </span>
                <span className="unit flex-col items-center ml-1 hover:border-b-2 border-blue-500 cursor-default">
                  140
                </span>
              </div>
              <span className="sub  hover:border-b-2 border-blue-500 cursor-default">
                PRICE
              </span>
            </div>
            <div className="flex flex-col items-center ml-[84px] unit-info">
              <div className="flex items-center w-full justify-start ">
                <span className="flex flex-col items-center ">
                  <svg className="mb-1" width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H12" stroke="#FCFCFC" strokeWidth="1.5" />
                  </svg>
                  <svg className="mb-1" width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H10" stroke="#FCFCFC" strokeWidth="1.5" />
                  </svg>
                  <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H12" stroke="#FCFCFC" strokeWidth="1.5" />
                  </svg>
                </span>
                <span className="unit flex-col items-center ml-1 hover:border-b-2 border-blue-500 cursor-default">
                  140
                </span>
              </div>
              <span className="sub  hover:border-b-2 border-blue-500 cursor-default">
                TOKENS
              </span>
            </div>
          </div>
          <div className="flex items-center mr-[32px]">
            <div className="flex items-center  mr-[16px]">
              <div className="w-[116px] h-[48px] bg-[#4E4B66] flex items-center justify-center">
                Sponsors
              </div>
            </div>
            <div className="flex items-center mr-[16px]">
              <div className="w-[116px] h-[48px] bg-[#4E4B66] flex items-center justify-center">
                Website
              </div>
            </div>
            <div className="flex items-center mr-[16px]">
              <div className="w-[116px] h-[48px] bg-[#4E4B66] flex items-center justify-center">
                <span className="mr-[8px]">
                  <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.643 2.93708C22.808 3.30708 21.911 3.55708 20.968 3.67008C21.941 3.08787 22.669 2.17154 23.016 1.09208C22.1019 1.63507 21.1014 2.01727 20.058 2.22208C19.3564 1.47294 18.4271 0.976403 17.4143 0.809551C16.4016 0.642699 15.3621 0.814868 14.4572 1.29933C13.5524 1.78379 12.8328 2.55344 12.4102 3.48878C11.9875 4.42412 11.8855 5.47283 12.12 6.47208C10.2677 6.37907 8.45564 5.89763 6.80144 5.05898C5.14723 4.22034 3.68785 3.04324 2.51801 1.60408C2.11801 2.29408 1.88801 3.09408 1.88801 3.94608C1.88757 4.71307 2.07644 5.46832 2.43789 6.14481C2.79934 6.8213 3.32217 7.39812 3.96001 7.82408C3.22029 7.80054 2.49688 7.60066 1.85001 7.24108V7.30108C1.84994 8.37682 2.22204 9.41946 2.90319 10.2521C3.58434 11.0847 4.53258 11.656 5.58701 11.8691C4.9008 12.0548 4.18135 12.0821 3.48301 11.9491C3.78051 12.8747 4.36001 13.6841 5.14038 14.264C5.92075 14.8439 6.86293 15.1653 7.83501 15.1831C6.18485 16.4785 4.1469 17.1812 2.04901 17.1781C1.67739 17.1782 1.30609 17.1565 0.937012 17.1131C3.06649 18.4823 5.54535 19.2089 8.07701 19.2061C16.647 19.2061 21.332 12.1081 21.332 5.95208C21.332 5.75208 21.327 5.55008 21.318 5.35008C22.2293 4.69105 23.0159 3.87497 23.641 2.94008L23.643 2.93708V2.93708Z" fill="#A0A3BD" />
                  </svg>
                </span>
                Twitter
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-[116px] h-[48px] bg-[#4E4B66] flex items-center justify-center">
                <span className="mr-[8px]">
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 1.49197C18.787 0.801974 17.147 0.291974 15.432 0.0019736C15.4167 -0.000958481 15.4009 0.000931061 15.3868 0.00738094C15.3726 0.0138308 15.3608 0.0245219 15.353 0.0379736C15.143 0.406974 14.909 0.887974 14.745 1.26797C12.9261 0.99621 11.0769 0.99621 9.25799 1.26797C9.07533 0.846834 8.86934 0.436198 8.64099 0.0379736C8.63325 0.0243563 8.62154 0.0134234 8.60743 0.00663373C8.59331 -0.000155898 8.57746 -0.00247938 8.56199 -2.64894e-05C6.84799 0.289973 5.20799 0.799974 3.67699 1.49097C3.66382 1.4965 3.65265 1.50592 3.64499 1.51797C0.532992 6.09297 -0.320008 10.555 0.0989923 14.961C0.100158 14.9718 0.103508 14.9822 0.108837 14.9917C0.114167 15.0011 0.121364 15.0094 0.129992 15.016C1.94638 16.3384 3.97233 17.3458 6.12299 17.996C6.13798 18.0006 6.15402 18.0006 6.16901 17.9959C6.18399 17.9913 6.19723 17.9823 6.20699 17.97C6.66979 17.351 7.07989 16.6944 7.43299 16.007C7.43789 15.9976 7.44072 15.9872 7.44127 15.9766C7.44183 15.9661 7.44011 15.9555 7.43622 15.9456C7.43233 15.9358 7.42637 15.9268 7.41874 15.9195C7.41111 15.9121 7.40199 15.9065 7.39199 15.903C6.746 15.6597 6.12008 15.3661 5.51999 15.025C5.50921 15.0188 5.50012 15.0101 5.49355 14.9995C5.48698 14.989 5.48312 14.977 5.48233 14.9646C5.48153 14.9522 5.48383 14.9398 5.48901 14.9286C5.49418 14.9173 5.50208 14.9075 5.51199 14.9C5.63799 14.807 5.76399 14.71 5.88399 14.613C5.89479 14.6043 5.9078 14.5987 5.92158 14.5969C5.93535 14.5952 5.94934 14.5973 5.96199 14.603C9.88899 16.367 14.142 16.367 18.023 14.603C18.0357 14.5969 18.0498 14.5946 18.0638 14.5961C18.0778 14.5977 18.091 14.6032 18.102 14.612C18.222 14.71 18.347 14.807 18.474 14.9C18.484 14.9073 18.492 14.917 18.4974 14.9282C18.5027 14.9394 18.5052 14.9517 18.5046 14.9641C18.504 14.9765 18.5004 14.9885 18.494 14.9991C18.4876 15.0098 18.4787 15.0186 18.468 15.025C17.87 15.369 17.248 15.66 16.595 15.902C16.585 15.9056 16.5758 15.9114 16.5682 15.9188C16.5606 15.9263 16.5546 15.9353 16.5507 15.9452C16.5468 15.9551 16.5451 15.9658 16.5457 15.9764C16.5463 15.9871 16.5491 15.9975 16.554 16.007C16.914 16.694 17.326 17.348 17.779 17.969C17.7884 17.9817 17.8015 17.9912 17.8166 17.9963C17.8316 18.0013 17.8478 18.0015 17.863 17.997C20.0173 17.3486 22.0466 16.3407 23.865 15.016C23.8739 15.0098 23.8813 15.0017 23.8868 14.9924C23.8923 14.9831 23.8958 14.9727 23.897 14.962C24.397 9.86797 23.059 5.44197 20.348 1.51997C20.3413 1.50723 20.3303 1.49729 20.317 1.49197ZM8.01999 12.278C6.83799 12.278 5.86299 11.209 5.86299 9.89797C5.86299 8.58597 6.81899 7.51797 8.01999 7.51797C9.22999 7.51797 10.196 8.59497 10.177 9.89797C10.177 11.21 9.22099 12.278 8.01999 12.278ZM15.995 12.278C14.812 12.278 13.838 11.209 13.838 9.89797C13.838 8.58597 14.793 7.51797 15.995 7.51797C17.205 7.51797 18.171 8.59497 18.152 9.89797C18.152 11.21 17.206 12.278 15.995 12.278Z" fill="#A0A3BD" />
                  </svg>
                </span>
                Discord
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}