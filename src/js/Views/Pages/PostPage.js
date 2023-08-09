import Header from "../components/Header";
import NavigationBar from "../../Views/components/NavigationBar";
import '../../../assets/css/StyleAdminSite/PostPage.css';
import {BsFillBoxSeamFill} from 'react-icons/bs';
import {MdOutlineAddBusiness} from 'react-icons/md';
import {FiRefreshCw} from 'react-icons/fi';
import {IoMdArrowDropdownCircle} from 'react-icons/io';
import Model from '../../Core/Model.js';
import TableProduct from "../components/TableProduct";
import { useState, useEffect } from "react";
import ImageUploading from "react-images-uploading";
import {FcAddImage, FcRemoveImage} from 'react-icons/fc';
import Config from "../../Core/Config";
import getAPIProduct from "../../Data/getProduct";
import { BsCaretLeftSquare, BsCaretRightSquare } from 'react-icons/bs';
import { FaFilter } from 'react-icons/fa';
import paginationProduct from '../../Data/paginationProduct.js'

const PostPage = () => {
    let Data = [];
    
    var mime = {
        html: 'text/html',
        txt: 'text/plain',
        css: 'text/css',
        gif: 'image/gif',
        jpg: 'image/jpeg',
        png: 'image/png',
        svg: 'image/svg+xml',
        js: 'application/javascript'
    };
    

    const titleProduct = Config.TableProduct.TitleColumn;
    let [data, setData] = useState(Data);
    
    useEffect(() => {
        getAPIProduct()
            .then(results => {
                let temp = [];
                results.forEach((value) => {
                    temp.push(Object.values(value));
                });
                setData(temp);
            })
            .catch(() => {
                console.log('Disconnect DataBase');
            })
    }, []);
    
    const postJSON = (Data) => {
        fetch("http://127.0.0.1:8080/create/product", {
            method: "POST",
            body: JSON.stringify(Data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    };
    
    const [images, setImages] = useState([]);
    const maxNumber = 10;
    
    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
        
        imageList.forEach((image) => {
            const formData = new FormData();
            formData.append('data_url', image.data_url);
            fetch('/upload', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error))
        });
    };
    
    const handleAddProduct = () => {
        const ElementFormInfo = document.querySelectorAll('.form__Info');
        let arr = [];
        ElementFormInfo.forEach((item) => {
            arr.push(item.value);
        });
        const uploadedImageURLs = images.map((image) => image.file.name);
        arr.push(uploadedImageURLs);
        const ElementDescription = document.querySelector('.Description');
        arr.push(ElementDescription.value);
        let db = Model.Product(...arr);
        console.log(db);
        images.forEach((image) => {
            const formData = new FormData();
            formData.append("file", image.file);
        
            fetch("http://127.0.1:8080/uploads", {
              method: "POST",
              body: formData,
            })
              .then((response) => response.json())
              .then((data) => {
                console.log("Image uploaded:", data);
                // Perform any additional actions after image is successfully uploaded
              })
              .catch((error) => console.error(error));
        });
        
        postJSON(db);
    };
    
    const handleFilter = () => {
        const elementPage = document.querySelector('.pagination__page');
        const elementRecord = document.querySelector('.filter__page');
        const page = elementPage.value;
        const record = elementRecord.value;
        const url = `http://127.0.1:8080/products/list?page=${page}&&record=${record}`;
        paginationProduct(url)
            .then((results) => {
                let temp = [];
                results.forEach((value) => {
                    temp.push(Object.values(value));
                });
                setData(temp);
            })
    }
    
    const handleDropDown = () => {
        const ElementContainerInfo = document.querySelector('.container--info');
        ElementContainerInfo.classList.toggle('hint');
    }
    
    return (
        <div className="container">
            <Header/>
            <div className="content">
                <div className="content--colRight">
                    <NavigationBar />
                </div>
                <div className="content--colLeft">
                    <div className="content--header">
                        <div className="header--left">
                            <BsFillBoxSeamFill className="content--iconHeader"/>
                            <h3 className="content--title">
                                PRODUCTS
                            </h3>
                        </div>
                    </div>
                    <div className="newProduct">
                        <div className="form__newProduct">
                            <div className="form--header">
                                <div className="header--left">
                                    <h3 className="title">New Product</h3>
                                </div>
                                <div className="header--right" onClick={handleDropDown}>
                                    <IoMdArrowDropdownCircle />
                                </div>
                            </div>
                            <div className="container--info">
                                <div className="container--input">
                                    <div className="newProduct__left">
                                        <div className="item--input newProduct__titleProduct">
                                            <label name='TilleProduct'>Tille Product</label>
                                            <input type="text"className="form__Info" htmlFor='TilleProduct' placeholder="Tille Product"/>
                                        </div>
                                        <div className="rown-2">
                                            <div className="item--input row-with-2">
                                                <label name='SKU'>SKU</label>
                                                <input type="text" className="form__Info" htmlFor='SKU' placeholder="SKU"/>
                                            </div>
                                            <div className="item--input row-with-2">
                                                <label name='Brand'>Brand</label>
                                                <input type="text" className="form__Info" htmlFor='Brand' placeholder="Brand"/>
                                            </div>
                                        </div>
                                        <div className="item--input newProduct__nameProduct">
                                            <label name='NameProduct '>Name Product</label>
                                            <input type="text" className="form__Info" htmlFor='NameProduct' placeholder="Name Product"/>
                                        </div>
                                        <div className="item--input newProduct__Category">
                                            <label name='Category'>Category</label>
                                            <input type="text" className="form__Info" htmlFor='Category' placeholder="Category"/>
                                        </div>
                                        <div className="rown-3">
                                            <div className="item--input row-with-3">
                                                <label name='Cost'>Cost</label>
                                                <input type="text" className="form__Info" htmlFor='Cost' placeholder="Cost"/>
                                            </div>
                                            <div className="item--input row-with-3">
                                                <label name='Unit'>Unit</label>
                                                <input type="text" className="form__Info" htmlFor='Unit' placeholder="Unit"/>
                                            </div>
                                            <div className="item--input row-with-3">
                                                <label name='NumberOf'>Number Of</label>
                                                <input type="number" className="form__Info" htmlFor='NumberOf' placeholder="Number Of"/>
                                            </div>
                                        </div>
                                        <div className="item--input newProduct__TypeProduct">
                                            <label name='TypeProduct'>Type Product</label>
                                            <input type="text"className="form__Info" htmlFor='TypeProduct' placeholder="Type Product"/>
                                        </div>
                                    </div>
                                    <div className="newProduct__right">
                                        <div className="form__ChooseFile">
                                            <ImageUploading
                                                multiple
                                                value={images}
                                                onChange={onChange}
                                                maxNumber={maxNumber}
                                                dataURLKey="data_url"
                                                acceptType={["jpg"]}
                                            >
                                                {({
                                                  imageList,
                                                  onImageUpload,
                                                  onImageRemoveAll,
                                                  onImageUpdate,
                                                  onImageRemove,
                                                  isDragging,
                                                  dragProps,
                                                }) => (
                                                  <div className="upload__image-wrapper">
                                                    <div className="grbtn--image">
                                                        <button onClick={onImageUpload} {...dragProps}>
                                                            <FcAddImage/> 
                                                        </button>
                                                        <button onClick={onImageRemoveAll}>
                                                            <FcRemoveImage/>
                                                        </button>
                                                    </div>
                                                    <div className="image--container">
                                                        {imageList.map((image, index) => (
                                                          <div key={index} className="image-item">
                                                            <img src={image['data_url']} alt="" width="100" height="100"/>
                                                            <div className="image-item__btn-wrapper">
                                                              <button onClick={() => onImageUpdate(index)}>Update</button>
                                                              <button onClick={() => onImageRemove(index)}>Remove</button>
                                                            </div>
                                                          </div>
                                                        ))}
                                                    </div>
                                                  </div>
                                                )}
                                            </ImageUploading>
                                        </div>
                                        <textarea className="Description" name="Description" rows="4" cols="50" placeholder="Description Product"></textarea>
                                        <div className="groupButton">
                                            <button className="btnProduct" onClick={handleAddProduct} type="button">
                                                <MdOutlineAddBusiness className="btnProduct--icon" />
                                                <span>Add Product</span>
                                            </button>
                                            <button className="btnProduct" type="button">
                                                <FiRefreshCw className="btnProduct--icon" />
                                                <span>Refresh List</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="listProduct">
                        <div className="form--header">
                            <div className="header--left">
                                <h3 className="title">List Product</h3>
                            </div>
                            <div className="header--right" onClick={handleDropDown}>
                                <IoMdArrowDropdownCircle />
                            </div>
                        </div>
                    </div>
                    <div className="sub--header">
                            <button type="button" className="btnFilter" onClick={handleFilter}>
                                <FaFilter className="btnFilter__icon"/>
                            </button>
                            <div className="pagination">
                                <BsCaretLeftSquare className="pagination__style"/>
                                <input className="pagination__page" type="text" defaultValue={1}/>
                                <span className="numPage">of 2</span>
                                <BsCaretRightSquare className="pagination__style"/>
                            </div>
                            <div className="quanity__page">
                                <span className="title">Record:</span>
                                <input type="number" className='filter__page' defaultValue={10}/>
                            </div>
                        </div>
                    <div>
                        <TableProduct tileColumn={titleProduct} rowData={data} displayGroupBTN={true} displaySwitch={true}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostPage;