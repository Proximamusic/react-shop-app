import React from 'react'
import './bags.css';
import Product from './Product';

export default function Bags() {
    return (
        <div className="bags">
            <h1>bags</h1>
                 <div className="product-section">
            <Product id={6}
            imgLink={"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13693720/2021/3/17/4ca0933d-3ffc-4927-a855-3d0f9e2f08141615983717026-MANGO-Burgundy-Solid-Tote-Bag-9741615983715753-1.jpg"}
            cost={2999}
            name={"Mango"}
            info={"Solid Tote bag"}
            />

<Product id={7}
            imgLink={"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14059334/2021/4/27/ccd5603d-b59d-4cd0-b3f3-098b9d799bcf1619502214761-Baggit-Pink-Solid-Handheld-Bag-2531619502213960-1.jpg"}
            cost={1500}
            name={"LaFille"}
            info={"Solid Shoulder Bag"}
            />

<Product id={8}
            imgLink={"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12088792/2020/8/7/f597d19b-8709-4f59-834e-ca2ea5588e411596785149763CapreseBlackSolidSlingBag1.jpg"}
            cost={2500}
            name={"Caprese"}
            info={"Women Sling bag"}
            />

<Product id={9}
            imgLink={"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15130916/2021/8/13/c50a3a2c-d9ae-4cba-8241-96ffcbfa19c31628826291867Smallshoulderbag1.jpg"}
            cost={2999}
            name={"H&M"}
            info={"Small Shoulder Bag"}
            />
                      
            </div>

            <div className="product-section">
            <Product id={10}
            imgLink={"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10953282/2020/9/10/e6ace4c6-ad35-469a-a186-910504aab1a71599748674272WildcraftUnisexGreenBlueRoadster40Rucksack1.jpg"}
            cost={1200}
            name={"Wildcraft"}
            info={"Unisex Roadster 40 Rucksack"}
            />
                      
            </div>
            
        </div>
    )
}
