import Core from '../../Core/Core.js';
import {TfiTrash} from 'react-icons/tfi';
import {AiFillEdit} from 'react-icons/ai';
import SwitchButton from './SwitchButton.js';
import { useState } from 'react';
import { FcCancel } from 'react-icons/fc';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import Model from '../../Core/Model.js';
import getAPIProduct from '../../Data/getProduct.js';

const TableProduct = ({tileColumn, rowData, displayGroupBTN, displaySwitch}) => {
    
    const [stateEdit, setStateEdit] = useState(false);
    const [stateCancel, setStateCancel] = useState(false);
    const [stateAddEdit, setStateAddEdit] = useState(true);

    const element = (item) => {
        return (
            <th className='productInfo--item'>{item}</th>
        );
    };
    
    const handleRemoveProduct = (id) => {
        console.log('Active Remove Product');
        console.log(id);
        const elementProductInfo = document.querySelectorAll('tr')[id + 1];
        console.log(elementProductInfo);
        const idProduct = parseInt(elementProductInfo.children[1].textContent);
        console.log(idProduct)
        const url = `http://127.0.0.1:8080/products/item/delete?id=${idProduct}`;
        fetch(url, {
            method: 'POST'
        })
            .then(res => res.text())
            .then(res => console.log(res))
    };
    
    const handleEditProduct = (id) => {
        console.log('Active Remove Product');
        setStateEdit(true);
        setStateAddEdit(false);
        setStateCancel(true);
        console.log(id);
        const elementProductInfo = document.querySelectorAll('tr')[id + 1];
        console.log(elementProductInfo);
        const idProduct = parseInt(elementProductInfo.children[1].textContent);
        console.log(idProduct);
    };
    
    const handleCancel = () => {
        setStateCancel(false);
        setStateAddEdit(true);
        setStateEdit(false);
    };
    
    const handleUpdate = (id) => {
        setStateCancel(false);
        setStateAddEdit(true);
        setStateEdit(false);
        const elementProductInfo = document.querySelectorAll('tr')[id + 1];
        console.log(elementProductInfo);
        console.log(id + 1);
        const idProduct = parseInt(elementProductInfo.children[1].textContent);
        console.log(idProduct);
        let newEditProduct = [];
        document.querySelectorAll('tr td').forEach((element, index) => {
            if (index !== 0 && index !== 1 && index !== 13 && index !== 14 && index !== 15) {
                newEditProduct.push(element.textContent);
                console.log(element.textContent);
            }
        })
        console.log(newEditProduct);
        console.log(idProduct);
        const url = `http://127.0.0.1:8080/products/item/update?id=${idProduct}`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(newEditProduct)
        })
            .then(res => res.text())
            .then(res => console.log(res))
    };
    
    const elementRownData = (rowData, index) => {
        return (
            <tr>
                <td data-column="ID">
                    <input type='checkbox' />
                </td>
                {
                    Core.Render(rowData, (item) => {
                        if (item === 1 && displaySwitch === true) {
                            return (
                                <td data-column="ID">
                                    <SwitchButton IDProduct={index}/>
                                </td>
                            )
                        }
                        else {
                            return (
                                <td className='productInfo--tblList' contentEditable={stateEdit}>{item}</td>
                            )
                        }
                    })
                }
                {
                    displayGroupBTN && (
                        <td data-column="ID">
                            {
                                stateAddEdit && (
                                    <div className='grouptblBTN'>
                                        <button className='grouptblBTN--icon'>
                                            <TfiTrash className='icon' onClick={() => {handleRemoveProduct(index)}} />
                                            <AiFillEdit className='icon' onClick={() => {handleEditProduct(index)}} />
                                        </button>
                                    </div>
                                )
                            }
                            {
                                stateCancel && (
                                    <div className='grouptblBTN'>
                                        <button className='grouptblBTN--icon' onClick={() => {handleCancel()}}>
                                            <FcCancel className='icon' onClick={() => {handleCancel()}}/>
                                            <AiOutlineCloudUpload className='icon' onClick={() => {handleUpdate(index)}} />
                                        </button>
                                    </div>
                                )
                            }
                        </td>
                    )
                }
            </tr>
        )
    };
    
    return (
        <div className="TableProduct table-container">
            <table>
                <thead>
                    <tr>
                        {Core.Render(tileColumn, element)}
                    </tr>
                </thead>
                <tbody>
                    {Core.Render(rowData, elementRownData)}
                </tbody>
            </table>
        </div>
    );
};

export default TableProduct;