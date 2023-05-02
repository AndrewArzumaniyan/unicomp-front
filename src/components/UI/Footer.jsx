import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
    <div className="footer__wrapper">
      <nav className="footer__nav">
        <ul className="footer__list">
          <li className="footer__item">            
            <Link to="/not-ready" className="footer__link">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.64516 6.25771C5.64516 2.80167 8.71418 0 12.5 0C16.2858 0 19.3548 2.80167 19.3548 6.25771C19.3548 9.71375 16.2858 12.5154 12.5 12.5154C8.71418 12.5154 5.64516 9.71375 5.64516 6.25771ZM12.5 2.2086C10.0503 2.2086 8.06452 4.02145 8.06452 6.25771C8.06452 8.49397 10.0503 10.3068 12.5 10.3068C14.9496 10.3068 16.9355 8.49397 16.9355 6.25771C16.9355 4.02145 14.9496 2.2086 12.5 2.2086Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M6.04839 16.9326C4.04413 16.9326 2.41935 18.4159 2.41935 20.2455V21.9952C2.41935 22.0218 2.4405 22.0445 2.46931 22.0488C9.11246 23.0389 15.8875 23.0389 22.5307 22.0488C22.5595 22.0445 22.5806 22.0218 22.5806 21.9952V20.2455C22.5806 18.4159 20.9559 16.9326 18.9516 16.9326H18.4018C18.3593 16.9326 18.3171 16.9388 18.2767 16.9508L16.8807 17.3669C14.0342 18.2154 10.9658 18.2154 8.11933 17.3669L6.72334 16.9508C6.68293 16.9388 6.64069 16.9326 6.59818 16.9326H6.04839ZM0 20.2455C0 17.1961 2.70795 14.724 6.04839 14.724H6.59818C6.89574 14.724 7.19144 14.767 7.47431 14.8513L8.8703 15.2674C11.2288 15.9705 13.7712 15.9705 16.1297 15.2674L17.5257 14.8513C17.8086 14.767 18.1043 14.724 18.4018 14.724H18.9516C22.292 14.724 25 17.1961 25 20.2455V21.9952C25 23.1042 24.1195 24.0498 22.9205 24.2286C16.0192 25.2571 8.9808 25.2571 2.07947 24.2286C0.880457 24.0498 0 23.1042 0 21.9952V20.2455Z" fill="white"/>
              </svg>
              
            </Link>
          </li>
  
          <li className="footer__item">
            <Link to="/" className="footer__link">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.625 10.5C1.32663 10.5 1.04048 10.6097 0.829505 10.8051C0.618527 11.0004 0.5 11.2654 0.5 11.5417V19.875C0.5 20.1513 0.618527 20.4162 0.829505 20.6116C1.04048 20.8069 1.32663 20.9167 1.625 20.9167C1.92337 20.9167 2.20952 20.8069 2.42049 20.6116C2.63147 20.4162 2.75 20.1513 2.75 19.875V11.5417C2.75 11.2654 2.63147 11.0004 2.42049 10.8051C2.20952 10.6097 1.92337 10.5 1.625 10.5ZM7.25 0.0833282C6.95163 0.0833282 6.66548 0.193075 6.45451 0.388425C6.24353 0.583776 6.125 0.848728 6.125 1.12499V19.875C6.125 20.1513 6.24353 20.4162 6.45451 20.6116C6.66548 20.8069 6.95163 20.9167 7.25 20.9167C7.54837 20.9167 7.83452 20.8069 8.04549 20.6116C8.25647 20.4162 8.375 20.1513 8.375 19.875V1.12499C8.375 0.848728 8.25647 0.583776 8.04549 0.388425C7.83452 0.193075 7.54837 0.0833282 7.25 0.0833282V0.0833282ZM18.5 14.6667C18.2016 14.6667 17.9155 14.7764 17.7045 14.9718C17.4935 15.1671 17.375 15.4321 17.375 15.7083V19.875C17.375 20.1513 17.4935 20.4162 17.7045 20.6116C17.9155 20.8069 18.2016 20.9167 18.5 20.9167C18.7984 20.9167 19.0845 20.8069 19.2955 20.6116C19.5065 20.4162 19.625 20.1513 19.625 19.875V15.7083C19.625 15.4321 19.5065 15.1671 19.2955 14.9718C19.0845 14.7764 18.7984 14.6667 18.5 14.6667ZM12.875 6.33333C12.5766 6.33333 12.2905 6.44307 12.0795 6.63843C11.8685 6.83378 11.75 7.09873 11.75 7.37499V19.875C11.75 20.1513 11.8685 20.4162 12.0795 20.6116C12.2905 20.8069 12.5766 20.9167 12.875 20.9167C13.1734 20.9167 13.4595 20.8069 13.6705 20.6116C13.8815 20.4162 14 20.1513 14 19.875V7.37499C14 7.09873 13.8815 6.83378 13.6705 6.63843C13.4595 6.44307 13.1734 6.33333 12.875 6.33333Z" fill="white"/>
              </svg>
              
            </Link>
          </li>
  
          <li className="footer__item">            
            <Link to="/not-ready" className="footer__link">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 20.4545C12.7472 20.4545 12.9889 20.3879 13.1945 20.263C13.4 20.1382 13.5602 19.9607 13.6549 19.753C13.7495 19.5454 13.7742 19.3169 13.726 19.0965C13.6778 18.8761 13.5587 18.6736 13.3839 18.5147C13.2091 18.3557 12.9863 18.2475 12.7439 18.2037C12.5014 18.1598 12.2501 18.1823 12.0216 18.2683C11.7932 18.3543 11.598 18.5 11.4607 18.6869C11.3233 18.8737 11.25 19.0934 11.25 19.3182C11.25 19.6196 11.3817 19.9086 11.6161 20.1217C11.8505 20.3348 12.1685 20.4545 12.5 20.4545ZM18.75 20.4545C18.9972 20.4545 19.2389 20.3879 19.4445 20.263C19.65 20.1382 19.8102 19.9607 19.9049 19.753C19.9995 19.5454 20.0242 19.3169 19.976 19.0965C19.9278 18.8761 19.8087 18.6736 19.6339 18.5147C19.4591 18.3557 19.2363 18.2475 18.9939 18.2037C18.7514 18.1598 18.5001 18.1823 18.2716 18.2683C18.0432 18.3543 17.848 18.5 17.7107 18.6869C17.5733 18.8737 17.5 19.0934 17.5 19.3182C17.5 19.6196 17.6317 19.9086 17.8661 20.1217C18.1005 20.3348 18.4185 20.4545 18.75 20.4545ZM18.75 15.9091C18.9972 15.9091 19.2389 15.8424 19.4445 15.7176C19.65 15.5927 19.8102 15.4152 19.9049 15.2076C19.9995 15 20.0242 14.7715 19.976 14.551C19.9278 14.3306 19.8087 14.1281 19.6339 13.9692C19.4591 13.8103 19.2363 13.702 18.9939 13.6582C18.7514 13.6144 18.5001 13.6369 18.2716 13.7229C18.0432 13.8089 17.848 13.9545 17.7107 14.1414C17.5733 14.3283 17.5 14.548 17.5 14.7727C17.5 15.0741 17.6317 15.3631 17.8661 15.5763C18.1005 15.7894 18.4185 15.9091 18.75 15.9091ZM12.5 15.9091C12.7472 15.9091 12.9889 15.8424 13.1945 15.7176C13.4 15.5927 13.5602 15.4152 13.6549 15.2076C13.7495 15 13.7742 14.7715 13.726 14.551C13.6778 14.3306 13.5587 14.1281 13.3839 13.9692C13.2091 13.8103 12.9863 13.702 12.7439 13.6582C12.5014 13.6144 12.2501 13.6369 12.0216 13.7229C11.7932 13.8089 11.598 13.9545 11.4607 14.1414C11.3233 14.3283 11.25 14.548 11.25 14.7727C11.25 15.0741 11.3817 15.3631 11.6161 15.5763C11.8505 15.7894 12.1685 15.9091 12.5 15.9091ZM21.25 2.27273H20V1.13636C20 0.834981 19.8683 0.545943 19.6339 0.332833C19.3995 0.119724 19.0815 0 18.75 0C18.4185 0 18.1005 0.119724 17.8661 0.332833C17.6317 0.545943 17.5 0.834981 17.5 1.13636V2.27273H7.5V1.13636C7.5 0.834981 7.3683 0.545943 7.13388 0.332833C6.89946 0.119724 6.58152 0 6.25 0C5.91848 0 5.60054 0.119724 5.36612 0.332833C5.1317 0.545943 5 0.834981 5 1.13636V2.27273H3.75C2.75544 2.27273 1.80161 2.6319 1.09835 3.27123C0.395088 3.91056 0 4.77767 0 5.68182V21.5909C0 22.4951 0.395088 23.3622 1.09835 24.0015C1.80161 24.6408 2.75544 25 3.75 25H21.25C22.2446 25 23.1984 24.6408 23.9017 24.0015C24.6049 23.3622 25 22.4951 25 21.5909V5.68182C25 4.77767 24.6049 3.91056 23.9017 3.27123C23.1984 2.6319 22.2446 2.27273 21.25 2.27273ZM22.5 21.5909C22.5 21.8923 22.3683 22.1813 22.1339 22.3944C21.8995 22.6075 21.5815 22.7273 21.25 22.7273H3.75C3.41848 22.7273 3.10054 22.6075 2.86612 22.3944C2.6317 22.1813 2.5 21.8923 2.5 21.5909V11.3636H22.5V21.5909ZM22.5 9.09091H2.5V5.68182C2.5 5.38044 2.6317 5.0914 2.86612 4.87829C3.10054 4.66518 3.41848 4.54545 3.75 4.54545H5V5.68182C5 5.9832 5.1317 6.27224 5.36612 6.48535C5.60054 6.69846 5.91848 6.81818 6.25 6.81818C6.58152 6.81818 6.89946 6.69846 7.13388 6.48535C7.3683 6.27224 7.5 5.9832 7.5 5.68182V4.54545H17.5V5.68182C17.5 5.9832 17.6317 6.27224 17.8661 6.48535C18.1005 6.69846 18.4185 6.81818 18.75 6.81818C19.0815 6.81818 19.3995 6.69846 19.6339 6.48535C19.8683 6.27224 20 5.9832 20 5.68182V4.54545H21.25C21.5815 4.54545 21.8995 4.66518 22.1339 4.87829C22.3683 5.0914 22.5 5.38044 22.5 5.68182V9.09091ZM6.25 15.9091C6.49723 15.9091 6.7389 15.8424 6.94446 15.7176C7.15002 15.5927 7.31024 15.4152 7.40485 15.2076C7.49946 15 7.52421 14.7715 7.47598 14.551C7.42775 14.3306 7.3087 14.1281 7.13388 13.9692C6.95907 13.8103 6.73634 13.702 6.49386 13.6582C6.25139 13.6144 6.00005 13.6369 5.77165 13.7229C5.54324 13.8089 5.34801 13.9545 5.21066 14.1414C5.07331 14.3283 5 14.548 5 14.7727C5 15.0741 5.1317 15.3631 5.36612 15.5763C5.60054 15.7894 5.91848 15.9091 6.25 15.9091ZM6.25 20.4545C6.49723 20.4545 6.7389 20.3879 6.94446 20.263C7.15002 20.1382 7.31024 19.9607 7.40485 19.753C7.49946 19.5454 7.52421 19.3169 7.47598 19.0965C7.42775 18.8761 7.3087 18.6736 7.13388 18.5147C6.95907 18.3557 6.73634 18.2475 6.49386 18.2037C6.25139 18.1598 6.00005 18.1823 5.77165 18.2683C5.54324 18.3543 5.34801 18.5 5.21066 18.6869C5.07331 18.8737 5 19.0934 5 19.3182C5 19.6196 5.1317 19.9086 5.36612 20.1217C5.60054 20.3348 5.91848 20.4545 6.25 20.4545Z" fill="white"/>
              </svg>
              
            </Link>
          </li>
  
          <li className="footer__item">
            <Link to="/geography" className="footer__link">
              <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.63641 10.5845C4.63641 7.41117 7.26163 4.83865 10.5 4.83865C13.7384 4.83865 16.3636 7.41117 16.3636 10.5845C16.3636 13.7579 13.7384 16.3304 10.5 16.3304C7.26163 16.3304 4.63641 13.7579 4.63641 10.5845ZM10.5 6.65314C8.28427 6.65314 6.48807 8.41329 6.48807 10.5845C6.48807 12.7558 8.28427 14.5159 10.5 14.5159C12.7157 14.5159 14.5119 12.7558 14.5119 10.5845C14.5119 8.41329 12.7157 6.65314 10.5 6.65314Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M0.037339 9.20172C0.474735 4.00185 4.90903 0 10.2334 0H10.7666C16.091 0 20.5253 4.00185 20.9627 9.20172C21.1976 11.995 20.3171 14.7686 18.5066 16.9384L12.5899 24.0292C11.5097 25.3236 9.49026 25.3236 8.41012 24.0292L2.49338 16.9384C0.682879 14.7686 -0.197623 11.995 0.037339 9.20172ZM10.2334 1.81449C5.8727 1.81449 2.24097 5.09204 1.88274 9.35078C1.68719 11.6756 2.42001 13.984 3.92684 15.7898L9.84358 22.8806C10.1828 23.2872 10.8172 23.2872 11.1564 22.8806L17.0732 15.7898C18.58 13.984 19.3128 11.6756 19.1173 9.35078C18.759 5.09204 15.1273 1.81449 10.7666 1.81449H10.2334Z" fill="white"/>
              </svg>
              
            </Link>
          </li>
  
          <li className="footer__item">
            <Link href="/market" className="footer__link">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.5 2.14286C6.77991 2.14286 2.14286 6.77991 2.14286 12.5C2.14286 18.2201 6.77991 22.8571 12.5 22.8571C18.2201 22.8571 22.8571 18.2201 22.8571 12.5C22.8571 6.77991 18.2201 2.14286 12.5 2.14286ZM0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M10.8568 8.65536C9.52317 9.75256 8.63219 11.2958 8.34882 12.9994L7.72319 16.7606C7.39831 18.7137 9.66936 20.0249 11.1984 18.767L14.1429 16.3446C15.4765 15.2474 16.3675 13.7042 16.6509 12.0006L17.2765 8.23938C17.6014 6.28621 15.3304 4.97501 13.8013 6.23295L10.8568 8.65536ZM12.5 10.3571C11.3165 10.3571 10.3571 11.3165 10.3571 12.5C10.3571 13.6835 11.3165 14.6429 12.5 14.6429C13.6835 14.6429 14.6429 13.6835 14.6429 12.5C14.6429 11.3165 13.6835 10.3571 12.5 10.3571Z" fill="white"/>
              </svg>
              
            </Link>
          </li>
        </ul>
      </nav>
      <div className="footer__contacts">
        <a href="https://t.me/unicomp_int" className="footer__contacts-link">
          <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.8908 4.34965C39.3807 3.92526 38.7651 3.64713 38.1094 3.54484C37.4538 3.44255 36.7827 3.51994 36.1675 3.76877L4.05924 16.7321C3.37258 17.0146 2.78808 17.4993 2.38331 18.1218C1.97854 18.7442 1.77265 19.4751 1.79297 20.2173C1.81328 20.9595 2.05884 21.678 2.49704 22.2774C2.93525 22.8768 3.54538 23.3288 4.24646 23.5733L10.7413 25.8322L14.3613 37.8034C14.4105 37.9633 14.4819 38.1156 14.5734 38.2556C14.5873 38.2771 14.6069 38.2931 14.6216 38.314C14.7274 38.4615 14.8551 38.5919 15.0005 38.7006C15.0418 38.7321 15.0814 38.7616 15.1256 38.7896C15.2956 38.9025 15.484 38.985 15.6823 39.0335L15.7035 39.0353L15.7155 39.0404C15.8347 39.0647 15.956 39.077 16.0777 39.0771C16.0894 39.0771 16.0998 39.0716 16.1114 39.0713C16.295 39.0681 16.4769 39.0365 16.6508 38.9776C16.6913 38.9638 16.726 38.9408 16.7652 38.9242C16.8949 38.8704 17.0178 38.8015 17.1312 38.7189C17.2221 38.6423 17.313 38.5658 17.404 38.4893L22.2453 33.144L29.4662 38.7377C30.1019 39.2326 30.8844 39.5017 31.6901 39.5023C32.5343 39.5013 33.3524 39.21 34.0074 38.6773C34.6623 38.1447 35.1143 37.4031 35.2874 36.5768L41.1331 7.8805C41.2656 7.23464 41.2199 6.56491 41.0011 5.94298C40.7823 5.32104 40.3985 4.77029 39.8908 4.34965ZM16.7881 26.4026C16.5397 26.65 16.3699 26.9653 16.3 27.3089L15.7454 30.0036L14.3407 25.3576L21.6242 21.5648L16.7881 26.4026ZM31.6621 35.905L23.1289 29.2947C22.7719 29.0188 22.3241 28.8876 21.8747 28.9272C21.4252 28.9667 21.0072 29.1742 20.7039 29.5082L19.1534 31.2196L19.7013 28.5563L32.3917 15.866C32.6946 15.5635 32.8792 15.1625 32.9119 14.7356C32.9447 14.3088 32.8235 13.8844 32.5703 13.5392C32.3172 13.194 31.9487 12.9509 31.5318 12.8539C31.1148 12.7569 30.6769 12.8125 30.2974 13.0105L12.0846 22.4931L5.41175 20.0512L37.6232 7.16484L31.6621 35.905Z" fill="white"/>
          </svg>            
        </a>

        <Link to="/not-ready" className="footer__contacts-link">
          <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.09 9.53188H30.4583V3.83438C28.8274 3.6648 27.1888 3.58107 25.5491 3.58355C20.6758 3.58355 17.3433 6.55772 17.3433 12.0044V16.6986H11.8429V23.0769H17.3433V39.4169H23.9366V23.0769H29.4191L30.2433 16.6986H23.9366V12.6315C23.9366 10.7502 24.4383 9.53188 27.09 9.53188Z" fill="white"/>
          </svg>            
        </Link>

        <a href="https://instagram.com/unicomp_int?igshid=YmMyMTA2M2Y=" className="footer__contacts-link">
          <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.0675 9.78266C30.6423 9.78266 30.2266 9.90876 29.873 10.145C29.5194 10.3812 29.2439 10.717 29.0811 11.1099C28.9184 11.5028 28.8758 11.935 28.9588 12.3521C29.0417 12.7692 29.2465 13.1523 29.5472 13.4529C29.8479 13.7536 30.231 13.9584 30.648 14.0414C31.0651 14.1243 31.4974 14.0817 31.8903 13.919C32.2831 13.7563 32.6189 13.4807 32.8551 13.1271C33.0914 12.7736 33.2175 12.3579 33.2175 11.9327C33.2175 11.3624 32.991 10.8156 32.5878 10.4124C32.1846 10.0092 31.6377 9.78266 31.0675 9.78266ZM39.3092 14.1185C39.2743 12.6319 38.9959 11.1612 38.485 9.76475C38.0294 8.56994 37.3204 7.48804 36.4066 6.5935C35.5195 5.67513 34.435 4.97056 33.2354 4.53308C31.8427 4.00662 30.3703 3.72183 28.8816 3.691C26.9825 3.5835 26.3733 3.5835 21.5 3.5835C16.6266 3.5835 16.0175 3.5835 14.1183 3.691C12.6297 3.72183 11.1573 4.00662 9.76456 4.53308C8.56715 4.97499 7.48365 5.67896 6.59331 6.5935C5.67495 7.48069 4.97038 8.56512 4.5329 9.76475C4.00643 11.1575 3.72165 12.6299 3.69081 14.1185C3.58331 16.0177 3.58331 16.6268 3.58331 21.5002C3.58331 26.3735 3.58331 26.9827 3.69081 28.8818C3.72165 30.3704 4.00643 31.8428 4.5329 33.2356C4.97038 34.4352 5.67495 35.5196 6.59331 36.4068C7.48365 37.3214 8.56715 38.0253 9.76456 38.4672C11.1573 38.9937 12.6297 39.2785 14.1183 39.3093C16.0175 39.4168 16.6266 39.4168 21.5 39.4168C26.3733 39.4168 26.9825 39.4168 28.8816 39.3093C30.3703 39.2785 31.8427 38.9937 33.2354 38.4672C34.435 38.0298 35.5195 37.3252 36.4066 36.4068C37.3244 35.5156 38.0341 34.4328 38.485 33.2356C38.9959 31.8391 39.2743 30.3684 39.3092 28.8818C39.3092 26.9827 39.4166 26.3735 39.4166 21.5002C39.4166 16.6268 39.4166 16.0177 39.3092 14.1185ZM36.0841 28.6668C36.0711 29.8041 35.8651 30.931 35.475 31.9993C35.1889 32.7791 34.7294 33.4836 34.1312 34.0597C33.5501 34.6519 32.847 35.1104 32.0708 35.4035C31.0024 35.7936 29.8756 35.9996 28.7383 36.0127C26.9466 36.1022 26.2837 36.1202 21.5716 36.1202C16.8596 36.1202 16.1966 36.1202 14.405 36.0127C13.2241 36.0348 12.0482 35.8529 10.9291 35.4752C10.187 35.1671 9.51616 34.7097 8.95831 34.1314C8.36364 33.5558 7.90991 32.8507 7.63248 32.071C7.19506 30.9873 6.95244 29.8349 6.91581 28.6668C6.91581 26.8752 6.80831 26.2122 6.80831 21.5002C6.80831 16.7881 6.80831 16.1252 6.91581 14.3335C6.92384 13.1708 7.1361 12.0186 7.5429 10.9293C7.85831 10.1731 8.34245 9.49897 8.95831 8.9585C9.50265 8.34246 10.1754 7.85321 10.9291 7.52516C12.0213 7.13107 13.1723 6.9251 14.3333 6.916C16.125 6.916 16.7879 6.8085 21.5 6.8085C26.2121 6.8085 26.875 6.8085 28.6666 6.916C29.8039 6.92904 30.9308 7.13502 31.9991 7.52516C32.8133 7.82733 33.5441 8.3186 34.1312 8.9585C34.7184 9.50886 35.1771 10.1817 35.475 10.9293C35.8732 12.0203 36.0793 13.1721 36.0841 14.3335C36.1737 16.1252 36.1917 16.7881 36.1917 21.5002C36.1917 26.2122 36.1737 26.8752 36.0841 28.6668ZM21.5 12.3089C19.6829 12.3125 17.9076 12.8545 16.3985 13.8666C14.8894 14.8787 13.7141 16.3154 13.0212 17.9952C12.3282 19.675 12.1488 21.5225 12.5054 23.3042C12.8621 25.086 13.7389 26.722 15.025 28.0057C16.3112 29.2893 17.9489 30.1629 19.7314 30.5161C21.5138 30.8693 23.3609 30.6862 25.0394 29.99C26.7178 29.2939 28.1522 28.1158 29.1614 26.6047C30.1705 25.0936 30.7091 23.3173 30.7091 21.5002C30.7115 20.291 30.4748 19.0933 30.0126 17.9759C29.5504 16.8585 28.8719 15.8435 28.016 14.9893C27.1602 14.1351 26.1439 13.4586 25.0256 12.9986C23.9073 12.5386 22.7092 12.3042 21.5 12.3089ZM21.5 27.4664C20.32 27.4664 19.1665 27.1165 18.1853 26.4609C17.2042 25.8053 16.4395 24.8735 15.9879 23.7833C15.5363 22.6932 15.4182 21.4935 15.6484 20.3362C15.8786 19.1789 16.4468 18.1158 17.2812 17.2814C18.1156 16.447 19.1787 15.8788 20.336 15.6486C21.4934 15.4183 22.693 15.5365 23.7832 15.9881C24.8734 16.4396 25.8052 17.2043 26.4607 18.1855C27.1163 19.1666 27.4662 20.3202 27.4662 21.5002C27.4662 22.2837 27.3119 23.0595 27.0121 23.7833C26.7122 24.5072 26.2728 25.1649 25.7188 25.7189C25.1647 26.273 24.507 26.7124 23.7832 27.0123C23.0593 27.3121 22.2835 27.4664 21.5 27.4664Z" fill="white"/>
          </svg>            
        </a>
      </div>
    </div>
  </div>
    </footer>
  );
}

export default Footer