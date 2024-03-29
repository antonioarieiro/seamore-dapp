import React from 'react';
import Icon from '@material-tailwind/react/Icon';
import './style.scss'
export default function SelectedNftInfos() {
  return (
    <>
     <div className="body  bg-[#14142B] w-full h-full cursor-default details">
        <div className="selected-nft mt-[40px] ml-9 mr-10 flex items-center justify-around">
          <div className='flex items-center'>
            <img src="https://brasilnft.art.br/pytsycky/2021/12/Bored-Ape-Erro-PNG-696x696.png" alt="" className="w-[72px] h-[72px] rounded-full m-[24px]" />
            <div className="name-and-owner flex flex-col">
              <p className="mb-2 hover:border-b-2 border-blue-500"> Bored Ape Yacht Club</p>
              <span className="w-[180px] flex">
                <span className="truncate w-[160px]">
                  0x6080b4.s01993825...
                </span>
                <span>
                  <Icon name='content_copy' size='2xl' color='white' />
                </span>
              </span>

            </div>
            <div className="flex items-center ml-[103px]">
              <span className="mr-2 hover:border-2 border-blue-500 rounded-full">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 0C4.0305 0 0 4.0305 0 9C0 13.9695 4.0305 18 9 18C13.9695 18 18 13.9695 18 9C18 4.0305 13.9718 0 9 0ZM4.44 9.30225L4.47825 9.2415L6.8205 5.5785C6.82834 5.56646 6.83928 5.55675 6.85216 5.55037C6.86504 5.544 6.8794 5.54121 6.89373 5.54228C6.90806 5.54335 6.92184 5.54826 6.93363 5.55647C6.94542 5.56469 6.95479 5.57593 6.96075 5.589C7.35075 6.46575 7.68975 7.55625 7.53075 8.235C7.46475 8.514 7.2795 8.892 7.07025 9.2415C7.04341 9.29263 7.01412 9.34243 6.9825 9.39075C6.97493 9.40153 6.96479 9.41025 6.95301 9.41615C6.94123 9.42204 6.92817 9.42491 6.915 9.4245H4.50975C4.49539 9.42472 4.48125 9.42105 4.46881 9.41388C4.45637 9.40671 4.44611 9.3963 4.43911 9.38376C4.43211 9.37123 4.42863 9.35703 4.42906 9.34268C4.42948 9.32832 4.43378 9.31435 4.4415 9.30225H4.44ZM14.8755 10.5623C14.8757 10.5783 14.8712 10.594 14.8625 10.6074C14.8538 10.6209 14.8414 10.6315 14.8267 10.638C14.6445 10.7153 14.0243 11.0017 13.7662 11.3595C13.1077 12.276 12.6053 13.587 11.4803 13.587H6.78975C6.39372 13.5864 6.00169 13.5078 5.63607 13.3556C5.27044 13.2035 4.93838 12.9807 4.65887 12.7002C4.37936 12.4196 4.15788 12.0867 4.00708 11.7205C3.85627 11.3543 3.77911 10.962 3.78 10.566V10.512C3.78 10.4685 3.816 10.4325 3.861 10.4325H6.47475C6.52725 10.4325 6.56475 10.4797 6.561 10.5315C6.5415 10.701 6.57375 10.8757 6.65475 11.034C6.80925 11.349 7.13175 11.5455 7.479 11.5455H8.7735V10.5352H7.4925C7.47749 10.5351 7.46281 10.5308 7.45003 10.523C7.43726 10.5151 7.42688 10.5038 7.42001 10.4905C7.41315 10.4771 7.41005 10.4622 7.41106 10.4472C7.41207 10.4322 7.41715 10.4178 7.42575 10.4055L7.473 10.338C7.593 10.1648 7.76625 9.8985 7.93875 9.594C8.05575 9.3885 8.16975 9.1695 8.26125 8.949C8.27925 8.91 8.2935 8.86875 8.31 8.829C8.33475 8.7585 8.36025 8.6925 8.37825 8.62725C8.39591 8.57192 8.41217 8.51615 8.427 8.46C8.46975 8.2725 8.48775 8.0745 8.48775 7.86975C8.48775 7.78875 8.48475 7.704 8.47725 7.6245C8.4735 7.53675 8.46225 7.44825 8.45175 7.3605C8.44336 7.28199 8.43135 7.2039 8.41575 7.1265C8.39557 7.00864 8.37105 6.89156 8.34225 6.7755L8.33175 6.7305C8.30925 6.6495 8.28975 6.573 8.26425 6.49275C8.19283 6.24631 8.11076 6.00308 8.01825 5.76375C7.98602 5.67373 7.95049 5.58492 7.91175 5.4975C7.85775 5.364 7.80225 5.24325 7.752 5.13C7.727 5.08148 7.70349 5.03221 7.6815 4.98225C7.65711 4.92835 7.63135 4.87509 7.60425 4.8225C7.58625 4.78275 7.5645 4.7445 7.55025 4.7085L7.392 4.4175C7.37025 4.37775 7.40625 4.329 7.44975 4.34175L8.43975 4.6095H8.44725L8.577 4.647L8.721 4.6875L8.7735 4.70175V4.1145C8.7735 3.83025 9 3.6 9.28275 3.6C9.34952 3.59982 9.41563 3.61315 9.47711 3.63919C9.53859 3.66522 9.59417 3.70343 9.6405 3.7515C9.73626 3.84809 9.79014 3.97849 9.7905 4.1145V4.9875L9.89625 5.01675C9.90375 5.0205 9.91275 5.02425 9.9195 5.0295C9.945 5.0475 9.9825 5.076 10.0297 5.112C10.0673 5.1405 10.107 5.1765 10.1535 5.21475C10.3016 5.33541 10.4452 5.4615 10.584 5.59275C10.7445 5.742 10.9245 5.91675 11.097 6.111C11.1458 6.1665 11.1923 6.2205 11.241 6.2805C11.2875 6.33975 11.34 6.3975 11.3835 6.4545C11.4427 6.5325 11.5035 6.6135 11.5597 6.6975C11.5845 6.73725 11.6152 6.7785 11.6385 6.81825C11.7105 6.92475 11.772 7.03425 11.8312 7.1445C11.8567 7.19475 11.8815 7.25025 11.9032 7.30425C11.97 7.452 12.0225 7.60125 12.0548 7.75275C12.0654 7.7849 12.0727 7.81808 12.0765 7.85175V7.85925C12.087 7.902 12.0907 7.94925 12.0945 7.99725C12.1156 8.21893 12.0885 8.44255 12.015 8.65275C11.9918 8.71575 11.97 8.78025 11.9415 8.84325C11.8853 8.97075 11.8208 9.1005 11.7435 9.21975C11.718 9.26475 11.6873 9.31125 11.6588 9.35625C11.6265 9.4035 11.592 9.4485 11.5635 9.49125C11.5223 9.54804 11.479 9.60333 11.4338 9.657C11.394 9.711 11.3542 9.765 11.3092 9.81375C11.2485 9.88725 11.1892 9.95625 11.1255 10.0223C11.0895 10.0658 11.0505 10.1108 11.0085 10.1497C10.9695 10.1947 10.9275 10.2345 10.8915 10.2705C10.8285 10.3335 10.779 10.3807 10.7355 10.422L10.6327 10.5135C10.6184 10.5279 10.599 10.536 10.5787 10.536H9.7905V11.5455H10.782C11.0033 11.5455 11.214 11.4675 11.385 11.322C11.4427 11.2717 11.6962 11.052 11.997 10.7205C12.0068 10.7092 12.0199 10.7013 12.0345 10.698L14.772 9.90525C14.784 9.90177 14.7967 9.90113 14.809 9.90337C14.8213 9.90561 14.8329 9.91066 14.843 9.91815C14.853 9.92563 14.8611 9.93534 14.8668 9.9465C14.8724 9.95767 14.8754 9.96999 14.8755 9.9825V10.5623Z" fill="#D9DBE9" />
                </svg>
              </span>
              <span className="mr-2 hover:border-2 border-blue-500 rounded-full">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 0C4.0305 0 0 4.0305 0 9C0 13.9695 4.0305 18 9 18C13.9695 18 18 13.9695 18 9C18 4.0305 13.9718 0 9 0ZM4.44 9.30225L4.47825 9.2415L6.8205 5.5785C6.82834 5.56646 6.83928 5.55675 6.85216 5.55037C6.86504 5.544 6.8794 5.54121 6.89373 5.54228C6.90806 5.54335 6.92184 5.54826 6.93363 5.55647C6.94542 5.56469 6.95479 5.57593 6.96075 5.589C7.35075 6.46575 7.68975 7.55625 7.53075 8.235C7.46475 8.514 7.2795 8.892 7.07025 9.2415C7.04341 9.29263 7.01412 9.34243 6.9825 9.39075C6.97493 9.40153 6.96479 9.41025 6.95301 9.41615C6.94123 9.42204 6.92817 9.42491 6.915 9.4245H4.50975C4.49539 9.42472 4.48125 9.42105 4.46881 9.41388C4.45637 9.40671 4.44611 9.3963 4.43911 9.38376C4.43211 9.37123 4.42863 9.35703 4.42906 9.34268C4.42948 9.32832 4.43378 9.31435 4.4415 9.30225H4.44ZM14.8755 10.5623C14.8757 10.5783 14.8712 10.594 14.8625 10.6074C14.8538 10.6209 14.8414 10.6315 14.8267 10.638C14.6445 10.7153 14.0243 11.0017 13.7662 11.3595C13.1077 12.276 12.6053 13.587 11.4803 13.587H6.78975C6.39372 13.5864 6.00169 13.5078 5.63607 13.3556C5.27044 13.2035 4.93838 12.9807 4.65887 12.7002C4.37936 12.4196 4.15788 12.0867 4.00708 11.7205C3.85627 11.3543 3.77911 10.962 3.78 10.566V10.512C3.78 10.4685 3.816 10.4325 3.861 10.4325H6.47475C6.52725 10.4325 6.56475 10.4797 6.561 10.5315C6.5415 10.701 6.57375 10.8757 6.65475 11.034C6.80925 11.349 7.13175 11.5455 7.479 11.5455H8.7735V10.5352H7.4925C7.47749 10.5351 7.46281 10.5308 7.45003 10.523C7.43726 10.5151 7.42688 10.5038 7.42001 10.4905C7.41315 10.4771 7.41005 10.4622 7.41106 10.4472C7.41207 10.4322 7.41715 10.4178 7.42575 10.4055L7.473 10.338C7.593 10.1648 7.76625 9.8985 7.93875 9.594C8.05575 9.3885 8.16975 9.1695 8.26125 8.949C8.27925 8.91 8.2935 8.86875 8.31 8.829C8.33475 8.7585 8.36025 8.6925 8.37825 8.62725C8.39591 8.57192 8.41217 8.51615 8.427 8.46C8.46975 8.2725 8.48775 8.0745 8.48775 7.86975C8.48775 7.78875 8.48475 7.704 8.47725 7.6245C8.4735 7.53675 8.46225 7.44825 8.45175 7.3605C8.44336 7.28199 8.43135 7.2039 8.41575 7.1265C8.39557 7.00864 8.37105 6.89156 8.34225 6.7755L8.33175 6.7305C8.30925 6.6495 8.28975 6.573 8.26425 6.49275C8.19283 6.24631 8.11076 6.00308 8.01825 5.76375C7.98602 5.67373 7.95049 5.58492 7.91175 5.4975C7.85775 5.364 7.80225 5.24325 7.752 5.13C7.727 5.08148 7.70349 5.03221 7.6815 4.98225C7.65711 4.92835 7.63135 4.87509 7.60425 4.8225C7.58625 4.78275 7.5645 4.7445 7.55025 4.7085L7.392 4.4175C7.37025 4.37775 7.40625 4.329 7.44975 4.34175L8.43975 4.6095H8.44725L8.577 4.647L8.721 4.6875L8.7735 4.70175V4.1145C8.7735 3.83025 9 3.6 9.28275 3.6C9.34952 3.59982 9.41563 3.61315 9.47711 3.63919C9.53859 3.66522 9.59417 3.70343 9.6405 3.7515C9.73626 3.84809 9.79014 3.97849 9.7905 4.1145V4.9875L9.89625 5.01675C9.90375 5.0205 9.91275 5.02425 9.9195 5.0295C9.945 5.0475 9.9825 5.076 10.0297 5.112C10.0673 5.1405 10.107 5.1765 10.1535 5.21475C10.3016 5.33541 10.4452 5.4615 10.584 5.59275C10.7445 5.742 10.9245 5.91675 11.097 6.111C11.1458 6.1665 11.1923 6.2205 11.241 6.2805C11.2875 6.33975 11.34 6.3975 11.3835 6.4545C11.4427 6.5325 11.5035 6.6135 11.5597 6.6975C11.5845 6.73725 11.6152 6.7785 11.6385 6.81825C11.7105 6.92475 11.772 7.03425 11.8312 7.1445C11.8567 7.19475 11.8815 7.25025 11.9032 7.30425C11.97 7.452 12.0225 7.60125 12.0548 7.75275C12.0654 7.7849 12.0727 7.81808 12.0765 7.85175V7.85925C12.087 7.902 12.0907 7.94925 12.0945 7.99725C12.1156 8.21893 12.0885 8.44255 12.015 8.65275C11.9918 8.71575 11.97 8.78025 11.9415 8.84325C11.8853 8.97075 11.8208 9.1005 11.7435 9.21975C11.718 9.26475 11.6873 9.31125 11.6588 9.35625C11.6265 9.4035 11.592 9.4485 11.5635 9.49125C11.5223 9.54804 11.479 9.60333 11.4338 9.657C11.394 9.711 11.3542 9.765 11.3092 9.81375C11.2485 9.88725 11.1892 9.95625 11.1255 10.0223C11.0895 10.0658 11.0505 10.1108 11.0085 10.1497C10.9695 10.1947 10.9275 10.2345 10.8915 10.2705C10.8285 10.3335 10.779 10.3807 10.7355 10.422L10.6327 10.5135C10.6184 10.5279 10.599 10.536 10.5787 10.536H9.7905V11.5455H10.782C11.0033 11.5455 11.214 11.4675 11.385 11.322C11.4427 11.2717 11.6962 11.052 11.997 10.7205C12.0068 10.7092 12.0199 10.7013 12.0345 10.698L14.772 9.90525C14.784 9.90177 14.7967 9.90113 14.809 9.90337C14.8213 9.90561 14.8329 9.91066 14.843 9.91815C14.853 9.92563 14.8611 9.93534 14.8668 9.9465C14.8724 9.95767 14.8754 9.96999 14.8755 9.9825V10.5623Z" fill="#D9DBE9" />
                </svg>
              </span>
              <span className="hover:border-2 border-blue-500 rounded-full w-[18px]">
                <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.724343 8.27822C2.06961 9.25481 3.65937 9.841 5.31777 9.97194C6.97616 10.1029 8.63852 9.77346 10.1209 9.02013C11.6034 8.2668 12.8481 7.11893 13.7173 5.70351C14.5866 4.28809 15.0465 2.66029 15.0463 1.00022C15.0463 0.792984 15.0366 0.588083 15.0227 0.384283C11.7279 5.28773 5.64444 7.58009 0.724281 8.2784" fill="#D9DBE9" />
                </svg>
              </span>
            </div>
          </div>
          <div className="border border-blue h-[80px] w-[1px]" />
          <table className="abs">
            <thead className=" uppercase text-white header-table">
              <tr>
                <th scope="col" className="px-6">
                  <span className="hover:border-b-2 border-blue-500">
                    ITEMS
                  </span>
                </th>
                <th scope="col" className="px-6">
                  <span className="hover:border-b-2 border-blue-500">
                    FLOOR
                  </span>
                </th>
                <th scope="col" className="px-6">
                  <span className="hover:border-b-2 border-blue-500">
                    ROYALTES
                  </span>
                </th>
                <th scope="col" className="px-6">
                  <span className="hover:border-b-2 border-blue-500">
                    VOL 24H
                  </span>
                </th>
                <th scope="col" className="px-6">
                  <span className="hover:border-b-2 border-blue-500">
                    VOL 7D
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="body-table items-center">
                <th scope="row" className="px-6 py-2 text-white">
                  <span className="hover:border-b-2 border-blue-500">
                    10k
                  </span>
                </th>
                <th className=" px-6 text-white">
                <div className="flex items-center">
                <span className="flex flex-col items-center mr-1 ">
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
                  <span>
                  145
                  </span>
                </div>
                </th>
                <th className="text-white px-6">
                  <span className="hover:border-b-2 border-blue-500">
                    7,5
                  </span>
                </th>
                <th className=" text-center px-6 text-white">
                <div className="flex-col items-center vol-24 mt-4">
                    <div className="flex items-center">
                      <span className="flex flex-col items-center mr-1 ">
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
                      <p className="hover:border-b-2 border-blue-500">
                        12.9k
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">
                        <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 6C6.27614 6 6.5 5.77614 6.5 5.5L6.5 1C6.5 0.723858 6.27614 0.5 6 0.5C5.72386 0.5 5.5 0.723858 5.5 1L5.5 5L1.5 5C1.22386 5 1 5.22386 1 5.5C1 5.77614 1.22386 6 1.5 6L6 6ZM0.646447 0.853553L5.64645 5.85355L6.35355 5.14645L1.35355 0.146447L0.646447 0.853553Z" fill="#D03025" />
                        </svg>
                      </span>
                      <span>
                        1,29%
                      </span>
                    </div>
                  </div>
                </th>
                <th className=" px-6 text-white">
                  <div className="flex-col items-center vol-7 mt-4">
                    <div className="flex items-center">
                      <span className="flex flex-col items-center mr-1 ">
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
                      <p className="hover:border-b-2 border-blue-500">
                        12.9k
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">
                        <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 6C6.27614 6 6.5 5.77614 6.5 5.5L6.5 1C6.5 0.723858 6.27614 0.5 6 0.5C5.72386 0.5 5.5 0.723858 5.5 1L5.5 5L1.5 5C1.22386 5 1 5.22386 1 5.5C1 5.77614 1.22386 6 1.5 6L6 6ZM0.646447 0.853553L5.64645 5.85355L6.35355 5.14645L1.35355 0.146447L0.646447 0.853553Z" fill="#D03025" />
                        </svg>
                      </span>
                      <span>
                        1,29%
                      </span>
                    </div>
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}