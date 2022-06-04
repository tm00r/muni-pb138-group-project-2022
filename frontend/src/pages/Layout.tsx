import React, { useState, useLayoutEffect } from "react";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "./../styles/layout.css";
import { List } from "../components/List";

export const Layout: React.FC = () => {
  const [done, setDone] = useState(false);
  useLayoutEffect(() => {
    console.log(done)
  }, [done]);

  return (
    <div>
      <Header templates={true} title="New Template" orders={true} />
      <main className="layout__body">
        <aside className="layout__aside">
          <List editable={false} cropPosition="left" />
        </aside>
        <Main
          headingTitle="Heading Title"
          datetimeText="Date Time"
          type="order"
          contentId="1"
          done={done}
          setDone={setDone}
        />
        <aside className="layout__aside">
          <List editable={false} cropPosition="right" />
        </aside>
      </main>
      { !done && <Footer main_page={true} main_button="Add order" />}
      { done && <Footer main_page={false} main_button="Submit" />}
    </div>
  );
};
