
import '../css/components.css';
// import webpacklogo from '../assets/img/webpack-logo.png';

export const greet = ( name = 'nameless' ) => {

    console.log('Creating tag h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hi, ${ name }`;

    document.body.append( h1 );

    // //img
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append( img );

}

