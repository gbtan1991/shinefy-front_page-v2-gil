"use client";

import { useState, useEffect } from "react";

import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import MenuIcon from "@mui/icons-material/Menu";

import "./NavigationBar.css";

const logo = "/images/global/ShineFy Logo.png";

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "#F1F1F1",
    padding: "20px",
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  $hover: {},
  textTransform: "none",
  fontFamily: "Karla",
  fontSize: "16px",
  fontWeight: "400",
  padding: "0.25rem 2rem 0.25rem 0.5rem",
  marginRight: "1rem",
  color: "#F1F1F1",
}));

const NavigationBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [isLegalExpanded, setIsLegalExpanded] = useState(false);
  const [isDesktopAboutExpanded, setIsDesktopAboutExpanded] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const toggleDrawerNavigation = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };

  const openDesktopAboutSubMenu = Boolean(isDesktopAboutExpanded);

  const handleOpenDesktopAbout = (event) => {
    setIsDesktopAboutExpanded(event.currentTarget);
  };
  const handleCloseDesktopAbout = () => {
    setIsDesktopAboutExpanded(null);
  };

  const handleExpandAbout = (panel) => (isExpanded) => {
    setIsAboutExpanded(isExpanded ? panel : false);
  };

  const handleExpandLegal = (panel) => (isExpanded) => {
    setIsLegalExpanded(isExpanded ? panel : false);
  };

  return (
    <nav className={isSticky ? "sticky" : ""}>
      <div
        className={`navContainer absolute w-full 2xl:w-[99vw] ${isSticky ? "changeNavColor" : ""
          }`}
      >
        <div className="mx-[5vw] flex flex-row items-center justify-between py-4 lg:mx-[5%] xl:mx-[15%] 2xl:mx-[20%]">
          <a href="/" className="navLogo flex items-center">
            <img
              src={logo}
              alt="Shine Ranker Logo"
              width="270px"
              height="63px"
              className="mr-2"
            />
          </a>

          {/* Medium - Large screen links */}
          <div
            className="navLinksCont flex w-full items-center justify-end"
            id="navbar-sticky"
          >
            <ul className="flex flex-row items-center justify-end p-2 font-karla md:p-0">
              <li className="hidden xl:flex">
                <CustomButton
                  id="basic-button"
                  aria-controls={
                    openDesktopAboutSubMenu ? "basic-menu" : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={openDesktopAboutSubMenu ? "true" : undefined}
                  onClick={handleOpenDesktopAbout}
                  style={{
                    backgroundColor: "transparent",
                  }}
                  className="opacity-75 hover:opacity-100"
                >
                  About
                </CustomButton>
                <Menu
                  id="basic-menu"
                  anchorEl={isDesktopAboutExpanded}
                  open={openDesktopAboutSubMenu}
                  onClose={handleCloseDesktopAbout}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  className="desktop-about-sub-menu"
                >
                  <MenuItem
                    onClick={handleCloseDesktopAbout}
                    className="desktop-about-sub-menu-items"
                  >
                    <a href="/about" className="sub-menu-link">
                      Shinefy
                    </a>
                  </MenuItem>
                  <MenuItem
                    onClick={handleCloseDesktopAbout}
                    className="desktop-about-sub-menu-items"
                  >
                    <a href="/faq" className="sub-menu-link">
                      FAQs
                    </a>
                  </MenuItem>
                  <MenuItem className="desktop-about-sub-menu-items">
                    <Accordion
                      expanded={isLegalExpanded === "legals"}
                      onChange={handleExpandLegal("legals")}
                      className="top-nav-accordion-link"
                    >
                      <CustomAccordionSummary
                        expandIcon={<KeyboardArrowRightIcon />}
                        aria-controls="legals-bh-content"
                        id="legals-bh-header"
                        className="sub-menu-link"
                      >
                        <p className="top-nav-accordion">Legal</p>
                      </CustomAccordionSummary>
                      <AccordionDetails className="top-nav-accordion-details">
                        <List className="">
                          <ListItem className="h-14 px-0 py-1">
                            <a
                              href="/legal/terms-of-use"
                              className="desktop-legals-sub-menu-accordion-link"
                            >
                              Term of Use
                            </a>
                          </ListItem>

                          <ListItem className="h-14 px-0 py-1">
                            <a
                              href="/legal/refund"
                              className="desktop-legals-sub-menu-accordion-link"
                            >
                              Subscription Agreement
                            </a>
                          </ListItem>

                          <ListItem className="h-14 px-0 py-1">
                            <a
                              href="/legal/earnings-disclaimer"
                              className="desktop-legals-sub-menu-accordion-link"
                            >
                              Earnings Disclaimer
                            </a>
                          </ListItem>

                          <ListItem className="h-14 px-0 py-1">
                            <a
                              href="/legal/affiliate-promotions"
                              className="desktop-legals-sub-menu-accordion-link"
                            >
                              Affiliations Promotions
                            </a>
                          </ListItem>

                          <ListItem className="h-14 px-0 py-1">
                            <a
                              href="/legal/facebook-disclaimer"
                              className="desktop-legals-sub-menu-accordion-link"
                            >
                              Facebook Disclaimer
                            </a>
                          </ListItem>
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  </MenuItem>
                </Menu>
              </li>
              <li className="hidden xl:flex">
                <a
                  href="/tools"
                  className="mr-[44px] block rounded py-2 pl-3 pr-4 font-normal text-white opacity-75 transition hover:opacity-100 md:p-0"
                >
                  Tools
                </a>
              </li>
              <li className="hidden xl:flex">
                <a
                  href="/pricing"
                  className="mr-[44px] block rounded py-2 pl-3 pr-4 font-normal text-white opacity-75 transition hover:opacity-100 md:p-0"
                >
                  Pricing Plan
                </a>
              </li>
              {/* *** Temporarily hide links because it is not yet done - JOHN 22/09/23 */}
               <li className="hidden xl:flex">
                <a
                  href="/blogs"
                  className="mr-[44px] block rounded py-2 pl-3 pr-4 font-normal text-white opacity-75 transition hover:opacity-100 md:p-0"
                >
                  Blogs
                </a>
              </li>
              {/* <li className="hidden xl:flex">
                <a
                  href="/book-a-call"
                  className="mr-[44px] block rounded py-2 pl-3 pr-4 font-normal text-white opacity-75 transition hover:opacity-100 md:p-0"
                >
                  Book A Call
                </a>
              </li>  */}
              <li className="hidden md:flex">
                <a
                  href="https://realchasereiner.kartra.com/page/shinefyai2"
                  type="button"
                  rel="noreferrer"
                  className="mr-3 flex items-center justify-center rounded bg-[#8844DA] px-5 py-4 font-karla text-base font-normal text-white transition hover:bg-[#4D2FBB]"
                >
                  Sign up
                </a>
              </li>
              <li className="hidden md:flex">
                <a
                  href="https://app.shinefy.com/"
                  type="button"
                  rel="noreferrer"
                  className="flex items-center justify-center rounded border px-5 py-4 font-karla text-base font-normal text-white transition hover:border-[#4D2FBB] hover:bg-[#4D2FBB]"
                >
                  Log in
                </a>
              </li>

              <li className="flex xl:hidden">
                <Button onClick={toggleDrawerNavigation(true)}>
                  <MenuIcon className="text-white" />
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Nav links for mobile */}
        <SwipeableDrawer
          anchor={"right"}
          open={isDrawerOpen}
          variant="persistent"
          onClose={toggleDrawerNavigation(false)}
          onOpen={toggleDrawerNavigation(true)}
          className="swipeable-drawer flex 2xl:hidden"
        >
          <Box
            role="presentation"
            className="drawer-container flex h-full flex-col justify-between pt-5 font-karla"
          >
            <List>
              <ListItem className="min-h-14 py-1">
                <Accordion
                  expanded={isAboutExpanded === "about"}
                  onChange={handleExpandAbout("about")}
                  className="top-nav-accordion-link"
                >
                  <CustomAccordionSummary
                    expandIcon={<KeyboardArrowRightIcon />}
                    aria-controls="about-bh-content"
                    id="about-bh-header"
                    className="sub-menu-link"
                  >
                    <p className="top-nav-accordion">About</p>
                  </CustomAccordionSummary>
                  <AccordionDetails className="top-nav-accordion-details">
                    <List className="">
                      <ListItem className="mobile-accordion-link-container">
                        <a href="/about" className="mobile-accordion-link">
                          Shinefy.tools
                        </a>
                      </ListItem>

                      <ListItem className="mobile-accordion-link-container">
                        <a href="/faq" className="mobile-accordion-link">
                          FAQs
                        </a>
                      </ListItem>

                      <ListItem className="mobile-accordion-link-container">
                        <Accordion
                          expanded={isLegalExpanded === "legals"}
                          onChange={handleExpandLegal("legals")}
                          className="top-nav-accordion-link"
                        >
                          <CustomAccordionSummary
                            expandIcon={
                              <KeyboardArrowRightIcon className="text-white" />
                            }
                            aria-controls="legals-bh-content"
                            id="legals-bh-header"
                            className="mobile-legals-accordion-link"
                          >
                            <p className="top-nav-accordion">Legal</p>
                          </CustomAccordionSummary>
                          <AccordionDetails className="top-nav-accordion-details">
                            <List className="">
                              <ListItem className="mobile-accordion-link-container">
                                <a
                                  href="/legal/terms-of-use"
                                  className="mobile-accordion-link"
                                >
                                  Term of Use
                                </a>
                              </ListItem>

                              <ListItem className="mobile-accordion-link-container">
                                <a
                                  href="/legal/refund"
                                  className="mobile-accordion-link"
                                >
                                  Subscription Agreement
                                </a>
                              </ListItem>

                              <ListItem className="mobile-accordion-link-container">
                                <a
                                  href="/legal/earnings-disclaimer"
                                  className="mobile-accordion-link"
                                >
                                  Earnings Disclaimer
                                </a>
                              </ListItem>

                              <ListItem className="mobile-accordion-link-container">
                                <a
                                  href="/legal/affiliate-promotions"
                                  className="mobile-accordion-link"
                                >
                                  Affiliations Promotions
                                </a>
                              </ListItem>

                              <ListItem className="mobile-accordion-link-container">
                                <a
                                  href="/legal/facebook-disclaimer"
                                  className="mobile-accordion-link"
                                >
                                  Facebook Disclaimer
                                </a>
                              </ListItem>
                            </List>
                          </AccordionDetails>
                        </Accordion>
                      </ListItem>
                    </List>
                  </AccordionDetails>
                </Accordion>
              </ListItem>

              <ListItem className="mobile-sub-menu-link">
                <a href="/tools" className="mobile-accordion-link">
                  Tools
                </a>
              </ListItem>

              <ListItem className="mobile-sub-menu-link">
                <a href="/pricing" className="mobile-accordion-link">
                  Pricing Plan
                </a>
              </ListItem>

              {/* *** Temporarily hide links because it is not yet done - JOHN 22/09/23 */}
              {/* <ListItem className="mobile-sub-menu-link">
                <a
                  href="/blogs"
                  className="mobile-accordion-link"
                >
                  Blogs
                </a>
              </ListItem>

              <ListItem className="mobile-sub-menu-link">
                <a href="/book-a-call" className="mobile-accordion-link">
                  Book a Call
                </a>
              </ListItem> */}
            </List>

            <div className="flex flex-col gap-y-5 px-5 pb-8">
              <div className="flex h-14 rounded border p-0 md:hidden">
                <a
                  href="https://realchasereiner.kartra.com/page/shinefyai2"
                  rel="noreferrer"
                  className="mobile-accordion-link"
                >
                  Sign up
                </a>
              </div>
              <div className="flex h-14 rounded border p-0 md:hidden">
                <a
                  href="https://app.shinefy.com"
                  rel="noreferrer"
                  className="mobile-accordion-link"
                >
                  Log in
                </a>
              </div>

              <div
                onClick={toggleDrawerNavigation(false)}
                className="mt-2 flex h-14 flex-row items-center justify-center"
              >
                <button className="rounded-full border-2 p-2 pl-2.5">
                  <KeyboardDoubleArrowRightIcon />
                </button>
              </div>
            </div>
          </Box>
        </SwipeableDrawer>
      </div>
    </nav>
  );
};

export default NavigationBar;
