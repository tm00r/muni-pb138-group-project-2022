import React, { useState, useEffect, useLayoutEffect } from "react";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "./../styles/layout.css";
import { List } from "../components/List";
import { NewOrder } from "./NewOrder";


export interface LayoutProps {
  type: "order" | "template" | "finishedOrder";
}

export const Layout: React.FC<LayoutProps> = (props) => {

  const {type} = props;

  const [headerTitle, setHeaderTitle] = useState("");
  const [footerTitle, setFooterTitle] = useState("");
  const [templates, setTemplates] = useState(true);
  const [orders, setOrders] = useState(true);

  useEffect(() => {
    if (type === "order") {
      setHeaderTitle("New Order");
      setFooterTitle("Add new order");
    }

    if (type === "template") {
      setHeaderTitle("New Template");
      setFooterTitle("Add new template");
      setOrders(false);
    }

    if (type === "finishedOrder") {
      setHeaderTitle("Order");
      setFooterTitle("Close");
      setTemplates(false);
    }
  }, []
  );

  const [done, setDone] = useState(false);
  useLayoutEffect(() => {
    console.log(done)
  }, [done]);

  return (
    <div>
      <Header templates={templates} title={headerTitle} orders={orders} />
      <main className="layout__body">
        <aside className="layout__aside">
          {templates &&<List editable={false} cropPosition="left" />}
        </aside>
        <Main
          headingTitle="Heading Title"
          datetimeText="Date Time"
          type={type}
          contentId="1"
          done={done}
          setDone={setDone}
        />
        <aside className="layout__aside">
          {orders && <List editable={false} cropPosition="right" />}
        </aside>
      </main>
      { !done && <Footer main_page={true} main_button={footerTitle} />}
      { done && <Footer main_page={false} main_button="Submit" />}
    </div>
  );
};
