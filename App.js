import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <a href="/">
    <img className="logo" alt="logo" src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s88-c-k-c0x00ffffff-no-rj" />
    </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contacts</li>
            <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Config driven UI

const restaurantList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "20209",
      "name": "Wow! Momo",
      "uuid": "ac182c20-1337-40d1-afec-dc154f371efe",
      "city": "7",
      "area": "Kaikhali",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "w0ahjc6eczikeqahooyo",
      "cuisines": [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages"
      ],
      "tags": [],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 23,
      "maxDeliveryTime": 23,
      "slaString": "27 MINS",
      "lastMileTravel": 1.600000023841858,
      "slugs": {
      "restaurant": "wow-momo-magnum-building-chinar-park",
      "city": "kolkata"
    },
    "cityState": "7",
    "address": "Wow! Momo Magnum - Ps magnum, Kaikhali, Vip Road, Kolkata - 52.",
    "locality": "VIP Road",
    "parentId": 1776,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
    "header": "60% off",
    "shortDescriptionList": [
    {
    "meta": "60% off | Use TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "60% off up to ₹120 | Use code TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "60% OFF",
    "shortDescriptionList": [
    {
    "meta": "Use TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "60% off up to ₹120 | Use code TRYNEW",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3000,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3000,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3000",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=5703245~p=10~eid=00000185-9781-12bb-1ee8-a37900640a2d",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "1.6 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "20209",
    "deliveryTime": 27,
    "minDeliveryTime": 23,
    "maxDeliveryTime": 23,
    "lastMileTravel": 1.600000023841858,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.3",
    "totalRatings": 500,
    "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "10737",
    "name": "Arsalan",
    "uuid": "29dacb3d-71af-4276-b17b-073928d23a2b",
    "city": "7",
    "area": "Near City Centre 2",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "hcsfdgv3c6ndkgi6yrjw",
    "cuisines": [
    "Biryani",
    "Mughlai",
    "North Indian",
    "Indian",
    "Kebabs",
    "Tandoor",
    "Awadhi"
    ],
    "tags": [],
    "costForTwo": 50000,
    "costForTwoString": "₹500 FOR TWO",
    "deliveryTime": 28,
    "minDeliveryTime": 24,
    "maxDeliveryTime": 24,
    "slaString": "28 MINS",
    "lastMileTravel": 0.4000000059604645,
    "slugs": {
    "restaurant": "arsalan-near-city-centre-2-chinar-park",
    "city": "kolkata"
    },
    "cityState": "7",
    "address": "216, Lokenath Park Chinar Park Near City Centre 2,Rajarhat New Town, Kolkata",
    "locality": "Chinar Park",
    "parentId": 1255,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
    "header": "60% off",
    "shortDescriptionList": [
    {
    "meta": "60% off | Use WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "60% OFF",
    "shortDescriptionList": [
    {
    "meta": "Use WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3000,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3000,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3000",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "0.4 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "10737",
    "deliveryTime": 28,
    "minDeliveryTime": 24,
    "maxDeliveryTime": 24,
    "lastMileTravel": 0.4000000059604645,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.3",
    "totalRatings": 1000,
    "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "192662",
    "name": "New Arsalan Biryani",
    "uuid": "a329bccb-b92d-4f9c-bb49-a1dca1fbfc37",
    "city": "7",
    "area": "Rajarhat",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "tsixhba67nz0e94wtc0c",
    "cuisines": [
    "Biryani"
    ],
    "tags": [],
    "costForTwo": 15000,
    "costForTwoString": "₹150 FOR TWO",
    "deliveryTime": 19,
    "minDeliveryTime": 15,
    "maxDeliveryTime": 15,
    "slaString": "19 MINS",
    "lastMileTravel": 0.20000000298023224,
    "slugs": {
    "restaurant": "new-arsalan-biryani-chinar-park-chinar-park",
    "city": "kolkata"
    },
    "cityState": "7",
    "address": "Chinar Park, Atghara, Rajarhat, Kolkata, North 24 Parganas, West Bengal 700136, India",
    "locality": "Chinar Park",
    "parentId": 145841,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
    "header": "60% off",
    "shortDescriptionList": [
    {
    "meta": "60% off | Use WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "60% OFF",
    "shortDescriptionList": [
    {
    "meta": "Use WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3000,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3000,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3000",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "0.2 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "192662",
    "deliveryTime": 19,
    "minDeliveryTime": 15,
    "maxDeliveryTime": 15,
    "lastMileTravel": 0.20000000298023224,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.7",
    "totalRatings": 1000,
    "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "484390",
    "name": "GOLU SAHAB",
    "uuid": "6036c4c1-c4d0-4c15-9efa-233f5d57ad06",
    "city": "7",
    "area": "Noapara",
    "totalRatingsString": "100+ ratings",
    "cloudinaryImageId": "aasnmwe7nta6tdlj7qwz",
    "cuisines": [
    "Biryani",
    "Mughlai",
    "Chinese",
    "Tandoor",
    "Indian"
    ],
    "tags": [],
    "costForTwo": 59900,
    "costForTwoString": "₹599 FOR TWO",
    "deliveryTime": 28,
    "minDeliveryTime": 24,
    "maxDeliveryTime": 24,
    "slaString": "28 MINS",
    "lastMileTravel": 0.4000000059604645,
    "slugs": {
    "restaurant": "golu-sahab-chinar-park-chinar-park",
    "city": "kolkata"
    },
    "cityState": "7",
    "address": "Service Rd, Noapara, Sukanta Pally, Rajarhat, Kolkata, West Bengal 700136",
    "locality": "Service Rd",
    "parentId": 246223,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
    "header": "60% off",
    "shortDescriptionList": [
    {
    "meta": "60% off | Use WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "60% OFF",
    "shortDescriptionList": [
    {
    "meta": "Use WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3000,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3000,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3000",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=5633991~p=4~eid=00000185-9781-12bb-1ee8-a37700640433",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "0.4 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "484390",
    "deliveryTime": 28,
    "minDeliveryTime": 24,
    "maxDeliveryTime": 24,
    "lastMileTravel": 0.4000000059604645,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.1",
    "totalRatings": 100,
    "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "45185",
    "name": "Super Haji Biryani",
    "uuid": "754164e8-7e7b-4b50-b92b-a3da00744dfa",
    "city": "7",
    "area": "Newtown",
    "totalRatingsString": "500+ ratings",
    "cloudinaryImageId": "mnxswgauhew165e0ywql",
    "cuisines": [
    "Biryani"
    ],
    "tags": [],
    "costForTwo": 15000,
    "costForTwoString": "₹150 FOR TWO",
    "deliveryTime": 21,
    "minDeliveryTime": 17,
    "maxDeliveryTime": 17,
    "slaString": "21 MINS",
    "lastMileTravel": 0.20000000298023224,
    "slugs": {
    "restaurant": "super-haji-biryani-chinar-park-chinar-park",
    "city": "kolkata"
    },
    "cityState": "7",
    "address": "Atghara Rajarhat, Rajarhat New Town, Kolkata",
    "locality": "Near Atghara Free Primary School",
    "parentId": 18806,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
    "header": "60% off",
    "shortDescriptionList": [
    {
    "meta": "60% off | Use WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "60% OFF",
    "shortDescriptionList": [
    {
    "meta": "Use WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3000,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3000,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3000",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "0.2 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "45185",
    "deliveryTime": 21,
    "minDeliveryTime": 17,
    "maxDeliveryTime": 17,
    "lastMileTravel": 0.20000000298023224,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.8",
    "totalRatings": 500,
    "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "479168",
    "name": "India Restaurant",
    "uuid": "10ee2b68-439e-42f8-b082-446c2f3cb6b6",
    "city": "7",
    "area": "Chinar Park",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "k8sa2t5twt71iyfeycyy",
    "cuisines": [
    "North Indian",
    "Indian",
    "Biryani",
    "Chinese"
    ],
    "tags": [],
    "costForTwo": 40000,
    "costForTwoString": "₹400 FOR TWO",
    "deliveryTime": 29,
    "minDeliveryTime": 25,
    "maxDeliveryTime": 25,
    "slaString": "29 MINS",
    "lastMileTravel": 1.399999976158142,
    "slugs": {
    "restaurant": "india-restaurant-chinar-park-chinar-park",
    "city": "kolkata"
    },
    "cityState": "7",
    "address": "AS/192/07/, BLOCK- KC, KAIKHALI, V IP ROAD, 9,NAZRUL ISLAM AVENUE, KOLKATA, BIDHANNAGAR-RAJARHAT MUNICIPAL CORPORATION, North Twenty Four Parganas, West Bengal-700052",
    "locality": "Kaikhali V Ip Road",
    "parentId": 106345,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
    "header": "60% off",
    "shortDescriptionList": [
    {
    "meta": "60% off | Use WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "60% OFF",
    "shortDescriptionList": [
    {
    "meta": "Use WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 3000,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 3000,
    "message": "",
    "title": "Delivery Charge",
    "amount": "3000",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "1.3 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "479168",
    "deliveryTime": 29,
    "minDeliveryTime": 25,
    "maxDeliveryTime": 25,
    "lastMileTravel": 1.399999976158142,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.3",
    "totalRatings": 1000,
    "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "450993",
    "name": "Hanglaatherium",
    "uuid": "37f6f760-b9cf-4de0-ac80-e8e08c90a1a0",
    "city": "7",
    "area": "New Town",
    "totalRatingsString": "100+ ratings",
    "cloudinaryImageId": "bjwm6ytm67hcrzr35gej",
    "cuisines": [
    "Arabian",
    "North Indian",
    "Biryani"
    ],
    "tags": [],
    "costForTwo": 35000,
    "costForTwoString": "₹350 FOR TWO",
    "deliveryTime": 40,
    "minDeliveryTime": 34,
    "maxDeliveryTime": 34,
    "slaString": "40 MINS",
    "lastMileTravel": 6.199999809265137,
    "slugs": {
    "restaurant": "hanglaatherium-salt-lake-salt-lake",
    "city": "kolkata"
    },
    "cityState": "7",
    "address": "Street Number 63, AA Block(Newtown), Action Area I, Newtown, New Town, West Bengal 700163",
    "locality": "New Town",
    "parentId": 1779,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "aggregatedDiscountInfo": {
    "header": "60% off",
    "shortDescriptionList": [
    {
    "meta": "60% off | Use WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
    "header": "60% OFF",
    "shortDescriptionList": [
    {
    "meta": "Use WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "descriptionList": [
    {
    "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
    "discountType": "Percentage",
    "operationType": "RESTAURANT"
    }
    ],
    "subHeader": "",
    "headerType": 0,
    "superFreedel": ""
    },
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 5800,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 5800,
    "message": "",
    "title": "Delivery Charge",
    "amount": "5800",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=5633342~p=7~eid=00000185-9781-12bb-1ee8-a3780064076e",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "6.1 kms",
    "hasSurge": false,
    "sla": {
    "restaurantId": "450993",
    "deliveryTime": 40,
    "minDeliveryTime": 34,
    "maxDeliveryTime": 34,
    "lastMileTravel": 6.199999809265137,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.1",
    "totalRatings": 100,
    "new": false
    },
    "subtype": "basic"
  },
    
];

const RestaurantCard = ({     
  // props destructuring(const RestaurantCard = (props))                   
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString
}) => {
    return (
        <div className="card">
          <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}/>
            <h2>{name}</h2>
            <h3>{cuisines?.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
      )
    } 
 const Body = () => {
    return (
        <div className="restaurant-list">
          {restaurantList.map((restaurant) => <RestaurantCard {...restaurant.data} key={restaurant.data.id} />)}
          {/* <RestaurantCard 
            {...restaurantList[0].data}
          />
          <RestaurantCard 
            name={restaurantList[1].data.name}
            cuisines={restaurantList[1].data.cuisines}
            cloudinaryImageId={restaurantList[1].data.cloudinaryImageId}
            lastMileTravelString={restaurantList[1].data.lastMileTravelString}
    /> */}
        </div>
    )
} 

const Footer = () => {
    return (
        <h4>footer</h4>
    )
}

const AppLayout = () => {
    return (
        <>
        <Header />
        <Body />
        <Footer />
        </>   
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a React element inside the root.
root.render(<AppLayout />)
