import React,{useState } from 'react'
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import Copy from './copy-svgrepo-com';
import Svg1 from './Svg1';
import Svg2 from './Svg2';
function copyFunc(e){
  navigator.clipboard.writeText(document.querySelector('#css-text').innerHTML);
   document.querySelector('#alert').style.visibility = 'visible'
 }

function BoxShadow_generator() {
  const [color, setColor] = useColor("hex", "#000000");
  const [horizontal, setHorizontal] = useState(0);
  const [vertical, setVertical] = useState(0);
  const [blur, setBlur] = useState(0);




  const boxShadowCss = ()=>{
    let mainColor = color.hex
      document.querySelector('#box-shadow').style.boxShadow = `${horizontal}px ${vertical}px ${blur}px ${mainColor}`
  }
  return (
    <>
    <div id='alert' className="invisible fixed top-2 right-2 rounded flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
      <Svg1/>
      <p className='pr-6'>Text Css Copied ... </p>
      <button onClick={()=>{ document.querySelector('#alert').style.visibility = 'hidden'}} className='absolute top-1/4  right-2'>
      <Svg2/> 
  </button>

</div>
    <div className="flex justify-center items-center flex-col-reverse sm:flex-col-reverse md:flex-row gap-20">
     <section className=''>
      <label  className="block mb-2 py-2 text-sm font-medium text-gray-900 dark:text-white ">Horizontal (left and right)</label>
      <input onChange={(e)=>{setHorizontal(e.target.value); boxShadowCss()}} id="default-range" type="range" defaultValue={0} min={-50} max={50}   className="form-range w-full"/>

      <label  className="block mb-2 py-2 text-sm font-medium text-gray-900 dark:text-white ">Vertical (top and botton)</label>
      <input onChange={(e)=>{setVertical(e.target.value); boxShadowCss()}} id="default-range" type="range" defaultValue={0} min={-50} max={50}   className="form-range w-full"/>

      <label  className="block mb-2 py-2 text-sm font-medium text-gray-900 dark:text-white ">blur</label>
      <input onChange={(e)=>{setBlur(e.target.value); boxShadowCss()}} id="default-range" type="range" defaultValue={0} min={-50} max={50}   className="form-range w-full"/>
      <div className='pt-6'>
      <ColorPicker width={350} height={180} color={color} onChange={(e)=>{setColor(e); boxShadowCss()}} hideHSV dark />;

      <div/>
    </div> 
      <img src="" alt="" />
    </section>
    <section>
       <div  id='box-shadow' className='h-80 bg-slate-400 w-96  flex justify-center items-center rounded-xl mt-12'>
        <button id='css-text' onClick={copyFunc} className='bg-slate-700 p-3 text-white text-sm rounded-lg flex justify-center gap-3 items-center'>
    <Copy/>
          
           box-shadow: {horizontal}px {vertical}px {blur}px  {color.hex};</button>
       </div>
    </section>
  </div>
  </>
  )
}

export default BoxShadow_generator



