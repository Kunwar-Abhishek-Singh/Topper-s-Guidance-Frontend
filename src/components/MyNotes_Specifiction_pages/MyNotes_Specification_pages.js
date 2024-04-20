import React from 'react'
import classes from "./MyNotes_Specification_pages.module.css";
import MyNotesSpecificationpagesdata from './MyNotes_Specificationpages_data';
import MyNotesMagnatic from './My_Notes_Magnatic';




const myNotesNextPageData = [
  {
    id: 1,
    title:
      "SSC CGL Toppers Handwritten Notes - All Subjects (English) LATEST EDITION  (Paperback, Pinnacle Services)",
    rating: "3.9",
    price: "₹899",
    offer: "Available offers",
    bankOffer: "Bank Offer₹15 off on UPI Transaction",
    bankOfferI: "Bank Offer5% Cashback on Flipkart Axis Bank Card",
    partnerOffer:
      "Partner Offer Sign-up for pinnacle pay later & get free Times Prime Benefits worth ₹10,000* know more",
    partnerOffer1:
      "Partner Offer Purchase now & get 1 surprise cashback coupon in Future know more",
    delivery: "Delivery",
    delivaryDate: "Delivery by 4 Sep, Monday",
    viewDetails: "View Details",
    Author: "Pinnacle Publication",
    highlights: "Author : Pinnacle Publication",
    service: "Services",
    cashOnDelivary: "Cash on delivery Available",
    numberOfPage: "720 Pages",
    language: "English",
    publisher: "Pinnacle Publications",
    sellerA: "Seller",
    seller: "Pinnacle Publications",
    replacementDay: "7 Days Replacemant Policy",
    descriptionI: "Description",
    description:
      "This book covers all latest TCS questions asked in SSC exams. This book is updated till Feb 2023. In this book all recent ssc exams questions conducted by tcs are covered. This is the latest book in the market having all latest questions. There are 20 features of this book which makes this extra ordinary and no.1 books for english. This book is a chapter wise book. This book is divided into chapter wise module. Detailed endex of the book explain the importance of a particular chapter. This detailed index helps to build planning how to cover english subject for ssc exams. Arrangement of questions make this book great. Paper quality, binding quality, ink, font quality of the book is top notch. This book is available separately in English medium and hindi medium to avoid bulky size and distraction free preparation. This book is useful for ssc cgl tier 1, ssc cgl tier 2, ssc cpo, ssc selection posts, ssc chsl, ssc mts and other government exams conducted by ssc.",
    specifications: "Specifications",
    bookM: "Book",
    book: "SSC General Studies 6500 TCS MCQ Chapter Wise With Detailed Explanation 5th Edition English Medium Paperback 19 September 2023",
    author1: "Pinnacle Civil Services",
    binding: "Paperback",
    publishers: "Pinnacle Civil Services",
    edition: "5th editions",
    exam: "SSC CGL",
    numberOfPages: "770 pages",
    language2: "English",
    rightSideBar: [
      {
        image:
          "https://rukminim2.flixcart.com/image/416/416/xif0q/regionalbooks/a/m/h/ssc-maths-6800-tcs-mcq-chapter-wise-with-detailed-explanation-original-imagtdu3hzg35bpd.jpeg?q=70",
        button1: "BUY NOW",
        button2: "ADD TO CART",
      },
    ],
  },
];

const MyNotesSpecificationpages = () => {
  return (
    <>    
      <div className={classes.my_notes_next_heading}></div>
      
      <div className={classes.my_notes_next_head}>
        <div className={`${classes.my_notes_next_main_card} ${classes.my_notes_next_item_main_card}`}>
          <li className={classes.my_notes_next_main_card_item}>
            {myNotesNextPageData.map((item) => (
              <MyNotesSpecificationpagesdata
                title={item.title}
                rating={item.rating}
                price={item.price}
                offer={item.offer}
                bankOffer={item.bankOffer}
                bankOfferI={item.bankOfferI}
                partnerOffer={item.partnerOffer}
                partnerOffer1={item.partnerOffer1}
                delivery={item.delivery}
                delivaryDate={item.delivaryDate}
                viewDetails={item.viewDetails}
                Author={item.Author}
                highlights={item.highlights}
                service={item.service}
                cashOnDelivary={item.cashOnDelivary}
                numberOfPage={item.numberOfPage}
                language={item.language}
                publisher={item.publisher}
                sellerA={item.sellerA}
                seller={item.seller}
                replacementDay={item.replacementDay}
                descriptionI={item.descriptionI}
                description={item.description}
                specifications={item.specifications}
                bookM={item.bookM}
                book={item.book}
                author1={item.author1}
                binding={item.binding}
                publishers={item.publishers}
                edition={item.edition}
                exam={item.exam}
                numberOfPages={item.numberOfPages}
                language2={item.language2}
              />
            ))}
          </li>
        </div>
        <div className={classes.right_sidebar}>
          <div
            className={`${classes.rightSide_card} ${classes.item_main_card}`}
          >
            {/* <h4>Categary</h4> */}
            <li className={classes.side_cards_item}>
              {myNotesNextPageData.map((item, index) => (
                <li key={index}>
                  {item.rightSideBar.map((data, index) => (
                    <div className={classes.img_effect_mag}>
                      <MyNotesMagnatic image={data.image} />
                      {/* <img src={data.image} alt="book_img" /> */}
                      <div className={classes.buy_add_btn_main_div}>
                        <div className={classes.div_add_to_card}>
                          <button className={classes.add_to_card_btn1}>{data.button1}</button>
                        </div>
                        <div className={classes.div_buy}>
                          <button className={classes.buy_btn_div}>{data.button2}</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </li>
              ))}
            </li>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyNotesSpecificationpages;