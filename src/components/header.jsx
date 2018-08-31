// import ReactDOM from "react-dom";
// import React from "react";
// // import './header.scss';
//
// const img1 = require('../images/icon_search.svg');
//
//
// class Logo extends React.Component{
//     render(){
//         return <div>
//             <h1 className="header__logo">Concert Meetup</h1>
//         </div>
//     }
// }
//
// class Search extends React.Component{
//     constructor(props){
//         // super(props);
//         this.state = {
//             keyword: ""
//         }
//     }
//
//     componentDidMount(){
//         const url = ` https://api.unsplash.com/photos/?client_id=d83b8f0d690b8021e3a524b1366401609626353ac66ab52dd0d456d056be839e`;
//         fetch(url,{
//             method: 'GET',
//             params: {
//                 query: keyword,
//                 page: 1,
//                 per_page: 12
//             }
//         }).then(r=>r.json()).then( response => {
//             console.log(response)
//
//
//         })
//     }
//
//     render(){
//         return <div className="header__search">
//             <input placeholder="Find concert for any artists or city" type="text" value="" />
//             <button type ="submit" className="header__search_button">
//                 <i name="search">
//                     <img className="header__search_icon" src={img1} />
//                 </i>
//             </button>
//
//             <ul className="gallery">
//                 <li className="gallery__element">
//                     <a href="#" className="gallery__link"></a>
//                 </li>
//
//             </ul>
//         </div>
//     }
// }
//
//
// class Header extends React.Component{
//     render(){
//         return <div>
//             <Logo/>
//             <Search />
//         </div>
//     }
// }
//
// export {Header}
//
//
