import React from 'react'
import './masks.css';
import Product from './Product';

export default function Masks() {
    return (
        <div className='masks'>
            <h1>masks</h1>
            <div className="product-section">
            <Product id={14}
            imgLink={"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/17/ad4db26c-66a1-434a-b2dd-e7698c07a2081613548778190-1.jpg"}
            cost={499}
            name={"Enamore"}
            info={"Women pack of 3 masks"}
            />

<Product id={22}
            imgLink={"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/8/10/f162dfd2-c220-47bc-ba11-2c0140f9abdf1597014867893-1.jpg"}
            cost={599}
            name={"puma"}
            info={"unisex pack of 2"}
            />

<Product id={53}
            imgLink={"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12027352/2020/7/30/8b8e028a-2191-4471-a00d-caac1df1fa3c1596083033814-HRX-by-Hrithik-Roshan-Unisex-Outdoor-Masks-9271596083031936-1.jpg"}
            cost={599}
            name={"HRX"}
            info={"HRX men pack of 3"}
            />

<Product id={44}
            imgLink={"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12027342/2020/7/30/6115d2c0-66a8-42bc-bc98-a73ef23b20cf1596090231121-HRX-by-Hrithik-Roshan-Unisex-Pack-of-3-Protekt-X-N-95-Reusab-1.jpg"}
            cost={439}
            name={"HRX"}
            info={"HRX men pack of 3"}
            />
            </div>
        </div>
    )
}
