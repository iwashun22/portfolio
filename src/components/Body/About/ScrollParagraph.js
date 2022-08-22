import React, { useEffect } from 'react';
import $ from 'jquery';

import NextButton from './icons/angles-right-solid.svg';

import './ScrollParagraph.scss';

function goToNextParagraph() {
   const currentMarginLeft = getMargin('.scroll-wrapper').left;
   const boxWidth = $('.box').width();
   const contentMarginRight = getMargin('.content').right;
   const scrollTo = currentMarginLeft - (boxWidth + contentMarginRight);
   $('.scroll-wrapper').css("margin-left", scrollTo + 'px');

   const index = Math.abs(scrollTo) / (boxWidth + contentMarginRight) || 0;
   setTimeout(() => {
      $(`.scroll-button[value='${index}']`).prop('checked', true);
   }, 300)
}

function getMargin(selector) {
   const content = document.querySelector(selector);
   const style = window.getComputedStyle(content);

   function toInteger(str) {
      return parseInt(str.replace(/[A-Z]|[a-z]/g, ""))
   }

   return {
      top: toInteger(style.marginTop),
      bottom: toInteger(style.marginBottom),
      right: toInteger(style.marginRight),
      left: toInteger(style.marginLeft)
   };
}

const Paragraph = ({ header, text, lastItem }) => {
   return (
      <div className="content">
         <h2 className="content-headers">{header || 'header'}</h2>
         <div className="content-text">
            <p>{ text || '-' }</p>
         </div>
         <div className="content-footer">
            {
               lastItem ?  
               null
               : 
               <button 
                  className="next-button"
                  onClick={() => {
                     goToNextParagraph();
                  }}
               >
                  <img src={NextButton} alt="icons" />
               </button>
            }
         </div>
      </div>
   )
}

const ScrollButton = ({ checked, index }) => {
   return (
      <div>
         <input 
            type="radio" 
            name="content" 
            defaultChecked={checked || false} 
            value={index}
            className="scroll-button"
         />
      </div>
   )
}

function addScrollEvent() {
   const scrollButton = $('.scroll-button');
   const boxWidth = $('.box').width();
   scrollButton.on('click', function() {
      const index = Number($(this).attr('value')); 
      const marginRight = getMargin('.content').right;
      const scrollTo = -(index * (boxWidth + marginRight));
      $('.scroll-wrapper').css("margin-left", scrollTo + 'px')
   })
}

const ScrollParagraph = () => {

   // initial event when document loads
   window.addEventListener('load', e => {
      addScrollEvent();
   })

   // adding event when re-render from Tablet (responsive page component)
   useEffect(() => {
      addScrollEvent();
   }, [])
   return (
      <>
         <div className="box translucent">
            <div className="scroll-wrapper">
               <Paragraph 
                  header="履歴"
                  text="中学はインターナショナルスクールで全教科英語で学びました。現在高校2年生です。"
               />
               <Paragraph
                  header="スキル"
                  text="プログラミングのフロント・エンドとバック・エンド両方できます。個人的にはフロント・エンドやデザインの方が好きです。"
               />
               <Paragraph 
                  header="資格"
                  lastItem={true}
               />
            </div>
         </div>
         <div className="scroll-button-container">
            <ScrollButton checked={true} index={0} />
            <ScrollButton checked={false} index={1} />
            <ScrollButton checked={false} index={2} />
         </div>
      </>
   )
}

export default ScrollParagraph