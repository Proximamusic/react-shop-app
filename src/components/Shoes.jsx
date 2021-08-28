import React from 'react'
import Product from './Product'
import "./shoes.css"
export default function Shoes() {
    return (
        <div className="shoes">
            <h1>shoes</h1>
            <div className="product-section">
            <Product id={1}
            imgLink={"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/6/19/2838ca0b-d645-4e81-b8d2-c653dbb6f72a1624120057030-1.jpg"}
            cost={1500}
            name={"NewFeel"}
            info={"Walking shoes"}
            />

<Product id={2}
            imgLink={"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12849768/2020/11/4/2231be8d-e0b2-43a5-b22d-2adce2d407de1604491192080RedTapeMenBlackWalkingShoes1.jpg"}
            cost={2700}
            name={"RedTape"}
            info={"Running + walking shoes"}
            />

<Product id={3}
            imgLink={"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13328054/2021/3/31/a5f33de4-0fce-4260-b76d-148410224ad11617164510532-Nike-Men-Black-FLEX-EXPERIENCE-RN-10-Running-Shoes-767161716-1.jpg"}
            cost={4500}
            name={"Nike"}
            info={"Nike FLEX"}
            />

<Product id={4}
            imgLink={"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13426886/2021/7/27/75844fa4-245a-43f6-9fb8-33a97b1fde241627365356738-Reebok-Men-Black-Woven-Design-Solecure-Running-Shoes-2916273-1.jpg"}
            cost={2999}
            name={"Reebox"}
            info={"Running shoes"}
            />
                      
            </div>

            <div className="product-section">
            <Product id={5}
            imgLink={"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11986112/2021/2/17/1456ef1a-6d72-4bc8-b506-d77d68883ea21613525167572HIGHLANDERMenWhiteColourblockedSneakers1.jpg"}
            cost={3200}
            name={"HIGHLANDER"}
            info={"Men sneakers"}
            />
                      
            </div>
      
        </div>
    )
}
