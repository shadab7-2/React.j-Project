import React, { useState } from "react";
import "./Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";

const Value = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const handleAccordionChange = (uuid) => {
    if (expandedItems.includes(uuid)) {
      setExpandedItems((prevExpandedItems) =>
        prevExpandedItems.filter((item) => item !== uuid)
      );
    } else {
      setExpandedItems((prevExpandedItems) => [...prevExpandedItems, uuid]);
    }
  };

  return (
    <section className="v-wrapper">
      <div className="padding innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            <br />
            We believe a good block to live can make your life better.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={expandedItems}
            onChange={handleAccordionChange}
          >
            {data.map((item, i) => (
              <AccordionItem
                className={`accordionItem ${
                  expandedItems.includes(i) ? "expanded" : "collapsed"
                }`}
                key={i}
                uuid={i}
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordionButton">
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">{item.heading}</span>
                    <div className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
