import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Backdrop from './Backdrop';
import './Modal.css';
import Slider from '../ImageSlider/Slider';

// let slides = [
//   {
//     images:
//       'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
//     caption: 'caption1',
//   },
//   {
//     images:
//       'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
//     caption: 'caption2',
//   },
//   {
//     images:
//       'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',

//     caption: 'caption3',
//   },
//   {
//     images:
//       'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80',
//     caption: 'caption4',
//   },
// ];

const getSlides = projectName => {
    switch (projectName) {
      case 'yurivisa':
        return [
          {
            images:'./images/yurivisa/create1.png',
            caption:'First time design database in MSSQL and connect to ASP.NET using Entity Framework'
          },
          {
            images:'./images/yurivisa/create2.png',
            caption:'Integrate CKEditor and CKFinder to upload file and write content for web pages'
          },
          {
            images:'./images/yurivisa/multiLang.png',
            caption:'Make multi-language function without using .resx file but by database'
          },
          {
            images:'./images/yurivisa/servicePage.png',
            caption:'Use HTML CSS Bootstrap4 to build UI and C# to render data into web pages'
          },
        ];
        
        case 'vibotani':
          return [
            {
              images:'./images/vibotani/product_Index.png',
              caption:'Design database in MSSQL and connect to ASP.NET using Entity Framework'
            },
            {
              images:'./images/vibotani/ckfinder_ckeditor.png',
              caption:'Integrate CKEditor and CKFinder to upload file and write content for web pages'
            },
            {
              images:'./images/vibotani/renderPageNews.png',
              caption:'Use HTML CSS JS to build responsive UI and C# to render data into web pages'
            },
            {
              images:'./images/vibotani/renderProduct.png',
              caption:'Use JS to add animation and work with AJAX to get data to put in Modal'
            },
          ];
          case 'daidung':
          return [
            {
              images:'./images/daidung/Home.png',
              caption:'Build UI base on designed .pdf file using HTML, CSS, JS and Bootstrap.'
            },
            {
              images:'./images/daidung/cool_css.png',
              caption:'Get used to with some complicate CSS skills and some JS animation.'
            },
            {
              images:'./images/daidung/prj_resp.png',
              caption:'Build responsive UI use Bootstrap4.'
            },
            {
              images:'./images/daidung/paginition_multi_lang.png',
              caption:'Make multilanguage website,pagination in .NET, design and connect about 20 table in MSSQL.'
            },
            {
              images:'./images/daidung/Admin_slider.png',
              caption:'Allow Admin to edit image, order, caption of every slide in Owl-carousel2.'
            },
          ];
          case 'todolist':
            return [
              {
                images:'./images/employee/home2.png',
                caption:'Render data get from MongoDB Compass in local using Express Handlebars.'
              },
              {
                images:'./images/employee/create.png',
                caption:'Create mongoose Schema perform CRUD action.'
              },
              {
                images:'./images/employee/validateEmail.png',
                caption:'Validate Email before submitting.'
              },
             
            ];
             case 'locationSharing':
            return [
              {
                images:'./images/locationSharing/SignUp.png',
                caption:'Use BcryptJS to hash password and Multer to upload file then sign a JWT to login.'
              },
              {
                images:'./images/locationSharing/login.png',
                caption:'Check username and compare Bcrypt password then sign Token to User.'
              },
              {
                images:'./images/locationSharing/home.png',
                caption:'JWT expiresIn will keep User logged in and show other Route for User to perform.'
              },
             
              {
                images:'./images/locationSharing/Authorization.png',
                caption:'Compare userId in Token with creatorId of the place then show button to Delete and Edit.'
              },
              {
                images:'./images/locationSharing/readData.png',
                caption:'If not authorized, User will only see places without deleting and editing it.'
              },
              {
                images:'./images/locationSharing/uploadImg_create.png',
                caption:'Use FileReader to preview image, attach Token to header to check authorization in server.'
              },
             
              {
                images:'./images/locationSharing/useHEREmap.png',
                caption:'Integrate HERE map to show location of place based on longitude and latitude.'
              },
              {
                images:'./images/locationSharing/Edit.png',
                caption:'Allow to change Title and Description only.'
              },
              {
                images:'./images/locationSharing/Delete.png',
                caption:'Show modal for User to confirm delete.'
              },
            ];
            case 'expenseTracker':
              return [
                {
                  images:'./images/expenseTracker/home.png',
                  caption:'Use Axios to handle HTTP request and ContextAPI to get state and dispatch function.'
                },
                {
                  images:'./images/expenseTracker/create.png',
                  caption:'Handle form submit and dispatch action use Axios with POST request to MongoDB Atlas.'
                },
                {
                  images:'./images/expenseTracker/delete.png',
                  caption:'onClick dispatch action use Axios with DELETE request then useEffect will update component.'
                },
              
              ];
      default:
        break;
    }
}

const ModalOverlay = (props) => {
  const ref = useRef(null);
  var modalWidth = ref.current ? ref.current.offsetWidth : 0;
  let slides = getSlides(props.projectName);
  const content = (
    <div ref={ref} className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      {/* <form
        onSubmit={
          props.onSubmit ? props.onSubmit : event => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form> */}
      
      <Slider modalWidth={modalWidth} slides={slides} />

      {/* <footer className={`modal__footer ${props.footerClass}`}>
        {props.footer}
      </footer> */}
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};
const Modal = (props) => {
 
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={300}
        classNames='modal'
      >
        <ModalOverlay  {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
