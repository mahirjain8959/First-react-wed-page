import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Cards';
import Sdata from './Sdata' ;
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// simple project with the using of props 
root.render(
    <> 
    <h1 className='heading_style'> List of top 6 Amazon miniTV series </h1>
    {/* using array indexing  */}
   <Card
    imgsrc ={Sdata[0].imgscr}
    title ={Sdata[0].title}
    sname ={Sdata[0].sname}
    link ={Sdata[0].links}
   />

<Card
    imgsrc ="https://m.media-amazon.com/images/S/pv-target-images/eb6c35ef8e716a2b176af1d5190061ce1eebf56feea1838f3b048e191510342f.__SX420__SY236.25__QL60__._TTW_.jpg  " 
    title ="Amazon miniTV "
    sname ="Crushed "
    link ="https://www.amazon.in/minitv/tp/62ff15c5-57a4-4477-a759-d700e75720dc "
   />

<Card
    imgsrc ="https://m.media-amazon.com/images/S/pv-target-images/66478e7f6bc10756567e83030fcfb18397856a0c4d1ffd97360b31755c6a7ae0.__SX420__SY236.25__QL60__._TTW_.jpg  " 
    title ="Amazon miniTV "
    sname ="Ishq Express "
    link ="https://www.amazon.in/minitv/tp/1bb04c73-2dcf-42e4-a0f1-bf46deeccf32 "
   />

<Card
    imgsrc ="https://m.media-amazon.com/images/S/pv-target-images/314e7f6e2af7d11015da8b39620cfb099ac64619ef20f2f16ef46a48f3fb568e.__SX420__SY236.25__QL60__._TTW_.jpg " 
    title ="Amazon miniTV "
    sname ="Gutar Gu "
    link ="https://www.amazon.in/minitv/tp/a1b967c4-96a4-415e-8ab3-8f309731090a "
   />

<Card
    imgsrc ="https://m.media-amazon.com/images/S/pv-target-images/134a490c357832d969c8f854f6424da41a3459e9fc21e78ebbc685135a7baf97.__SX420__SY236.25__QL60__._TTW_.jpg "
    title ="Amazon miniTV "
    sname ="Tujhpe Main Fidha  "
    link ="https://www.amazon.in/minitv/tp/d13ab216-1b51-4435-b8fb-63f7934a7b87 "
   />

<Card
    imgsrc ="https://m.media-amazon.com/images/S/pv-target-images/206a9ffc9c7b9fe289076345172f3ec8015b084356df68137f8b67d99463f3f4.__SX420__SY236.25__QL60__._TTW_.jpg  " 
    title ="Amazon miniTV "
    sname ="Nama Cool "
    link ="https://www.amazon.in/minitv/tp/9c05a0a8-0fd8-4fec-bd54-ef57e075b171 "
   />
    </> , 
    document.getElementById('root')
);
reportWebVitals();